import CompanyList from '@/component/module/company-page/company-list'
import { Motion } from '@/component/ui/motion'
import { fetchCompany } from '@/fetcher/company/fetch-company'

import { Metadata } from 'next'

export const revalidate = 300

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Khamsa Group',
    description:
      'Khamsa Business Company is a dynamic enterprise focused on providing comprehensive business solutions that drive growth and efficiency. With expertise in consulting, technology, and resource management, Khamsa partners with businesses across various industries to streamline their operations and enhance profitability. ',
    openGraph: {
      images: [
        {
          url: 'http://localhost:3000/_next/image?url=https%3A%2F%2Fkhamsa.panel.dreamslab.dev%2Fassets%2F69f76cb4-57ad-4230-a10a-eb92b543be60&w=3840&q=100',
        },
      ],
    },
  }
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
