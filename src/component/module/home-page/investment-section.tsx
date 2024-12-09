'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Motion } from '@/component/ui/motion'
import { Schema } from '@/lib/schema'
import { getImageUrl } from '@/lib/directus'
import { ChevronsRight } from 'lucide-react'

type Props = { data: Schema['Category'] }

const InvestmentSection = ({ data }: Props) => {
  const category = data
  return (
    <section className="flex w-full flex-col items-center justify-center pb-10">
      <div className="flex w-full max-w-screen-2xl cursor-pointer flex-col gap-14 px-5 pt-10 text-green-800 md:px-10 lg:px-24">
        <Motion delay={0.5} className="heading-subtitle uppercase">
          Investment Portfolio
        </Motion>
        <Motion
          delay={0.75}
          className="grid h-full w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {category.map((data, index) => (
            <Link
              href={`/investment/${data!.slug}`}
              key={index}
              className="flex flex-col"
            >
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-full py-6 hover:rounded-md hover:bg-[#ECECEC]">
                <Image
                  src={getImageUrl(data!.image_investment as string)}
                  alt={data!.title!}
                  width={64}
                  height={64}
                  className="h-20 w-20 rounded-full bg-[#ECECEC] px-4 py-4"
                />

                <h3 className="title line-clamp-3 h-fit text-base sm:line-clamp-2 sm:text-xl">
                  {data!.title}
                </h3>
                <div>
                  <p className="h-full text-justify text-sm sm:px-5 md:px-7 lg:px-7">
                    {data!.subtitle}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </Motion>
      </div>
    </section>
  )
}

export default InvestmentSection
