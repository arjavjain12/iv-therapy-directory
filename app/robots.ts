import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      // Explicit AI bot access for GEO (Generative Engine Optimization)
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
    ],
    sitemap: [
      'https://ivtherapylisting.com/sitemap.xml',
      'https://ivtherapylisting.com/api/cities-sitemap.xml',
      'https://ivtherapylisting.com/api/businesses-sitemap.xml',
      'https://ivtherapylisting.com/api/drip-city-sitemap.xml',
    ],
  }
}
