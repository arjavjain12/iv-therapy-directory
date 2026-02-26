/**
 * Populates drips_available for all active businesses.
 *
 * Logic:
 *  - All businesses get the 6 core drips every IV bar offers
 *  - NAD+ only added to medspas/wellness centers (expensive, not all offer it)
 *  - Ozone/detox only added to medspas (niche)
 *  - Mobile businesses get all core drips
 */

import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const envVars = Object.fromEntries(
  fs.readFileSync(path.join(__dirname, '..', '.env.local'), 'utf8')
    .split('\n').filter(l => l.includes('=') && !l.startsWith('#'))
    .map(l => { const i = l.indexOf('='); return [l.slice(0,i).trim(), l.slice(i+1).trim()] })
)

const supabase = createClient(envVars['NEXT_PUBLIC_SUPABASE_URL'], envVars['SUPABASE_SERVICE_ROLE_KEY'])

const CORE_DRIPS = ['hydration', 'myers-cocktail', 'hangover', 'immunity', 'vitamin-c', 'beauty', 'athletic', 'nad-plus']
const PREMIUM_DRIPS = [...CORE_DRIPS, 'ozone', 'detox']

function getDrips(clinicType) {
  if (clinicType === 'medspa' || clinicType === 'clinic') return PREMIUM_DRIPS
  return CORE_DRIPS
}

async function main() {
  console.log('\n💉  Populating drips_available for all active businesses...\n')

  let page = 0
  const PAGE_SIZE = 500
  let total = 0

  while (true) {
    const { data, error } = await supabase
      .from('businesses')
      .select('id, clinic_type')
      .eq('is_active', true)
      .range(page * PAGE_SIZE, (page + 1) * PAGE_SIZE - 1)

    if (error) { console.error('Fetch error:', error.message); break }
    if (!data || data.length === 0) break

    // Update each business individually (batch UPDATE by clinic_type groups)
    const byType = {}
    for (const b of data) {
      const key = b.clinic_type || 'iv_bar'
      if (!byType[key]) byType[key] = []
      byType[key].push(b.id)
    }

    for (const [clinicType, ids] of Object.entries(byType)) {
      const drips = getDrips(clinicType)
      const { error: upErr } = await supabase
        .from('businesses')
        .update({ drips_available: drips })
        .in('id', ids)
      if (upErr) console.error(`Update error (${clinicType}):`, upErr.message)
    }

    total += data.length
    console.log(`  ✅  Updated ${total} businesses so far...`)
    if (data.length < PAGE_SIZE) break
    page++
  }

  console.log(`\n🎉  Done! ${total} businesses now have drips_available set.`)

  // Verify
  const { count } = await supabase
    .from('businesses')
    .select('id', { count: 'exact', head: true })
    .eq('is_active', true)
    .not('drips_available', 'eq', '{}')
  console.log(`✓  Verified: ${count} businesses with drips_available != {}`)
}

main().catch(err => { console.error('Fatal:', err); process.exit(1) })
