import CompanyList from '@/component/module/company-directory/company-list'
import { Motion } from '@/component/ui/motion'
import { fetchCompany } from '@/fetcher/company/fetch-company'

export const revalidate = 300

const CompanyDirectoryPage = async () => {
  const companies = await fetchCompany()

  return (
    <section className="z-10 flex w-full flex-col items-center justify-center py-16">
      <div className="subtitle flex w-full max-w-screen-2xl flex-col gap-8 px-5 md:px-10 lg:px-24">
        <Motion delay={0.2} className="title flex items-end justify-between">
          <h1 className="heading-subtitle normal-case">Company Directory</h1>
        </Motion>
        <Motion delay={0.5}>
          <CompanyList data={companies} />
        </Motion>
      </div>
    </section>
  )
}

export default CompanyDirectoryPage
