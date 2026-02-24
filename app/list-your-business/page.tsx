import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import ListingForm from './ListingForm'

export const metadata: Metadata = {
  title: 'List Your IV Therapy Business — Get More Clients (2026)',
  description: 'List your IV therapy clinic, IV bar, or mobile IV service on IVTherapyListing.com. Free, Verified, and Premium listing plans available. Reach patients searching for IV therapy near them.',
  alternates: { canonical: '/list-your-business' },
}

const FAQS = [
  { question: 'How much does it cost to list my IV therapy business?', answer: 'Basic listings are free — we add your business name, address, and phone number to the directory. Verified listings ($49/month) include a priority placement badge and website link. Premium listings ($149/month) feature your business at the top of local search results with a highlighted card and phone CTA button.' },
  { question: 'How long does it take to get listed?', answer: 'Free listings are reviewed and added within 1–2 business days. Verified and Premium listings are set up within 24 hours after plan confirmation. You\'ll receive an email confirmation when your listing goes live.' },
  { question: 'What types of IV therapy businesses can list?', answer: 'We accept all IV therapy providers: IV bars, med spas, hydration clinics, mobile IV services, wellness centers, and medical clinics offering IV therapy. We verify that all listed businesses operate under physician medical director oversight and employ licensed RNs.' },
  { question: 'Can I list a mobile IV service?', answer: 'Yes — mobile IV services are fully supported and appear with a "Mobile Available" badge on your listing card. This helps patients who specifically search for mobile IV therapy find your service.' },
  { question: 'What is a Premium listing and how does it work?', answer: 'Premium listings appear at the top of city pages with a green "Featured" badge and call-to-action button. Premium businesses receive priority placement over Free and Verified listings in every city they serve. This is the highest-visibility listing option and is limited to 1–2 businesses per city.' },
]

export default function ListYourBusinessPage() {
  return (
    <>
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'List Your Business' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            List Your IV Therapy Business
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Get found by patients searching for IV therapy in your city. Free to start — Verified and Premium plans available for maximum visibility.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Submit Your Listing</h2>
              <ListingForm />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Plans */}
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-200 px-5 py-3">
                <h3 className="font-bold text-gray-900">Listing Plans</h3>
              </div>
              <div className="divide-y divide-gray-100">
                <div className="px-5 py-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-gray-900">Free</span>
                    <span className="font-bold text-gray-900">$0/mo</span>
                  </div>
                  <p className="text-xs text-gray-500">Name, address, phone. Listed in your city.</p>
                </div>
                <div className="px-5 py-4 bg-sky-50">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sky-900">Verified</span>
                    <span className="font-bold text-sky-900">$49/mo</span>
                  </div>
                  <p className="text-xs text-sky-700">Priority placement, verified badge, website link, review count.</p>
                </div>
                <div className="px-5 py-4 bg-emerald-50">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-emerald-900">Premium</span>
                    <span className="font-bold text-emerald-900">$149/mo</span>
                  </div>
                  <p className="text-xs text-emerald-700">#1 featured placement, green card, phone CTA button. Max 2 per city.</p>
                </div>
              </div>
            </div>

            {/* Why list */}
            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-3">Why List With Us?</h3>
              <ul className="space-y-2">
                {[
                  '31,000+ city pages targeting local IV therapy searches',
                  'Patients searching "IV therapy near me" find your listing',
                  'Mobile IV badge for mobile services',
                  'Drip types displayed on your card',
                  'SEO-optimized directory with growing traffic',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-sky-500 shrink-0 mt-0.5">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <FAQ items={FAQS} title="Business Listing — FAQs" />
        </div>
      </div>
    </>
  )
}
