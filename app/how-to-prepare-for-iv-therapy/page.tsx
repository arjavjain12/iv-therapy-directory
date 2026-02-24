import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'How to Prepare for IV Therapy — Pre-Session Checklist (2026)',
  description: 'Complete guide to preparing for your IV therapy session. What to eat, drink, wear, and disclose to your provider before your first IV drip.',
  alternates: { canonical: '/how-to-prepare-for-iv-therapy' },
}

const FAQS = [
  {
    question: 'Should I eat before IV therapy?',
    answer: 'Yes — eat a light meal 1–2 hours before your IV therapy session. Avoid heavy, fatty foods. Coming in on an empty stomach can cause light-headedness or dizziness during the infusion, especially if your blood pressure is already low.',
  },
  {
    question: 'How much water should I drink before an IV drip?',
    answer: 'Drink 16–32 oz (2–4 glasses) of water in the 2 hours before your appointment. Good baseline hydration makes your veins more prominent and accessible, which means easier IV insertion and better treatment efficacy.',
  },
  {
    question: 'What should I wear to an IV therapy appointment?',
    answer: 'Wear a short-sleeved shirt or loose layers that can be easily rolled up above the elbow. The nurse needs clear, unobstructed access to your inner elbow or forearm for IV insertion. Avoid tight long sleeves, compression garments, or anything that restricts arm access.',
  },
  {
    question: 'Can I drink coffee before IV therapy?',
    answer: 'It\'s best to limit caffeine the morning of your session. Caffeine is a vasoconstrictor — it causes blood vessels to narrow, which makes vein access harder and can require more attempts at insertion. One cup is unlikely to cause problems, but avoid heavy caffeine consumption.',
  },
  {
    question: 'Do I need to fast before IV therapy?',
    answer: 'No — fasting before IV therapy is not recommended and can actually be counterproductive. An empty stomach can cause light-headedness, dizziness, and discomfort during your session. Eat a light meal 1–2 hours beforehand for the best experience.',
  },
]

export default function HowToPrepareForIVTherapyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Prepare for IV Therapy — Complete Pre-Session Guide',
    description: 'Complete guide to preparing for your IV therapy session. What to eat, drink, wear, and disclose to your provider before your first IV drip.',
    datePublished: '2026-01-01',
    dateModified: '2026-02-24',
    author: { '@type': 'Organization', name: 'IVTherapyListing', url: 'https://ivtherapylisting.com' },
    publisher: { '@type': 'Organization', name: 'IVTherapyListing', url: 'https://ivtherapylisting.com' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ivtherapylisting.com/how-to-prepare-for-iv-therapy' },
  }

  const howToLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Prepare for IV Therapy',
    description: 'Step-by-step preparation guide for your IV therapy session',
    step: [
      { '@type': 'HowToStep', name: 'Hydrate well beforehand', text: 'Drink 16–32oz of water in the 2 hours before your appointment. Good baseline hydration makes vein access easier and improves treatment efficacy.' },
      { '@type': 'HowToStep', name: 'Eat a light meal', text: 'Have a light meal 1–2 hours before. Avoid heavy, fatty foods. An empty stomach can cause light-headedness during infusion.' },
      { '@type': 'HowToStep', name: 'Wear comfortable, loose clothing', text: 'Wear a short-sleeved shirt or loose layers. The nurse needs easy access to your inner elbow or forearm for IV insertion.' },
      { '@type': 'HowToStep', name: 'Disclose medications and conditions', text: 'Tell your provider all medications, supplements, allergies, and medical conditions before the session. This determines which drip formula is safe for you.' },
      { '@type': 'HowToStep', name: 'Avoid alcohol and stimulants', text: 'Avoid alcohol for 24 hours before. Limit caffeine the morning of your session — caffeine causes vasoconstriction that makes vein access harder.' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs crumbs={[
            { label: 'Home', href: '/' },
            { label: 'IV Therapy Benefits', href: '/iv-therapy-benefits' },
            { label: 'How to Prepare for IV Therapy' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            How to Prepare for IV Therapy — Complete Pre-Session Guide
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Simple steps to get the most from your IV drip — what to eat, drink, wear, and tell your provider before your session.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

        {/* Intro */}
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 text-base leading-relaxed">
            Proper preparation makes a meaningful difference in your IV therapy experience. Well-hydrated patients have more accessible veins, which means easier insertion and less discomfort. A light meal prevents light-headedness. Disclosing your medications ensures your nurse selects a formula that is both safe and effective for your specific situation. Whether it is your first session or your tenth, this checklist covers everything you need to do in the 24 hours before your appointment.
          </p>
        </div>

        {/* 5-Step Checklist */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">5-Step Pre-Session Checklist</h2>
          <div className="space-y-4">
            {[
              {
                num: 1,
                title: 'Hydrate Well — Drink 16–32 oz Water in the 2 Hours Before',
                body: 'Adequate pre-session hydration is the single most important thing you can do before an IV drip. Well-hydrated veins are plumper, more visible, and far easier to access on the first attempt. Aim for 16–32 oz (2–4 full glasses) of water in the two hours leading up to your appointment. Avoid arriving thirsty — dehydrated veins collapse more easily and can require multiple insertion attempts.',
              },
              {
                num: 2,
                title: 'Eat a Light Meal 1–2 Hours Before Your Session',
                body: 'Have a light, easily digestible meal or snack about 1–2 hours before your IV therapy appointment. A banana, toast, yogurt, or a small sandwich works well. Avoid heavy, fatty, or greasy foods that sit in your stomach. Coming in completely fasted puts you at risk for light-headedness, nausea, and a drop in blood pressure during the infusion — none of which add to the experience.',
              },
              {
                num: 3,
                title: 'Wear Loose, Short-Sleeved Clothing for Easy Vein Access',
                body: 'Dress practically for your appointment. A short-sleeved shirt is ideal — or wear loose layers you can easily roll up above the elbow. Your nurse needs unobstructed access to the inner elbow (antecubital fossa) or forearm to insert the IV catheter. Tight long sleeves, compression garments, or bulky sweaters create unnecessary obstacles and slow down your check-in.',
              },
              {
                num: 4,
                title: 'Disclose All Medications, Supplements, Allergies, and Conditions',
                body: 'Before every session, your provider will complete a health intake. This is not a formality — it determines which drip formula is safe for your specific situation. Be thorough: disclose all prescription medications, over-the-counter drugs, vitamins and supplements, known allergies (especially to IV components like sulfites or preservatives), and any chronic health conditions. High-dose vitamin C, for example, is contraindicated in people with G6PD deficiency. Your safety depends on this information.',
              },
              {
                num: 5,
                title: 'Avoid Alcohol for 24 Hours and Limit Caffeine Morning-Of',
                body: 'Skip alcohol for at least 24 hours before your session. Alcohol is a diuretic that worsens dehydration, exactly the opposite of what you want going into an IV therapy appointment. On the morning of your session, limit caffeine intake. Caffeine is a vasoconstrictor — it narrows blood vessels, making your veins harder to locate and access. One cup of coffee is generally fine; multiple espresso shots before your appointment are not ideal.',
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-sm">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What to Bring */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Bring to Your IV Therapy Appointment</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Government-Issued ID', desc: 'Most clinics require ID for patient records, especially on your first visit.' },
              { title: 'Medication List', desc: 'Write down all current medications, dosages, and supplements — or take a photo of your medication bottles.' },
              { title: 'Payment Method', desc: 'Bring your preferred payment (card, HSA/FSA card, cash). Check ahead whether the clinic accepts your method.' },
              { title: 'Entertainment', desc: 'You will be seated for 30–90 minutes. Bring a book, headphones, podcast, or just plan to scroll your phone.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What NOT to Do */}
        <div className="rounded-xl border border-red-200 bg-red-50 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">What NOT to Do Before IV Therapy</h2>
          <ul className="space-y-3">
            {[
              { title: "Don't fast completely", desc: "Skipping all food before your session is one of the most common mistakes. An empty stomach dramatically increases your risk of light-headedness, dizziness, and nausea during the infusion." },
              { title: "Don't arrive highly caffeinated", desc: "Multiple coffees or energy drinks before your session cause vasoconstriction — narrowing of your blood vessels — which makes vein access significantly harder and increases insertion attempts." },
              { title: "Don't conceal medical conditions or medications", desc: "Withholding health information from your provider is a genuine safety risk. Certain IV components interact with medications or are contraindicated in specific conditions. Always disclose everything, even if it seems unrelated." },
            ].map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <span className="text-red-500 font-bold shrink-0 mt-0.5">✗</span>
                <div>
                  <span className="font-semibold text-gray-900">{item.title}: </span>
                  <span className="text-sm text-gray-700">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* For First-Timers */}
        <div className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">A Note for First-Time IV Therapy Patients</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            It is completely normal to feel a little nervous before your first IV therapy session, especially if you are not a fan of needles. Know that the insertion process is quick — a small needle places a flexible catheter in your vein, the needle is then removed, and only the soft catheter remains. Most patients describe it as a mild pinch that lasts less than two seconds.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Your nurse will walk you through every step before they begin, explain what they are doing, and answer all your questions. If at any point during the session you feel uncomfortable, simply tell your nurse — they can adjust the drip rate, reposition, or stop entirely. You are in control throughout the entire session.
          </p>
        </div>

        {/* FAQ */}
        <FAQ items={FAQS} title="How to Prepare for IV Therapy — Frequently Asked Questions" />

        {/* Related Guides */}
        <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'What to Expect During IV Therapy', href: '/what-to-expect-during-iv-therapy' },
              { label: 'How Often Should You Get IV Therapy', href: '/how-often-should-you-get-iv-therapy' },
              { label: 'IV Therapy Benefits', href: '/iv-therapy-benefits' },
              { label: 'Is IV Therapy Safe', href: '/is-iv-therapy-safe' },
              { label: 'IV Therapy Cost', href: '/iv-therapy-cost' },
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
