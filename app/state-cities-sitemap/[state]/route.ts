import { STATE_NAMES } from '@/lib/utils'
import { getClient, isConfigured } from '@/lib/supabase'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ivlist.com'

// Build a set of valid full-name state slugs for validation
const VALID_STATE_SLUGS = new Set(
  Object.values(STATE_NAMES).map((name) => name.toLowerCase().replace(/\s+/g, '-'))
)

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

  if (!VALID_STATE_SLUGS.has(state)) {
    return new Response('Not found', { status: 404 })
  }

  if (!isConfigured()) {
    return new Response(
      '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>',
      { headers: { 'Content-Type': 'application/xml' } },
    )
  }

  // Only include cities that have at least one active business (avoid thin pages in sitemap)
  const { data: cities } = await getClient()
    .from('cities')
    .select('city_slug, businesses!inner(id)')
    .eq('state_slug', state)
    .eq('businesses.is_active', true)
    .order('population', { ascending: false })

  // Deduplicate (join may return multiple rows per city)
  const seen = new Set<string>()
  const urls = (cities || [])
    .filter((c) => {
      if (seen.has(c.city_slug)) return false
      seen.add(c.city_slug)
      return true
    })
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
