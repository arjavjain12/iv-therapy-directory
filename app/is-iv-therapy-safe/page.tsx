import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'Is IV Therapy Safe? — Risks, Safety Standards & What to Know',
  description: 'Is IV therapy safe? Learn about risks, what makes IV therapy safe, who should avoid it, and how to choose a reputable provider. Evidence-based safety guide.',
  alternates: { canonical: '/is-iv-therapy-safe' },
}

const FAQS = [
  { question: 'Is IV therapy safe?', answer: 'IV therapy administered by licensed medical professionals using pharmaceutical-grade solutions is generally safe for healthy adults. The most common side effects are minor: bruising or discomfort at the insertion site, mild flushing (especially with NAD+ or magnesium), and temporary dizziness. Serious adverse events are rare when proper protocols are followed.' },
  { question: 'What are the risks of IV therapy?', answer: 'Potential risks include: bruising or hematoma at the IV site, vein irritation or phlebitis, infection (rare with proper sterile technique), fluid overload (risk for people with heart or kidney conditions), allergic reaction to IV components, air embolism (extremely rare), and electrolyte imbalances if improperly formulated.' },
  { question: 'Who should not get IV therapy?', answer: 'People with the following conditions should consult their physician before IV therapy: congestive heart failure, chronic kidney disease, pulmonary edema, G6PD deficiency (specifically for high-dose vitamin C), active cancer (consult oncologist), pregnancy, and known allergies to IV solution components. Always complete the health intake form truthfully.' },
  { question: 'How do I know if an IV therapy clinic is reputable?', answer: 'Signs of a reputable IV therapy clinic: employs licensed RNs or paramedics (not unlicensed staff), operates under a licensed physician medical director, uses pharmaceutical-grade IV solutions from licensed compounding pharmacies, conducts health intake screening before every session, maintains sterile technique with single-use supplies, and has verifiable reviews and credentials.' },
  { question: 'Can IV therapy cause infections?', answer: 'Infections from IV therapy are rare when proper sterile technique is used. A reputable clinic uses single-use, sterile needles and tubing, prepares IV solutions in sterile conditions, and follows OSHA bloodborne pathogen protocols. If you notice redness, swelling, warmth, or pus at an IV site after your session, seek medical attention.' },
]

export default function IsIVTherapySafePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Is IV Therapy Safe?',
    description: 'Is IV therapy safe? Learn about risks, what makes IV therapy safe, who should avoid it, and how to choose a reputable provider. Evidence-based safety guide.',
    datePublished: '2026-01-01',
    dateModified: '2026-02-24',
    author: { '@type': 'Organization', name: 'IVList', url: 'https://ivlist.com' },
    publisher: { '@type': 'Organization', name: 'IVList', url: 'https://ivlist.com' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ivlist.com/is-iv-therapy-safe' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'Is IV Therapy Safe?' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Is IV Therapy Safe?
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Evidence-based guide to IV therapy safety — risks, who should avoid it, and how to choose a safe provider.
          </p>
          <Image
            src="/images/content-safe.png"
            alt="Licensed nurse preparing IV therapy safely"
            width={1200}
            height={675}
            className="mt-6 w-full h-auto rounded-2xl"
            priority
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">The Short Answer</h2>
          <p className="text-gray-700">Yes — IV therapy administered by licensed medical professionals using pharmaceutical-grade solutions is generally safe for healthy adults. The risks are low when proper protocols are followed. Always choose a provider that employs licensed RNs and operates under a physician medical director.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Makes IV Therapy Safe</h2>
          <div className="space-y-3">
            {[
              { title: 'Licensed RN Administration', desc: 'All IV insertions should be performed by a registered nurse (RN) or licensed paramedic — not unlicensed staff. Licensed professionals are trained in sterile technique, venipuncture, and recognizing adverse reactions.' },
              { title: 'Physician Medical Director', desc: 'Reputable IV clinics operate under a licensed physician medical director who reviews protocols, approves standing orders, and is available for emergency consultation.' },
              { title: 'Pharmaceutical-Grade Solutions', desc: 'IV solutions should be prepared by licensed compounding pharmacies using pharmaceutical-grade ingredients — not homemade or unregulated products.' },
              { title: 'Health Intake Screening', desc: 'A proper intake process identifies contraindications before treatment. Clinics should ask about medical history, medications, allergies, and current conditions.' },
              { title: 'Sterile Single-Use Supplies', desc: 'All IV supplies (needles, tubing, bags) should be single-use and sterile. Never reuse IV supplies.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <FAQ items={FAQS} title="IV Therapy Safety — Frequently Asked Questions" />

        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'IV Therapy Side Effects', href: '/iv-therapy-side-effects' },
              { label: 'IV Therapy Benefits', href: '/iv-therapy-benefits' },
              { label: 'How to Prepare for IV Therapy', href: '/how-to-prepare-for-iv-therapy' },
              { label: 'What to Expect During IV Therapy', href: '/what-to-expect-during-iv-therapy' },
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
