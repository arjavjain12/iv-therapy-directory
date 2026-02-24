import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import { DEFAULT_PRICING, formatPrice } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'How Long Does IV Therapy Take? — Session Duration Guide',
  description: 'How long does IV therapy take? Basic hydration takes 30 minutes. Myers\' Cocktail takes 45-60 min. NAD+ takes 60-90 min. Full duration guide by drip type.',
  alternates: { canonical: '/how-long-does-iv-therapy-take' },
}

const DURATION_DATA = [
  { label: 'IV Hydration', duration: 30, key: 'hydration', note: 'Fastest option — basic saline and electrolytes' },
  { label: "Myers' Cocktail", duration: 45, key: 'myers_cocktail', note: 'Most popular standard drip' },
  { label: 'Vitamin C', duration: 45, key: 'vitamin_c', note: 'Slightly longer for high doses' },
  { label: 'Immunity Boost', duration: 45, key: 'immunity', note: 'Standard infusion rate' },
  { label: 'Hangover Recovery', duration: 45, key: 'hangover', note: 'Plus time for any medication add-ons' },
  { label: 'Beauty & Glow (Glutathione)', duration: 45, key: 'beauty', note: 'Glutathione push can be done in 10–15 min' },
  { label: 'Athletic Performance', duration: 45, key: 'athletic', note: 'Standard infusion with amino acids' },
  { label: 'NAD+', duration: 90, key: 'nad_plus', note: 'Longest session — must be infused slowly' },
]

const FAQS = [
  { question: 'How long does a typical IV therapy session take?', answer: 'Most IV therapy sessions take 30–90 minutes depending on the drip type. Basic hydration is the fastest at about 30 minutes. Standard wellness drips (Myers\' Cocktail, immunity, hangover recovery) take 45–60 minutes. NAD+ infusions are the longest at 60–90 minutes because they must be administered slowly to prevent side effects.' },
  { question: 'Why does NAD+ IV therapy take so long?', answer: 'NAD+ must be infused slowly because rapid administration causes uncomfortable side effects including flushing, chest tightness, nausea, and lightheadedness. By infusing over 60–90 minutes, these effects are minimized and better tolerated. Some clinics offer faster protocols for experienced patients who have determined their optimal infusion rate.' },
  { question: 'Does my first IV therapy appointment take longer?', answer: 'Yes — first-time appointments typically add 15–30 minutes for health intake, a brief consultation, and paperwork. Return visits are faster as your information is already on file. Budget extra time for your first visit.' },
  { question: 'Can I do anything during my IV therapy session?', answer: 'Absolutely — most patients work on their laptop, watch Netflix, read, or scroll their phone during a session. The IV is typically placed in the forearm or back of the hand, leaving the other hand free. Some IV bars offer comfortable lounge chairs specifically designed for a relaxing infusion experience.' },
  { question: 'How long do the effects of IV therapy last?', answer: 'Most patients feel hydration and energy benefits for 2–4 days after an IV session. Vitamin and mineral effects can last 1–2 weeks. Hangover symptoms typically resolve within 1–2 hours of the session. NAD+ and glutathione benefits develop over multiple sessions. Regular maintenance sessions (monthly or biweekly) maintain optimal levels.' },
]

export default function HowLongDoesIVTherapyTakePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Long Does IV Therapy Take?',
    description: 'How long does IV therapy take? Basic hydration takes 30 minutes. Myers\' Cocktail takes 45-60 min. NAD+ takes 60-90 min. Full duration guide by drip type.',
    datePublished: '2026-01-01',
    dateModified: '2026-02-24',
    author: { '@type': 'Organization', name: 'IVTherapyListing', url: 'https://ivtherapylisting.com' },
    publisher: { '@type': 'Organization', name: 'IVTherapyListing', url: 'https://ivtherapylisting.com' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ivtherapylisting.com/how-long-does-iv-therapy-take' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'How Long Does IV Therapy Take?' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            How Long Does IV Therapy Take?
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Session duration varies by drip type. Basic hydration takes 30 minutes. NAD+ takes 60–90 minutes. Here&apos;s the full breakdown.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Duration table */}
        <div className="overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Drip Type</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Duration</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {DURATION_DATA.map((drip) => (
                <tr key={drip.key} className="bg-white">
                  <td className="px-4 py-3 font-semibold text-gray-900">{drip.label}</td>
                  <td className="px-4 py-3">
                    <span className={`font-bold ${drip.duration >= 90 ? 'text-amber-600' : drip.duration <= 30 ? 'text-emerald-600' : 'text-sky-600'}`}>
                      {drip.duration} min
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{drip.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-xl border border-sky-200 bg-sky-50 p-5">
          <p className="text-sm text-gray-700">
            <strong>Add 10–15 minutes for first-visit intake and setup.</strong> Return visits begin faster once your health information is on file.
          </p>
        </div>

        <FAQ items={FAQS} title="IV Therapy Duration — Frequently Asked Questions" />

        <div className="text-center">
          <Link href="/iv-therapy-near-me"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-8 py-3.5 font-bold text-white hover:bg-sky-700 transition">
            Find IV Therapy Near Me →
          </Link>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'How Often Should You Get IV Therapy?', href: '/how-often-should-you-get-iv-therapy' },
              { label: 'What to Expect During IV Therapy', href: '/what-to-expect-during-iv-therapy' },
              { label: 'How to Prepare for IV Therapy', href: '/how-to-prepare-for-iv-therapy' },
              { label: 'IV Therapy Benefits', href: '/iv-therapy-benefits' },
              { label: 'IV Therapy Cost Guide', href: '/iv-therapy-cost' },
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
