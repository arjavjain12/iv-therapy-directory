/**
 * Scrapes IV therapy businesses from Google Places API (New)
 * and upserts them into the Supabase businesses table.
 *
 * Targets cities with 0 (or few) businesses listed.
 * Uses Google Places Text Search (New) API — returns name, address,
 * phone, website, rating, reviews in a single request.
 *
 * Setup:
 *   Create .env.local with:
 *     NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
 *     SUPABASE_SERVICE_ROLE_KEY=eyJ...
 *     GOOGLE_PLACES_API_KEY=AIza...
 *
 * Usage:
 *   node scripts/scrape-google-places.mjs                          # all empty cities (pop >= 30k)
 *   node scripts/scrape-google-places.mjs --min-pop 50000          # only pop >= 50k
 *   node scripts/scrape-google-places.mjs --limit 20               # test run, 20 cities
 *   node scripts/scrape-google-places.mjs --max-existing 3         # cities with <= 3 businesses
 *   node scripts/scrape-google-places.mjs --dry-run                # search only, don't insert
 */

import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// ─── Load env ─────────────────────────────────────────────────────────────────
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const envPath = path.join(__dirname, '..', '.env.local')

let envVars = {}
try {
  envVars = Object.fromEntries(
    fs.readFileSync(envPath, 'utf8')
      .split('\n')
      .filter((l) => l.includes('=') && !l.startsWith('#'))
      .map((l) => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()] })
  )
} catch {
  console.error('❌  Cannot read .env.local — create it with SUPABASE + GOOGLE_PLACES_API_KEY credentials')
  process.exit(1)
}

const SUPABASE_URL = envVars['NEXT_PUBLIC_SUPABASE_URL']
const SERVICE_KEY = envVars['SUPABASE_SERVICE_ROLE_KEY']
const GOOGLE_API_KEY = envVars['GOOGLE_PLACES_API_KEY']

if (!SUPABASE_URL || !SERVICE_KEY) { console.error('❌  Missing Supabase credentials in .env.local'); process.exit(1) }
if (!GOOGLE_API_KEY) { console.error('❌  Missing GOOGLE_PLACES_API_KEY in .env.local'); process.exit(1) }

const supabase = createClient(SUPABASE_URL, SERVICE_KEY)

// ─── State abbreviations ──────────────────────────────────────────────────────
const STATE_ABBR = {
  'Alabama': 'AL', 'Alaska': 'AK', 'Arizona': 'AZ', 'Arkansas': 'AR', 'California': 'CA',
  'Colorado': 'CO', 'Connecticut': 'CT', 'Delaware': 'DE', 'Florida': 'FL', 'Georgia': 'GA',
  'Hawaii': 'HI', 'Idaho': 'ID', 'Illinois': 'IL', 'Indiana': 'IN', 'Iowa': 'IA', 'Kansas': 'KS',
  'Kentucky': 'KY', 'Louisiana': 'LA', 'Maine': 'ME', 'Maryland': 'MD', 'Massachusetts': 'MA',
  'Michigan': 'MI', 'Minnesota': 'MN', 'Mississippi': 'MS', 'Missouri': 'MO', 'Montana': 'MT',
  'Nebraska': 'NE', 'Nevada': 'NV', 'New Hampshire': 'NH', 'New Jersey': 'NJ', 'New Mexico': 'NM',
  'New York': 'NY', 'North Carolina': 'NC', 'North Dakota': 'ND', 'Ohio': 'OH', 'Oklahoma': 'OK',
  'Oregon': 'OR', 'Pennsylvania': 'PA', 'Rhode Island': 'RI', 'South Carolina': 'SC',
  'South Dakota': 'SD', 'Tennessee': 'TN', 'Texas': 'TX', 'Utah': 'UT', 'Vermont': 'VT',
  'Virginia': 'VA', 'Washington': 'WA', 'West Virginia': 'WV', 'Wisconsin': 'WI', 'Wyoming': 'WY',
  'Washington DC': 'DC',
}

// ─── IV therapy relevance filter ─────────────────────────────────────────────
const IV_KEYWORDS = [
  'iv therapy', 'iv drip', 'iv infusion', 'infusion therapy', 'intravenous',
  'mobile iv', 'iv bar', 'iv lounge', 'wellness drip', 'drip bar',
  'medspa', 'med spa', 'medical spa', 'hydration therapy', 'vitamin drip',
  'iv hydration', 'drip hydration', 'restore hyper', 'prime iv',
]

function isIVRelevant(place) {
  const name = (place.displayName?.text || '').toLowerCase()
  const types = (place.types || []).join(' ').toLowerCase()
  const primary = (place.primaryTypeDisplayName?.text || '').toLowerCase()

  return IV_KEYWORDS.some(k => name.includes(k))
    || primary.includes('iv')
    || primary.includes('infusion')
    || primary.includes('med spa')
    || primary.includes('wellness')
    || types.includes('health')
    || types.includes('medical')
    || types.includes('spa')
}

// ─── Detect clinic type ─────────────────────────────────────────────────────
function detectClinicType(place) {
  const name = (place.displayName?.text || '').toLowerCase()
  const types = (place.types || []).join(' ').toLowerCase()

  if (name.includes('mobile') || types.includes('mobile')) return 'mobile'
  if (name.includes('med spa') || name.includes('medspa') || types.includes('spa')) return 'medspa'
  if (types.includes('hospital') || types.includes('doctor') || types.includes('clinic')) return 'clinic'
  if (name.includes('bar') || name.includes('lounge')) return 'iv_bar'
  if (types.includes('wellness') || name.includes('wellness')) return 'wellness_center'
  return 'iv_bar'
}

// ─── Slugify ─────────────────────────────────────────────────────────────────
function slugify(str) {
  return str.toLowerCase().normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim().replace(/\s+/g, '-').replace(/-+/g, '-')
}

// ─── Google Places API (New) Text Search ────────────────────────────────────
const FIELD_MASK = [
  'places.id',
  'places.displayName',
  'places.formattedAddress',
  'places.nationalPhoneNumber',
  'places.websiteUri',
  'places.rating',
  'places.userRatingCount',
  'places.types',
  'places.primaryTypeDisplayName',
  'places.location',
  'places.businessStatus',
].join(',')

async function searchPlaces(query, lat, lng) {
  const body = {
    textQuery: query,
    locationBias: {
      circle: {
        center: { latitude: lat, longitude: lng },
        radius: 50000.0, // 50km radius
      },
    },
    maxResultCount: 20,
    languageCode: 'en',
  }

  const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': GOOGLE_API_KEY,
      'X-Goog-FieldMask': FIELD_MASK,
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Places API error ${res.status}: ${err}`)
  }

  const data = await res.json()
  return data.places || []
}

// ─── Rate limiter (respect API quota) ────────────────────────────────────────
function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  const args = process.argv.slice(2)
  const getArg = (flag, def) => { const i = args.indexOf(flag); return i !== -1 && args[i + 1] ? args[i + 1] : def }
  const hasFlag = (flag) => args.includes(flag)

  const limit = parseInt(getArg('--limit', '99999'))
  const minPop = parseInt(getArg('--min-pop', '30000'))
  const maxExisting = parseInt(getArg('--max-existing', '0'))
  const dryRun = hasFlag('--dry-run')

  console.log(`\n🚀  Google Places IV Therapy Scraper`)
  console.log(`    Population threshold: ${minPop.toLocaleString()}+`)
  console.log(`    Max existing businesses: ${maxExisting}`)
  console.log(`    City limit: ${limit}`)
  console.log(`    Dry run: ${dryRun}\n`)

  // ── Fetch cities from Supabase ──────────────────────────────────────────────
  // Get ALL cities above pop threshold with their business counts
  console.log('📋  Loading cities from Supabase...')

  // Step 1: get all qualifying cities
  let allCities = []
  let from = 0
  const PAGE = 1000
  while (true) {
    const { data, error } = await supabase
      .from('cities')
      .select('id, city_name, state, latitude, longitude, population')
      .gte('population', minPop)
      .order('population', { ascending: false })
      .range(from, from + PAGE - 1)
    if (error) { console.error('❌  Supabase error:', error.message); process.exit(1) }
    if (!data || data.length === 0) break
    allCities = allCities.concat(data)
    if (data.length < PAGE) break
    from += PAGE
  }
  console.log(`    ${allCities.length} cities with pop >= ${minPop.toLocaleString()}`)

  // Step 2: get business counts per city
  const { data: bizCounts, error: bizErr } = await supabase
    .rpc('get_business_counts_by_city', {})
    .select('city_id, count')

  // If the RPC doesn't exist, fall back to checking each city
  let cityBizMap = new Map()
  if (bizErr) {
    console.log('    ⚠️  RPC not available, fetching business counts manually...')
    // Just get all businesses and count by city_id
    let allBiz = []
    from = 0
    while (true) {
      const { data } = await supabase
        .from('businesses')
        .select('city_id')
        .eq('is_active', true)
        .range(from, from + PAGE - 1)
      if (!data || data.length === 0) break
      allBiz = allBiz.concat(data)
      if (data.length < PAGE) break
      from += PAGE
    }
    for (const b of allBiz) {
      cityBizMap.set(b.city_id, (cityBizMap.get(b.city_id) || 0) + 1)
    }
    console.log(`    ${allBiz.length} total active businesses found`)
  } else {
    for (const row of (bizCounts || [])) {
      cityBizMap.set(row.city_id, row.count)
    }
  }

  // Step 3: filter to cities with <= maxExisting businesses
  const targetCities = allCities
    .filter(c => (cityBizMap.get(c.id) || 0) <= maxExisting)
    .slice(0, limit)

  console.log(`    ${targetCities.length} cities with <= ${maxExisting} businesses (limited to ${limit})\n`)
  if (targetCities.length === 0) { console.log('No target cities found. Done.'); return }

  // Estimate cost: Google Places Text Search = ~$0.032 per request
  console.log(`💰  Estimated API cost: ~$${(targetCities.length * 0.032).toFixed(2)} (${targetCities.length} Text Search requests)\n`)

  // ── Search each city ────────────────────────────────────────────────────────
  let totalInserted = 0
  let totalSearched = 0
  let errors = 0

  for (let i = 0; i < targetCities.length; i++) {
    const city = targetCities[i]
    const abbr = STATE_ABBR[city.state] || ''
    const query = `IV therapy in ${city.city_name}, ${abbr}`

    process.stdout.write(`[${i + 1}/${targetCities.length}] ${city.city_name}, ${abbr} (pop ${city.population.toLocaleString()})... `)

    let places
    try {
      places = await searchPlaces(query, Number(city.latitude), Number(city.longitude))
    } catch (err) {
      console.log(`❌ ${err.message}`)
      errors++
      if (err.message.includes('429') || err.message.includes('RATE')) {
        console.log('    ⏳ Rate limited — waiting 30s...')
        await sleep(30000)
      }
      continue
    }

    // Filter to IV-relevant results
    const relevant = places.filter(p => {
      if (p.businessStatus === 'CLOSED_PERMANENTLY') return false
      return isIVRelevant(p)
    })

    if (relevant.length === 0) {
      console.log(`0 results`)
      totalSearched++
      await sleep(200) // gentle rate limiting
      continue
    }

    // Build business records
    const toInsert = []
    const slugsSeen = new Set()

    for (const place of relevant) {
      let slug = slugify(place.displayName?.text || 'unknown')
      const key = `${city.id}/${slug}`
      if (slugsSeen.has(key)) {
        slug = `${slug}-2`
        if (slugsSeen.has(`${city.id}/${slug}`)) continue
      }
      slugsSeen.add(`${city.id}/${slug}`)

      const clinicType = detectClinicType(place)

      toInsert.push({
        city_id: city.id,
        name: place.displayName?.text || 'Unknown',
        slug,
        address: place.formattedAddress || null,
        phone: place.nationalPhoneNumber || null,
        website: place.websiteUri || null,
        rating: place.rating || null,
        review_count: place.userRatingCount || 0,
        description: null,
        clinic_type: clinicType,
        is_mobile: clinicType === 'mobile',
        tier: 'free',
        is_active: true,
      })
    }

    console.log(`${places.length} found → ${toInsert.length} IV-relevant`)

    if (!dryRun && toInsert.length > 0) {
      const { error } = await supabase
        .from('businesses')
        .upsert(toInsert, { onConflict: 'city_id,slug', ignoreDuplicates: true })
      if (error) {
        console.log(`    ❌ Upsert error: ${error.message}`)
      } else {
        totalInserted += toInsert.length
      }
    } else if (dryRun && toInsert.length > 0) {
      totalInserted += toInsert.length
      console.log(`    (dry run — would insert ${toInsert.length})`)
    }

    totalSearched++

    // Rate limit: ~5 requests/sec to stay well under quota
    await sleep(200)
  }

  console.log(`\n🎉  Done!`)
  console.log(`    ${totalSearched} cities searched`)
  console.log(`    ${totalInserted} businesses ${dryRun ? 'would be' : ''} inserted`)
  console.log(`    ${errors} errors`)
  if (dryRun) console.log(`    ⚠️  Dry run — nothing was written to the database`)
}

main().catch(err => { console.error('Fatal:', err); process.exit(1) })
