import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Mobile IV Therapy vs IV Clinic — Which Is Better? (2026)',
  description: 'Mobile IV therapy vs IV clinic: compare cost, convenience, safety, availability, and drip selection. Find out which option is right for you.',
  alternates: { canonical: '/mobile-iv-therapy-vs-iv-clinic' },
}

const FAQS = [
  { question: 'Is mobile IV therapy as safe as going to a clinic?', answer: 'Yes — reputable mobile IV services employ the same licensed RNs operating under the same physician medical director oversight as clinic-based services. The IV supplies, pharmaceutical-grade solutions, and sterile technique should be identical. Always verify your mobile provider employs licensed RNs before booking.' },
  { question: 'Is mobile IV therapy more expensive?', answer: 'Mobile IV typically costs $20–$50 more per session than in-clinic service to cover the nurse\'s travel time and logistics. However, many patients find this a worthwhile premium for the convenience, especially for hangover recovery when traveling to a clinic is difficult.' },
  { question: 'Which is faster — mobile IV or going to a clinic?', answer: 'Going to a clinic is typically faster if the clinic has same-day walk-in availability (15–30 min for a session). Mobile IV response times are typically 45 minutes to 2 hours depending on location and demand. In busy markets (Las Vegas, Miami) on weekend mornings, some mobile services offer 45-minute response times.' },
  { question: 'Does a clinic offer more drip options than mobile?', answer: 'IV clinics generally have more flexibility in drip customization and may offer a wider range of add-ons than mobile services. However, most reputable mobile IV services carry the full range of standard drips and common add-ons. For specialized protocols like high-dose NAD+ therapy, a clinic is often preferred.' },
]

export default function MobileIVVsClinicPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Mobile IV Therapy vs IV Clinic — Which Is Right for You?',
    description: 'Mobile IV therapy vs IV clinic: compare cost, convenience, safety, availability, and drip selection. Find out which option is right for you.',
    datePublished: '2026-01-01',
    dateModified: '2026-02-24',
    author: { '@type': 'Organization', name: 'IVTherapyListing', url: 'https://ivtherapylisting.com' },
    publisher: { '@type': 'Organization', name: 'IVTherapyListing', url: 'https://ivtherapylisting.com' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ivtherapylisting.com/mobile-iv-therapy-vs-iv-clinic' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Mobile IV vs IV Clinic' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Mobile IV Therapy vs IV Clinic — Which Is Right for You?
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Comparison table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Factor</th>
                <th className="px-4 py-3 text-left font-semibold text-sky-700">Mobile IV</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">IV Clinic</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { factor: 'Convenience', mobile: 'Comes to you — no travel', clinic: 'Must travel to the clinic' },
                { factor: 'Cost', mobile: '+$20–50 travel fee', clinic: 'Lower base price' },
                { factor: 'Response time', mobile: '45 min – 2 hours', clinic: 'Walk-in or scheduled appointment' },
                { factor: 'Safety', mobile: 'Same licensed RNs', clinic: 'Same licensed RNs' },
                { factor: 'Drip selection', mobile: 'Full standard menu', clinic: 'Full menu + more specialty options' },
                { factor: 'Group service', mobile: 'Multiple nurses for groups', clinic: 'Multiple stations at clinic' },
                { factor: 'Best for', mobile: 'Hangover, hotel, home, events', clinic: 'NAD+ protocols, regular visits' },
              ].map((row) => (
                <tr key={row.factor} className="bg-white">
                  <td className="px-4 py-3 font-semibold text-gray-900">{row.factor}</td>
                  <td className="px-4 py-3 text-sky-700 text-sm">{row.mobile}</td>
                  <td className="px-4 py-3 text-gray-600 text-sm">{row.clinic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recommendation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <h3 className="font-bold text-gray-900 mb-2">Choose Mobile IV If:</h3>
            <ul className="space-y-1.5">
              {['You\'re too hungover to drive', 'You\'re at a hotel or vacation', 'You want IV at home or the office', 'You\'re booking for a group event', 'You can\'t get an appointment at a clinic'].map((r) => (
                <li key={r} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-sky-500">✓</span> {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            <h3 className="font-bold text-gray-900 mb-2">Choose IV Clinic If:</h3>
            <ul className="space-y-1.5">
              {['You want the lowest price', 'You\'re doing NAD+ or specialty protocols', 'You want walk-in availability', 'You prefer a professional clinic environment', 'You\'re starting a regular wellness routine'].map((r) => (
                <li key={r} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-gray-400">✓</span> {r}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <FAQ items={FAQS} title="Mobile IV vs IV Clinic — FAQs" />

        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Mobile IV Therapy Guide', href: '/mobile-iv-therapy' },
              { label: 'Find IV Therapy Near Me', href: '/iv-therapy-near-me' },
              { label: 'IV Therapy Cost Guide', href: '/iv-therapy-cost' },
              { label: 'IV Hydration vs. Oral Hydration', href: '/iv-hydration-vs-oral-hydration' },
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
