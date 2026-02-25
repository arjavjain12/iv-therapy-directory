/**
 * Scrapes IV therapy businesses from Google Maps via Apify
 * and upserts them into the Supabase businesses table.
 *
 * Only targets "valid cities" above a population threshold —
 * IV therapy is a premium service not found in small towns.
 *
 * Tiered results per city (by population rank):
 *   Rank 1–50    → 20 results/city  (major metros)
 *   Rank 51–200  → 10 results/city  (large cities)
 *   Rank 201–500 →  7 results/city  (mid-size cities)
 *   Rank 501+    →  5 results/city  (smaller cities)
 *
 * Usage:
 *   node scripts/scrape-businesses.mjs                        # all valid cities (pop >= 30k, ~$15-20)
 *   node scripts/scrape-businesses.mjs --min-pop 50000        # pop >= 50k only (~$10)
 *   node scripts/scrape-businesses.mjs --limit 50             # test run, top 50 cities (~$0.50)
 *   node scripts/scrape-businesses.mjs --offset 200 --limit 100   # resume from city rank 201
 */

import { createClient } from '@supabase/supabase-js'
import fs   from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// ─── Load env ─────────────────────────────────────────────────────────────────
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const envPath   = path.join(__dirname, '..', '.env.local')
const envVars   = Object.fromEntries(
  fs.readFileSync(envPath, 'utf8')
    .split('\n')
    .filter((l) => l.includes('=') && !l.startsWith('#'))
    .map((l) => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()] })
)

const SUPABASE_URL = envVars['NEXT_PUBLIC_SUPABASE_URL']
const SERVICE_KEY  = envVars['SUPABASE_SERVICE_ROLE_KEY']
const APIFY_TOKEN  = envVars['APIFY_TOKEN']

if (!SUPABASE_URL || !SERVICE_KEY) { console.error('❌  Missing Supabase credentials'); process.exit(1) }
if (!APIFY_TOKEN)                  { console.error('❌  Missing APIFY_TOKEN in .env.local'); process.exit(1) }

const supabase   = createClient(SUPABASE_URL, SERVICE_KEY)
const ACTOR_ID   = 'compass~crawler-google-places'
const BATCH_SIZE = 150  // cities per Apify run

// ─── Tiered limits by city population rank ────────────────────────────────────
const TIERS = [
  { upTo: 50,       maxPerCity: 20 },  // NYC, LA, Chicago …     ~$0.08/city
  { upTo: 200,      maxPerCity: 10 },  // large cities           ~$0.04/city
  { upTo: 500,      maxPerCity:  7 },  // mid-size cities        ~$0.028/city
  { upTo: Infinity, maxPerCity:  5 },  // smaller valid cities   ~$0.02/city
]

// ─── State abbreviations ──────────────────────────────────────────────────────
const STATE_ABBR = {
  'Alabama':'AL','Alaska':'AK','Arizona':'AZ','Arkansas':'AR','California':'CA',
  'Colorado':'CO','Connecticut':'CT','Delaware':'DE','Florida':'FL','Georgia':'GA',
  'Hawaii':'HI','Idaho':'ID','Illinois':'IL','Indiana':'IN','Iowa':'IA','Kansas':'KS',
  'Kentucky':'KY','Louisiana':'LA','Maine':'ME','Maryland':'MD','Massachusetts':'MA',
  'Michigan':'MI','Minnesota':'MN','Mississippi':'MS','Missouri':'MO','Montana':'MT',
  'Nebraska':'NE','Nevada':'NV','New Hampshire':'NH','New Jersey':'NJ','New Mexico':'NM',
  'New York':'NY','North Carolina':'NC','North Dakota':'ND','Ohio':'OH','Oklahoma':'OK',
  'Oregon':'OR','Pennsylvania':'PA','Rhode Island':'RI','South Carolina':'SC',
  'South Dakota':'SD','Tennessee':'TN','Texas':'TX','Utah':'UT','Vermont':'VT',
  'Virginia':'VA','Washington':'WA','West Virginia':'WV','Wisconsin':'WI','Wyoming':'WY',
  'Washington DC':'DC','District of Columbia':'DC',
}

// ─── IV therapy relevance keywords ───────────────────────────────────────────
// Google Maps may return spas, hospitals, etc. — filter to IV-related only.
const IV_CATS = ['iv therapy','iv drip','iv infusion','infusion therapy','intravenous',
                 'mobile iv','iv bar','iv lounge','wellness drip','drip bar',
                 'medspa','med spa','medical spa','hydration']
const IV_NAMES = ['iv therapy','iv drip','iv infusion','drip','hydration','infusion',
                  'wellness iv','mobile iv','medspa','med spa']

function isIVRelevant(item) {
  const cats = (item.categories || []).map(c => c.toLowerCase()).join(' ')
  const name = (item.title || '').toLowerCase()
  return IV_CATS.some(k => cats.includes(k)) || IV_NAMES.some(k => name.includes(k))
}

// ─── Detect clinic type from Apify data ──────────────────────────────────────
function detectClinicType(item) {
  const cats = (item.categories || []).map(c => c.toLowerCase()).join(' ')
  const name = (item.title || '').toLowerCase()
  if (name.includes('mobile') || cats.includes('mobile'))          return 'mobile'
  if (cats.includes('med spa') || cats.includes('medspa'))         return 'medspa'
  if (cats.includes('hospital') || cats.includes('clinic'))        return 'clinic'
  if (name.includes('bar') || name.includes('lounge'))             return 'iv_bar'
  if (cats.includes('wellness'))                                    return 'wellness_center'
  return 'iv_bar'
}

// ─── Slugify ──────────────────────────────────────────────────────────────────
function slugify(str) {
  return str.toLowerCase().normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim().replace(/\s+/g, '-').replace(/-+/g, '-')
}

// ─── Apify helpers ────────────────────────────────────────────────────────────
async function apifyPost(urlPath, body) {
  const res = await fetch(`https://api.apify.com/v2${urlPath}?token=${APIFY_TOKEN}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(`Apify POST ${urlPath} failed: ${JSON.stringify(data)}`)
  return data
}

async function apifyGet(urlPath) {
  const res = await fetch(`https://api.apify.com/v2${urlPath}?token=${APIFY_TOKEN}&limit=10000`)
  if (!res.ok) throw new Error(`Apify GET ${urlPath} failed: ${res.status}`)
  return res.json()
}

async function waitForRun(runId) {
  const start = Date.now()
  while (true) {
    const { data } = await apifyGet(`/actor-runs/${runId}`)
    const { status } = data
    if (status === 'SUCCEEDED') return data
    if (status === 'FAILED' || status === 'ABORTED') throw new Error(`Run ${runId} ${status}`)
    const elapsed = Math.round((Date.now() - start) / 1000)
    process.stdout.write(`\r    ⏳ ${status} (${elapsed}s)...                  `)
    await new Promise(r => setTimeout(r, 12000))
  }
}

// ─── Process one batch of cities ─────────────────────────────────────────────
async function processBatch(searches, maxPerCity, idMap, label) {
  // Start Apify run
  let runId
  try {
    const { data } = await apifyPost(`/acts/${ACTOR_ID}/runs`, {
      searchStringsArray:        searches,
      maxCrawledPlacesPerSearch: maxPerCity,
      language:                  'en',
      maxImages:                 0,
      exportPlaceUrls:           false,
      additionalInfo:            false,
      maxReviews:                0,
      scrapeContacts:            false,
      skipClosedPlaces:          true,
    })
    runId = data.id
    console.log(`    Run ID: ${runId}`)
  } catch (err) {
    console.error(`    ❌  Failed to start run: ${err.message}`)
    return 0
  }

  // Wait for completion
  let runData
  try {
    runData = await waitForRun(runId)
    console.log(`\n    ✅  Run completed`)
  } catch (err) {
    console.error(`\n    ❌  Run failed: ${err.message}`)
    return 0
  }

  // Fetch results
  const items = await apifyGet(`/datasets/${runData.defaultDatasetId}/items`)
  console.log(`    📊  ${items?.length ?? 0} raw results`)
  if (!Array.isArray(items) || items.length === 0) return 0

  // Map results → businesses
  const toInsert  = []
  const slugsSeen = new Set()

  for (const item of items) {
    if (!item.title || !item.searchString) continue
    if (item.permanentlyClosed)            continue
    if (!isIVRelevant(item))               continue

    const cityId = idMap.get(item.searchString.toLowerCase())
    if (!cityId) continue

    let slug  = slugify(item.title)
    const key = `${cityId}/${slug}`
    if (slugsSeen.has(key)) {
      slug = `${slug}-2`
      if (slugsSeen.has(`${cityId}/${slug}`)) continue
    }
    slugsSeen.add(`${cityId}/${slug}`)

    toInsert.push({
      city_id:      cityId,
      name:         item.title,
      slug,
      address:      item.address      || null,
      phone:        item.phone        || null,
      website:      item.website      || null,
      rating:       item.totalScore   || null,
      review_count: item.reviewsCount || 0,
      description:  item.description  || null,
      clinic_type:  detectClinicType(item),
      is_mobile:    detectClinicType(item) === 'mobile',
      tier:         'free',
      is_active:    true,
    })
  }

  console.log(`    📝  ${toInsert.length} IV therapy businesses to insert`)
  if (toInsert.length === 0) return 0

  // Upsert in chunks of 500
  for (let i = 0; i < toInsert.length; i += 500) {
    const chunk = toInsert.slice(i, i + 500)
    const { error } = await supabase
      .from('businesses')
      .upsert(chunk, { onConflict: 'city_id,slug', ignoreDuplicates: true })
    if (error) console.error(`    ❌  Upsert error: ${error.message}`)
  }

  return toInsert.length
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  const args = process.argv.slice(2)
  const getArg = (flag, def) => { const i = args.indexOf(flag); return i !== -1 && args[i+1] ? args[i+1] : def }
  const limit  = parseInt(getArg('--limit',   '99999'))
  const offset = parseInt(getArg('--offset',  '0'))
  const minPop = parseInt(getArg('--min-pop', '30000'))

  console.log(`\n🚀  IV Therapy business scraper`)
  console.log(`    Population threshold: ${minPop.toLocaleString()}+`)
  console.log(`    City rank range: ${offset + 1} – ${offset + limit}`)
  console.log(`    Tiers: rank 1-50 → 20/city | 51-200 → 10/city | 201-500 → 7/city | 501+ → 5/city\n`)

  // ── Fetch valid cities from Supabase ─────────────────────────────────────────
  let cities = []
  let page   = 0
  const PAGE = 1000
  while (cities.length < limit) {
    const from = offset + page * PAGE
    const to   = from + Math.min(PAGE, limit - cities.length) - 1
    const { data, error } = await supabase
      .from('cities')
      .select('id, city_name, state')
      .gte('population', minPop)
      .order('population', { ascending: false })
      .range(from, to)
    if (error) { console.error('❌  Supabase error:', error.message); process.exit(1) }
    if (!data || data.length === 0) break
    cities = cities.concat(data)
    if (data.length < PAGE) break
    page++
  }

  console.log(`📋  ${cities.length} valid cities (pop ≥ ${minPop.toLocaleString()}) loaded`)
  if (cities.length === 0) { console.log('No cities found. Exiting.'); return }

  // Estimate cost: $0.004 per result
  const est50   = Math.max(0, Math.min(50,  cities.length) - 0)
  const est200  = Math.max(0, Math.min(200, cities.length) - 50)
  const est500  = Math.max(0, Math.min(500, cities.length) - 200)
  const estRest = Math.max(0, cities.length - 500)
  const estResults = est50 * 20 + est200 * 10 + est500 * 7 + estRest * 5
  const estCost    = estResults * 0.004
  console.log(`💰  Estimated cost: ~$${estCost.toFixed(2)} (${estResults.toLocaleString()} max results)\n`)

  // ── Build search strings + city ID map ───────────────────────────────────────
  const idMap = new Map()
  for (const city of cities) {
    const abbr   = STATE_ABBR[city.state] || ''
    const search = `IV therapy ${city.city_name} ${abbr}`.trim()
    idMap.set(search.toLowerCase(), city.id)
  }

  // ── Group into tier segments ──────────────────────────────────────────────────
  const segments = []
  let prevUpTo = 0
  for (const tier of TIERS) {
    const from = prevUpTo
    const to   = Math.min(tier.upTo, cities.length)
    if (from >= to) { prevUpTo = tier.upTo; continue }
    const slice = cities.slice(from, to).map(c => {
      const abbr = STATE_ABBR[c.state] || ''
      return `IV therapy ${c.city_name} ${abbr}`.trim()
    })
    segments.push({ maxPerCity: tier.maxPerCity, searches: slice, from: from + 1, to })
    prevUpTo = tier.upTo
    if (to >= cities.length) break
  }

  // ── Process segments in BATCH_SIZE chunks ────────────────────────────────────
  let totalInserted = 0
  let totalCities   = 0
  let batchNum      = 0
  const totalBatches = segments.reduce((acc, s) => acc + Math.ceil(s.searches.length / BATCH_SIZE), 0)

  for (const seg of segments) {
    const batches = Math.ceil(seg.searches.length / BATCH_SIZE)
    console.log(`\n🏙️  Tier: ${seg.maxPerCity} results/city — cities ranked ${seg.from}–${seg.to} (${seg.searches.length} cities, ${batches} batch${batches > 1 ? 'es' : ''})`)

    for (let b = 0; b < batches; b++) {
      batchNum++
      const slice = seg.searches.slice(b * BATCH_SIZE, (b + 1) * BATCH_SIZE)
      console.log(`\n📦  Batch ${batchNum}/${totalBatches} — ${slice.length} cities @ ${seg.maxPerCity} results each`)

      const inserted = await processBatch(slice, seg.maxPerCity, idMap, `${batchNum}/${totalBatches}`)
      totalInserted += inserted
      totalCities   += slice.length
      console.log(`    ✅  Running total: ${totalInserted} businesses across ${totalCities} cities`)

      // Small pause between batches to avoid rate limits
      if (batchNum < totalBatches) await new Promise(r => setTimeout(r, 3000))
    }
  }

  console.log(`\n🎉  Done!`)
  console.log(`    ${totalInserted} IV therapy businesses inserted`)
  console.log(`    ${totalCities} cities covered`)
  console.log(`    Avg ${totalCities > 0 ? (totalInserted / totalCities).toFixed(1) : 0} businesses/city`)
}

main().catch(err => { console.error('Fatal:', err); process.exit(1) })
