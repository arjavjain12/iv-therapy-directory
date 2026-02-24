'use client'

import { useState } from 'react'
import Link from 'next/link'

type LocationTier = 'urban' | 'suburban' | 'rural'
type DeliveryMethod = 'clinic' | 'mobile'

const BASE: Record<string, { low: number; high: number; label: string; duration: number }> = {
  hydration:      { low: 99,  high: 175, label: 'IV Hydration',               duration: 30 },
  myers_cocktail: { low: 149, high: 275, label: "Myers' Cocktail",            duration: 45 },
  vitamin_c:      { low: 125, high: 225, label: 'Vitamin C',                  duration: 45 },
  immunity:       { low: 149, high: 250, label: 'Immunity Boost',             duration: 45 },
  hangover:       { low: 125, high: 250, label: 'Hangover Recovery',          duration: 45 },
  beauty:         { low: 150, high: 275, label: 'Beauty & Glow (Glutathione)', duration: 45 },
  athletic:       { low: 149, high: 299, label: 'Athletic Performance',       duration: 45 },
  nad_plus:       { low: 250, high: 500, label: 'NAD+',                       duration: 90 },
}

const LOCATION_MULTIPLIERS: Record<LocationTier, number> = {
  urban: 1.15,
  suburban: 1.0,
  rural: 0.95,
}

const MOBILE_SURCHARGE = 35

export default function CostEstimator() {
  const [dripType, setDripType] = useState<string>('')
  const [locationTier, setLocationTier] = useState<LocationTier | ''>('')
  const [delivery, setDelivery] = useState<DeliveryMethod | ''>('')

  const canShowResult = dripType !== '' && locationTier !== '' && delivery !== ''

  const getEstimate = () => {
    if (!canShowResult) return null
    const base = BASE[dripType]
    const multiplier = LOCATION_MULTIPLIERS[locationTier as LocationTier]
    let low = Math.round(base.low * multiplier)
    let high = Math.round(base.high * multiplier)
    if (delivery === 'mobile') {
      low += MOBILE_SURCHARGE
      high += MOBILE_SURCHARGE
    }
    return { low, high, label: base.label, duration: base.duration }
  }

  const estimate = getEstimate()

  return (
    <div className="space-y-8">

      {/* Step 1 — Drip Type */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-1">Step 1: Select Your Drip Type</h2>
        <p className="text-sm text-gray-500 mb-4">Choose the IV drip formula you are interested in.</p>
        <div className="grid grid-cols-2 gap-3">
          {Object.entries(BASE).map(([key, val]) => (
            <button
              key={key}
              type="button"
              onClick={() => setDripType(key)}
              className={`rounded-xl border-2 p-4 text-left transition ${
                dripType === key
                  ? 'border-sky-500 bg-sky-50'
                  : 'border-gray-200 bg-white hover:border-sky-300 hover:bg-sky-50'
              }`}
            >
              <p className="font-semibold text-gray-900 text-sm">{val.label}</p>
              <p className="text-xs text-gray-500 mt-0.5">{val.duration} min session</p>
            </button>
          ))}
        </div>
      </div>

      {/* Step 2 — Location Type */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-1">Step 2: Select Your Location Type</h2>
        <p className="text-sm text-gray-500 mb-4">Prices vary by market — urban areas trend higher.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {([
            { value: 'urban' as LocationTier, label: 'Urban / Metro', desc: 'Major city or metro area' },
            { value: 'suburban' as LocationTier, label: 'Suburban', desc: 'Suburbs or mid-size city' },
            { value: 'rural' as LocationTier, label: 'Rural / Small Town', desc: 'Small town or rural area' },
          ] as const).map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setLocationTier(opt.value)}
              className={`rounded-xl border-2 p-4 text-left transition ${
                locationTier === opt.value
                  ? 'border-sky-500 bg-sky-50'
                  : 'border-gray-200 bg-white hover:border-sky-300 hover:bg-sky-50'
              }`}
            >
              <p className="font-semibold text-gray-900 text-sm">{opt.label}</p>
              <p className="text-xs text-gray-500 mt-0.5">{opt.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Step 3 — Delivery Method */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-1">Step 3: Select Delivery Method</h2>
        <p className="text-sm text-gray-500 mb-4">Mobile IV therapy adds a travel surcharge.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {([
            { value: 'clinic' as DeliveryMethod, label: 'In-Clinic', desc: 'Visit an IV therapy clinic or medspa' },
            { value: 'mobile' as DeliveryMethod, label: 'Mobile (nurse comes to you)', desc: 'Nurse travels to your home, hotel, or office' },
          ] as const).map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setDelivery(opt.value)}
              className={`rounded-xl border-2 p-4 text-left transition ${
                delivery === opt.value
                  ? 'border-sky-500 bg-sky-50'
                  : 'border-gray-200 bg-white hover:border-sky-300 hover:bg-sky-50'
              }`}
            >
              <p className="font-semibold text-gray-900 text-sm">{opt.label}</p>
              <p className="text-xs text-gray-500 mt-0.5">{opt.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Result Panel */}
      {canShowResult && estimate && (
        <div className="rounded-xl bg-sky-600 p-6 text-white">
          <p className="text-sm font-medium text-sky-100 mb-1">{estimate.label}</p>
          <div className="text-4xl font-extrabold mb-2">
            ${estimate.low}–${estimate.high}
          </div>
          <p className="text-sm text-sky-100 mb-1">
            Estimated session duration: <span className="font-semibold text-white">{estimate.duration} minutes</span>
          </p>
          <p className="text-xs text-sky-200 mb-5">
            Add-ons (glutathione push, anti-nausea meds, extra vitamins) can add $15–$75 to your total. Always confirm the full price with your provider before booking.
          </p>
          <Link
            href="/iv-therapy-near-me"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-sky-600 hover:bg-sky-50 transition"
          >
            Find Providers Near You →
          </Link>
        </div>
      )}

      {/* Disclaimer */}
      <p className="text-xs text-gray-400 text-center leading-relaxed">
        Estimates based on national averages. Actual prices vary by provider. Always get a quote before booking.
      </p>

      {/* Related Guides */}
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: 'IV Therapy Cost Guide', href: '/iv-therapy-cost' },
            { label: 'How Much Does IV Therapy Cost', href: '/how-much-does-iv-therapy-cost' },
            { label: 'Cheap IV Therapy', href: '/cheap-iv-therapy' },
            { label: 'Does Insurance Cover IV Therapy', href: '/does-insurance-cover-iv-therapy' },
            { label: 'Find IV Near Me', href: '/iv-therapy-near-me' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="flex items-center gap-2 text-sm text-sky-600 hover:text-sky-700 font-medium transition">
              <span>→</span> {link.label}
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}
