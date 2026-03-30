import { NextResponse } from 'next/server'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ivlist.com'

const pages = [
  { url: `${BASE_URL}/what-is-iv-therapy`, title: 'What Is IV Therapy?', description: 'A complete guide to intravenous therapy — how it works, what to expect, and who it\'s for.' },
  { url: `${BASE_URL}/iv-therapy-at-home`, title: 'IV Therapy at Home', description: 'How to get mobile IV therapy delivered to your home, hotel, or office.' },
  { url: `${BASE_URL}/iv-therapy-for-dehydration`, title: 'IV Therapy for Dehydration', description: 'How IV hydration therapy treats dehydration faster than drinking water.' },
  { url: `${BASE_URL}/nad-iv-therapy`, title: 'NAD+ IV Therapy', description: 'Benefits, cost, and what to expect from NAD+ intravenous therapy.' },
  { url: `${BASE_URL}/iv-therapy-near-me`, title: 'IV Therapy Near Me', description: 'Find IV therapy clinics and mobile IV drip services near you.' },
  { url: `${BASE_URL}/mobile-iv-therapy`, title: 'Mobile IV Therapy', description: 'On-demand mobile IV services that come to you — at home, hotel, or event.' },
  { url: `${BASE_URL}/iv-therapy-cost`, title: 'IV Therapy Cost Guide', description: 'How much does IV therapy cost? Prices by drip type, city, and provider.' },
  { url: `${BASE_URL}/iv-drip-types`, title: 'IV Drip Types', description: 'A guide to every type of IV drip — ingredients, benefits, and uses.' },
  { url: `${BASE_URL}/iv-therapy-benefits`, title: 'IV Therapy Benefits', description: 'The science-backed benefits of IV therapy for hydration, energy, recovery, and more.' },
  { url: `${BASE_URL}/iv-therapy-certification`, title: 'IV Therapy Certification', description: 'How to become certified to administer IV therapy — courses, requirements, and costs.' },
  { url: `${BASE_URL}/is-iv-therapy-safe`, title: 'Is IV Therapy Safe?', description: 'Risks, side effects, and safety guidelines for IV therapy.' },
  { url: `${BASE_URL}/iv-therapy-side-effects`, title: 'IV Therapy Side Effects', description: 'Common and rare side effects of IV drip therapy explained.' },
  { url: `${BASE_URL}/does-insurance-cover-iv-therapy`, title: 'Does Insurance Cover IV Therapy?', description: 'When insurance pays for IV therapy and when it doesn\'t.' },
  { url: `${BASE_URL}/iv-therapy-for-weight-loss`, title: 'IV Therapy for Weight Loss', description: 'Can IV drips help with weight loss? What the evidence says.' },
  { url: `${BASE_URL}/iv-therapy-for-anxiety`, title: 'IV Therapy for Anxiety', description: 'How IV therapy with magnesium and other nutrients may ease anxiety.' },
  { url: `${BASE_URL}/iv-therapy-for-chronic-fatigue`, title: 'IV Therapy for Chronic Fatigue', description: 'Using IV drips to treat chronic fatigue syndrome and low energy.' },
  { url: `${BASE_URL}/iv-therapy-for-migraines`, title: 'IV Therapy for Migraines', description: 'How IV therapy can stop a migraine fast and prevent future attacks.' },
  { url: `${BASE_URL}/iv-therapy-for-flu`, title: 'IV Therapy for Flu', description: 'Using IV hydration and vitamins to recover from flu faster.' },
  { url: `${BASE_URL}/iv-therapy-for-hangover`, title: 'IV Therapy for Hangover', description: 'How a hangover IV drip cures nausea, headache, and dehydration.' },
  { url: `${BASE_URL}/iv-therapy-for-athletes`, title: 'IV Therapy for Athletes', description: 'How athletes use IV drips for faster recovery and peak performance.' },
  { url: `${BASE_URL}/iv-therapy-for-jet-lag`, title: 'IV Therapy for Jet Lag', description: 'How IV hydration therapy helps reset your body clock after travel.' },
  { url: `${BASE_URL}/iv-therapy-for-inflammation`, title: 'IV Therapy for Inflammation', description: 'Anti-inflammatory IV drips — ingredients, benefits, and best candidates.' },
  { url: `${BASE_URL}/iv-therapy-for-long-covid`, title: 'IV Therapy for Long COVID', description: 'How IV therapy is being used to address long COVID symptoms.' },
  { url: `${BASE_URL}/iv-therapy-for-ms`, title: 'IV Therapy for Multiple Sclerosis', description: 'IV treatments used alongside MS care — what patients should know.' },
  { url: `${BASE_URL}/iv-therapy-for-cancer`, title: 'IV Therapy for Cancer Support', description: 'How IV vitamin C and other drips are used in integrative cancer care.' },
  { url: `${BASE_URL}/iv-therapy-for-fibromyalgia`, title: 'IV Therapy for Fibromyalgia', description: 'Myers\' Cocktail and other IV treatments for fibromyalgia pain.' },
  { url: `${BASE_URL}/iv-therapy-for-altitude-sickness`, title: 'IV Therapy for Altitude Sickness', description: 'Using IV hydration to prevent and treat altitude sickness.' },
  { url: `${BASE_URL}/iv-therapy-for-morning-sickness`, title: 'IV Therapy for Morning Sickness', description: 'Safe IV hydration options for severe morning sickness during pregnancy.' },
  { url: `${BASE_URL}/what-is-in-a-myers-cocktail`, title: "What's in a Myers' Cocktail?", description: 'The full ingredient list and benefits of the Myers\' Cocktail IV drip.' },
  { url: `${BASE_URL}/how-long-does-iv-therapy-take`, title: 'How Long Does IV Therapy Take?', description: 'IV therapy session length by drip type — from 30 minutes to 4 hours.' },
  { url: `${BASE_URL}/how-to-prepare-for-iv-therapy`, title: 'How to Prepare for IV Therapy', description: 'What to do before your first IV therapy appointment.' },
  { url: `${BASE_URL}/what-to-expect-during-iv-therapy`, title: 'What to Expect During IV Therapy', description: 'A step-by-step walkthrough of what happens during an IV drip session.' },
  { url: `${BASE_URL}/how-often-should-you-get-iv-therapy`, title: 'How Often Should You Get IV Therapy?', description: 'Recommended IV therapy frequency by goal and health condition.' },
  { url: `${BASE_URL}/mobile-iv-therapy-vs-iv-clinic`, title: 'Mobile IV Therapy vs IV Clinic', description: 'Which is better — mobile IV at home or visiting an IV bar?' },
  { url: `${BASE_URL}/iv-hydration-vs-oral-hydration`, title: 'IV Hydration vs Oral Hydration', description: 'When IV fluids beat drinking water and when they don\'t.' },
  { url: `${BASE_URL}/cheap-iv-therapy`, title: 'Cheap IV Therapy', description: 'How to find affordable IV therapy without sacrificing safety.' },
  { url: `${BASE_URL}/how-much-does-iv-therapy-cost`, title: 'How Much Does IV Therapy Cost?', description: 'Real price data for IV therapy across the US by city and drip type.' },
]

export async function GET() {
  const pubDate = new Date().toUTCString()

  const items = pages
    .map(
      (page) => `
    <item>
      <title><![CDATA[${page.title}]]></title>
      <link>${page.url}</link>
      <guid isPermaLink="true">${page.url}</guid>
      <description><![CDATA[${page.description}]]></description>
      <pubDate>${pubDate}</pubDate>
    </item>`
    )
    .join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>IVList — IV Therapy Directory</title>
    <link>${BASE_URL}</link>
    <description>Find and compare IV therapy clinics, IV bars, and mobile IV services in your city.</description>
    <language>en-us</language>
    <lastBuildDate>${pubDate}</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
