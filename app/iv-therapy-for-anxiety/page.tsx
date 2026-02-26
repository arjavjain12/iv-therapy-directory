import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ivlist.com'

export const metadata: Metadata = {
  title: 'IV Therapy for Anxiety | Magnesium & Myers Cocktail for Stress Relief',
  description:
    "IV therapy for anxiety uses high-dose magnesium and B vitamins to calm the nervous system fast. Learn how Myers' Cocktail IV helps anxiety, what to expect, and find local providers.",
  alternates: { canonical: '/iv-therapy-for-anxiety' },
  openGraph: {
    title: 'IV Therapy for Anxiety | Magnesium & Myers Cocktail for Stress Relief',
    description:
      "IV therapy for anxiety uses high-dose magnesium and B vitamins to calm the nervous system fast. Learn how Myers' Cocktail IV helps anxiety.",
    url: `${BASE_URL}/iv-therapy-for-anxiety`,
  },
}

export default function IVTherapyForAnxietyPage() {
  const faqs = [
    {
      question: 'Can IV magnesium reduce anxiety?',
      answer:
        "Yes — magnesium is a natural GABA modulator and NMDA receptor antagonist, acting on the same neurotransmitter systems as anti-anxiety medications. Studies show that magnesium deficiency is present in up to 68% of Americans, and low magnesium is strongly associated with increased anxiety, hyperreactivity to stress, and insomnia. IV magnesium achieves therapeutic blood levels within minutes — much faster than oral supplements, which take weeks and are often poorly absorbed.",
    },
    {
      question: "Is Myers' Cocktail good for anxiety?",
      answer:
        "Myers' Cocktail is a popular choice for anxiety because it delivers magnesium, B-complex vitamins (particularly B6 and B12), and vitamin C simultaneously. Magnesium calms the nervous system, B6 is essential for serotonin and GABA synthesis, and B12 supports neurological function. Many patients report a noticeably calmer, more grounded feeling within 30–60 minutes of infusion. It's used as a complementary therapy — not a replacement for mental health treatment.",
    },
    {
      question: 'How quickly does IV therapy work for anxiety?',
      answer:
        "Many patients report feeling calmer within 30–60 minutes of starting an IV infusion containing magnesium. The effect from a single Myers' Cocktail session often lasts 3–7 days, with cumulative benefits improving over a series of 4–6 sessions. For chronic anxiety with underlying nutritional deficiencies, regular monthly infusions provide the most sustained benefit.",
    },
    {
      question: 'Is IV therapy a substitute for anxiety medication or therapy?',
      answer:
        'No. IV therapy for anxiety is a complementary supportive treatment. It addresses nutritional contributors to anxiety (magnesium deficiency, B vitamin depletion, dehydration) but does not replace evidence-based treatments like CBT, SSRIs, or other prescribed medications. Always discuss IV therapy with your prescribing physician, especially if you are on psychiatric medications.',
    },
    {
      question: 'What nutrients are most helpful for anxiety via IV?',
      answer:
        "Magnesium (GABA modulator and NMDA antagonist), Vitamin B6 (required for serotonin and GABA synthesis), Vitamin B12 (neurological support), Vitamin C (cortisol reduction — studies show IV vitamin C lowers post-stress cortisol levels), and proper hydration. All of these are delivered in a single Myers' Cocktail infusion.",
    },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'IV Therapy for Anxiety',
    description: metadata.description as string,
    datePublished: '2026-01-01',
    dateModified: '2026-02-25',
    author: { '@type': 'Organization', name: 'IVList', url: BASE_URL },
    publisher: { '@type': 'Organization', name: 'IVList', url: BASE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/iv-therapy-for-anxiety` },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          IV Therapy for Anxiety
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Anxiety has real biochemical roots — magnesium deficiency, B vitamin depletion, HPA axis dysregulation, and chronic dehydration all heighten the nervous system&apos;s stress response. IV therapy delivers calming nutrients at therapeutic concentrations, providing faster and more complete relief than oral supplements for those with anxiety driven by nutrient deficiencies.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">The Nutritional Root of Anxiety</h2>
            <p className="text-gray-700 leading-relaxed">
              Generalized anxiety disorder and stress-related anxiety are influenced by neurotransmitter imbalances and nervous system hyperreactivity. Magnesium is the most critical mineral for nervous system regulation — it acts as a natural calcium channel blocker and GABA modulator, directly calming the central nervous system. Up to 68% of Americans are magnesium deficient, and research consistently links low magnesium to higher anxiety scores, sleep disruption, and exaggerated stress responses. B vitamins (especially B6 and B12) are essential cofactors for synthesizing serotonin, GABA, and dopamine — the neurotransmitters that regulate mood. Vitamin C blunts cortisol release after acute stress. Together, these nutrients form the biochemical foundation of a calm nervous system.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">How IV Therapy Helps with Anxiety</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The key advantage of IV therapy over oral supplements for anxiety is speed and concentration. Oral magnesium achieves modest serum increases over weeks and is frequently limited by its laxative effect at higher doses. IV magnesium achieves full therapeutic blood levels within minutes. The same applies to B vitamins — oral absorption is limited by gut function, transport proteins, and first-pass metabolism. IV delivery bypasses all of these, delivering concentrations that would be impossible to achieve orally.
            </p>
            <p className="text-gray-700 leading-relaxed">
              IV therapy for anxiety is a complementary approach — it addresses the nutritional contributors to anxiety but is not a substitute for psychotherapy, medication, or addressing root causes. For patients whose anxiety is partly driven by nutrient deficiencies, regular IV infusions can provide meaningful, sustained improvement in baseline anxiety levels.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Best IV Drips for Anxiety</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  slug: 'myers-cocktail',
                  label: "Myers' Cocktail",
                  reason:
                    'The gold standard for anxiety support — magnesium calms the nervous system, B6 supports GABA and serotonin synthesis, B12 supports neurological function.',
                },
                {
                  slug: 'hydration',
                  label: 'IV Hydration',
                  reason:
                    'Even mild dehydration (1–2% body water) increases cortisol and anxiety. Rapid IV rehydration restores cognitive clarity and reduces stress reactivity.',
                },
              ].map((drip) => (
                <Link
                  key={drip.slug}
                  href={`/iv-drip-types/${drip.slug}`}
                  className="rounded-xl border border-sky-200 bg-sky-50 p-4 hover:border-sky-400 transition"
                >
                  <p className="font-bold text-sky-700 mb-1">{drip.label}</p>
                  <p className="text-sm text-gray-600">{drip.reason}</p>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">What to Expect</h2>
            <p className="text-gray-700 leading-relaxed">
              A Myers&apos; Cocktail session for anxiety takes 30–45 minutes. The infusion begins slowly to gauge tolerance — some patients feel a warm, flushed sensation from the magnesium and a characteristic metallic taste from B vitamins, both of which are normal and brief. Most patients feel noticeably more relaxed by the end of the session. A series of 4–6 weekly infusions provides cumulative benefit, with monthly maintenance infusions thereafter. Mobile IV therapy can administer the infusion at home, eliminating travel stress — particularly helpful for anxiety patients.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-xl border border-gray-200 p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl bg-gray-50 border border-gray-200 p-6">
            <h2 className="font-bold text-gray-900 mb-4">Related Guides</h2>
            <div className="grid grid-cols-2 gap-2">
              {[
                { href: '/iv-drip-types/myers-cocktail', label: "Myers' Cocktail Guide" },
                { href: '/what-is-in-a-myers-cocktail', label: "What's in a Myers' Cocktail?" },
                { href: '/iv-therapy-benefits', label: 'IV Therapy Benefits' },
                { href: '/is-iv-therapy-safe', label: 'Is IV Therapy Safe?' },
                { href: '/mobile-iv-therapy', label: 'Mobile IV Therapy' },
                { href: '/how-often-should-you-get-iv-therapy', label: 'How Often to Get IV Therapy?' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-sky-600 hover:text-sky-700 hover:underline">
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
