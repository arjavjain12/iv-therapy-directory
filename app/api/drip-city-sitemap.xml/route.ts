import { getClient, isConfigured } from '@/lib/supabase'
import { DRIP_TYPE_DATA } from '@/data/drip-types'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ivlist.com'
const DRIP_SLUGS = Object.keys(DRIP_TYPE_DATA)

export async function GET() {
  if (!isConfigured()) {
    return new Response(
      '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>',
      { headers: { 'Content-Type': 'application/xml' } },
    )
  }

  // Include cities with population >= 10k (~5k cities) for broad coverage
  const results: { state_slug: string; city_slug: string }[] = []
  const PAGE = 1000
  let from = 0

  while (true) {
    const { data } = await getClient()
      .from('cities')
      .select('state_slug, city_slug')
      .gte('population', 10000)
      .order('population', { ascending: false })
      .range(from, from + PAGE - 1)
    if (!data || data.length === 0) break
    results.push(...data)
    if (data.length < PAGE) break
    from += PAGE
  }

  const now = new Date().toISOString()

  const urls = results.flatMap((c) =>
    DRIP_SLUGS.map(
      (drip) =>
        `  <url><loc>${BASE_URL}/iv-therapy/${c.state_slug}/${c.city_slug}/${drip}</loc><lastmod>${now}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`,
    ),
  )

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
