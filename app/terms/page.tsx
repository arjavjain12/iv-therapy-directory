import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Terms of Service — IVTherapyListing',
  description: 'Terms of service for IVTherapyListing.com.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <>
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Terms of Service' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Terms of Service
          </h1>
          <p className="mt-2 text-gray-500 text-sm">Last updated: January 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 prose prose-gray max-w-none">
        <section>
          <h2 className="text-xl font-bold text-gray-900">1. Acceptance of Terms</h2>
          <p className="text-gray-700">
            By accessing and using IVTherapyListing.com, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">2. Description of Service</h2>
          <p className="text-gray-700">
            IVTherapyListing provides an online directory of IV therapy businesses across the United States. We provide informational content about IV therapy treatments, pricing, and providers. We are not a healthcare provider and do not provide medical advice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">3. Medical Disclaimer</h2>
          <p className="text-gray-700">
            The content on IVTherapyListing.com is for informational purposes only and is not intended as medical advice. IV therapy involves medical procedures that should be performed by licensed healthcare professionals. Always consult with a qualified healthcare provider before pursuing IV therapy. We make no representations regarding the safety or efficacy of any specific IV treatment.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">4. Business Listings</h2>
          <p className="text-gray-700">
            Businesses listed on our directory are independent third-party providers. IVTherapyListing does not endorse, recommend, or guarantee the quality, safety, or legality of any listed business or its services. We are not responsible for any harm, injury, or dissatisfaction arising from services provided by listed businesses.
          </p>
          <p className="text-gray-700">
            Businesses that submit listings represent that they operate legally, employ licensed healthcare professionals, and maintain appropriate liability insurance. We reserve the right to remove any listing at our discretion.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">5. Pricing Information</h2>
          <p className="text-gray-700">
            Pricing information displayed on this site is approximate and based on market research. Actual prices vary by provider, location, and specific treatment. We make no guarantee of the accuracy of pricing information. Always confirm current pricing directly with the provider.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">6. Lead Forms</h2>
          <p className="text-gray-700">
            When you submit a lead form requesting quotes, you authorize IVTherapyListing to share your contact information with local IV therapy providers who may contact you. Submitting a form does not create any obligation to purchase services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">7. Intellectual Property</h2>
          <p className="text-gray-700">
            All content on IVTherapyListing.com, including text, graphics, logos, and data compilations, is the property of IVTherapyListing or its content suppliers. You may not reproduce, distribute, or create derivative works from our content without written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">8. Limitation of Liability</h2>
          <p className="text-gray-700">
            IVTherapyListing shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the site or services obtained through the site. Our total liability shall not exceed $100.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">9. Governing Law</h2>
          <p className="text-gray-700">
            These terms shall be governed by the laws of the United States. Any disputes shall be resolved through binding arbitration in accordance with the American Arbitration Association rules.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">10. Contact</h2>
          <p className="text-gray-700">
            Questions about these terms? Contact us at legal@ivlist.com.
          </p>
        </section>
      </div>
    </>
  )
}
