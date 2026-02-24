import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: 'IV Therapy Certification — Training, Classes & Business Guide (2026)',
  description:
    'Complete guide to IV therapy certification: accredited courses, CE hours, state regulations, LPN and RN requirements, and how to start an IV therapy business or franchise in 2026.',
  alternates: { canonical: '/iv-therapy-certification' },
}

const FAQS = [
  {
    question: 'Do I need special certification to administer IV therapy?',
    answer:
      'Requirements vary by state. In most states, IV therapy must be administered by or under the direct supervision of a licensed registered nurse (RN), licensed paramedic, or physician. LPNs can administer IVs in many states but not all. Unlicensed individuals cannot legally administer IV therapy in any U.S. state. Beyond your base licensure, most employers and mobile IV businesses also require completion of an IV therapy certification course (typically 8–40 CE hours) and demonstrated clinical competency.',
  },
  {
    question: 'Can an LPN administer IV therapy?',
    answer:
      'It depends on your state\'s Nurse Practice Act. Many states permit LPNs to administer IV medications and fluids under the supervision of a physician or RN. However, some states restrict LPN IV practice significantly. LPNs in states that allow IV therapy administration typically need to complete an IV certification course and may need to demonstrate competency. Always check with your state board of nursing before administering IVs as an LPN.',
  },
  {
    question: 'How long does it take to get IV therapy certified?',
    answer:
      'A basic IV therapy certification course takes 8–16 hours (one to two days) and covers venipuncture technique, IV solution types, rate calculations, complications, and documentation. Advanced courses covering specialized IV drips and compounding take 20–40 hours. The CRNI (Certified Registered Nurse Infusion) credential — the gold standard for infusion therapy specialists — requires at least 1,600 hours of infusion nursing experience before sitting for the exam.',
  },
  {
    question: 'How much does it cost to start an IV therapy business?',
    answer:
      'A mobile IV therapy business can be started for $15,000–$40,000 in startup capital, covering equipment (IV poles, medical supplies, refrigeration), a medical director agreement, business formation, insurance, and initial marketing. A brick-and-mortar IV clinic requires $50,000–$150,000+ depending on location, build-out, and equipment. Ongoing costs include pharmaceutical-grade IV solutions, professional liability insurance, and licensing fees. Revenue per nurse per day can range from $600 to $2,400 depending on session volume.',
  },
  {
    question: 'Do I need a medical director to run an IV therapy business?',
    answer:
      'In virtually all U.S. states, yes. An IV therapy business must operate under the oversight of a licensed physician (MD or DO) who serves as the medical director. The medical director approves treatment protocols, signs standing orders, and is available for clinical consultation. Medical director agreements typically cost $500–$3,000/month depending on scope of involvement. This is a non-negotiable legal requirement, not optional.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'IV Therapy Certification — Training, Classes & Business Guide (2026)',
  description:
    'Complete guide to IV therapy certification, training programs, state regulations, and starting an IV therapy business.',
  datePublished: '2026-01-01',
  dateModified: '2026-02-01',
  author: { '@type': 'Organization', name: 'IV Therapy Directory' },
  publisher: { '@type': 'Organization', name: 'IV Therapy Directory' },
}

export default function IVTherapyCertificationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs
            crumbs={[
              { label: 'Home', href: '/' },
              { label: 'IV Therapy Certification' },
            ]}
          />
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
            IV Therapy Certification — How to Become a Certified IV Therapist
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            A complete guide for RNs, LPNs, paramedics, NPs, and physicians who want to administer IV therapy, get certified, or launch their own IV therapy practice or mobile business.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

        {/* Audience callout */}
        <div className="rounded-xl border border-sky-200 bg-sky-50 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Who This Guide Is For</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            This page is for licensed healthcare professionals and entrepreneurs who want to enter the IV therapy industry — whether as a provider, employee, or business owner. If you are a patient looking for a clinic near you, visit our{' '}
            <Link href="/iv-therapy-near-me" className="text-sky-600 hover:underline font-medium">
              IV therapy near me
            </Link>{' '}
            directory instead.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Registered Nurses (RN)', 'Licensed Practical Nurses (LPN)', 'Paramedics / EMTs', 'Nurse Practitioners (NP)', 'Physicians (MD/DO)', 'Entrepreneurs'].map((role) => (
              <span key={role} className="bg-sky-100 text-sky-700 text-xs font-medium px-3 py-1 rounded-full">
                {role}
              </span>
            ))}
          </div>
        </div>

        {/* Who Can Administer IV Therapy */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Who Can Administer IV Therapy?
          </h2>
          <p className="text-gray-600 text-sm mb-5">
            IV therapy administration is governed by each state&apos;s scope of practice laws. Here is a general breakdown by license type. Always verify current rules with your state board of nursing or health department.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-5 py-3 text-left font-semibold text-gray-700">License</th>
                  <th className="px-5 py-3 text-left font-semibold text-gray-700">IV Authority</th>
                  <th className="px-5 py-3 text-left font-semibold text-gray-700">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {[
                  [
                    'Registered Nurse (RN)',
                    'Full IV authority in all states',
                    'Can insert IVs, hang fluids, administer IV meds under physician standing orders',
                  ],
                  [
                    'Licensed Practical Nurse (LPN)',
                    'Permitted in most states, restricted in some',
                    'May require RN/MD supervision; check your state Nurse Practice Act',
                  ],
                  [
                    'Paramedic (EMT-P)',
                    'Generally permitted',
                    'Strong IV skills from EMS training; some states require additional course for wellness IV settings',
                  ],
                  [
                    'Nurse Practitioner (NP)',
                    'Full authority',
                    'Can also write their own orders in most states; can serve as medical director in some states',
                  ],
                  [
                    'Physician (MD/DO)',
                    'Full authority',
                    'Can serve as medical director; rarely administers IVs directly in mobile IV setting',
                  ],
                  [
                    'Unlicensed individuals',
                    'Not permitted — illegal',
                    'IV administration without a license is illegal in all U.S. states',
                  ],
                ].map(([license, authority, notes]) => (
                  <tr key={license}>
                    <td className="px-5 py-3 font-medium text-gray-800">{license}</td>
                    <td className="px-5 py-3 text-gray-700">{authority}</td>
                    <td className="px-5 py-3 text-gray-500 text-xs">{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Certification Overview — Steps */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            IV Therapy Certification — Step-by-Step
          </h2>
          <div className="space-y-4">
            {[
              {
                step: '1',
                title: 'Verify Your State\'s IV Therapy Regulations',
                desc: 'Before anything else, review your state\'s Nurse Practice Act (or equivalent) and any applicable state health department regulations for IV therapy businesses. Some states have additional requirements beyond your professional license — for example, specific infusion center permits or requirements for physician oversight ratios. Your state board of nursing website is the primary reference.',
              },
              {
                step: '2',
                title: 'Complete an Accredited IV Therapy Course (20–40 CE Hours)',
                desc: 'Enroll in an accredited IV therapy certification course. Accredited courses are offered through nursing associations, community colleges, and specialized IV therapy training companies. Look for courses accredited by the Infusion Nurses Society (INS) or that award CE hours recognized by your state board. Courses cover venipuncture technique, IV solution pharmacology, complication recognition, and documentation. Hands-on lab time is essential.',
              },
              {
                step: '3',
                title: 'Pass Written and Practical Competency Assessments',
                desc: 'Most certification programs include a written exam covering IV therapy theory, and a practical skills assessment where you demonstrate venipuncture and IV setup on a simulation arm or human subject. Pass rates for students with strong clinical backgrounds are generally high. Some programs require demonstration of competency to a supervising instructor.',
              },
              {
                step: '4',
                title: 'Complete Supervised Clinical Hours (Varies by State)',
                desc: 'Depending on your state and employer, you may need to complete a set number of supervised clinical IV insertions before practicing independently. In a hospital or clinical setting, this is typically part of your orientation. For mobile IV businesses, a clinical preceptorship under an experienced RN or at an infusion center is recommended even if not legally mandated.',
              },
              {
                step: '5',
                title: 'Maintain Certification with Continuing Education',
                desc: 'IV therapy certification is typically renewed every 2 years. Renewal requires completion of continuing education hours related to infusion therapy. The Infusion Nurses Certification Corporation (INCC) oversees the CRNI credential and has specific CE requirements. Keep records of all CE completions and maintain your underlying professional license in good standing.',
              },
            ].map((item) => (
              <div key={item.step} className="rounded-xl border border-gray-200 bg-white p-5 flex gap-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Types of Certification */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Types of IV Therapy Certification
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: 'Basic IV Certification',
                hours: '8–16 CE hours',
                audience: 'RNs, LPNs, paramedics new to IV therapy',
                content: 'Venipuncture, IV fluid types, rate calculation, complication management, documentation',
                badge: 'Entry Level',
                badgeColor: 'bg-gray-100 text-gray-600',
              },
              {
                title: 'Advanced IV Therapy',
                hours: '20–40 CE hours',
                audience: 'Experienced IVR providers expanding scope',
                content: 'Specialized drips (NAD+, glutathione, high-dose vitamin C), compounding concepts, PICC line awareness, patient assessment',
                badge: 'Intermediate',
                badgeColor: 'bg-sky-100 text-sky-700',
              },
              {
                title: 'CRNI — Infusion Therapy Specialist',
                hours: 'Requires 1,600 hrs experience + exam',
                audience: 'Experienced RNs specializing in infusion',
                content: 'Comprehensive certification covering all infusion modalities, PICC/central lines, home infusion, oncology infusion',
                badge: 'Advanced Credential',
                badgeColor: 'bg-sky-600 text-white',
              },
            ].map((cert) => (
              <div key={cert.title} className="rounded-xl border border-gray-200 bg-white p-5 flex flex-col">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{cert.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ml-2 flex-shrink-0 ${cert.badgeColor}`}>
                    {cert.badge}
                  </span>
                </div>
                <div className="text-xs text-sky-600 font-medium mb-2">{cert.hours}</div>
                <p className="text-xs text-gray-500 mb-2">
                  <strong>For:</strong> {cert.audience}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">{cert.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Starting an IV Therapy Business */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Starting an IV Therapy Business
          </h2>
          <p className="text-gray-600 text-sm mb-5">
            The IV therapy industry has grown significantly, creating substantial opportunity for licensed healthcare professionals. Here is what you need to know before launching.
          </p>

          {/* Business steps */}
          <div className="space-y-3 mb-6">
            {[
              {
                title: 'Business Structure & Medical Director Requirement',
                desc: 'Form a business entity (LLC is most common). Most states require IV therapy businesses to operate under a licensed physician medical director who reviews and approves all treatment protocols, signs standing orders, and is available for consultation. Budget $500–$3,000/month for your medical director agreement. Some NPs with independent practice authority may serve this role in certain states.',
              },
              {
                title: 'State Regulations and Permits',
                desc: 'Contact your state health department and board of nursing to understand applicable regulations. Some states require a clinical laboratory license, pharmacy relationship documentation, or specific facility permits. Regulations vary widely — California, New York, and Florida have more complex requirements than many other states.',
              },
              {
                title: 'Equipment and Startup Costs',
                desc: 'Core startup equipment: IV poles and pumps ($150–$800 each), blood pressure and pulse oximetry monitors, IV start kits, refrigeration for medications, sharps disposal, emergency medications (diphenhydramine, epinephrine, and saline at minimum), and clinical supplies. A mobile setup costs $3,000–$8,000 in equipment. A fixed clinic requires additional exam chairs, IV stands, and potentially a dedicated compounding area.',
              },
              {
                title: 'Insurance Requirements',
                desc: 'You need professional liability (malpractice) insurance covering IV therapy specifically — many standard nursing malpractice policies exclude concierge wellness settings. Business general liability insurance is also required. Expect $1,500–$5,000/year for professional liability coverage. Verify that any contracted nurses carry their own professional liability as well.',
              },
              {
                title: 'Marketing and Finding Your First Clients',
                desc: 'The most effective marketing channels for IV therapy businesses: Google Business Profile optimization (claim and optimize for your city), medical-grade website with local SEO, partnerships with gyms and wellness centers, social media showcasing your clinical environment and staff credentials, and event partnerships (sports events, music festivals, wellness retreats). Patient referrals grow rapidly once you deliver consistently excellent care.',
              },
            ].map((item) => (
              <details key={item.title} className="group rounded-xl border border-gray-200 bg-white overflow-hidden">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-50 transition list-none">
                  <span className="font-semibold text-gray-900">{item.title}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform duration-200 text-lg leading-none">&#8964;</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {item.desc}
                </div>
              </details>
            ))}
          </div>

          {/* Mobile vs Clinic Comparison */}
          <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile IV vs. Fixed IV Clinic — Comparison</h3>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-5 py-3 text-left font-semibold text-gray-700">Factor</th>
                  <th className="px-5 py-3 text-left font-semibold text-sky-700">Mobile IV Business</th>
                  <th className="px-5 py-3 text-left font-semibold text-gray-700">Fixed IV Clinic</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {[
                  ['Startup Cost', '$15,000–$40,000', '$50,000–$150,000+'],
                  ['Overhead', 'Low (vehicle, supplies)', 'Higher (rent, utilities, build-out)'],
                  ['Revenue Per Nurse/Day', '$600–$1,800', '$800–$2,400'],
                  ['Regulatory Complexity', 'Lower in most states', 'Higher (facility requirements)'],
                  ['Patient Experience', 'Convenience is a key selling point', 'Clinical/spa atmosphere possible'],
                  ['Scalability', 'Add nurses/vans', 'Add treatment chairs, open locations'],
                  ['Brand Trust', 'Requires strong online presence', 'Physical location builds local trust'],
                  ['Best For', 'Lean launch, testing the market', 'Established market, premium positioning'],
                ].map(([factor, mobile, clinic]) => (
                  <tr key={factor}>
                    <td className="px-5 py-3 font-medium text-gray-700">{factor}</td>
                    <td className="px-5 py-3 text-gray-700">{mobile}</td>
                    <td className="px-5 py-3 text-gray-700">{clinic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* IV Therapy Nurse Jobs */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            IV Therapy Nurse Jobs — Employment vs. Ownership
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            Not every nurse wants to run a business — many want the flexibility and clinical variety of working as an IV therapy nurse without the overhead of ownership. Here is what to know about the employment side of the industry.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Job Types</h3>
              <ul className="space-y-2">
                {[
                  'Staff RN at a concierge IV therapy clinic',
                  'Per-diem / contract nurse for mobile IV companies',
                  'Travel nurse serving multiple IV locations',
                  'Home infusion nurse (through licensed home infusion agencies)',
                  'Infusion center nurse (oncology, rheumatology, GI practices)',
                  '1099 contractor for IV therapy staffing companies',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-sky-600 mt-0.5 flex-shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <h3 className="font-semibold text-gray-900 mb-3">Typical Compensation</h3>
              <ul className="space-y-2">
                {[
                  'Hourly rate: $35–$65/hour for RNs',
                  'Per-session contractor pay: $25–$50/session + base',
                  'Home infusion: $40–$75/hour',
                  'CRNI-certified nurses command premium rates',
                  'Commission structures at some concierge clinics',
                  'Tips are common at mobile IV companies',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-sky-600 mt-0.5 flex-shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-xl border border-sky-100 bg-sky-50 p-5 mt-4">
            <h3 className="font-semibold text-gray-900 mb-2">Finding IV Therapy Nurse Jobs</h3>
            <p className="text-sm text-gray-700">
              Search for IV therapy nursing positions on Indeed, Vivian Health, and Nurse.com. Many mobile IV companies post on Instagram and Facebook nursing groups. The concierge medicine and wellness nursing space is growing rapidly — nurses with IV therapy certification and strong venipuncture skills are in high demand. Building a professional Instagram profile showcasing your clinical skills and certification can also attract inbound opportunities.
            </p>
          </div>
        </div>

        {/* CTA — List Your Business */}
        <div className="rounded-xl border-2 border-sky-200 bg-sky-50 p-7 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Already Running an IV Therapy Business?
          </h2>
          <p className="text-gray-600 text-sm mb-5">
            List your IV therapy clinic or mobile service on our directory to reach patients searching for IV therapy in your area. Our listings connect you with high-intent patients ready to book.
          </p>
          <Link
            href="/list-your-business"
            className="inline-block bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            List Your IV Therapy Business &rarr;
          </Link>
        </div>

        <FAQ
          items={FAQS}
          title="IV Therapy Certification — Frequently Asked Questions"
        />
      </div>
    </>
  )
}
