import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'
import BenefitsInfographic from '@/components/infographics/BenefitsInfographic'

export const metadata: Metadata = {
  title: 'IV Therapy Benefits — What Are the Benefits of IV Therapy?',
  description: 'Discover the proven benefits of IV therapy: 100% bioavailability, fast hydration, immune support, anti-aging, and more. Evidence-based guide.',
  alternates: { canonical: '/iv-therapy-benefits' },
}

const FAQS = [
  { question: 'What are the main benefits of IV therapy?', answer: 'The primary benefits of IV therapy include: 100% nutrient bioavailability (vs. 20-50% oral absorption), near-instant hydration and electrolyte restoration, high-dose vitamin and mineral delivery, customizable formulas for specific health goals, and convenience through mobile service options.' },
  { question: 'Is IV therapy scientifically proven to work?', answer: 'The underlying science of IV nutrient delivery is well-established. The bioavailability advantage is proven — IV delivery achieves 100% absorption vs. limited oral absorption. Studies on specific components like high-dose vitamin C, magnesium, and B vitamins support their clinical efficacy. The Myers\' Cocktail has decades of clinical use with published research supporting its application.' },
  { question: 'How quickly do you feel the benefits of IV therapy?', answer: 'Most patients notice benefits within 30–60 minutes of starting an IV drip. Energy improvements, headache relief, and improved hydration are typically felt during or immediately after the session. Some benefits (skin improvements from glutathione, NAD+ anti-aging effects) develop over multiple sessions.' },
  { question: 'What conditions can IV therapy help with?', answer: 'IV therapy is commonly used for: hangover recovery, dehydration, athletic recovery, immune support, migraine management, chronic fatigue, fibromyalgia symptom management, pre/post-travel wellness, anti-aging protocols, and skin brightening. It is complementary care — not a replacement for medical treatment of specific conditions.' },
  { question: 'Can IV therapy boost your immune system?', answer: 'High-dose IV vitamin C and zinc, as delivered in immunity drips, support immune cell function at concentrations impossible to achieve orally. Research supports the role of high-dose IV vitamin C in immune modulation and antioxidant protection. However, no IV therapy should be used as a substitute for standard medical care for serious infections.' },
]

export default function IVTherapyBenefitsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'IV Therapy Benefits — What Can IV Therapy Do for You?',
    description: 'Discover the proven benefits of IV therapy: 100% bioavailability, fast hydration, immune support, anti-aging, and more. Evidence-based guide.',
    datePublished: '2026-01-01',
    dateModified: '2026-02-24',
    author: { '@type': 'Organization', name: 'IVTherapyListing', url: 'https://ivtherapylisting.com' },
    publisher: { '@type': 'Organization', name: 'IVTherapyListing', url: 'https://ivtherapylisting.com' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ivtherapylisting.com/iv-therapy-benefits' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'IV Therapy Benefits' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            IV Therapy Benefits — What Can IV Therapy Do for You?
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Evidence-based guide to the benefits of intravenous nutrient therapy — from rapid hydration to cellular anti-aging.
          </p>
          <div className="mt-6 relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden">
            <Image
              src="/images/content-benefits.png"
              alt="Person feeling energetic and healthy after IV therapy"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <BenefitsInfographic />

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Hydration & Recovery', benefits: ['Rapid rehydration (30 min vs. hours orally)', 'Electrolyte balance restoration', 'Hangover symptom relief', 'Athletic recovery acceleration'] },
              { title: 'Immune Support', benefits: ['High-dose vitamin C delivery (5–25g)', 'Zinc for immune cell production', 'Antioxidant protection', 'Illness prevention and faster recovery'] },
              { title: 'Energy & Performance', benefits: ['B vitamin restoration for energy metabolism', 'NAD+ for mitochondrial energy production', 'Amino acid delivery for muscle repair', 'Cognitive clarity and focus'] },
              { title: 'Anti-Aging & Beauty', benefits: ['Glutathione for skin brightening', 'NAD+ for cellular regeneration', 'Collagen synthesis via vitamin C', 'DNA repair support'] },
            ].map((cat) => (
              <div key={cat.title} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="font-semibold text-gray-900 mb-3">{cat.title}</h3>
                <ul className="space-y-1.5">
                  {cat.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-sky-500">✓</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <FAQ items={FAQS} title="IV Therapy Benefits — Frequently Asked Questions" />

        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Is IV Therapy Safe?', href: '/is-iv-therapy-safe' },
              { label: 'IV Therapy Side Effects', href: '/iv-therapy-side-effects' },
              { label: 'How Long Does IV Therapy Take?', href: '/how-long-does-iv-therapy-take' },
              { label: 'What to Expect During IV Therapy', href: '/what-to-expect-during-iv-therapy' },
              { label: 'IV Therapy Cost Guide', href: '/iv-therapy-cost' },
              { label: 'Find IV Therapy Near Me', href: '/iv-therapy-near-me' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center gap-2 text-sm text-sky-600 hover:text-sky-700 font-medium transition">
                <span>→</span> {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
