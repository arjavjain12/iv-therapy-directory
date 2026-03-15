import { createClient } from '@supabase/supabase-js'
import { STATE_NAMES } from '@/lib/utils'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ivlist.com'

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ state: string }> }
) {
  const { state } = await params

  if (!STATE_NAMES[state]) {
    return new Response('Not found', { status: 404 })
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  const supabase = createClient(url, key)

  const { data: cities } = await supabase
    .from('cities')
    .select('city_slug')
    .eq('state_slug', state)
    .order('population', { ascending: false })

  const urls = (cities || [])
    .map(
      (c) =>
        `  <url><loc>${escapeXml(`${BASE_URL}/iv-therapy/${state}/${c.city_slug}`)}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`
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
