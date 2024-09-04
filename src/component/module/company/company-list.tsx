'use client'

import { getImageUrl } from '@/lib/directus'
import { Schema } from '@/lib/schema'
import { dateYearFormat } from '@/utils/date-format'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  company: Schema['Company']
}

const CompanyList = ({ company }: Props) => {
  return (
    <div className="mt-16 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {company.map((data, index) => (
        <Link href={`/company/${data!.slug}`} key={index} passHref>
          <div className="relative mx-auto flex w-full max-w-[400px] flex-col justify-start gap-5 rounded-t-lg bg-white">
            <div className="relative h-64 max-w-full">
              <div className="relative h-full w-full">
                <Image
                  src={getImageUrl(data.image! as string)}
                  alt={data.name!}
                  width={1920}
                  height={880}
                  quality={100}
                  className="h-full w-full rounded-lg object-cover object-center"
                />
              </div>
              <div className="absolute right-0 top-0 m-4 flex size-12 items-center justify-center rounded-lg bg-white">
                {/* Image should has 1/1 aspect ratio */}
                <Image
                  src={getImageUrl(data.logo! as string)}
                  alt={data.name!}
                  width={80}
                  height={80}
                  quality={80}
                  className="h-fit w-fit rounded-lg object-contain object-center"
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-3 p-1 text-left">
              <h2 className="text-2xl font-bold uppercase text-secondary">
                {data.name!}
              </h2>
              <p className="px-2 text-base text-gray">
                {dateYearFormat(data.founded!)}
              </p>
              <div className="flex gap-2 pt-4 text-lg text-primary">
                {data.category?.map((v) => v.Category_id?.title).join(',  ')}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CompanyList
