import CompanyList from '@/component/module/company-page/company-list'
import DropdownCategory from '@/component/module/company-page/dropdown-category'
import { Motion } from '@/component/ui/motion'
import {
  fetchCategory,
  fetchCompanyByCategorySlug,
} from '@/fetcher/category/fetch-category'
import { getImageUrl } from '@/lib/directus'
import { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Khamsa Group',
  description:
    'Khamsa Business Company is a dynamic enterprise focused on providing comprehensive business solutions that drive growth and efficiency. With expertise in consulting, technology, and resource management, Khamsa partners with businesses across various industries to streamline their operations and enhance profitability. ',
  openGraph: {
    images: [getImageUrl('4acd7ab9-1666-4c9d-a8e7-bd5ecd68c4b5')],
  },
}

const CategoryPage = async ({ params }: Props) => {
  const companies = await fetchCompanyByCategorySlug(params.slug)
  const categoryData = await fetchCategory()

  return (
    <section className="z-10 flex w-full flex-col items-center justify-center py-16">
      <div className="subtitle flex w-full max-w-screen-2xl flex-col gap-8 px-5 md:px-10 lg:px-24">
        <div className="flex h-fit w-full flex-col gap-2 text-lg sm:flex-row sm:justify-between sm:text-xl">
          <h1 className="heading-subtitle">Company Directory</h1>
          <div className="flex justify-end">
            <DropdownCategory category={categoryData} />
          </div>
        </div>
        <Motion delay={0.5}>
          <CompanyList data={companies} />
        </Motion>
      </div>
    </section>
  )
}

export default CategoryPage
