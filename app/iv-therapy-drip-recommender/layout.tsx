import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IV Drip Recommender Quiz — Find Your Best IV Treatment',
  description:
    'Not sure which IV drip is right for you? Answer 3 quick questions and get a personalized IV therapy recommendation with pricing. Free, instant, no sign-up.',
  alternates: { canonical: '/iv-therapy-drip-recommender' },
  openGraph: {
    title: 'IV Drip Recommender Quiz — Find Your Best IV Treatment',
    description: 'Answer 3 questions and get a personalized IV drip recommendation with local pricing.',
    url: '/iv-therapy-drip-recommender',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
