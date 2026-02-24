import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'How Much Does IV Therapy Cost? (2026 Price Guide)',
  description: 'How much does IV therapy cost? Average prices: hydration $99–$175, Myers\' Cocktail $149–$275, NAD+ $250–$500. Full cost breakdown by drip type.',
  alternates: { canonical: '/how-much-does-iv-therapy-cost' },
}

export default function HowMuchDoesIVTherapyCostPage() {
  redirect('/iv-therapy-cost')
}
