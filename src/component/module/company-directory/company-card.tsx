import Link from 'next/link'
import React from 'react'

type CompanyCardProps = {
  link: string
  name: string
  company_description: string
  date: string
  website: string
  category: string
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  link,
  name,
  company_description,
  date,
  website,
  category,
}) => {
  return (
    <div
      key={name}
      className="subtitle w-full space-y-8 rounded border border-deepGreen bg-white p-8"
    >
      <div className="space-y-3">
        <div className='space-y-1'>
          <h1 className="title">{name}</h1>
          <p className="w-full max-w-3xl">{company_description}</p>
        </div>
        <p>{category}</p>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-3">
          <Link
            className="h-auto rounded-full bg-secondPrimary px-5 py-1 text-white transition-colors hover:bg-deepGreen"
            href={link}
          >
            View Profile
          </Link>
          <Link
            href={website}
            className="rounded-full border border-deepGreen px-5 py-1 hover:bg-deepGreen hover:text-white"
            target="_blank"
          >
            Website
          </Link>
        </div>
        <div>
          <span>{date}</span>
        </div>
      </div>
    </div>
  )
}

export default CompanyCard
