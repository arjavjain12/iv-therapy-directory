import Link from 'next/link'
import { DEFAULT_PRICING, formatPrice } from '@/lib/utils'

const DRIPS = [
  { slug: 'hydration',      label: 'IV Hydration',          emoji: '💧', best: 'Dehydration, travel, hangover', color: 'border-sky-200 bg-sky-50' },
  { slug: 'myers-cocktail', label: "Myers' Cocktail",        emoji: '⚗️', best: 'General wellness, fatigue, immunity', color: 'border-violet-200 bg-violet-50' },
  { slug: 'nad-plus',       label: 'NAD+',                  emoji: '🔬', best: 'Anti-aging, cognitive function, energy', color: 'border-amber-200 bg-amber-50' },
  { slug: 'vitamin-c',      label: 'Vitamin C',             emoji: '🍊', best: 'Immune boost, skin, antioxidant defense', color: 'border-orange-200 bg-orange-50' },
  { slug: 'immunity',       label: 'Immunity Boost',        emoji: '🛡️', best: 'Cold/flu prevention, illness recovery', color: 'border-emerald-200 bg-emerald-50' },
  { slug: 'hangover',       label: 'Hangover Recovery',     emoji: '🌅', best: 'Morning-after recovery, nausea, headache', color: 'border-red-200 bg-red-50' },
  { slug: 'beauty',         label: 'Beauty & Glow',         emoji: '✨', best: 'Skin brightening, hair, nail strength', color: 'border-pink-200 bg-pink-50' },
  { slug: 'athletic',       label: 'Athletic Performance',  emoji: '⚡', best: 'Sports recovery, muscle repair, endurance', color: 'border-indigo-200 bg-indigo-50' },
]

const PRICING_KEYS: Record<string, string> = {
  'hydration': 'hydration',
  'myers-cocktail': 'myers_cocktail',
  'nad-plus': 'nad_plus',
  'vitamin-c': 'vitamin_c',
  'immunity': 'immunity',
  'hangover': 'hangover',
  'beauty': 'beauty',
  'athletic': 'athletic',
}

export default function DripTypesInfographic() {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-3">
        Compare IV Drip Types
      </h2>
      <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
        8 drip types to choose from — each targeting specific health and wellness goals.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {DRIPS.map((drip) => {
          const pricingKey = PRICING_KEYS[drip.slug]
          const pricing = DEFAULT_PRICING[pricingKey]
          return (
            <Link
              key={drip.slug}
              href={`/iv-drip-types/${drip.slug}`}
              className={`rounded-xl border p-5 hover:shadow-md transition group ${drip.color}`}
            >
              <div className="text-3xl mb-3">{drip.emoji}</div>
              <h3 className="font-bold text-gray-900 group-hover:text-sky-600 transition text-sm">
                {drip.label}
              </h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">{drip.best}</p>
              {pricing && (
                <p className="mt-3 text-sm font-semibold text-gray-700">
                  {formatPrice(pricing.low)}–{formatPrice(pricing.high)}
                </p>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
