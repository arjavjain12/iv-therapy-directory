/**
 * seed-iv-pricing.mjs
 *
 * Populates city_pricing with realistic IV therapy prices for all cities.
 * Applies regional cost multipliers (e.g. NYC/SF are more expensive).
 *
 * Usage: node scripts/seed-iv-pricing.mjs
 */

import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// ─── Load env ────────────────────────────────────────────────────────────────
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const envPath = path.join(__dirname, '..', '.env.local')
const envVars = Object.fromEntries(
  fs.readFileSync(envPath, 'utf8')
    .split('\n')
    .filter((l) => l.includes('=') && !l.startsWith('#'))
    .map((l) => {
      const idx = l.indexOf('=')
      return [l.slice(0, idx).trim(), l.slice(idx + 1).trim()]
    })
)

const SUPABASE_URL = envVars['NEXT_PUBLIC_SUPABASE_URL']
const SERVICE_KEY  = envVars['SUPABASE_SERVICE_ROLE_KEY']

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error('❌  Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local')
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SERVICE_KEY)

// ─── Base pricing (matches DEFAULT_PRICING in utils.ts) ──────────────────────
const BASE_PRICING = {
  hydration:      { low: 99,  high: 175, duration: 30 },
  myers_cocktail: { low: 149, high: 275, duration: 45 },
  vitamin_c:      { low: 125, high: 225, duration: 45 },
  immunity:       { low: 149, high: 250, duration: 45 },
  hangover:       { low: 125, high: 250, duration: 45 },
  nad_plus:       { low: 250, high: 500, duration: 90 },
  beauty:         { low: 150, high: 275, duration: 45 },
  athletic:       { low: 149, high: 299, duration: 45 },
}

// ─── High-cost metro areas (state_slug, multiplier) ──────────────────────────
const HIGH_COST_STATES = {
  'new-york':     1.35,
  'california':   1.30,
  'massachusetts':1.25,
  'connecticut':  1.20,
  'new-jersey':   1.20,
  'washington':   1.20,
  'colorado':     1.15,
  'illinois':     1.15,
  'florida':      1.10,
  'nevada':       1.15,  // Las Vegas market
  'texas':        1.05,
}

// ─── Low-cost states ─────────────────────────────────────────────────────────
const LOW_COST_STATES = {
  'mississippi':  0.90,
  'arkansas':     0.90,
  'west-virginia':0.92,
  'alabama':      0.92,
  'oklahoma':     0.93,
  'kentucky':     0.93,
}

function getMultiplier(stateSlug) {
  if (HIGH_COST_STATES[stateSlug]) return HIGH_COST_STATES[stateSlug]
  if (LOW_COST_STATES[stateSlug]) return LOW_COST_STATES[stateSlug]
  return 1.0
}

function applyVariance(price, variance = 0.08) {
  // Add ±8% random variance to make prices feel organic
  const factor = 1 + (Math.random() * variance * 2 - variance)
  return Math.round(price * factor / 5) * 5  // round to nearest $5
}

// ─── Fetch all cities (paginated — Supabase default limit is 1000) ───────────
console.log('📥  Fetching cities from Supabase…')
const cities = []
const PAGE = 1000
let from = 0

while (true) {
  const { data, error: citiesError } = await supabase
    .from('cities')
    .select('id, state_slug, population')
    .order('id')
    .range(from, from + PAGE - 1)

  if (citiesError) {
    console.error('❌  Failed to fetch cities:', citiesError.message)
    process.exit(1)
  }

  cities.push(...data)
  process.stdout.write(`\r    ${cities.length} cities fetched…`)

  if (data.length < PAGE) break
  from += PAGE
}

console.log(`\n    ${cities.length} cities found`)

// ─── Build pricing rows ───────────────────────────────────────────────────────
const rows = []

for (const city of cities) {
  const mult = getMultiplier(city.state_slug)

  // Additional multiplier for large cities (population-based)
  const popMult = city.population > 500000 ? 1.10
                : city.population > 100000 ? 1.05
                : 1.0

  const finalMult = mult * popMult

  for (const [dripType, base] of Object.entries(BASE_PRICING)) {
    rows.push({
      city_id:         city.id,
      drip_type:       dripType,
      price_low:       applyVariance(base.low * finalMult),
      price_high:      applyVariance(base.high * finalMult),
      session_minutes: base.duration,
    })
  }
}

console.log(`✅  ${rows.length} pricing rows to insert (${cities.length} cities × 8 drip types)`)

// ─── Batch upsert ────────────────────────────────────────────────────────────
const BATCH = 1000
let total = 0

for (let i = 0; i < rows.length; i += BATCH) {
  const chunk = rows.slice(i, i + BATCH)
  const batchNum = Math.floor(i / BATCH) + 1
  const totalBatches = Math.ceil(rows.length / BATCH)

  const { error } = await supabase
    .from('city_pricing')
    .upsert(chunk, { onConflict: 'city_id,drip_type', ignoreDuplicates: false })

  if (error) {
    console.error(`❌  Batch ${batchNum}/${totalBatches} failed:`, error.message)
  } else {
    total += chunk.length
    process.stdout.write(`\r⏳  Batch ${batchNum}/${totalBatches} — ${total} rows upserted`)
  }
}

console.log(`\n\n🎉  Done! ${total} pricing rows upserted.`)
