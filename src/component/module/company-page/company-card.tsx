import Link from 'next/link'
import React from 'react'
import CompanyMobileCard from './company-mobile-card'
import Image from 'next/image'
import { getImageUrl } from '@/lib/directus'

type CompanyCardProps = {
  name: string
  company_description: string
  date: string
  website: string
  category: string
  phone: string
  logo: string
  founded: string
  company_size: string
  email: string
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  name,
  company_description,
  date,
  website,
  category,
  phone,
  logo,
  founded,
  company_size,
  email,
}) => {
  return (
    <>
      <div className="hidden md:block">
        <div
          key={name}
          className="subtitle pace-y-8 flex h-full w-full items-center justify-center gap-4 rounded border border-deepGreen p-8"
        >
          <div className="flex h-fit w-full max-w-44 items-center justify-center">
            <Image
              src={getImageUrl(logo)}
              alt={name}
              width={200}
              height={200}
              className="flex size-28 h-full items-center justify-center object-center"
            />
          </div>
          <div className="w-[85%]">
            <div className="space-y-5">
              <div className="flex justify-between space-y-1">
                <h1 className="title">{name}</h1>
                <div className="flex gap-2">
                  <h3 className="rounded-lg bg-primary px-2">
                    <span className="font-manrope text-lg font-bold">
                      Founded:
                    </span>
                    {founded}
                  </h3>
                  <h3 className="rounded-lg bg-primary px-2">
                    <span className="font-manrope text-lg font-bold">
                      Team size:
                    </span>
                    {company_size}
                  </h3>
                </div>
              </div>
              <p className="line-clamp-5 h-fit w-full whitespace-normal tracking-wide sm:max-w-5xl">
                {company_description}
              </p>
              <p className="font-manrope text-lg font-bold">{category}</p>
            </div>
            <div className="flex items-center justify-between gap-3">
              <div className="mt-5 flex items-center gap-3">
                {website && website !== 'N/A' ? (
                  <Link
                    href={website}
                    className="h-fit rounded-full border border-deepGreen px-5 py-1 hover:bg-deepGreen hover:text-white"
                    target="_blank"
                  >
                    Website
                  </Link>
                ) : (
                  <span className="h-fit rounded-full border border-deepGreen px-5 py-1">
                    N/A
                  </span>
                )}
                <div className="flex flex-col gap-x-3 xl:flex-row">
                  <p>
                    <span className="font-manrope text-lg font-bold">
                      Phone number:
                    </span>
                    {phone && phone !== 'N/A' ? (
                      <span>{phone}</span>
                    ) : (
                      <span>N/A</span>
                    )}
                  </p>
                  <p>
                    <span className="font-manrope text-lg font-bold">
                      Email:
                    </span>
                    {email && email !== 'N/A' ? (
                      <span>{email}</span>
                    ) : (
                      <span>N/A</span>
                    )}
                  </p>
                </div>
              </div>
              <div className="items-center sm:mt-0">
                <span>{date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <CompanyMobileCard
          name={name}
          company_description={company_description}
          email={email}
          phone={phone}
          logo={logo}
          date={date}
          founded={founded}
          company_size={company_size}
          website={website}
          category={category}
        />
      </div>
    </>
  )
}

export default CompanyCard
