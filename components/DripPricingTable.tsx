import { DEFAULT_PRICING, DRIP_TYPES, formatPrice } from '@/lib/utils'
import type { CityPricing } from '@/types'

interface DripPricingTableProps {
  cityPricing: CityPricing[]
  cityName: string
}

const DRIP_LABELS: Record<string, string> = {
  hydration: 'IV Hydration',
  myers_cocktail: "Myers' Cocktail",
  vitamin_c: 'Vitamin C',
  immunity: 'Immunity Boost',
  hangover: 'Hangover Recovery',
  nad_plus: 'NAD+',
  beauty: 'Beauty & Glow (Glutathione)',
  athletic: 'Athletic Performance',
}

const POPULAR_DRIPS = ['hangover', 'myers_cocktail', 'hydration']

export default function DripPricingTable({ cityPricing, cityName }: DripPricingTableProps) {
  const pricingMap = new Map(cityPricing.map((p) => [p.drip_type, p]))

  const drips = Object.keys(DEFAULT_PRICING).map((key) => {
    const cityData = pricingMap.get(key)
    const defaults = DEFAULT_PRICING[key]
    return {
      key,
      label: DRIP_LABELS[key] || key,
      low: cityData?.price_low ?? defaults.low,
      high: cityData?.price_high ?? defaults.high,
      duration: cityData?.session_minutes ?? defaults.duration,
      isPopular: POPULAR_DRIPS.includes(key),
    }
  })

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        IV Therapy Pricing in {cityName}
      </h2>
      <p className="text-sm text-gray-500 mb-5">
        Price estimates based on local market data. Actual prices vary by provider and add-ons.
      </p>

      {/* Desktop table */}
      <div className="hidden md:block overflow-hidden rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Drip Type</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Session Duration</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">Price Range</th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {drips.map((drip) => (
              <tr key={drip.key} className={`bg-white hover:bg-gray-50 transition ${drip.isPopular ? 'relative' : ''}`}>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">{drip.label}</span>
                    {drip.isPopular && (
                      <span className="rounded-full bg-sky-100 px-2 py-0.5 text-xs font-medium text-sky-700">Popular</span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-4 text-gray-600">{drip.duration} min</td>
                <td className="px-4 py-4">
                  <span className="font-semibold text-gray-900">
                    {formatPrice(drip.low)} – {formatPrice(drip.high)}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <a href="#quote" className="text-sm font-medium text-sky-600 hover:text-sky-700 transition">
                    Book now →
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-3">
        {drips.map((drip) => (
          <div key={drip.key} className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">{drip.label}</span>
                  {drip.isPopular && (
                    <span className="rounded-full bg-sky-100 px-2 py-0.5 text-xs font-medium text-sky-700">Popular</span>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-0.5">{drip.duration} min session</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900 text-sm">
                  {formatPrice(drip.low)} – {formatPrice(drip.high)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-gray-400">
        * Prices are estimates. Final pricing depends on add-ons, provider, and location within {cityName}.
      </p>
    </div>
  )
}
