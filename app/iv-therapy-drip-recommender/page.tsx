'use client'

import { useState } from 'react'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { DRIP_TYPES, DEFAULT_PRICING, formatPrice } from '@/lib/utils'

type Step = 1 | 2 | 3 | 4

const GOALS = [
  { value: 'hangover', label: 'Hangover Recovery', emoji: '🤕' },
  { value: 'energy', label: 'Energy & Fatigue', emoji: '⚡' },
  { value: 'immunity', label: 'Immune Support', emoji: '🛡️' },
  { value: 'athletic', label: 'Athletic Performance', emoji: '🏃' },
  { value: 'beauty', label: 'Skin & Beauty', emoji: '✨' },
  { value: 'hydration', label: 'Dehydration / General', emoji: '💧' },
  { value: 'antiaging', label: 'Anti-Aging / Wellness', emoji: '🌿' },
  { value: 'unsure', label: "Not Sure — Show Me All", emoji: '🔍' },
]

const URGENCY = [
  { value: 'now', label: 'Right now / ASAP' },
  { value: 'today', label: 'Today' },
  { value: 'week', label: 'This week' },
  { value: 'planning', label: 'Just researching' },
]

const DELIVERY = [
  { value: 'mobile', label: 'Mobile IV — come to me' },
  { value: 'clinic', label: 'IV clinic or spa' },
  { value: 'either', label: 'Either works' },
]

type Recommendation = {
  slug: string
  label: string
  reason: string
  price_low: number
  price_high: number
}

function getRecommendations(goal: string): Recommendation[] {
  const map: Record<string, Recommendation[]> = {
    hangover: [
      { slug: 'hangover', label: 'Hangover Recovery', reason: 'Specifically formulated with anti-nausea medication, anti-inflammatory, and hydration to address all hangover symptoms.', price_low: DEFAULT_PRICING.hangover.low, price_high: DEFAULT_PRICING.hangover.high },
      { slug: 'hydration', label: 'IV Hydration', reason: 'Budget option — pure saline rehydration. Less comprehensive but faster relief for mild hangovers.', price_low: DEFAULT_PRICING.hydration.low, price_high: DEFAULT_PRICING.hydration.high },
    ],
    energy: [
      { slug: 'myers-cocktail', label: "Myers' Cocktail", reason: 'The gold standard for fatigue and energy — magnesium, B vitamins, B12, and vitamin C target energy metabolism at the cellular level.', price_low: DEFAULT_PRICING.myers_cocktail.low, price_high: DEFAULT_PRICING.myers_cocktail.high },
      { slug: 'nad-plus', label: 'NAD+', reason: 'Best for chronic fatigue and deep cellular energy restoration. Longer session (90 min) with profound effects.', price_low: DEFAULT_PRICING.nad_plus.low, price_high: DEFAULT_PRICING.nad_plus.high },
    ],
    immunity: [
      { slug: 'immunity', label: 'Immunity Boost', reason: 'High-dose vitamin C with zinc and glutathione specifically targets immune function before or during illness.', price_low: DEFAULT_PRICING.immunity.low, price_high: DEFAULT_PRICING.immunity.high },
      { slug: 'vitamin-c', label: 'Vitamin C IV', reason: 'Mega-dose vitamin C (10,000–50,000mg) — far beyond what oral supplementation can achieve — for powerful immune support.', price_low: DEFAULT_PRICING.vitamin_c.low, price_high: DEFAULT_PRICING.vitamin_c.high },
    ],
    athletic: [
      { slug: 'athletic', label: 'Athletic Performance', reason: 'Amino acids, B vitamins, and electrolytes formulated for pre-event performance and post-workout recovery.', price_low: DEFAULT_PRICING.athletic.low, price_high: DEFAULT_PRICING.athletic.high },
      { slug: 'myers-cocktail', label: "Myers' Cocktail", reason: 'Versatile wellness drip that addresses recovery, inflammation, and energy for athletes.', price_low: DEFAULT_PRICING.myers_cocktail.low, price_high: DEFAULT_PRICING.myers_cocktail.high },
    ],
    beauty: [
      { slug: 'beauty', label: 'Beauty & Glow (Glutathione)', reason: 'Glutathione is the master antioxidant for skin brightening, reduced oxidative stress, and anti-aging glow.', price_low: DEFAULT_PRICING.beauty.low, price_high: DEFAULT_PRICING.beauty.high },
      { slug: 'vitamin-c', label: 'Vitamin C IV', reason: 'High-dose vitamin C boosts collagen synthesis for skin elasticity and reduces hyperpigmentation.', price_low: DEFAULT_PRICING.vitamin_c.low, price_high: DEFAULT_PRICING.vitamin_c.high },
    ],
    hydration: [
      { slug: 'hydration', label: 'IV Hydration', reason: 'The simplest, fastest, most affordable option — pure saline and electrolytes for dehydration from any cause.', price_low: DEFAULT_PRICING.hydration.low, price_high: DEFAULT_PRICING.hydration.high },
      { slug: 'myers-cocktail', label: "Myers' Cocktail", reason: 'Adds vitamins and minerals to hydration for a more comprehensive wellness boost.', price_low: DEFAULT_PRICING.myers_cocktail.low, price_high: DEFAULT_PRICING.myers_cocktail.high },
    ],
    antiaging: [
      { slug: 'nad-plus', label: 'NAD+', reason: 'NAD+ is the most powerful anti-aging IV therapy — supports cellular repair, DNA health, and longevity pathways.', price_low: DEFAULT_PRICING.nad_plus.low, price_high: DEFAULT_PRICING.nad_plus.high },
      { slug: 'beauty', label: 'Beauty & Glow (Glutathione)', reason: 'Glutathione fights oxidative damage at the cellular level, supporting skin health and anti-aging from within.', price_low: DEFAULT_PRICING.beauty.low, price_high: DEFAULT_PRICING.beauty.high },
    ],
    unsure: [
      { slug: 'myers-cocktail', label: "Myers' Cocktail", reason: 'The most popular all-around IV drip — covers energy, immunity, hydration, and wellness in a single session.', price_low: DEFAULT_PRICING.myers_cocktail.low, price_high: DEFAULT_PRICING.myers_cocktail.high },
      { slug: 'hydration', label: 'IV Hydration', reason: 'Start simple — the most affordable IV therapy to experience the benefits before trying specialty drips.', price_low: DEFAULT_PRICING.hydration.low, price_high: DEFAULT_PRICING.hydration.high },
    ],
  }
  return map[goal] ?? map.unsure
}

export default function DripRecommenderPage() {
  const [step, setStep] = useState<Step>(1)
  const [goal, setGoal] = useState('')
  const [urgency, setUrgency] = useState('')
  const [delivery, setDelivery] = useState('')

  const recommendations = goal ? getRecommendations(goal) : []

  return (
    <>
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'IV Drip Recommender' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            IV Drip Recommender
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Answer 3 questions to find the best IV drip for your health goal.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Progress */}
        {step < 4 && (
          <div className="flex items-center gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${step >= s ? 'bg-sky-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                  {s}
                </div>
                {s < 3 && <div className={`h-0.5 flex-1 ${step > s ? 'bg-sky-600' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>
        )}

        {/* Step 1 — Goal */}
        {step === 1 && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">What is your primary health goal?</h2>
            <div className="grid grid-cols-2 gap-3">
              {GOALS.map((g) => (
                <button
                  key={g.value}
                  onClick={() => { setGoal(g.value); setStep(2) }}
                  className="flex items-center gap-3 rounded-xl border-2 border-gray-200 p-4 text-left hover:border-sky-400 hover:bg-sky-50 transition"
                >
                  <span className="text-2xl">{g.emoji}</span>
                  <span className="font-semibold text-gray-800 text-sm">{g.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2 — Urgency */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">When do you need IV therapy?</h2>
            <div className="space-y-3">
              {URGENCY.map((u) => (
                <button
                  key={u.value}
                  onClick={() => { setUrgency(u.value); setStep(3) }}
                  className="w-full flex items-center gap-3 rounded-xl border-2 border-gray-200 p-4 text-left hover:border-sky-400 hover:bg-sky-50 transition"
                >
                  <span className="font-semibold text-gray-800">{u.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3 — Delivery */}
        {step === 3 && (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Where would you prefer to receive IV therapy?</h2>
            <div className="space-y-3">
              {DELIVERY.map((d) => (
                <button
                  key={d.value}
                  onClick={() => { setDelivery(d.value); setStep(4) }}
                  className="w-full flex items-center gap-3 rounded-xl border-2 border-gray-200 p-4 text-left hover:border-sky-400 hover:bg-sky-50 transition"
                >
                  <span className="font-semibold text-gray-800">{d.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4 — Results */}
        {step === 4 && (
          <div>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-100 mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Your Recommended Drips</h2>
              <p className="text-gray-600 mt-1">Based on your answers, here are the best IV drips for you.</p>
            </div>

            <div className="space-y-4">
              {recommendations.map((rec, i) => (
                <div key={rec.slug} className={`rounded-xl border-2 p-5 ${i === 0 ? 'border-sky-400 bg-sky-50' : 'border-gray-200 bg-white'}`}>
                  {i === 0 && (
                    <div className="inline-flex items-center gap-1 rounded-full bg-sky-600 px-2 py-0.5 text-xs font-bold text-white mb-2">
                      Top Recommendation
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-gray-900">{rec.label}</h3>
                  <p className="text-sm text-gray-600 mt-1">{rec.reason}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-sm font-semibold text-gray-700">
                      {formatPrice(rec.price_low)} – {formatPrice(rec.price_high)} per session
                    </span>
                    <Link
                      href={`/iv-drip-types/${rec.slug}`}
                      className="text-sm font-bold text-sky-600 hover:text-sky-700 underline"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              <Link
                href="/iv-therapy-near-me"
                className="flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-8 py-3.5 font-bold text-white hover:bg-sky-700 transition w-full"
              >
                Find IV Therapy Near Me →
              </Link>
              <button
                onClick={() => { setStep(1); setGoal(''); setUrgency(''); setDelivery('') }}
                className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-8 py-3 font-semibold text-gray-600 hover:bg-gray-50 transition w-full"
              >
                Start Over
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'All Drip Types', href: '/iv-drip-types' },
              { label: 'IV Therapy Cost Guide', href: '/iv-therapy-cost' },
              { label: 'Find IV Therapy Near Me', href: '/iv-therapy-near-me' },
              { label: 'IV Therapy Benefits', href: '/iv-therapy-benefits' },
              { label: 'NAD+ IV Therapy', href: '/nad-iv-therapy' },
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
