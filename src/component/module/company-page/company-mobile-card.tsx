import { getImageUrl } from '@/lib/directus'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CompanyCardProps = {
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
      className="w-full space-y-8 rounded border border-deepGreen p-2 md:hidden"
    >
      <div className="space-y-5">
        <div className="space-y-1">
          <h1 className="font-manrope text-2xl font-bold">{name}</h1>
          <div className="mx-auto flex flex-col gap-3 font-manrope min-[420px]:flex-row">
            <h3 className="w-fit rounded-lg bg-primary px-2">
              <span className="title">Founded:</span>
              {founded}
            </h3>
            <h3 className="w-fit rounded-lg bg-primary px-2">
              <span className="title"> Team size:</span>
              {company_size}
            </h3>
          </div>
          <p className="sm:subtitle h-fit w-full whitespace-normal tracking-wide sm:max-w-5xl">
            {company_description}
          </p>
        </div>
        <div className="flex w-full justify-between gap-1">
          <div className="">
            <p className="title">{category}</p>
            <div className="flex flex-col min-[420px]:flex-row">
              <span className="title">Email:</span>
              <p>{email}</p>
            </div>
            <p className="flex-col">
              <span className="title">Phone number:</span> {phone}
            </p>
          </div>

          <Image
            src={getImageUrl(logo)}
            alt="logo company"
            width={80}
            height={80}
            quality={100}
            className="size-20 min-[420px]:w-fit"
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
