import React from 'react'
import { fetchCompanyBySlug } from '@/fetcher/company/fetch-company'
import CompanyDetail from '@/component/module/company/company-detail'

type Props = { params: { slug: string } }

export const revalidate = 300

const CompanyPage = async ({ params }: Props) => {
  const result = await fetchCompanyBySlug(params.slug)

  return <CompanyDetail data={result} />
}

export default CompanyPage
