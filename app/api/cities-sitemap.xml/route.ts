import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ivlist.com'

export const dynamic = 'force-dynamic'
export const revalidate = 86400 // Vercel caches this response for 24h at CDN level

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.error('cities-sitemap: missing Supabase env vars')
      return emptyXml()
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    // Fetch all cities in batches of 1000 (Supabase max-rows limit)
    const allCities: { city_slug: string; state_slug: string; created_at: string }[] = []
    const PAGE_SIZE = 1000
    let page = 0

    while (true) {
      const { data, error } = await supabase
        .from('cities')
        .select('city_slug, state_slug, created_at')
        .order('population', { ascending: false })
        .range(page * PAGE_SIZE, (page + 1) * PAGE_SIZE - 1)

      if (error) {
        console.error(`cities-sitemap page ${page} error:`, error)
        break
      }
      if (!data || data.length === 0) break

      allCities.push(...data)
      if (data.length < PAGE_SIZE) break // last page
      page++
    }

    console.log(`cities-sitemap: fetched ${allCities.length} cities`)

    if (!allCities.length) return emptyXml()

    const today = new Date().toISOString().split('T')[0]
    const urls = allCities.map((city) => `
  <url>
    <loc>${SITE_URL}/iv-therapy/${city.state_slug}/${city.city_slug}</loc>
    <lastmod>${city.created_at ? city.created_at.split('T')[0] : today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400',
      },
    })
  } catch (err) {
    console.error('cities-sitemap error:', err)
    return new NextResponse('Error generating sitemap', { status: 500 })
  }
}

function emptyXml() {
  return new NextResponse(
    '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>',
    { headers: { 'Content-Type': 'application/xml' } }
  )
}
