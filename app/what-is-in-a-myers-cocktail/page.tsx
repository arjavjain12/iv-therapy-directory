import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "What Is In a Myers' Cocktail? — Ingredients, Benefits & Cost",
  description: "What's in a Myers' Cocktail IV drip? Full ingredient list: magnesium, calcium, B vitamins, vitamin C + saline. Benefits, cost, and who it's best for.",
  alternates: { canonical: '/what-is-in-a-myers-cocktail' },
}

const INGREDIENTS = [
  { name: 'Magnesium Chloride', dose: '200–400mg', role: 'Muscle relaxation, energy production, migraine prevention, supports 300+ enzymatic reactions' },
  { name: 'Calcium Gluconate', dose: '100–200mg', role: 'Bone health, nerve function, muscle contraction, cardiac function' },
  { name: 'B-Complex Vitamins', dose: 'B1, B2, B3, B5, B6', role: 'Energy metabolism, neurotransmitter synthesis, red blood cell production' },
  { name: 'Vitamin B12 (Methylcobalamin)', dose: '1,000–5,000mcg', role: 'Nerve health, DNA synthesis, energy, mood regulation' },
  { name: 'Vitamin C (Ascorbic Acid)', dose: '2,000–10,000mg', role: 'Immune support, collagen synthesis, antioxidant protection' },
  { name: 'Sterile Saline or Sterile Water', dose: '250–500mL', role: 'Hydration base, electrolyte balance, vehicle for other nutrients' },
]

const FAQS = [
  { question: "Who invented the Myers' Cocktail?", answer: "The Myers' Cocktail was developed by Dr. John Myers, a physician at Johns Hopkins University, who used IV nutrient therapy from the 1960s until his death in 1984. The protocol was later documented and published by Dr. Alan Gaby, who continued and refined the formula. It remains the most evidence-based IV therapy protocol available." },
  { question: "What conditions is the Myers' Cocktail used for?", answer: "The Myers' Cocktail has published research supporting its use for: fatigue and chronic fatigue syndrome, fibromyalgia, acute and chronic migraines, upper respiratory infections, asthma attacks, seasonal allergies, cardiovascular disease support, and general micronutrient deficiency replenishment." },
  { question: "How often should you get a Myers' Cocktail?", answer: "For general wellness, monthly Myers' Cocktail infusions are common. For specific conditions (migraines, fibromyalgia, chronic fatigue), providers often recommend weekly sessions for 4–8 weeks, then biweekly or monthly maintenance. Many wellness-focused individuals get biweekly sessions as a proactive health strategy." },
  { question: "How much does a Myers' Cocktail cost?", answer: "A Myers' Cocktail IV drip typically costs $149–$275 per session. Prices vary by location, clinic type, and add-ons. Monthly memberships at IV clinics can reduce per-session costs to $99–$149. Mobile Myers' Cocktail delivery adds $20–50." },
  { question: "What's the difference between a Myers' Cocktail and other IV drips?", answer: "The Myers' Cocktail is a specific, evidence-based formulation of magnesium, calcium, B vitamins, and vitamin C developed by Dr. John Myers. Other drips target more specific goals: a hangover drip focuses on hydration and anti-nausea; an immunity drip emphasizes high-dose vitamin C and zinc; NAD+ is specifically for cellular energy and anti-aging." },
]

export default function WhatIsInAMyersCocktailPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "What Is in a Myers' Cocktail?",
    description: "What's in a Myers' Cocktail IV drip? Full ingredient list: magnesium, calcium, B vitamins, vitamin C + saline. Benefits, cost, and who it's best for.",
    datePublished: '2026-01-01',
    dateModified: '2026-02-24',
    author: { '@type': 'Organization', name: 'IVList', url: 'https://ivlist.com' },
    publisher: { '@type': 'Organization', name: 'IVList', url: 'https://ivlist.com' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ivlist.com/what-is-in-a-myers-cocktail' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: "What Is in a Myers' Cocktail?" },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            What Is in a Myers&apos; Cocktail?
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            The complete ingredient guide to the most evidence-based IV therapy protocol, developed by Dr. John Myers at Johns Hopkins.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <p className="text-gray-600 leading-relaxed text-lg">
          The Myers&apos; Cocktail is the gold standard of IV therapy — a carefully balanced formula of magnesium, calcium, B vitamins, and vitamin C in a sterile saline base. Developed by Dr. John Myers in the 1960s and published by Dr. Alan Gaby, it remains the most studied and widely offered IV drip in the world.
        </p>

        {/* Ingredients table */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Myers&apos; Cocktail Ingredients</h2>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Ingredient</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Typical Dose</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Function</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {INGREDIENTS.map((ing) => (
                  <tr key={ing.name} className="bg-white">
                    <td className="px-4 py-3 font-semibold text-gray-900">{ing.name}</td>
                    <td className="px-4 py-3 text-gray-600">{ing.dose}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{ing.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-xl border border-sky-200 bg-sky-50 p-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Find Myers&apos; Cocktail Near You</h2>
          <Link href="/iv-therapy-near-me"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-8 py-3 font-bold text-white hover:bg-sky-700 transition">
            Find IV Therapy Near Me →
          </Link>
        </div>

        <FAQ items={FAQS} title="Myers' Cocktail — Frequently Asked Questions" />

        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: "Myers' Cocktail Drip Guide", href: '/iv-drip-types/myers-cocktail' },
              { label: 'IV Therapy for Hangover', href: '/iv-therapy/hangover' },
              { label: 'IV Therapy Benefits', href: '/iv-therapy-benefits' },
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
