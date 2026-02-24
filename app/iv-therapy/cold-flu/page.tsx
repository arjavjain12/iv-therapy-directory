import type { Metadata } from 'next'
import { CATEGORY_DATA } from '@/lib/category-data'
import CategoryPageLayout from '@/components/CategoryPageLayout'

const data = CATEGORY_DATA['cold-flu']

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: '/iv-therapy/cold-flu' },
}

export default function ColdFluIVPage() {
  return <CategoryPageLayout data={data} />
}
