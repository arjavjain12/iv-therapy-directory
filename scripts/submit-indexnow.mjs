/**
 * submit-indexnow.mjs
 * Submits all static URLs to IndexNow for instant Bing/Yandex/Naver indexing.
 * Run after deploying new pages: node scripts/submit-indexnow.mjs
 *
 * Usage: node scripts/submit-indexnow.mjs
 * Set SITE_URL env var or update the HOST constant below.
 */

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

const HOST = (envVars['NEXT_PUBLIC_SITE_URL'] || 'https://ivlist.com').replace(/\/$/, '')
const KEY = 'ivtherapylisting2026'
const KEY_LOCATION = `${HOST}/${KEY}.txt`

const URLS = [
  HOST,
  `${HOST}/iv-therapy`,
  `${HOST}/iv-drip-types`,
  `${HOST}/iv-therapy-near-me`,
  `${HOST}/mobile-iv-therapy`,
  `${HOST}/iv-therapy-cost`,
  `${HOST}/how-much-does-iv-therapy-cost`,
  `${HOST}/cheap-iv-therapy`,
  `${HOST}/iv-therapy-benefits`,
  `${HOST}/how-long-does-iv-therapy-take`,
  `${HOST}/is-iv-therapy-safe`,
  `${HOST}/iv-therapy-side-effects`,
  `${HOST}/what-is-in-a-myers-cocktail`,
  `${HOST}/iv-therapy-for-hangover`,
  `${HOST}/mobile-iv-therapy-vs-iv-clinic`,
  `${HOST}/iv-hydration-vs-oral-hydration`,
  `${HOST}/iv-therapy-drip-recommender`,
  `${HOST}/iv-therapy-cost-estimator`,
  `${HOST}/does-insurance-cover-iv-therapy`,
  `${HOST}/nad-iv-therapy`,
  `${HOST}/iv-therapy-certification`,
  `${HOST}/how-to-prepare-for-iv-therapy`,
  `${HOST}/what-to-expect-during-iv-therapy`,
  `${HOST}/how-often-should-you-get-iv-therapy`,
  `${HOST}/list-your-business`,
  `${HOST}/iv-drip-types/hydration`,
  `${HOST}/iv-drip-types/myers-cocktail`,
  `${HOST}/iv-drip-types/nad-plus`,
  `${HOST}/iv-drip-types/vitamin-c`,
  `${HOST}/iv-drip-types/immunity`,
  `${HOST}/iv-drip-types/hangover`,
  `${HOST}/iv-drip-types/beauty`,
  `${HOST}/iv-drip-types/athletic`,
  `${HOST}/iv-drip-types/b12`,
  `${HOST}/iv-drip-types/vitamin-d`,
  `${HOST}/iv-drip-types/ozone`,
  `${HOST}/iv-drip-types/detox`,
  `${HOST}/iv-therapy/hangover`,
  `${HOST}/iv-therapy/athletic-recovery`,
  `${HOST}/iv-therapy/immune-boost`,
  `${HOST}/iv-therapy/anti-aging`,
  `${HOST}/iv-therapy/beauty`,
  `${HOST}/iv-therapy/hydration`,
  `${HOST}/iv-therapy/mobile`,
  `${HOST}/iv-therapy/cold-flu`,
  `${HOST}/iv-therapy/weight-loss`,
  `${HOST}/iv-therapy/migraine`,
  `${HOST}/iv-therapy/energy`,
  `${HOST}/iv-therapy/pots`,
  `${HOST}/iv-therapy-for-chronic-fatigue`,
  `${HOST}/iv-therapy-for-anxiety`,
  `${HOST}/iv-therapy-for-jet-lag`,
  `${HOST}/iv-therapy-for-altitude-sickness`,
  `${HOST}/iv-therapy-for-inflammation`,
  `${HOST}/iv-therapy-for-morning-sickness`,
  `${HOST}/iv-therapy-for-fibromyalgia`,
  `${HOST}/iv-therapy-for-long-covid`,
  `${HOST}/iv-therapy-for-ms`,
  `${HOST}/iv-therapy-for-cancer`,
  `${HOST}/iv-therapy-for-dehydration`,
  `${HOST}/iv-therapy-for-weight-loss`,
  `${HOST}/iv-therapy-at-home`,
  `${HOST}/iv-therapy-for-migraines`,
  `${HOST}/iv-therapy-for-flu`,
  `${HOST}/iv-therapy-for-athletes`,
  `${HOST}/what-is-iv-therapy`,
  `${HOST}/about`,
  `${HOST}/iv-drip-types/glutathione`,
  `${HOST}/iv-drip-types/iron`,
  `${HOST}/iv-drip-types/ketamine`,
  `${HOST}/iv-drip-types/high-dose-vitamin-c`,
  `${HOST}/iv-drip-types/chelation`,
  `${HOST}/iv-drip-types/magnesium`,
  // Top state pages
  `${HOST}/iv-therapy/california`,
  `${HOST}/iv-therapy/texas`,
  `${HOST}/iv-therapy/florida`,
  `${HOST}/iv-therapy/new-york`,
  `${HOST}/iv-therapy/arizona`,
  `${HOST}/iv-therapy/colorado`,
  `${HOST}/iv-therapy/illinois`,
  `${HOST}/iv-therapy/georgia`,
  `${HOST}/iv-therapy/nevada`,
  `${HOST}/iv-therapy/ohio`,
  // Top city pages
  `${HOST}/iv-therapy/california/los-angeles`,
  `${HOST}/iv-therapy/new-york/new-york-city`,
  `${HOST}/iv-therapy/florida/miami`,
  `${HOST}/iv-therapy/texas/houston`,
  `${HOST}/iv-therapy/texas/austin`,
  `${HOST}/iv-therapy/texas/dallas`,
  `${HOST}/iv-therapy/arizona/phoenix`,
  `${HOST}/iv-therapy/arizona/scottsdale`,
  `${HOST}/iv-therapy/nevada/las-vegas`,
  `${HOST}/iv-therapy/illinois/chicago`,
  `${HOST}/iv-therapy/colorado/denver`,
  `${HOST}/iv-therapy/georgia/atlanta`,
  `${HOST}/iv-therapy/california/san-francisco`,
  `${HOST}/iv-therapy/california/san-diego`,
  `${HOST}/iv-therapy/florida/orlando`,
  `${HOST}/iv-therapy/florida/tampa`,
  `${HOST}/iv-therapy/washington/seattle`,
  `${HOST}/iv-therapy/tennessee/nashville`,
  `${HOST}/iv-therapy/north-carolina/charlotte`,
  `${HOST}/iv-therapy/massachusetts/boston`,
]

console.log(`🚀  Submitting ${URLS.length} URLs to IndexNow…`)
console.log(`    Host: ${HOST}`)

const body = {
  host: HOST.replace('https://', '').replace('http://', ''),
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: URLS,
}

try {
  const res = await fetch('https://api.indexnow.org/IndexNow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  })

  if (res.ok) {
    console.log(`✅  Success! Status: ${res.status}`)
    console.log(`    ${URLS.length} URLs submitted to Bing, Yandex, and Naver via IndexNow`)
    console.log(`\n    Next steps:`)
    console.log(`    1. Also submit sitemaps to Google Search Console manually`)
    console.log(`    2. Run this script again after each new batch of pages`)
  } else {
    const text = await res.text()
    console.error(`❌  IndexNow returned ${res.status}: ${text}`)
  }
} catch (err) {
  console.error('❌  Network error:', err.message)
  console.log('\n    (Run this script after deploying to a live domain)')
}
