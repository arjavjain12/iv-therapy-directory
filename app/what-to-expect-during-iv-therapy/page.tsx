import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "What to Expect During IV Therapy — First-Timer's Guide (2026)",
  description: 'Step-by-step guide to your first IV therapy session — from arrival and intake to insertion, infusion, and aftercare. Know exactly what happens.',
  alternates: { canonical: '/what-to-expect-during-iv-therapy' },
}

const FAQS = [
  {
    question: 'Does IV therapy hurt?',
    answer: 'The insertion involves a mild pinch lasting about 1–2 seconds as the needle places the catheter. Once the catheter is in place, the needle is removed and only the soft, flexible tube remains — you should feel nothing after that point. The infusion itself is painless. Most first-timers are pleasantly surprised by how quick and low-key the needle portion actually is.',
  },
  {
    question: 'Can I use my phone during IV therapy?',
    answer: 'Absolutely. You will be comfortably seated for 30–90 minutes depending on your drip type, and most patients use this time to scroll their phone, listen to a podcast, watch something, or simply relax. Just keep the arm with the IV relatively still — you can use your other hand freely.',
  },
  {
    question: 'What if I feel dizzy during IV therapy?',
    answer: 'Tell your nurse immediately. Light-headedness during IV therapy is usually caused by not eating beforehand or by a blood pressure drop from certain components like magnesium. Your nurse can slow the drip rate, recline your chair, and give you a snack. It is easily managed — the key is not to stay silent and push through it.',
  },
  {
    question: 'How long is a typical IV therapy session?',
    answer: 'A typical IV therapy session runs 30–90 minutes depending on the drip type. Basic hydration drips can take 30–45 minutes. Myers\' Cocktail, immunity, hangover, and beauty drips typically take 45–60 minutes. NAD+ therapy is the longest at 90 minutes or more, as it must be infused slowly to minimize side effects.',
  },
  {
    question: 'Can I leave during my IV infusion?',
    answer: 'No — you remain seated with the IV in place for the full duration of the drip. Walking around with an active IV line risks dislodging the catheter and creating a safety issue. If you need to use the restroom, your nurse can pause the drip and accompany you. Plan your schedule so you have the full session time available.',
  },
]

export default function WhatToExpectDuringIVTherapyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "What to Expect During IV Therapy — First-Timer's Complete Guide",
    description: 'Step-by-step guide to your first IV therapy session — from arrival and intake to insertion, infusion, and aftercare. Know exactly what happens.',
    datePublished: '2026-01-01',
    dateModified: '2026-02-24',
    author: { '@type': 'Organization', name: 'IVTherapyListing', url: 'https://ivtherapylisting.com' },
    publisher: { '@type': 'Organization', name: 'IVTherapyListing', url: 'https://ivtherapylisting.com' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ivtherapylisting.com/what-to-expect-during-iv-therapy' },
  }

  const howToLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'What to Expect During IV Therapy',
    description: 'Step-by-step walkthrough of an IV therapy session from arrival to aftercare',
    step: [
      { '@type': 'HowToStep', name: 'Arrive and check in', text: 'Arrive at the clinic or welcome your mobile nurse. Complete intake paperwork and health history form.' },
      { '@type': 'HowToStep', name: 'Complete health intake form', text: 'Fill out a health history form covering medications, allergies, current symptoms, and health goals.' },
      { '@type': 'HowToStep', name: 'Nurse reviews your history', text: 'Your registered nurse reviews your intake form, confirms your drip selection, and asks clarifying questions about allergies and conditions.' },
      { '@type': 'HowToStep', name: 'IV insertion', text: 'The nurse applies a tourniquet, locates a suitable vein, cleans the site, and inserts the IV catheter. The needle is removed immediately after placement — only the soft catheter remains.' },
      { '@type': 'HowToStep', name: 'Relax during infusion', text: 'Sit comfortably for 30–90 minutes while the drip runs. You can use your phone, read, or rest. Your nurse checks in periodically.' },
      { '@type': 'HowToStep', name: 'IV removal and aftercare', text: 'Once the bag is empty, the nurse removes the catheter and applies a small bandage. You receive aftercare instructions and are free to go.' },
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
            { label: 'What to Expect During IV Therapy' },
          ]} />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            What to Expect During IV Therapy — First-Timer's Complete Guide
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            A step-by-step walkthrough of your first IV therapy session — from arrival to aftercare, with no surprises.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

        {/* Intro */}
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 text-base leading-relaxed">
            If you have never had IV therapy before, the unknown can feel daunting — especially if needles make you nervous. The good news is that the process is straightforward, professionally managed by registered nurses, and far more comfortable than most first-timers expect. This guide walks you through every stage of a standard IV therapy session so you know exactly what is coming before you walk through the door.
          </p>
        </div>

        {/* Step-by-Step Timeline */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step: Your IV Therapy Session</h2>
          <div className="space-y-4">
            {[
              {
                num: 1,
                time: '5 min',
                title: 'Arrival and Check-In',
                body: 'Arrive at the clinic (or welcome your mobile nurse if you booked at-home service). You will check in at the front desk, verify your appointment, and complete an intake form covering your health history, current medications, allergies, and the reason for your visit. First-time patients fill out a more detailed new patient form. This is routine and typically takes about 5 minutes.',
              },
              {
                num: 2,
                time: '5–10 min',
                title: 'Provider Consultation',
                body: 'A registered nurse (RN) — who will administer your IV — reviews your intake form, confirms your selected drip, and asks any clarifying questions. They will verify allergies, ask about any medications that could interact with the drip components, and make sure you have eaten and are hydrated. This is also the time to ask your own questions about what to expect. Your nurse will walk you through exactly what they are about to do.',
              },
              {
                num: 3,
                time: '5 min',
                title: 'Getting Comfortable',
                body: 'You are seated in a comfortable reclining chair — similar to a dentist\'s chair but typically more relaxed. Your non-dominant arm is usually preferred, though your nurse will assess both arms to find the best vein. A tourniquet is applied above the elbow to make the vein more prominent. The insertion site is cleaned with an alcohol swab.',
              },
              {
                num: 4,
                time: '1–2 min',
                title: 'IV Insertion',
                body: 'Your nurse inserts a small needle into the vein to place the IV catheter. This is the moment most people are anxious about — and it is almost always anticlimactic. You will feel a brief, mild pinch lasting about one to two seconds. The needle is immediately withdrawn once the catheter is in place; only the soft, flexible plastic tube remains in your vein. The catheter is secured with medical tape. You should feel no discomfort from this point forward.',
              },
              {
                num: 5,
                time: '30–90 min',
                title: 'The Infusion',
                body: 'The IV bag is connected and the drip begins. You relax in your chair for the remainder of the session — typically 30–90 minutes depending on your drip type. Most patients use this time to read, browse their phone, listen to music or a podcast, or simply rest. Your nurse will check in periodically to ensure the drip rate is comfortable and ask how you are feeling. Some sensations during infusion are completely normal and expected — see the section below.',
              },
              {
                num: 6,
                time: '5 min',
                title: 'Removal and Aftercare',
                body: 'Once the IV bag is empty, your nurse removes the catheter and applies light pressure with gauze, followed by a small adhesive bandage over the insertion site. They will give you brief aftercare instructions — typically to drink water, avoid strenuous exercise for a couple of hours, and monitor the insertion site for any unusual swelling. You are free to go immediately.',
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex-shrink-0">
                  <div className="w-9 h-9 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-sm mb-1">
                    {step.num}
                  </div>
                  <div className="text-xs text-gray-400 text-center font-medium">{step.time}</div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Sensations */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Sensations During IV Therapy</h2>
          <p className="text-sm text-gray-600 mb-4">These are all normal and expected — not signs of a problem:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { sensation: 'Coolness along your arm', explanation: 'IV fluid is delivered at room temperature, which feels cool as it enters your bloodstream. This is completely normal and fades within a few minutes as your body equilibrates.' },
              { sensation: 'Slight metallic or vitamin taste', explanation: 'B vitamins — particularly B12 and B-complex — are commonly associated with a mild metallic or earthy taste. It is harmless and usually fades after a few minutes.' },
              { sensation: 'Warm flushing or warmth through your chest', explanation: 'Magnesium (found in Myers\' Cocktail and many other drips) commonly causes a warm, flushing sensation. Your nurse can slow the drip rate to reduce this if it becomes uncomfortable.' },
              { sensation: 'Light-headedness or mild dizziness', explanation: 'Usually the result of not eating beforehand or a minor blood pressure fluctuation. Tell your nurse — they will slow the rate, recline your chair, and offer a snack. Easily managed.' },
            ].map((item) => (
              <div key={item.sensation} className="rounded-xl border border-sky-100 bg-sky-50 p-4">
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{item.sensation}</h3>
                <p className="text-sm text-gray-600">{item.explanation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Needle Anxiety Box */}
        <div className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3">What If I'm Nervous About Needles?</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Needle anxiety is extremely common — and IV therapy nurses deal with it every single day. Here are a few things that help:
          </p>
          <ul className="space-y-2">
            {[
              'Tell your nurse upfront. They will talk you through each step before doing it, so nothing comes as a surprise.',
              'Look away during insertion. You do not need to watch — many people find this makes a big difference.',
              'Breathe slowly and deliberately. A slow exhale during insertion reduces perceived pain significantly.',
              'Remember the needle is temporary. It is removed within seconds of placement — only the soft catheter remains for the session.',
              'Know that most people who are afraid of needles are surprised by how quick and mild the insertion actually is.',
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-sky-500 font-bold shrink-0 mt-0.5">→</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* After Your Session */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">After Your Session — What to Expect</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Drink water', desc: 'Continue hydrating after your session. You just received 500ml–1 liter of fluids, but ongoing hydration helps sustain the effects.' },
              { title: 'Avoid strenuous exercise for 2 hours', desc: 'Light activity is fine, but skip intense workouts for 2 hours post-session to let your body absorb the nutrients.' },
              { title: 'Expect energy within hours', desc: 'Many patients feel effects — improved energy, reduced fatigue, headache relief — within 30–60 minutes of completing the drip.' },
              { title: 'Minor bruising at the site is normal', desc: 'A small bruise at the insertion point is common and resolves within a few days. Apply a cold compress if sore.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <FAQ items={FAQS} title="What to Expect During IV Therapy — Frequently Asked Questions" />

        {/* Related Guides */}
        <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'How to Prepare for IV Therapy', href: '/how-to-prepare-for-iv-therapy' },
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
