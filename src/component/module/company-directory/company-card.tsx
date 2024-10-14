import Link from 'next/link'
import React from 'react'

type CompanyCardProps = {
  title: string
  description: string
  category: string
  date: string
}

const CompanyCard = ({
  title,
  description,
  category,
  date,
}: CompanyCardProps) => {
  return (
    <div className="w-full rounded-lg border px-5 py-5">
      <div className="mb-10">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="mb-3">{description}</p>
        <p>{category}</p>
      </div>

      <div className="flex flex-wrap items-center justify-between">
        <div className="flex gap-3">
          <Link
            className="rounded-full bg-[#1BAB92] px-6 py-2 text-white hover:bg-[#1bab93cf]"
            href="#"
          >
            View Profile
          </Link>
          <Link className="rounded-full border px-6 py-2" href="/contact">
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
