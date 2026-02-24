import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import { DEFAULT_PRICING, DRIP_TYPES, formatPrice } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'IV Drip Types Guide (2026) — Compare All 8 IV Therapy Drips',
  description: 'Compare all 8 IV drip types: hydration, Myers\' Cocktail, NAD+, Vitamin C, immunity, hangover recovery, beauty (glutathione), and athletic performance. Find the right drip for your goals.',
  alternates: { canonical: '/iv-drip-types' },
}

const DRIP_DETAILS = [
  { slug: 'hydration',      label: 'IV Hydration',              emoji: '💧', tagline: 'Fast, direct rehydration',                  best: 'Dehydration, hangover, travel fatigue',           key: 'hydration' },
  { slug: 'myers-cocktail', label: "Myers' Cocktail",           emoji: '⚗️', tagline: 'The gold standard wellness IV',              best: 'General wellness, fatigue, immunity, migraines',  key: 'myers_cocktail' },
  { slug: 'nad-plus',       label: 'NAD+',                     emoji: '🔬', tagline: 'Cellular energy and anti-aging',             best: 'Anti-aging, cognitive function, energy',          key: 'nad_plus' },
  { slug: 'vitamin-c',      label: 'High-Dose Vitamin C',       emoji: '🍊', tagline: 'Immune and antioxidant powerhouse',         best: 'Immune boost, skin health, antioxidant defense',  key: 'vitamin_c' },
  { slug: 'immunity',       label: 'Immunity Boost',            emoji: '🛡️', tagline: 'Concentrated immune defense',               best: 'Cold/flu prevention, illness recovery, travel',   key: 'immunity' },
  { slug: 'hangover',       label: 'Hangover Recovery',         emoji: '🌅', tagline: 'Feel human again in under an hour',         best: 'Hangover, nausea, headache, B vitamin depletion', key: 'hangover' },
  { slug: 'beauty',         label: 'Beauty & Glow (Glutathione)', emoji: '✨', tagline: 'Radiant skin from within',               best: 'Skin brightening, hair/nails, anti-aging skin',   key: 'beauty' },
  { slug: 'athletic',       label: 'Athletic Performance',      emoji: '⚡', tagline: 'Train harder, recover faster',              best: 'Sports recovery, muscle repair, multi-day events', key: 'athletic' },
]

const FAQS = [
  { question: 'What is the most popular IV drip?', answer: "The Myers' Cocktail is the most studied and widely offered IV drip, combining magnesium, calcium, B vitamins, and vitamin C. For event-based use, the Hangover Recovery drip is the #1 most booked IV in the US. IV Hydration is the most affordable and widely available." },
  { question: 'How do I choose the right IV drip?', answer: "Match your drip to your primary goal: hydration and recovery → IV Hydration or Hangover Recovery; general wellness → Myers' Cocktail; immune support → Immunity or Vitamin C; anti-aging → NAD+; skin → Beauty (Glutathione); sports recovery → Athletic Performance. Many clinics offer consultations to help you choose." },
  { question: 'Can I mix multiple drip types?', answer: "Yes — most IV clinics offer add-ons that let you combine components. For example, you could start with a Myers' Cocktail base and add glutathione and extra vitamin C. Your nurse or provider can customize your drip formula during consultation." },
  { question: 'How long does an IV drip take?', answer: "Duration varies by drip: IV Hydration = 30 minutes; most standard drips (Myers', Immunity, Beauty, Hangover) = 45–60 minutes; NAD+ = 60–90 minutes. Add 10–15 minutes for setup and intake at your first visit." },
  { question: 'How often can I get IV therapy?', answer: "Frequency depends on your goals. For wellness maintenance, monthly is common. Athletes may do weekly sessions during training blocks. NAD+ protocols typically start with a 4-session series, then monthly maintenance. Hangover IVs are use-as-needed. Always follow your provider's guidance." },
]

export default function DripTypesHubPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    name: 'IV Drip Types Guide',
    description: 'Compare all 8 IV therapy drip types, their ingredients, benefits, and pricing.',
    publisher: { '@type': 'Organization', name: 'IVTherapyListing' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'IV Drip Types' },
          ]} />

          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            IV Drip Types — Complete Guide (2026)
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Compare all 8 IV therapy drip types. Find the right drip for your health goals,
            understand ingredients and pricing, and book with confidence.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Drip comparison grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {DRIP_DETAILS.map((drip) => {
            const pricing = DEFAULT_PRICING[drip.key]
            return (
              <Link
                key={drip.slug}
                href={`/iv-drip-types/${drip.slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-5 hover:border-sky-300 hover:shadow-md transition"
              >
                <div className="text-3xl mb-3">{drip.emoji}</div>
                <h2 className="font-bold text-gray-900 group-hover:text-sky-600 transition">
                  {drip.label}
                </h2>
                <p className="text-xs text-gray-500 mt-1 italic">{drip.tagline}</p>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">Best for: {drip.best}</p>
                {pricing && (
                  <p className="mt-3 text-sm font-bold text-gray-800">
                    {formatPrice(pricing.low)}–{formatPrice(pricing.high)}
                    <span className="text-xs font-normal text-gray-400 ml-1">/ session</span>
                  </p>
                )}
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-sky-600 group-hover:text-sky-700">
                  Full guide <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            )
          })}
        </div>

        {/* Comparison table */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Drip Type</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Duration</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Price Range</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {DRIP_DETAILS.map((drip) => {
                  const pricing = DEFAULT_PRICING[drip.key]
                  return (
                    <tr key={drip.slug} className="bg-white hover:bg-gray-50 transition">
                      <td className="px-4 py-3">
                        <Link href={`/iv-drip-types/${drip.slug}`} className="font-semibold text-gray-900 hover:text-sky-600 transition">
                          {drip.emoji} {drip.label}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{pricing?.duration} min</td>
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {pricing ? `${formatPrice(pricing.low)}–${formatPrice(pricing.high)}` : '—'}
                      </td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{drip.best}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Drip recommender CTA */}
        <div className="mb-16 rounded-xl border border-sky-200 bg-sky-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Not Sure Which Drip to Choose?</h2>
          <p className="text-gray-600 mb-6">Take our 2-minute drip recommender quiz to get a personalized recommendation based on your health goals.</p>
          <Link
            href="/iv-therapy-drip-recommender"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-8 py-3.5 font-bold text-white hover:bg-sky-700 transition"
          >
            Take the Drip Quiz →
          </Link>
        </div>

        {/* FAQ */}
        <FAQ items={FAQS} title="IV Drip Types — Frequently Asked Questions" />
      </div>
    </>
  )
}
