import CategoryDropdown from '@/component/module/company/category-dropdown'
import CompanyList from '@/component/module/company/company-list'
import {
  fetchCategory,
  fetchCompanyByCategorySlug,
} from '@/fetcher/category/fetch-category'

type Props = {
  params: { slug: string }
}

export const revalidate = 300

const CategoryPage = async ({ params }: Props) => {
  const companies = await fetchCompanyByCategorySlug(params.slug)
  const categoryData = await fetchCategory()

  return (
    <section className="min-h-[50vh]">
      <div className="flex w-full flex-col items-center justify-center px-1 font-lato sm:px-10">
        <div className="h-full w-full max-w-7xl overflow-hidden py-16">
          <div className="flex h-10 w-full justify-between text-lg sm:text-xl">
            <h1 className="flex h-full w-full max-w-28 items-center text-xl font-semibold sm:min-w-max sm:text-2xl">
              Explore our Investment
            </h1>
            <CategoryDropdown category={categoryData} />
          </div>
          <CompanyList company={companies} />
        </div>
      </div>
    </section>
  )
}

export default CategoryPage
