'use client'

import { useState, type FormEvent } from 'react'
import { Send, CheckCircle, Loader2 } from 'lucide-react'

interface LeadFormProps {
  cityId?: number
  cityName: string
  stateAbbr: string
}

interface FormData {
  name: string
  email: string
  phone: string
  zip_code: string
  health_goal: string
  drip_type_interested: string
  is_mobile_preferred: boolean
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  zip_code?: string
  health_goal?: string
}

const HEALTH_GOALS = [
  'Hangover Recovery',
  'Athletic Recovery',
  'Immune Boost',
  'Anti-Aging / NAD+',
  'Beauty & Skin',
  'General Hydration',
  'Energy & Fatigue',
  'Weight Management',
  'Other / Not Sure',
]

const DRIP_TYPES = [
  'Not Sure',
  'IV Hydration',
  "Myers' Cocktail",
  'NAD+',
  'Vitamin C',
  'Immunity Boost',
  'Hangover Recovery',
  'Beauty & Glow (Glutathione)',
  'Athletic Performance',
]

export default function LeadForm({ cityId, cityName, stateAbbr }: LeadFormProps) {
  const [form, setForm] = useState<FormData>({
    name: '', email: '', phone: '', zip_code: '',
    health_goal: '', drip_type_interested: '', is_mobile_preferred: false, message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  function validate(): FormErrors {
    const e: FormErrors = {}
    if (!form.name.trim()) e.name = 'Full name is required.'
    if (!form.email.trim()) e.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.'
    if (!form.phone.trim()) e.phone = 'Phone number is required.'
    if (!form.zip_code.trim()) e.zip_code = 'Zip code is required.'
    else if (!/^\d{5}$/.test(form.zip_code)) e.zip_code = 'Enter a valid 5-digit zip code.'
    if (!form.health_goal) e.health_goal = 'Please select your health goal.'
    return e
  }

  function set(field: keyof FormData, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => { const n = { ...prev }; delete n[field as keyof FormErrors]; return n })
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitError(null)
    const v = validate()
    setErrors(v)
    if (Object.keys(v).length) return
    setLoading(true)
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          zip_code: form.zip_code,
          health_goal: form.health_goal,
          drip_type_interested: form.drip_type_interested,
          is_mobile_preferred: form.is_mobile_preferred ? 'Yes' : 'No',
          message: form.message,
          city: cityName,
          state: stateAbbr,
        }),
      })
      if (!res.ok) throw new Error('Failed to submit. Please try again.')
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        ;(window as any).gtag('event', 'generate_lead', {
          event_category: 'lead_form',
          city: cityName,
          state: stateAbbr,
          health_goal: form.health_goal,
        })
      }
      setSuccess(true)
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <section id="quote" className="py-16 px-4">
        <div className="mx-auto max-w-2xl rounded-2xl border border-sky-200 bg-sky-50 p-10 text-center">
          <CheckCircle className="mx-auto mb-4 h-16 w-16 text-sky-600" />
          <h3 className="mb-2 text-2xl font-bold text-sky-800">Your request has been sent!</h3>
          <p className="text-lg text-sky-700">Local IV therapy providers will contact you within 24 hours.</p>
        </div>
      </section>
    )
  }

  const inputClass = (field: keyof FormErrors) =>
    `w-full rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition ${
      errors[field] ? 'border-red-500' : 'border-gray-300'
    }`

  return (
    <section id="quote" className="py-16 px-4">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="bg-gradient-to-r from-sky-600 to-sky-700 px-8 py-10 text-center text-white">
          <h2 className="mb-2 text-3xl font-extrabold md:text-4xl">
            Find IV Therapy Providers in {cityName}
          </h2>
          <p className="mx-auto max-w-xl text-lg text-sky-100">
            Compare local clinics and mobile IV services. Free, no-obligation quotes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8" noValidate>
          <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">Full Name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Jane Smith" value={form.name} onChange={(e) => set('name', e.target.value)} className={inputClass('name')} />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">Email <span className="text-red-500">*</span></label>
              <input type="email" placeholder="jane@example.com" value={form.email} onChange={(e) => set('email', e.target.value)} className={inputClass('email')} />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">Phone <span className="text-red-500">*</span></label>
              <input type="tel" placeholder="(555) 123-4567" value={form.phone} onChange={(e) => set('phone', e.target.value)} className={inputClass('phone')} />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">Zip Code <span className="text-red-500">*</span></label>
              <input type="text" placeholder="12345" maxLength={5} value={form.zip_code}
                onChange={(e) => set('zip_code', e.target.value.replace(/\D/g, '').slice(0, 5))}
                className={inputClass('zip_code')} />
              {errors.zip_code && <p className="mt-1 text-sm text-red-600">{errors.zip_code}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">Health Goal <span className="text-red-500">*</span></label>
              <select value={form.health_goal} onChange={(e) => set('health_goal', e.target.value)}
                className={`${inputClass('health_goal')} bg-white`}>
                <option value="">Select your goal...</option>
                {HEALTH_GOALS.map((g) => <option key={g} value={g}>{g}</option>)}
              </select>
              {errors.health_goal && <p className="mt-1 text-sm text-red-600">{errors.health_goal}</p>}
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">Drip Type Interested In</label>
              <select value={form.drip_type_interested} onChange={(e) => set('drip_type_interested', e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500 transition">
                <option value="">Select a drip...</option>
                {DRIP_TYPES.map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.is_mobile_preferred}
                  onChange={(e) => set('is_mobile_preferred', e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
                />
                <span className="text-sm font-semibold text-gray-700">
                  I prefer mobile IV therapy (comes to me)
                </span>
              </label>
            </div>

            <div className="md:col-span-2">
              <label className="mb-1 block text-sm font-semibold text-gray-700">
                Additional Details <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <textarea rows={3} placeholder={`Tell us more about what you're looking for in ${cityName}, ${stateAbbr}...`}
                value={form.message} onChange={(e) => set('message', e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition" />
            </div>
          </div>

          {submitError && (
            <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-center text-sm text-red-700">
              {submitError}
            </div>
          )}

          <div className="mt-8 text-center">
            <button type="submit" disabled={loading}
              className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-10 py-4 text-lg font-bold text-white shadow-lg hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-300 disabled:opacity-60 disabled:cursor-not-allowed transition">
              {loading ? <><Loader2 className="h-5 w-5 animate-spin" /> Submitting...</> : <><Send className="h-5 w-5" /> Find Providers Near Me →</>}
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm text-gray-500">
            <span>✓ Free service</span>
            <span>✓ No spam</span>
            <span>✓ Licensed providers only</span>
          </div>
        </form>
      </div>
    </section>
  )
}
