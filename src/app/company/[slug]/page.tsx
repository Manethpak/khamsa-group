import React from 'react'
import { fetchCompanyBySlug } from '@/fetcher/company/fetch-company'
import CompanyDetail from '@/component/module/company/company-detail'

type Props = { params: { slug: string } }

const CompanyPage = async ({ params }: Props) => {
  const result = await fetchCompanyBySlug(params.slug)
  console.log(result)

  return <CompanyDetail data={result} />
}

export default CompanyPage
