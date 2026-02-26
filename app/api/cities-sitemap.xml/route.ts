import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ivlist.com'

export const dynamic = 'force-dynamic'
export const revalidate = 86400 // 24 hours

export async function GET() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.error('cities-sitemap: missing Supabase env vars')
      return new NextResponse('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>', {
        headers: { 'Content-Type': 'application/xml' },
      })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    const { data: cities, error } = await supabase
      .from('cities')
      .select('city_slug, state_slug, updated_at')
      .order('population', { ascending: false })

    if (error) {
      console.error('cities-sitemap Supabase error:', error)
    }

    if (!cities?.length) {
      return new NextResponse('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>', {
        headers: { 'Content-Type': 'application/xml' },
      })
    }

    const urls = cities.map((city) => `
  <url>
    <loc>${SITE_URL}/iv-therapy/${city.state_slug}/${city.city_slug}</loc>
    <lastmod>${city.updated_at ? city.updated_at.split('T')[0] : new Date().toISOString().split('T')[0]}</lastmod>
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
