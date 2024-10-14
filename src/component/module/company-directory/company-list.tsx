import { Paginate } from '@/component/ui/pagination'
import { Schema } from '@/lib/schema'
import React from 'react'
import CompanyCard from './company-card'
import { formatDate } from '@/lib/utils'

type Props = {
  data: Schema['Company']
}

const CompanyList = ({ data }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {data.map((company) => (
        <CompanyCard
          key={company.name}
          name={company.name!}
          location={company.location!}
          company_description={company.company_description!}
          link={`/company-directory/` + company.slug}
          date={formatDate(company.founded!)}
        />
      ))}
    </div>
  )
}

export default CompanyList
