import CompanyCard from '@/component/module/company-directory/company-card'
import CompanyList from '@/component/module/company-directory/company-list'
import DropdownCategory from '@/component/module/company-directory/dropdown-category'
import { Motion } from '@/component/ui/motion'
import { fetchCategory } from '@/fetcher/category/fetch-category'
import { fetchCompany } from '@/fetcher/company/fetch-company'

const CompanyDirectoryPage = async () => {
  const companies = await fetchCompany()
  const categoryData = await fetchCategory()
  return (
    <section className="flex w-full flex-col items-center justify-center py-20">
      <div className="subtitle flex w-full max-w-screen-2xl flex-col gap-20 px-5 md:px-10 lg:px-24">
        <Motion delay={0.75} className="title flex items-end justify-between">
          <h1 className="heading-subtitle normal-case">Company Directory</h1>
        </Motion>
        <Motion delay={1}>
          <CompanyList data={companies} />
        </Motion>
      </div>
    </section>
  )
}

export default CompanyDirectoryPage
