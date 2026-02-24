import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import { DEFAULT_PRICING, formatPrice } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Cheap IV Therapy Near Me — Find Affordable IV Drips (2026)',
  description: 'Find affordable IV therapy near you. Basic hydration starts at $99. Tips to save on IV therapy including memberships, first-time discounts, and comparison shopping.',
  alternates: { canonical: '/cheap-iv-therapy' },
}

const FAQS = [
  { question: 'What is the cheapest IV therapy?', answer: 'Basic IV hydration is the most affordable option, starting at $99–$175 per session. It\'s a saline and electrolyte drip without vitamins or medications. For the most affordable comprehensive wellness drip, a Myers\' Cocktail starts at $149 at many clinics.' },
  { question: 'How can I find cheap IV therapy near me?', answer: 'Strategies for affordable IV therapy: (1) Compare multiple providers in your area, (2) Look for first-time customer discounts (20–30% off), (3) Join a monthly membership for 30–50% savings, (4) Check Groupon and local deal sites for promotions, (5) Book weekday appointments when some clinics offer lower rates, (6) Choose a clinic over mobile service to avoid the travel fee.' },
  { question: 'Is cheaper IV therapy less effective or safe?', answer: 'Not necessarily — price differences are often due to location, overhead costs, and brand positioning, not ingredient quality. However, always verify that any provider (regardless of price) employs licensed RNs, operates under a physician medical director, and uses pharmaceutical-grade solutions. Never sacrifice safety for cost savings.' },
  { question: 'Are IV therapy memberships worth it?', answer: 'For regular users (monthly or more frequent), memberships typically save 30–50% per session. A $99–$149/month membership that includes 1–2 sessions is excellent value vs. $175–$275 single session pricing. If you plan to use IV therapy 1–2x per month, a membership almost always makes financial sense.' },
]

export default function CheapIVTherapyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cheap IV Therapy Near Me — Find Affordable Drips',
    description: 'Find affordable IV therapy near you. Basic hydration starts at $99. Tips to save on IV therapy including memberships, first-time discounts, and comparison shopping.',
    datePublished: '2026-01-01',
    dateModified: '2026-02-24',
    author: { '@type': 'Organization', name: 'IVTherapyListing', url: 'https://ivtherapylisting.com' },
    publisher: { '@type': 'Organization', name: 'IVTherapyListing', url: 'https://ivtherapylisting.com' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ivtherapylisting.com/cheap-iv-therapy' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Cheap IV Therapy' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Cheap IV Therapy Near Me — Find Affordable Drips
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            IV therapy starts at $99 for basic hydration. Find the most affordable providers in your area and tips to save even more.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Cheapest options */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Most Affordable IV Drips</h2>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Drip</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Starting Price</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-emerald-50"><td className="px-4 py-3 font-semibold text-gray-900">IV Hydration</td><td className="px-4 py-3 font-bold text-emerald-700">{formatPrice(DEFAULT_PRICING.hydration.low)}</td><td className="px-4 py-3 text-gray-600 text-xs">Dehydration, hangover</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-semibold text-gray-900">Hangover Recovery</td><td className="px-4 py-3 font-bold text-gray-900">{formatPrice(DEFAULT_PRICING.hangover.low)}</td><td className="px-4 py-3 text-gray-600 text-xs">Morning after</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-semibold text-gray-900">Vitamin C</td><td className="px-4 py-3 font-bold text-gray-900">{formatPrice(DEFAULT_PRICING.vitamin_c.low)}</td><td className="px-4 py-3 text-gray-600 text-xs">Immune support</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-semibold text-gray-900">Myers&apos; Cocktail</td><td className="px-4 py-3 font-bold text-gray-900">{formatPrice(DEFAULT_PRICING.myers_cocktail.low)}</td><td className="px-4 py-3 text-gray-600 text-xs">General wellness</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Saving tips */}
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">7 Ways to Get Cheap IV Therapy</h2>
          <ol className="space-y-2">
            {[
              'Join a monthly membership — typically $79–$149/month for 1–2 sessions (30–50% savings)',
              'Ask about first-time customer discounts — many clinics offer 20–30% off your first visit',
              'Check Groupon and deal sites — IV therapy clinics frequently run promotional offers',
              'Compare multiple clinics — same drip can vary $50–100 between providers',
              'Go to the clinic vs. mobile — mobile IV adds $20–50 in travel fees',
              'Book weekday mornings — some clinics offer off-peak pricing',
              'Skip unnecessary add-ons — only pay for what you actually need',
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="font-bold text-emerald-600 shrink-0">{i + 1}.</span>
                {tip}
              </li>
            ))}
          </ol>
        </div>

        <div className="text-center">
          <Link href="/iv-therapy"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-8 py-3.5 font-bold text-white hover:bg-sky-700 transition">
            Find Affordable IV Therapy Near Me →
          </Link>
        </div>

        <FAQ items={FAQS} title="Cheap IV Therapy — Frequently Asked Questions" />

        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'IV Therapy Cost Guide', href: '/iv-therapy-cost' },
              { label: 'How Much Does IV Therapy Cost?', href: '/how-much-does-iv-therapy-cost' },
              { label: 'Does Insurance Cover IV Therapy?', href: '/does-insurance-cover-iv-therapy' },
              { label: 'IV Therapy Cost Estimator', href: '/iv-therapy-cost-estimator' },
              { label: 'Find IV Therapy Near Me', href: '/iv-therapy-near-me' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center gap-2 text-sm text-sky-600 hover:text-sky-700 font-medium transition">
                <span>→</span> {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
