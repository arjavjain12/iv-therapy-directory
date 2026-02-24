import Link from 'next/link'
import { Phone, Globe, MapPin, Award, CheckCircle2, Truck } from 'lucide-react'
import { formatPhone } from '@/lib/utils'
import type { Business } from '@/types'

interface BusinessCardProps {
  business: Business
  stateSlug: string
  citySlug: string
}

const CLINIC_TYPE_LABELS: Record<string, string> = {
  iv_bar: 'IV Bar',
  medspa: 'MedSpa',
  clinic: 'Medical Clinic',
  mobile: 'Mobile Service',
  wellness_center: 'Wellness Center',
}

export default function BusinessCard({ business, stateSlug, citySlug }: BusinessCardProps) {
  const isPremium = business.tier === 'premium'
  const isVerified = business.tier === 'verified'
  const quoteUrl = `/iv-therapy/${stateSlug}/${citySlug}#quote`

  return (
    <div className={`relative rounded-xl bg-white shadow-sm border transition-shadow hover:shadow-md ${
      isPremium ? 'border-l-4 border-l-sky-500 border-t border-r border-b border-gray-200' : 'border-gray-200'
    }`}>
      {isPremium && (
        <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-sky-100 px-2.5 py-1 text-xs font-semibold text-sky-700">
          <Award className="h-3.5 w-3.5" /> Featured
        </div>
      )}
      {isVerified && (
        <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
          <CheckCircle2 className="h-3.5 w-3.5" /> Verified
        </div>
      )}

      <div className="p-5">
        <div className="flex items-start gap-2 pr-24">
          <h3 className="text-lg font-bold text-gray-900">
            {business.name}
          </h3>
        </div>

        <div className="mt-1 flex items-center gap-2">
          <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
            {CLINIC_TYPE_LABELS[business.clinic_type] || business.clinic_type}
          </span>
          {business.is_mobile && (
            <span className="flex items-center gap-1 rounded-full bg-sky-50 px-2 py-0.5 text-xs font-medium text-sky-700">
              <Truck className="h-3 w-3" /> Mobile Available
            </span>
          )}
        </div>

        <div className="mt-2">
          {business.rating !== null ? (
            <div className="flex items-center gap-1.5">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className={`h-4 w-4 ${s <= Math.round(business.rating!) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">{business.rating.toFixed(1)}</span>
              <span className="text-sm text-gray-500">({business.review_count.toLocaleString()} reviews)</span>
            </div>
          ) : (
            <span className="text-sm text-gray-400">No ratings yet</span>
          )}
        </div>

        <div className="mt-3 space-y-1.5">
          {business.address && (
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gray-400" />
              <span>{business.address}</span>
            </div>
          )}
          {business.phone && (
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 shrink-0 text-gray-400" />
              <a href={`tel:${business.phone}`} className="text-gray-700 hover:text-sky-600 transition-colors font-medium">
                {formatPhone(business.phone)}
              </a>
            </div>
          )}
          {business.website && (
            <div className="flex items-center gap-2 text-sm">
              <Globe className="h-4 w-4 shrink-0 text-gray-400" />
              <a href={business.website.startsWith('http') ? business.website : `https://${business.website}`}
                target="_blank" rel="noopener noreferrer"
                className="text-blue-600 hover:underline truncate">
                {business.website.replace(/^https?:\/\/(www\.)?/, '')}
              </a>
            </div>
          )}
        </div>

        {business.description && (
          <p className="mt-3 text-sm text-gray-600 line-clamp-2">{business.description}</p>
        )}

        {business.drips_available && business.drips_available.length > 0 && (
          <div className="mt-3">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">Drips Available</p>
            <div className="flex flex-wrap gap-1.5">
              {business.drips_available.slice(0, 5).map((drip) => (
                <span key={drip} className="rounded-full bg-sky-50 px-2.5 py-0.5 text-xs font-medium text-sky-700">
                  {drip}
                </span>
              ))}
              {business.drips_available.length > 5 && (
                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500">
                  +{business.drips_available.length - 5} more
                </span>
              )}
            </div>
          </div>
        )}

        <div className="mt-4">
          <Link href={quoteUrl}
            className={`block w-full rounded-lg py-2.5 text-center text-sm font-semibold transition-colors ${
              isPremium ? 'bg-sky-600 text-white hover:bg-sky-700' : 'bg-gray-900 text-white hover:bg-gray-800'
            }`}>
            Book IV Session
          </Link>
        </div>
      </div>
    </div>
  )
}
