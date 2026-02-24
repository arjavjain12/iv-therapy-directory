/**
 * generate-city-intros.mjs
 *
 * Uses Kimi AI to generate unique intro paragraphs for city pages.
 * Processes cities in batches, starting with highest population.
 *
 * Usage: node scripts/generate-city-intros.mjs [--limit 100]
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
const KIMI_API_KEY = envVars['KIMI_API_KEY']
const KIMI_API_URL = envVars['KIMI_API_URL'] || 'https://api.moonshot.ai/v1'

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error('❌  Missing Supabase env vars')
  process.exit(1)
}

if (!KIMI_API_KEY) {
  console.error('❌  Missing KIMI_API_KEY in .env.local')
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SERVICE_KEY)

// ─── Parse args ───────────────────────────────────────────────────────────────
const limitArg = process.argv.find((a) => a.startsWith('--limit='))
const LIMIT = limitArg ? parseInt(limitArg.split('=')[1]) : 100

// ─── Fetch cities needing intros ──────────────────────────────────────────────
console.log(`📥  Fetching top ${LIMIT} cities without intros…`)
const { data: cities, error } = await supabase
  .from('cities')
  .select('id, city_name, state, population')
  .is('intro', null)
  .order('population', { ascending: false })
  .limit(LIMIT)

if (error) {
  console.error('❌  Failed to fetch cities:', error.message)
  process.exit(1)
}

console.log(`    ${cities.length} cities to process`)

// ─── Generate intros ──────────────────────────────────────────────────────────
async function generateIntro(cityName, stateName, population) {
  const prompt = `Write a 2-sentence intro paragraph for an IV therapy directory page for ${cityName}, ${stateName}${population > 0 ? ` (population ~${population.toLocaleString()})` : ''}.

The intro should:
- Mention the city and IV therapy/hydration therapy naturally
- Reference the local lifestyle, climate, or a well-known characteristic of the city if applicable
- Be written for a general audience, not medical professionals
- Be factual and neutral in tone
- NOT include specific business names, prices, or phone numbers
- End with a natural lead-in to finding local IV therapy providers

Output ONLY the 2-sentence paragraph, no quotes or extra formatting.`

  const res = await fetch(`${KIMI_API_URL}/chat/completions`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${KIMI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'moonshot-v1-8k',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 150,
      temperature: 0.7,
    }),
  })

  if (!res.ok) {
    throw new Error(`Kimi API error: ${res.status}`)
  }

  const data = await res.json()
  return data.choices[0].message.content.trim()
}

// ─── Process with rate limiting ───────────────────────────────────────────────
let processed = 0
let failed = 0

for (const city of cities) {
  try {
    const intro = await generateIntro(city.city_name, city.state, city.population)

    const { error: updateError } = await supabase
      .from('cities')
      .update({ intro })
      .eq('id', city.id)

    if (updateError) {
      console.error(`\n❌  DB update failed for ${city.city_name}:`, updateError.message)
      failed++
    } else {
      processed++
      process.stdout.write(`\r✅  ${processed}/${cities.length} — ${city.city_name}, ${city.state}`)
    }

    // Rate limit: ~3 requests/second
    await new Promise((resolve) => setTimeout(resolve, 350))
  } catch (err) {
    console.error(`\n⚠️  Failed ${city.city_name}:`, err.message)
    failed++
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }
}

console.log(`\n\n🎉  Done! ${processed} intros generated. ${failed} failed.`)
