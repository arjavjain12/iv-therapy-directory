import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'IV Therapy for Hangover — Best Hangover IV Drips (2026)',
  description: 'Find IV therapy for hangover near you. Compare hangover recovery drips, ingredients, and mobile IV services. Feel better in under an hour.',
  alternates: { canonical: '/iv-therapy-for-hangover' },
}

export default function IVTherapyForHangoverPage() {
  redirect('/iv-therapy/hangover')
}
