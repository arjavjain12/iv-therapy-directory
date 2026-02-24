import type { Metadata } from 'next'
import { CATEGORY_DATA } from '@/lib/category-data'
import CategoryPageLayout from '@/components/CategoryPageLayout'

const data = CATEGORY_DATA['athletic-recovery']

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: '/iv-therapy/athletic-recovery' },
}

export default function AthleticRecoveryIVPage() {
  return <CategoryPageLayout data={data} />
}
