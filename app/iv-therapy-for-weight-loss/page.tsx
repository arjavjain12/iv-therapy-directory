import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ivlist.com'

export const metadata: Metadata = {
  title: 'IV Therapy for Weight Loss — What Works & What Doesn\'t (2026)',
  description:
    'Can IV therapy help with weight loss? Learn which drips support metabolism, fat burning, and energy. Honest guide covering lipotropic injections, B12, carnitine, and what to realistically expect.',
  alternates: { canonical: '/iv-therapy-for-weight-loss' },
  openGraph: {
    title: 'IV Therapy for Weight Loss — What Works & What Doesn\'t',
    description: 'Which IV drips support weight loss? B12, carnitine, lipotropic injections, and metabolism-boosting compounds explained.',
    url: `${BASE_URL}/iv-therapy-for-weight-loss`,
  },
}

const faqs = [
  {
    question: 'Can IV therapy help you lose weight?',
    answer:
      'IV therapy is not a direct weight loss treatment — it cannot burn fat or replace diet and exercise. However, certain IV drips support the metabolic processes that influence weight management: B12 and B-complex boost energy metabolism and reduce fatigue that often leads to inactivity. Carnitine helps transport fatty acids into mitochondria for energy use. Alpha-lipoic acid improves insulin sensitivity. MIC (methionine, inositol, choline) compounds support liver fat metabolism. These work best as adjuncts to an active lifestyle, not standalone treatments.',
  },
  {
    question: 'What is a weight loss IV drip?',
    answer:
      'A "weight loss IV drip" typically contains a combination of: B-complex vitamins (B1, B2, B3, B5, B6) for metabolism, vitamin B12 for energy, L-carnitine for fat transport into cells, alpha-lipoic acid (ALA) for insulin sensitivity and antioxidant support, and MIC compounds (methionine, inositol, choline) that support fat metabolism in the liver. Some versions also include vitamin C and chromium. These are often called "Skinny drips" or "Metabolism drips" at wellness clinics.',
  },
  {
    question: 'What are lipotropic injections vs. IV therapy for weight loss?',
    answer:
      'Lipotropic injections (commonly called "lipo shots" or "MIC shots") are intramuscular injections — not IV — that deliver methionine, inositol, and choline directly into muscle. They are faster and cheaper than IV but deliver a smaller volume. IV therapy allows higher doses of more nutrients delivered directly to the bloodstream, but takes longer. Many clinics offer both; some weight management programs use weekly lipotropic shots plus periodic IV drips.',
  },
  {
    question: 'How much does a weight loss IV drip cost?',
    answer:
      'Weight loss or metabolism IV drips typically cost $150–$350 per session. The price varies based on the specific ingredients, your city, and the clinic. Sessions are typically 45–60 minutes. Many weight management programs offer package pricing (5 or 10 sessions) at a discount.',
  },
  {
    question: 'How often should I get IV therapy for weight loss?',
    answer:
      'Most weight management protocols suggest 1–2 sessions per week during active weight loss phases, then monthly maintenance. Consistency matters more than frequency — sporadic sessions have limited cumulative effect. Most clinics recommend pairing IV therapy with a caloric deficit and regular exercise for meaningful results.',
  },
  {
    question: 'Does B12 IV therapy help with weight loss?',
    answer:
      'Vitamin B12 deficiency — common in people with restricted diets, vegetarians, vegans, and older adults — causes fatigue and metabolic slowdown that can contribute to weight gain. IV B12 therapy corrects deficiency rapidly and can restore energy levels, making it easier to exercise and stay active. However, B12 supplementation does not cause fat loss in people who are not deficient. If you have normal B12 levels, additional B12 will not accelerate weight loss.',
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
  headline: 'IV Therapy for Weight Loss — What Works and What Doesn\'t',
  description: metadata.description as string,
  datePublished: '2026-01-01',
  dateModified: '2026-02-26',
  author: { '@type': 'Organization', name: 'IVList', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'IVList', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/iv-therapy-for-weight-loss` },
}

export default function IVTherapyForWeightLossPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            IV Therapy for Weight Loss
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            IV therapy won&apos;t melt fat on its own — but the right drip can boost your metabolism, correct nutrient deficiencies that slow weight loss, and give you the energy to stay consistent with exercise. Here&apos;s what the evidence actually supports.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* Honest expectations */}
        <section className="rounded-xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Honest Expectations</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            IV therapy is a <strong>metabolic support tool</strong>, not a fat burner. It will not cause significant weight loss on its own. What it can do: correct nutrient deficiencies that impair metabolism, boost energy to support exercise, and support liver function and fat processing. Think of it as optimizing your body&apos;s engine — but you still have to drive.
          </p>
        </section>

        {/* What actually helps */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What IV Ingredients Support Weight Management</h2>
          <div className="space-y-4">
            {[
              {
                name: 'B-Complex Vitamins',
                role: 'B vitamins are essential cofactors in energy metabolism — they help convert carbohydrates, proteins, and fats into usable energy. Deficiency causes fatigue and sluggish metabolism.',
                evidence: 'Strong for correcting deficiency. Minimal effect if levels are normal.',
              },
              {
                name: 'Vitamin B12',
                role: 'Supports red blood cell production, DNA synthesis, and neurological function. Deficiency is extremely common in dieters and vegetarians and causes fatigue that undermines exercise consistency.',
                evidence: 'Strong for deficiency correction. Limited weight loss effect without deficiency.',
              },
              {
                name: 'L-Carnitine',
                role: 'Transports long-chain fatty acids into mitochondria for beta-oxidation (fat burning). IV delivery achieves significantly higher plasma levels than oral supplementation.',
                evidence: 'Moderate evidence for fat oxidation support, especially during exercise.',
              },
              {
                name: 'Alpha-Lipoic Acid (ALA)',
                role: 'Potent antioxidant that improves insulin sensitivity and reduces oxidative stress. Better insulin sensitivity means more efficient glucose metabolism and less fat storage.',
                evidence: 'Moderate evidence for insulin sensitivity. Some studies show modest weight loss.',
              },
              {
                name: 'MIC (Methionine, Inositol, Choline)',
                role: 'Lipotropic compounds that support fat metabolism in the liver, bile production, and fat export from liver cells. Often added to weight management drips.',
                evidence: 'Limited direct evidence for weight loss, but supports healthy liver fat metabolism.',
              },
            ].map((ing) => (
              <div key={ing.name} className="rounded-xl border border-gray-200 p-5">
                <p className="font-bold text-gray-900 mb-1">{ing.name}</p>
                <p className="text-sm text-gray-700 mb-2">{ing.role}</p>
                <p className="text-xs text-gray-500 bg-gray-50 rounded px-3 py-1.5 inline-block">Evidence: {ing.evidence}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related drip types */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Best IV Drips for Metabolic Support</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { slug: 'myers-cocktail', label: "Myers' Cocktail", reason: 'Broad-spectrum B vitamins, magnesium, and vitamin C support energy metabolism and address common deficiencies.' },
              { slug: 'nad-plus', label: 'NAD+', reason: 'Supports mitochondrial efficiency and sirtuins (longevity proteins linked to metabolic health and fat regulation).' },
              { slug: 'b12', label: 'Vitamin B12', reason: 'Fast correction of B12 deficiency — the most common deficiency causing fatigue-driven weight gain.' },
            ].map((drip) => (
              <Link key={drip.slug} href={`/iv-drip-types/${drip.slug}`}
                className="rounded-xl border border-sky-200 bg-sky-50 p-4 hover:border-sky-400 transition">
                <p className="font-bold text-sky-700 mb-1">{drip.label}</p>
                <p className="text-sm text-gray-600">{drip.reason}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
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

        {/* Related */}
        <section className="rounded-xl bg-gray-50 border border-gray-200 p-6">
          <h2 className="font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-2 gap-2">
            {[
              { href: '/iv-drip-types/nad-plus', label: 'NAD+ IV Therapy' },
              { href: '/iv-drip-types/myers-cocktail', label: "Myers' Cocktail" },
              { href: '/iv-drip-types/b12', label: 'Vitamin B12 IV' },
              { href: '/iv-therapy-benefits', label: 'IV Therapy Benefits' },
              { href: '/iv-therapy-cost', label: 'IV Therapy Cost Guide' },
              { href: '/iv-therapy-near-me', label: 'Find IV Near Me' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-sky-600 hover:text-sky-700 hover:underline">
                {link.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
