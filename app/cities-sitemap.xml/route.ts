import { createClient } from '@supabase/supabase-js'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ivlist.com'

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  const supabase = createClient(url, key)

  const PAGE = 1000
  const allCities: { state_slug: string; city_slug: string }[] = []
  let from = 0

  while (true) {
    const { data } = await supabase
      .from('cities')
      .select('state_slug, city_slug')
      .range(from, from + PAGE - 1)
    if (!data || data.length === 0) break
    allCities.push(...data)
    if (data.length < PAGE) break
    from += PAGE
  }

  const urls = allCities
    .map(
      (c) =>
        `  <url><loc>${escapeXml(`${BASE_URL}/iv-therapy/${c.state_slug}/${c.city_slug}`)}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  })
}
