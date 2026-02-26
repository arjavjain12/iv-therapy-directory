import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Search } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import { STATE_NAMES } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'IV Therapy Near Me — Find Local IV Clinics & Mobile IV Services (2026)',
  description: 'Find IV therapy clinics and mobile IV services near you. Search by city for IV drip near me, IV hydration near me, NAD+, Myers\' Cocktail, and hangover recovery. Same-day available.',
  alternates: { canonical: '/iv-therapy-near-me' },
  openGraph: {
    title: 'IV Therapy Near Me — Find Local IV Clinics & Mobile IV Services',
    description: 'Search your city for IV drips, IV hydration, and mobile IV services near you. Compare prices and book same-day.',
  },
}

const FAQS = [
  { question: 'How do I find IV therapy near me?', answer: 'Use our directory to search by state and city. Select your state, then your city to see listed IV therapy clinics and mobile IV services in your area. You can also use our lead form to get matched with local providers.' },
  { question: 'How quickly can I get IV therapy near me?', answer: 'Most IV clinics offer same-day or next-day appointments. Mobile IV services typically have response times of 45 minutes to 2 hours. Booking in advance (especially on weekends) ensures faster access.' },
  { question: 'Is there mobile IV therapy near me?', answer: 'Mobile IV services are available in most major US cities and many suburban areas. Search your city in our directory and filter for providers offering mobile service. Mobile IVs typically add a $20–50 travel fee.' },
  { question: 'How much does IV therapy near me cost?', answer: 'IV therapy pricing in your area typically ranges from $99 (basic hydration) to $500 (NAD+ therapy). Use our city pages to see estimated pricing for your specific location. Prices vary by clinic and drip type.' },
  { question: 'What should I look for in an IV therapy provider near me?', answer: 'Look for clinics that employ licensed RNs, operate under a physician medical director, use pharmaceutical-grade IV solutions, have verifiable reviews, and conduct health intake screening before treatment.' },
  { question: 'Is there an IV drip near me?', answer: 'Yes — IV drips (also called IV therapy or infusion therapy) are available in virtually every major US city and most suburban markets. Use our city directory to find local IV bars, medspas, and mobile IV nurses in your area.' },
  { question: 'How do I find IV hydration near me?', answer: 'Search your city in our directory to find IV hydration clinics and mobile IV nurses. IV hydration (saline + electrolytes) is the most widely available IV service and is offered by standalone IV bars, medspas, and mobile services in most cities.' },
  { question: 'Can I get an IV near me today?', answer: 'In most major US cities, yes — same-day IV therapy is available at walk-in clinics and through mobile services. Mobile IV services typically dispatch a nurse within 45–120 minutes. Weekend mornings (hangover peak) book quickly, so call ahead or book online.' },
]

const stateEntries = Object.entries(STATE_NAMES).sort((a, b) => a[1].localeCompare(b[1]))

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ivlist.com'

export default function IVTherapyNearMePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'IV Therapy Near Me — Find Local IV Clinics & Mobile IV Services',
    description: 'Find IV therapy clinics and mobile IV services near you. Compare hangover recovery drips, Myers\' Cocktail, NAD+, and more. Browse by city or state.',
    datePublished: '2026-01-01',
    dateModified: '2026-02-26',
    author: { '@type': 'Organization', name: 'IVList', url: BASE_URL },
    publisher: { '@type': 'Organization', name: 'IVList', url: BASE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/iv-therapy-near-me` },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'IV Therapy Near Me' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            IV Therapy Near Me
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Find IV therapy clinics, IV bars, and mobile IV services in your city. Compare providers,
            read reviews, and book hangover recovery, Myers&apos; Cocktail, NAD+, and more.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* How to find */}
        <div className="mb-12 rounded-xl border border-sky-200 bg-sky-50 p-8 text-center">
          <Search className="h-10 w-10 text-sky-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Find IV Therapy in Your City</h2>
          <p className="text-gray-600 mb-6">Select your state below, then choose your city to see local IV therapy providers and pricing.</p>
          <Link href="/iv-therapy"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-8 py-3.5 font-bold text-white hover:bg-sky-700 transition">
            <MapPin className="h-5 w-5" /> Browse All Cities
          </Link>
        </div>

        {/* State grid */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by State</h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mb-12">
          {stateEntries.map(([abbr, name]) => {
            const slug = name.toLowerCase().replace(/\s+/g, '-')
            return (
              <Link
                key={abbr}
                href={`/iv-therapy/${slug}`}
                className="rounded-md px-2 py-1.5 text-sm text-gray-600 transition hover:bg-sky-50 hover:text-sky-700"
              >
                {name}
              </Link>
            )
          })}
        </div>

        {/* IV Drip Near Me */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">IV Drip Near Me</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Looking for an <strong>IV drip near you</strong>? IV drips are administered at standalone IV bars, medspa wellness centers, and by mobile IV nurses who come directly to your location. Use the state grid above to find providers in your city — most clinics list same-day availability and pricing for drip types including Myers&apos; Cocktail, NAD+, hangover recovery, and basic hydration.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'IV Bars & Clinics', desc: 'Walk-in or appointment-based clinics. Typically the most affordable option.', href: '/iv-therapy' },
              { label: 'Mobile IV Near Me', desc: 'A licensed nurse comes to your home, hotel, or office — same-day in most cities.', href: '/mobile-iv-therapy' },
              { label: 'IV Hydration Near Me', desc: 'Basic saline + electrolyte drips starting around $99. Fastest and most widely available.', href: '/iv-drip-types/hydration' },
            ].map((item) => (
              <Link key={item.label} href={item.href}
                className="rounded-xl border border-gray-200 p-4 hover:border-sky-300 hover:shadow-sm transition">
                <p className="font-semibold text-gray-900 mb-1">{item.label}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* IV Treatment Near Me */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">IV Treatment &amp; IV Infusion Near Me</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            IV treatment, IV infusion therapy, and vitamin IV therapy are all terms for the same wellness service — intravenous delivery of nutrients directly into your bloodstream. In the US, these services are offered by licensed RNs at over 3,000 wellness clinics and mobile services. Our directory lists providers by city so you can compare services, pricing, and availability before you book.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4 font-semibold text-gray-700">Drip Type</th>
                  <th className="text-left p-4 font-semibold text-gray-700">Price Range</th>
                  <th className="text-left p-4 font-semibold text-gray-700">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['IV Hydration', '$99–$175', 'Dehydration, hangover, travel'],
                  ["Myers' Cocktail", '$149–$275', 'Energy, fatigue, wellness'],
                  ['Hangover Recovery', '$125–$250', 'Post-drinking recovery'],
                  ['NAD+', '$250–$500', 'Anti-aging, cognitive performance'],
                  ['Immunity Boost', '$149–$250', 'Cold & flu prevention'],
                  ['Glutathione', '$100–$250', 'Skin brightening, detox'],
                ].map(([drip, price, best]) => (
                  <tr key={drip} className="even:bg-gray-50">
                    <td className="p-4 font-medium text-gray-700">{drip}</td>
                    <td className="p-4 text-sky-700 font-semibold">{price}</td>
                    <td className="p-4 text-gray-600">{best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-500">
            Prices vary by city and provider.{' '}
            <Link href="/iv-therapy-cost" className="text-sky-600 hover:underline">See full cost guide →</Link>
          </p>
        </div>

        {/* FAQ */}
        <FAQ items={FAQS} title="IV Therapy Near Me — Frequently Asked Questions" />

        <div className="max-w-4xl mx-auto mt-10 rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'IV Therapy Directory', href: '/iv-therapy' },
              { label: 'IV Therapy Cost Guide', href: '/iv-therapy-cost' },
              { label: 'Mobile IV Therapy', href: '/mobile-iv-therapy' },
              { label: 'IV Drip Recommender', href: '/iv-therapy-drip-recommender' },
              { label: 'IV Drip Types', href: '/iv-drip-types' },
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
