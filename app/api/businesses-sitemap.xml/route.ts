import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ivlist.com'

export const dynamic = 'force-dynamic'
export const revalidate = 86400 // 24 hours

export async function GET() {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    // Join businesses with cities to get state/city slugs
    const { data: businesses } = await supabase
      .from('businesses')
      .select('slug, updated_at, cities(state_slug, city_slug)')
      .eq('is_active', true)
      .order('updated_at', { ascending: false })

    if (!businesses?.length) {
      return new NextResponse('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>', {
        headers: { 'Content-Type': 'application/xml' },
      })
    }

    const urls = businesses
      .filter((b) => b.cities)
      .map((b) => {
        const city = (b.cities as unknown) as { state_slug: string; city_slug: string }
        return `
  <url>
    <loc>${SITE_URL}/iv-therapy/${city.state_slug}/${city.city_slug}/${b.slug}</loc>
    <lastmod>${b.updated_at ? b.updated_at.split('T')[0] : new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`
      }).join('')

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
    console.error('businesses-sitemap error:', err)
    return new NextResponse('Error generating sitemap', { status: 500 })
  }
}
