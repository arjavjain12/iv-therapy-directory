import type { Metadata } from 'next'
import { CATEGORY_DATA } from '@/lib/category-data'
import CategoryPageLayout from '@/components/CategoryPageLayout'

const data = CATEGORY_DATA.mobile

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: '/iv-therapy/mobile' },
}

export default function MobileIVCategoryPage() {
  return <CategoryPageLayout data={data} />
}
