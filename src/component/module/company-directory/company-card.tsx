import Link from 'next/link'
import React from 'react'

type CompanyCardProps = {
  link: string
  name: string
  company_description: string
  location: string
  date: string
}

const CompanyCard:React.FC<CompanyCardProps>  = ({
  link,
  name,
  company_description,
  location,
  date,
}) => {
  return (
    <div key={name} className="w-full rounded-lg border px-5 py-5">
      <div className="mb-10">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p className="mb-3">{company_description}</p>
        <p>{location}</p>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-3">
          <Link
            className="rounded-full bg-secondPrimary hover:bg-deepGreen transition-colors px-6 py-2 text-white"
            href={link}
          >
            View Profile
          </Link>
          <Link href={link} className="rounded-full hover:bg-deepGreen hover:text-white border border-deepGreen px-6 py-2">
            Contact
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
