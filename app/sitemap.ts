import { MetadataRoute } from 'next'
import { createClient } from '@supabase/supabase-js'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ivlist.com'

async function getAllCities() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
  const PAGE_SIZE = 1000
  const all: { city_slug: string; state_slug: string; created_at: string }[] = []
  let page = 0
  while (true) {
    const { data } = await supabase
      .from('cities')
      .select('city_slug, state_slug, created_at')
      .order('population', { ascending: false })
      .range(page * PAGE_SIZE, (page + 1) * PAGE_SIZE - 1)
    if (!data || data.length === 0) break
    all.push(...data)
    if (data.length < PAGE_SIZE) break
    page++
  }
  return all
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  // ── Static pages ─────────────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/iv-therapy`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/iv-drip-types`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/iv-therapy-near-me`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE_URL}/mobile-iv-therapy`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/iv-therapy-cost`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/how-much-does-iv-therapy-cost`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/cheap-iv-therapy`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/iv-therapy-benefits`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/how-long-does-iv-therapy-take`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/is-iv-therapy-safe`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/what-is-in-a-myers-cocktail`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/iv-therapy-for-hangover`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/mobile-iv-therapy-vs-iv-clinic`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/iv-hydration-vs-oral-hydration`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/iv-therapy-drip-recommender`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/list-your-business`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/iv-therapy-for-dehydration`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/iv-therapy-at-home`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/what-is-iv-therapy`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/iv-therapy-for-weight-loss`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/does-insurance-cover-iv-therapy`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/nad-iv-therapy`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/iv-therapy-certification`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/how-to-prepare-for-iv-therapy`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/what-to-expect-during-iv-therapy`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/how-often-should-you-get-iv-therapy`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/iv-therapy-side-effects`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/iv-therapy-cost-estimator`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/iv-therapy-for-chronic-fatigue`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/iv-therapy-for-anxiety`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/iv-therapy-for-jet-lag`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/iv-therapy-for-altitude-sickness`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/iv-therapy-for-inflammation`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/iv-therapy-for-morning-sickness`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/iv-therapy-for-fibromyalgia`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE_URL}/iv-therapy-for-long-covid`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]

  // ── Drip type pages ───────────────────────────────────────────────────────────
  const dripTypes = [
    'hydration', 'myers-cocktail', 'nad-plus', 'vitamin-c', 'immunity',
    'hangover', 'beauty', 'athletic', 'b12', 'vitamin-d', 'ozone', 'detox', 'glutathione',
  ]
  const dripPages: MetadataRoute.Sitemap = dripTypes.map((slug) => ({
    url: `${BASE_URL}/iv-drip-types/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  // ── Category pages ────────────────────────────────────────────────────────────
  const categories = [
    'hangover', 'athletic-recovery', 'immune-boost', 'anti-aging', 'beauty',
    'hydration', 'mobile', 'cold-flu', 'weight-loss', 'migraine', 'energy', 'pots',
  ]
  const categoryPages: MetadataRoute.Sitemap = categories.map((slug) => ({
    url: `${BASE_URL}/iv-therapy/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  // ── City pages (fetched from Supabase at build time) ──────────────────────────
  const cities = await getAllCities()
  const cityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${BASE_URL}/iv-therapy/${c.state_slug}/${c.city_slug}`,
    lastModified: c.created_at ? new Date(c.created_at) : now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...dripPages, ...categoryPages, ...cityPages]
}
