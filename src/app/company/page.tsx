import CompanyList from '@/component/module/company-page/company-list'
import { Motion } from '@/component/ui/motion'
import { fetchCompany } from '@/fetcher/company/fetch-company'
import { Metadata } from 'next'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Khamsa Group',
  description:
    'Khamsa Business Company is a dynamic enterprise focused on providing comprehensive business solutions that drive growth and efficiency. With expertise in consulting, technology, and resource management, Khamsa partners with businesses across various industries to streamline their operations and enhance profitability. ',
  openGraph: {
    images: [
      {
        url: 'https://media.licdn.com/dms/image/v2/C560BAQFICX72oX0TIg/company-logo_200_200/company-logo_200_200/0/1675677526846/khamsagroup_logo?e=1738800000&v=beta&t=P6e65kyTcs7H8APK9NFfMUF1GnwU0T_Pmy0htDsYPio',
      },
    ],
  },
}

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
