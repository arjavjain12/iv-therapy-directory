import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import { DEFAULT_PRICING, DRIP_TYPES, formatPrice } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'IV Therapy Cost Guide (2026) — How Much Does IV Therapy Cost?',
  description: 'Complete IV therapy pricing guide. Average costs by drip type: hydration ($99–$175), Myers\' Cocktail ($149–$275), NAD+ ($250–$500). What affects pricing and how to save.',
  alternates: { canonical: '/iv-therapy-cost' },
}

const DRIP_PRICING_DISPLAY = [
  { key: 'hydration', label: 'IV Hydration', desc: 'Basic rehydration drip' },
  { key: 'myers_cocktail', label: "Myers' Cocktail", desc: 'Vitamins, minerals, hydration' },
  { key: 'vitamin_c', label: 'High-Dose Vitamin C', desc: 'Immune + antioxidant support' },
  { key: 'immunity', label: 'Immunity Boost', desc: 'Vitamin C, zinc, B vitamins' },
  { key: 'hangover', label: 'Hangover Recovery', desc: 'Rehydration + vitamins + optional meds' },
  { key: 'beauty', label: 'Beauty & Glow (Glutathione)', desc: 'Skin brightening + biotin' },
  { key: 'athletic', label: 'Athletic Performance', desc: 'Amino acids + electrolytes + vitamins' },
  { key: 'nad_plus', label: 'NAD+', desc: 'Anti-aging + cellular energy' },
]

const FAQS = [
  { question: 'How much does IV therapy cost?', answer: 'IV therapy costs $99–$500 per session depending on the drip type. Basic hydration starts at $99–$175. Myers\' Cocktail averages $149–$275. NAD+ therapy is the most expensive at $250–$500 due to the high cost of NAD+ raw material.' },
  { question: 'Why does IV therapy cost more in some cities?', answer: 'IV therapy pricing varies by location due to local operating costs, competition, and demand. Major metropolitan areas (NYC, LA, Miami, Las Vegas) tend to have more providers and competitive pricing. Smaller markets may have fewer options and higher prices due to less competition.' },
  { question: 'Is mobile IV therapy more expensive than going to a clinic?', answer: 'Mobile IV services typically charge $20–$50 more than in-clinic visits due to the nurse travel time and logistics. However, many patients find this a worthwhile trade-off for the convenience, especially for hangover recovery when they can\'t easily travel.' },
  { question: 'What add-ons cost extra?', answer: 'Common add-ons that increase IV therapy cost include: anti-nausea medication (Zofran: +$10–25), pain relief (Toradol: +$10–25), glutathione push (+$25–75), extra B12 shot (+$15–25), and extra vitamin C (+$15–30). Always ask for the full price breakdown including add-ons before your session.' },
  { question: 'Are there memberships or packages for IV therapy?', answer: 'Yes — most IV therapy clinics offer monthly membership packages that significantly reduce per-session costs. A typical membership costs $79–$149/month and includes 1–2 sessions plus discounts on additional sessions and add-ons. For regular users, memberships offer 30–50% savings vs. single session pricing.' },
  { question: 'Does insurance cover IV therapy?', answer: 'Elective IV therapy for wellness purposes is generally not covered by health insurance. Some HSA/FSA accounts may cover medically necessary IV therapy with a doctor\'s prescription. IV therapy for specific medical conditions administered in a medical setting may be partially covered — check with your provider.' },
]

export default function IVTherapyCostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'IV Therapy Cost Guide (2026)',
    description: 'Complete IV therapy pricing guide. Average costs by drip type: hydration ($99–$175), Myers\' Cocktail ($149–$275), NAD+ ($250–$500). What affects pricing and how to save.',
    datePublished: '2026-01-01',
    dateModified: '2026-02-24',
    author: { '@type': 'Organization', name: 'IVTherapyListing', url: 'https://ivtherapylisting.com' },
    publisher: { '@type': 'Organization', name: 'IVTherapyListing', url: 'https://ivtherapylisting.com' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ivtherapylisting.com/iv-therapy-cost' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'IV Therapy Cost Guide' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            IV Therapy Cost Guide (2026)
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Everything you need to know about IV therapy pricing — by drip type, city, and factors that affect cost.
          </p>
          <div className="mt-6 relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden">
            <Image
              src="/images/content-cost.png"
              alt="IV therapy pricing and cost guide"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Pricing table */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">IV Therapy Pricing by Drip Type</h2>
        <div className="overflow-hidden rounded-xl border border-gray-200 mb-10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Drip Type</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Duration</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Price Range</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {DRIP_PRICING_DISPLAY.map((drip) => {
                const p = DEFAULT_PRICING[drip.key]
                return (
                  <tr key={drip.key} className="bg-white">
                    <td className="px-4 py-3">
                      <p className="font-semibold text-gray-900">{drip.label}</p>
                      <p className="text-xs text-gray-500">{drip.desc}</p>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{p.duration} min</td>
                    <td className="px-4 py-3 font-bold text-gray-900">{formatPrice(p.low)}–{formatPrice(p.high)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* What affects cost */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Affects IV Therapy Cost?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { title: 'Drip Type', desc: 'NAD+ is the most expensive ($250–$500). Basic hydration is the most affordable ($99–$175). The formula determines most of the cost.' },
            { title: 'Location', desc: 'Urban clinics in high-cost areas charge more. Mobile services add $20–50. Las Vegas and Miami have some of the most competitive markets.' },
            { title: 'Add-Ons', desc: 'Anti-nausea meds, pain relief, glutathione push, and extra vitamins add $10–75 each to your base price.' },
            { title: 'Clinic Type', desc: 'Standalone IV bars are often more affordable than medspas or hospital-affiliated clinics. Mobile service costs more due to travel.' },
            { title: 'Membership', desc: 'Monthly memberships reduce per-session costs by 30–50%. Ideal for regular users.' },
            { title: 'Group Rates', desc: 'Many mobile IV services offer discounted group rates for bachelorette parties, sports teams, and corporate wellness events.' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-4">
              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Saving tips */}
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">How to Save on IV Therapy</h2>
          <ul className="space-y-2">
            {[
              'Join a monthly membership — most clinics offer $79–$149/month packages that include 1–2 sessions.',
              'Compare multiple providers — prices for the same drip can vary $50–$100 between clinics in the same city.',
              'Ask about first-time customer discounts — many clinics offer 20–30% off your first session.',
              'Book during off-peak times (weekday mornings) — some clinics offer lower rates outside of peak demand periods.',
              'Choose add-ons strategically — only pay for what you actually need, not the premium package.',
              'Check Groupon and local deal sites — IV therapy clinics frequently run promotional deals.',
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold shrink-0">✓</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <FAQ items={FAQS} title="IV Therapy Cost — Frequently Asked Questions" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'How Much Does IV Therapy Cost?', href: '/how-much-does-iv-therapy-cost' },
              { label: 'Cheap IV Therapy — Tips to Save', href: '/cheap-iv-therapy' },
              { label: 'Does Insurance Cover IV Therapy?', href: '/does-insurance-cover-iv-therapy' },
              { label: 'IV Therapy Cost Estimator', href: '/iv-therapy-cost-estimator' },
              { label: 'Find IV Therapy Near Me', href: '/iv-therapy-near-me' },
              { label: 'IV Drip Types & Prices', href: '/iv-drip-types' },
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
