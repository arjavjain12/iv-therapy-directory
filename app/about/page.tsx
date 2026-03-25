import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, CheckCircle, BookOpen, Users, ClipboardCheck, Stethoscope } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'About IVList — Editorial Standards & Methodology',
  description: 'Learn about IVList, our editorial standards, medical review process, and how we verify IV therapy providers. Built to help patients make informed decisions.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About IVList',
    description: 'IVList is the most comprehensive directory of IV therapy clinics, IV bars, and mobile IV services across the United States.',
    mainEntity: {
      '@type': 'Organization',
      '@id': 'https://ivlist.com/#organization',
      name: 'IVList',
      url: 'https://ivlist.com',
      description: 'The largest directory of IV therapy clinics and mobile IV services in the United States.',
      knowsAbout: [
        'IV therapy', 'Intravenous therapy', 'Mobile IV services', 'IV hydration',
        "Myers' Cocktail", 'NAD+ therapy', 'Vitamin C infusion', 'IV wellness',
      ],
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'About' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            About IVList
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            How we help patients find safe, qualified IV therapy — and the standards behind our directory.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* Mission */}
        <section>
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              IVList is the most comprehensive online directory of IV therapy clinics, IV bars, and mobile IV services across the United States. We help patients find safe, qualified IV therapy providers in their city — quickly and easily.
            </p>
            <p className="text-gray-700">
              IV therapy is one of the fastest-growing wellness categories in the US — but finding a reputable, licensed provider in your city can be surprisingly difficult. Our mission is to make it easy for anyone to find qualified IV therapy near them, understand what to expect, and make an informed decision.
            </p>
          </div>
        </section>

        {/* Trust signals grid */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Cover</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Users, text: 'IV clinics, IV bars, and mobile IV services across 31,000+ US cities' },
              { icon: BookOpen, text: 'Comprehensive guides on all major IV drip types (Myers\' Cocktail, NAD+, Vitamin C, and more)' },
              { icon: ClipboardCheck, text: 'Pricing information and cost guides for every major market' },
              { icon: Shield, text: 'Safety information, medical standards, and provider verification criteria' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex gap-3 rounded-xl border border-gray-200 bg-white p-4">
                <Icon className="h-5 w-5 text-sky-600 shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial Standards */}
        <section className="rounded-2xl border border-sky-200 bg-sky-50 p-8">
          <div className="flex items-center gap-3 mb-4">
            <Stethoscope className="h-6 w-6 text-sky-600" />
            <h2 className="text-2xl font-bold text-gray-900">Editorial Standards & Medical Review</h2>
          </div>
          <div className="space-y-4 text-gray-700">
            <p>
              All health-related content on IVList is written by health and wellness researchers and reviewed for medical accuracy. Our editorial process includes:
            </p>
            <ul className="space-y-3">
              {[
                'All IV therapy guides and treatment descriptions are reviewed by licensed healthcare professionals with clinical IV therapy experience',
                'Pricing data is sourced from market research across hundreds of IV therapy providers nationwide and updated regularly',
                'Provider listings are verified against state licensing databases and medical director requirements',
                'Health claims are referenced against published medical literature and clinical guidelines where applicable',
                'Content is regularly audited for accuracy and updated when new clinical evidence or industry standards emerge',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle className="h-4 w-4 text-sky-600 shrink-0 mt-1" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Provider Standards */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Provider Listing Standards</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700">
              We only list IV therapy businesses that meet our quality criteria. Every listed provider must:
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Operate under a licensed physician medical director',
              'Employ licensed registered nurses (RNs) or nurse practitioners (NPs) for all IV administration',
              'Use pharmaceutical-grade IV solutions and supplies',
              'Follow OSHA and CDC guidelines for sterile technique and infection control',
              'Conduct health intake screening before treatment',
              'Maintain active business licensing and liability insurance',
            ].map((standard) => (
              <div key={standard} className="flex items-start gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3">
                <Shield className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{standard}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How Our Pricing Data Works</h2>
          <div className="prose prose-gray max-w-none space-y-3">
            <p className="text-gray-700">
              The pricing estimates on IVList are based on aggregated market data from IV therapy providers across the United States. We collect pricing from provider websites, published menus, and direct provider submissions. Our pricing ranges represent the typical low-to-high cost you can expect in a given market.
            </p>
            <p className="text-gray-700">
              Actual prices may vary based on provider, specific formulations, add-on medications, mobile vs. in-clinic delivery, and geographic location. We encourage patients to use our directory to compare providers and request quotes directly for the most accurate pricing.
            </p>
          </div>
        </section>

        {/* Medical disclaimer */}
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Medical Disclaimer</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            The information provided on IVList.com is for informational and educational purposes only and should not be considered medical advice. IV therapy should only be administered by licensed medical professionals. Individual results may vary. Always consult with a qualified healthcare provider before beginning any IV therapy treatment, especially if you have pre-existing medical conditions, are pregnant, or are taking medications. IVList does not provide medical services and is not a healthcare provider.
          </p>
        </section>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
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
          <Link
            href="/iv-therapy"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition"
          >
            Browse Directory
          </Link>
        </div>
      </div>
    </>
  )
}
