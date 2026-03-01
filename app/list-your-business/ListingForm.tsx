'use client'

import { useState } from 'react'

const PLANS = [
  { value: 'free', label: 'Free — Basic listing (name, address, phone)' },
  { value: 'verified', label: 'Verified — Priority placement + verified badge' },
  { value: 'premium', label: 'Premium — Featured placement + phone CTA button' },
]

const CLINIC_TYPES = [
  'IV Bar',
  'Med Spa',
  'Medical Clinic',
  'Mobile IV Service',
  'Wellness Center',
  'Hydration Clinic',
  'Other',
]

export default function ListingForm() {
  const [form, setForm] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    cityState: '',
    website: '',
    clinicType: '',
    plan: 'free',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('https://formspree.io/f/xwvnjakk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Submission failed')
      }

      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-8 text-center">
        <div className="text-4xl mb-3">✓</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Listing Request Received!</h3>
        <p className="text-gray-600">
          Thanks for submitting your IV therapy business. We&apos;ll review your information and add your listing within 1–2 business days. You&apos;ll receive a confirmation email once you&apos;re live.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Business info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Business Name *</label>
          <input
            name="businessName"
            type="text"
            required
            value={form.businessName}
            onChange={handleChange}
            placeholder="Hydration Lounge IV Bar"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Contact Name *</label>
          <input
            name="contactName"
            type="text"
            required
            value={form.contactName}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jane@youriv.com"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
          <input
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">City & State *</label>
          <input
            name="cityState"
            type="text"
            required
            value={form.cityState}
            onChange={handleChange}
            placeholder="Austin, TX"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Website</label>
          <input
            name="website"
            type="url"
            value={form.website}
            onChange={handleChange}
            placeholder="https://youriv.com"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Clinic Type</label>
        <select
          name="clinicType"
          value={form.clinicType}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          <option value="">Select type...</option>
          {CLINIC_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Plan selection */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Listing Plan</label>
        <div className="space-y-2">
          {PLANS.map((p) => (
            <label key={p.value} className={`flex items-start gap-3 rounded-xl border-2 p-3 cursor-pointer transition ${form.plan === p.value ? 'border-sky-500 bg-sky-50' : 'border-gray-200 hover:border-gray-300'}`}>
              <input
                type="radio"
                name="plan"
                value={p.value}
                checked={form.plan === p.value}
                onChange={handleChange}
                className="mt-0.5 accent-sky-600"
              />
              <span className="text-sm text-gray-700">{p.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Message (optional)</label>
        <textarea
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your services, service area, or any special requests..."
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
        />
      </div>

      {status === 'error' && (
        <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-xl bg-sky-600 py-3.5 font-bold text-white hover:bg-sky-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Submitting...' : 'Submit Listing Request →'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        We review all listings before publishing. Free listings are added within 48 hours.
        Verified and Premium plans require brief setup — we&apos;ll contact you to complete.
      </p>
    </form>
  )
}
