import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import CostEstimator from './CostEstimator'

export const metadata: Metadata = {
  title: 'IV Therapy Cost Estimator — Calculate Your IV Drip Price (2026)',
  description: 'Use our free IV therapy cost estimator to calculate your expected price. Select your drip type, location type, and delivery method to get an instant price range.',
  alternates: { canonical: '/iv-therapy-cost-estimator' },
}

export default function IVTherapyCostEstimatorPage() {
  return (
    <>
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'IV Therapy Cost', href: '/iv-therapy-cost' },
            { label: 'Cost Estimator' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            IV Therapy Cost Estimator
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Get an instant price estimate for your IV therapy session based on drip type, location, and delivery method.
          </p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <CostEstimator />
      </div>
    </>
  )
}
