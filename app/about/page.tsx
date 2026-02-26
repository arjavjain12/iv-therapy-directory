import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'About IVList — The IV Therapy Directory',
  description: 'IVList is the most comprehensive directory of IV therapy clinics, IV bars, and mobile IV services across the United States.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'About' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            About IVList
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            IVList is the most comprehensive online directory of IV therapy clinics, IV bars, and mobile IV services across the United States. We help patients find safe, qualified IV therapy providers in their city — quickly and easily.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            IV therapy is one of the fastest-growing wellness categories in the US — but finding a reputable, licensed provider in your city can be surprisingly difficult. Our mission is to make it easy for anyone to find qualified IV therapy near them, understand what to expect, and make an informed decision.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What We Cover</h2>
          <ul className="space-y-2 text-gray-700">
            <li>IV clinics, IV bars, and mobile IV services across 31,000+ US cities</li>
            <li>Comprehensive guides on all major IV drip types (Myers&apos; Cocktail, NAD+, Vitamin C, and more)</li>
            <li>Pricing information and cost guides for every major market</li>
            <li>Safety information and medical standards for IV therapy</li>
            <li>Comparison guides to help you choose the right provider and drip</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Standards</h2>
          <p className="text-gray-700">
            We only list IV therapy businesses that operate under physician medical director oversight and employ licensed registered nurses (RNs) for all IV administration. We verify that listed providers use pharmaceutical-grade solutions and follow proper sterile technique protocols.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">For Businesses</h2>
          <p className="text-gray-700">
            IV therapy clinics and mobile services can list their business on our directory. We offer Free, Verified, and Premium listing tiers to help providers of all sizes get found by patients searching for IV therapy in their area.
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href="/list-your-business"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 font-bold text-white hover:bg-sky-700 transition"
          >
            List Your Business
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  )
}
