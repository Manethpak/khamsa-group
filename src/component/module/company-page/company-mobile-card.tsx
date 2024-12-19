import { getImageUrl } from '@/lib/directus'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CompanyCardProps = {
  link: string
  name: string
  company_description: string
  date: string
  website: string
  category: string
  phone: string
  email: string
  logo: string
  founded: string
  company_size: string
}

const CompanyMobileCard: React.FC<CompanyCardProps> = ({
  link,
  name,
  company_description,
  date,
  website,
  category,
  email,
  phone,
  logo,
  founded,
  company_size,
}) => {
  return (
    <div
      key={name}
      className="w-full space-y-8 rounded border border-deepGreen p-3 md:hidden"
    >
      <div className="space-y-5">
        <div className="space-y-1">
          <h1 className="font-manrope text-2xl font-bold">{name}</h1>
          <div className="mx-auto flex gap-3 font-manrope">
            <h3 className="rounded-lg bg-primary px-2">
              <span className="title">Founded:</span>
              {founded}
            </h3>
            <h3 className="rounded-lg bg-primary px-2">
              <span className="title"> Team size:</span>
              {company_size}
            </h3>
          </div>
          <p className="sm:subtitle h-fit w-full whitespace-normal tracking-wide sm:max-w-5xl">
            {company_description}
          </p>
        </div>
        <div className="flex w-full">
          <div className="w-[80%]">
            <p className="title">{category}</p>
            <p>
              <span className="title">Email:</span>
              {email}
            </p>
            <p>
              <span className="title">Phone number:</span> {phone}
            </p>
          </div>

          <Image
            src={getImageUrl(logo)}
            alt="logo company"
            width={80}
            height={80}
            quality={100}
            className="w-full max-w-20 px-3 py-3"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="mt-3 sm:mt-0">
          <span>{date}</span>
        </div>
        <div className="flex gap-3">
          {website && website !== 'N/A' ? (
            <Link
              href={website}
              className="rounded-full border border-deepGreen px-5 py-1 hover:bg-deepGreen hover:text-white"
              target="_blank"
            >
              Website
            </Link>
          ) : (
            <span className="rounded-full border border-deepGreen px-5 py-1">
              N/A
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default CompanyMobileCard
