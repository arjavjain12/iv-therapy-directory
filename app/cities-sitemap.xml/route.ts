import { STATE_NAMES } from '@/lib/utils'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ivlist.com'

export async function GET() {
  // Use full name slugs (e.g. "california") to match state_slug in the DB
  const stateSlugs = Object.values(STATE_NAMES)
    .map((name) => name.toLowerCase().replace(/\s+/g, '-'))
    .sort()

  const entries = stateSlugs
    .map(
      (state) =>
        `  <sitemap><loc>${BASE_URL}/state-cities-sitemap/${state}</loc></sitemap>`
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=86400',
    },
  })
}
