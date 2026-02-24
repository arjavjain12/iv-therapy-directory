import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Privacy Policy — IVTherapyListing',
  description: 'Privacy policy for IVTherapyListing.com. Learn how we collect, use, and protect your personal information.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Privacy Policy' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Privacy Policy
          </h1>
          <p className="mt-2 text-gray-500 text-sm">Last updated: January 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 prose prose-gray max-w-none">
        <section>
          <h2 className="text-xl font-bold text-gray-900">1. Information We Collect</h2>
          <p className="text-gray-700">
            We collect information you provide directly to us, such as when you submit a lead form or business listing request. This may include your name, email address, phone number, zip code, and details about your IV therapy needs or business.
          </p>
          <p className="text-gray-700">
            We also automatically collect certain information when you visit our site, including your IP address, browser type, operating system, referring URLs, and pages viewed. This information is collected using cookies and similar tracking technologies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">2. How We Use Your Information</h2>
          <p className="text-gray-700">We use the information we collect to:</p>
          <ul className="text-gray-700 space-y-1">
            <li>Connect you with IV therapy providers in your area</li>
            <li>Process business listing requests</li>
            <li>Improve our website and services</li>
            <li>Send you relevant communications (with your consent)</li>
            <li>Analyze usage patterns to improve user experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">3. Information Sharing</h2>
          <p className="text-gray-700">
            We do not sell your personal information. When you submit a lead form requesting IV therapy quotes, your contact information is shared with relevant local IV therapy providers to fulfill your request.
          </p>
          <p className="text-gray-700">
            We may share information with service providers who assist us in operating our website (such as hosting, analytics, and database services). These providers are bound by confidentiality obligations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">4. Cookies</h2>
          <p className="text-gray-700">
            We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some parts of our site may not function properly without cookies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">5. Data Retention</h2>
          <p className="text-gray-700">
            We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Lead form submissions are retained for up to 2 years. Business listing information is retained as long as the listing is active.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">6. Your Rights</h2>
          <p className="text-gray-700">
            You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at privacy@ivtherapylisting.com. We will respond to your request within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">7. Children&apos;s Privacy</h2>
          <p className="text-gray-700">
            Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided personal information, we will delete it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">8. Changes to This Policy</h2>
          <p className="text-gray-700">
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">9. Contact Us</h2>
          <p className="text-gray-700">
            If you have questions about this privacy policy, please contact us at privacy@ivtherapylisting.com.
          </p>
        </section>
      </div>
    </>
  )
}
