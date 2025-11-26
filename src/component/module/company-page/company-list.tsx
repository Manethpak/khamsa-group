import { Schema } from '@/lib/schema'
import React from 'react'
import CompanyCard from './company-card'
import { dateYearFormat } from '@/utils/date-format'

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
          category={
            (company.category &&
              company.category
                ?.map((category: any) => category.Category_id?.title)
                .join(', ')) ||
            ''
          }
          company_description={company.company_description!}
          date={dateYearFormat(company.founded ? String(company.founded) : '')}
          website={company?.website as string}
          phone={company?.phone as string}
          email={company?.email as string}
          logo={company?.logo as string}
          founded={company?.founded ? String(company.founded) : ''}
          company_size={company?.company_size as string}
        />
      ))}
    </div>
  )
}

export default CompanyList
