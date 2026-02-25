import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Contact IVTherapyListing — Get in Touch',
  description: 'Contact IVTherapyListing with questions about listings, partnerships, or content.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Contact' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Contact Us
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold text-gray-900">General Inquiries</p>
                <p className="text-sm">hello@ivlist.com</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Business Listings</p>
                <p className="text-sm">listings@ivlist.com</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Partnerships & Advertising</p>
                <p className="text-sm">partners@ivlist.com</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Content Corrections</p>
                <p className="text-sm">If you notice incorrect information about a listing or page, please email us at corrections@ivlist.com</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Common Questions</h2>
            <div className="space-y-4">
              {[
                { q: 'How do I list my business?', a: 'Visit our List Your Business page to submit a free or paid listing.' },
                { q: 'How do I update my listing?', a: 'Email listings@ivlist.com with your business name, city, and the changes you\'d like made.' },
                { q: 'How do I remove my listing?', a: 'Email listings@ivlist.com with your business name and a removal request. We\'ll process it within 24 hours.' },
                { q: 'Is the directory information accurate?', a: 'We make every effort to maintain accurate listings. If you spot an error, please email corrections@ivlist.com.' },
              ].map((item) => (
                <div key={item.q}>
                  <p className="font-semibold text-gray-900 text-sm">{item.q}</p>
                  <p className="text-sm text-gray-600 mt-0.5">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
