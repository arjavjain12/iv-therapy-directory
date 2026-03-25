/**
 * Generates unique city intro text for cities that have businesses listed.
 * Uses actual city data (population, providers, pricing, metro area) to create
 * genuinely unique intros instead of templated text.
 *
 * Usage:
 *   node scripts/generate-unique-intros.mjs                  # all cities with businesses
 *   node scripts/generate-unique-intros.mjs --limit 50       # test run
 *   node scripts/generate-unique-intros.mjs --dry-run        # preview without writing
 *   node scripts/generate-unique-intros.mjs --overwrite      # overwrite existing intros
 */

import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const envPath = path.join(__dirname, '..', '.env.local')
const envVars = Object.fromEntries(
  fs.readFileSync(envPath, 'utf8')
    .split('\n')
    .filter((l) => l.includes('=') && !l.startsWith('#'))
    .map((l) => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()] })
)

const supabase = createClient(envVars['NEXT_PUBLIC_SUPABASE_URL'], envVars['SUPABASE_SERVICE_ROLE_KEY'])

// ─── Intro templates with real data interpolation ────────────────────────────
// Each template is a function that receives city data and returns a unique intro.
// We rotate templates to ensure variety across the directory.

const TEMPLATES = [
  (d) => `${d.cityName} is home to ${d.providerCount} IV therapy provider${d.providerCount > 1 ? 's' : ''} offering services across ${d.county}${d.metro ? ` in the ${d.metro} metro area` : ''}. ${d.hasMobile ? 'Mobile IV services are available for at-home treatments.' : 'In-clinic IV sessions are available at local wellness centers.'} ${d.pricingLine} Browse providers below to compare ratings, services, and pricing.`,

  (d) => `With a population of ${d.popFormatted}, ${d.cityName} has a growing IV therapy market. ${d.providerCount} local provider${d.providerCount > 1 ? 's offer' : ' offers'} treatments including hangover recovery, Myers' Cocktail, NAD+ infusions, and hydration drips. ${d.pricingLine} ${d.hasMobile ? `Mobile IV nurses serve ${d.cityName} and surrounding ${d.county} areas.` : `Visit a local IV clinic in ${d.county} for your session.`}`,

  (d) => `Looking for IV therapy in ${d.cityName}, ${d.state}? Our directory lists ${d.providerCount} verified provider${d.providerCount > 1 ? 's' : ''} in ${d.county}${d.metro ? `, part of the ${d.metro} metropolitan area` : ''}. ${d.pricingLine} ${d.topDrips.length > 0 ? `Popular treatments in ${d.cityName} include ${d.topDrips.join(', ')}.` : 'All major IV drip types are available from local providers.'} Compare clinics, read reviews, and request quotes below.`,

  (d) => `${d.cityName} residents have access to ${d.providerCount} IV therapy provider${d.providerCount > 1 ? 's' : ''} across the ${d.county} area. ${d.pricingLine} Whether you need a quick hydration drip, immune boost, or NAD+ longevity infusion, ${d.cityName}'s IV therapy clinics${d.hasMobile ? ' and mobile services' : ''} have you covered. ${d.popFormatted ? `Serving a community of ${d.popFormatted} residents.` : ''}`,

  (d) => `IV therapy in ${d.cityName}, ${d.state} is available from ${d.providerCount} local provider${d.providerCount > 1 ? 's' : ''} in our directory. ${d.hasMobile ? `Mobile IV services deliver treatments directly to your home, hotel, or office in ${d.cityName}.` : `IV wellness clinics in ${d.county} offer walk-in and appointment-based sessions.`} ${d.pricingLine} ${d.topDrips.length > 0 ? `Top requested drips include ${d.topDrips.join(', ')}.` : 'All standard IV drip types are available.'}`,

  (d) => `${d.county}${d.metro ? ` (${d.metro} metro)` : ''} is served by ${d.providerCount} IV therapy provider${d.providerCount > 1 ? 's' : ''} in ${d.cityName}. ${d.pricingLine} From hangover recovery and athletic performance drips to vitamin C infusions and NAD+ anti-aging therapy, ${d.cityName} has options for every wellness goal. ${d.hasMobile ? 'Mobile IV is available for at-home convenience.' : 'Book an in-clinic session today.'}`,

  (d) => `Find ${d.providerCount} IV therapy clinic${d.providerCount > 1 ? 's' : ''} and mobile IV service${d.providerCount > 1 ? 's' : ''} in ${d.cityName}, ${d.state}. ${d.pricingLine} ${d.cityName}'s providers offer treatments administered by licensed RNs, with options ranging from basic hydration ($99+) to premium NAD+ infusions ($250+). ${d.hasMobile ? `Home and hotel delivery available throughout ${d.county}.` : `In-clinic appointments available in ${d.county}.`}`,

  (d) => `${d.cityName} has ${d.providerCount} IV therapy provider${d.providerCount > 1 ? 's' : ''} ready to help you feel your best. ${d.pricingLine} Located in ${d.county}${d.metro ? `, ${d.metro} area` : ''}, these clinics and mobile services offer everything from hangover IVs to immune boost drips. ${d.popFormatted ? `With ${d.popFormatted} residents, ${d.cityName} has a competitive IV therapy market.` : ''} Compare options below.`,
]

const DRIP_LABELS = {
  hydration: 'IV Hydration',
  myers_cocktail: "Myers' Cocktail",
  nad_plus: 'NAD+',
  immunity: 'Immunity Boost',
  hangover: 'Hangover Recovery',
  beauty: 'Beauty (Glutathione)',
  athletic: 'Athletic Recovery',
  vitamin_c: 'Vitamin C',
}

function formatNumber(n) {
  return new Intl.NumberFormat('en-US').format(n)
}

async function main() {
  const args = process.argv.slice(2)
  const getArg = (flag, def) => { const i = args.indexOf(flag); return i !== -1 && args[i + 1] ? args[i + 1] : def }
  const hasFlag = (flag) => args.includes(flag)

  const limit = parseInt(getArg('--limit', '99999'))
  const dryRun = hasFlag('--dry-run')
  const overwrite = hasFlag('--overwrite')

  console.log(`\n🚀  Unique City Intro Generator`)
  console.log(`    Limit: ${limit}, Dry run: ${dryRun}, Overwrite existing: ${overwrite}\n`)

  // Get all cities with at least 1 business
  console.log('📋  Loading cities with businesses...')
  let allBiz = [], from = 0
  while (true) {
    const { data } = await supabase
      .from('businesses')
      .select('city_id, is_mobile, drips_available')
      .eq('is_active', true)
      .range(from, from + 999)
    if (!data || !data.length) break
    allBiz.push(...data)
    from += 1000
  }

  // Build per-city stats
  const cityStats = new Map()
  for (const b of allBiz) {
    if (!cityStats.has(b.city_id)) {
      cityStats.set(b.city_id, { count: 0, hasMobile: false, drips: new Map() })
    }
    const s = cityStats.get(b.city_id)
    s.count++
    if (b.is_mobile) s.hasMobile = true
    for (const d of (b.drips_available || [])) {
      s.drips.set(d, (s.drips.get(d) || 0) + 1)
    }
  }

  console.log(`    ${cityStats.size} cities have businesses`)

  // Get city details
  const cityIds = [...cityStats.keys()]
  let cities = []
  for (let i = 0; i < cityIds.length; i += 500) {
    const batch = cityIds.slice(i, i + 500)
    const { data } = await supabase
      .from('cities')
      .select('id, city_name, state, county, metro_area, population, intro')
      .in('id', batch)
    if (data) cities.push(...data)
  }

  // Filter: skip cities that already have custom intros (unless --overwrite)
  if (!overwrite) {
    cities = cities.filter(c => !c.intro || c.intro.startsWith('Looking for IV therapy'))
  }

  cities = cities.slice(0, limit)
  console.log(`    ${cities.length} cities to generate intros for\n`)

  // Get pricing data
  const { data: allPricing } = await supabase
    .from('city_pricing')
    .select('city_id, drip_type, price_low, price_high')

  const pricingMap = new Map()
  for (const p of (allPricing || [])) {
    if (!pricingMap.has(p.city_id)) pricingMap.set(p.city_id, [])
    pricingMap.get(p.city_id).push(p)
  }

  // Generate intros
  let updated = 0
  for (let i = 0; i < cities.length; i++) {
    const city = cities[i]
    const stats = cityStats.get(city.id) || { count: 0, hasMobile: false, drips: new Map() }
    const pricing = pricingMap.get(city.id) || []

    // Build pricing line
    let pricingLine = ''
    if (pricing.length > 0) {
      const low = Math.min(...pricing.map(p => p.price_low))
      const high = Math.max(...pricing.map(p => p.price_high))
      pricingLine = `IV therapy in ${city.city_name} ranges from $${low} to $${high} per session depending on drip type.`
    } else {
      pricingLine = `IV therapy sessions in ${city.city_name} typically range from $99 to $500 depending on the treatment.`
    }

    // Top drips
    const topDrips = [...(stats.drips.entries())]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([slug]) => DRIP_LABELS[slug] || slug)

    const templateData = {
      cityName: city.city_name,
      state: city.state,
      county: city.county || `the ${city.city_name} area`,
      metro: city.metro_area,
      popFormatted: city.population > 0 ? formatNumber(city.population) : null,
      providerCount: stats.count,
      hasMobile: stats.hasMobile,
      pricingLine,
      topDrips,
    }

    // Select template based on city id for consistent rotation
    const template = TEMPLATES[city.id % TEMPLATES.length]
    const intro = template(templateData)

    if (dryRun) {
      if (i < 5) console.log(`[${city.city_name}, ${city.state}]\n  ${intro}\n`)
    } else {
      const { error } = await supabase
        .from('cities')
        .update({ intro })
        .eq('id', city.id)
      if (error) {
        console.error(`  ❌ ${city.city_name}: ${error.message}`)
      } else {
        updated++
      }
    }

    if ((i + 1) % 100 === 0) {
      process.stdout.write(`  ${i + 1}/${cities.length} processed\n`)
    }
  }

  if (dryRun) {
    console.log(`\n⚠️  Dry run — ${cities.length} intros would be generated`)
  } else {
    console.log(`\n🎉  Done! ${updated} city intros updated`)
  }
}

main().catch(err => { console.error('Fatal:', err); process.exit(1) })
