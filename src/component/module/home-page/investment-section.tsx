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
    <section className="mx-auto flex w-full max-w-screen-2xl cursor-pointer flex-col gap-10 px-5 py-10 font-manrope text-green-800 md:px-10 lg:px-24">
      <h2 className="heading-subtitle uppercase">Our Investment Portfolio</h2>
      <Motion className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {category.map((data, index) => (
            <div key={index} className="group p-6 transition duration-300">
              <div className="mb-4 flex items-center">
                <Image
                  src={getImageUrl(data!.image_investment as string)}
                  alt={data!.title!}
                  width={64}
                  height={64}
                  className="h-12 w-12 transition-all duration-300"
                />

                <h3 className="ml-4 text-xl font-bold">{data!.title}</h3>
              </div>
              <p className="text-gray-700">{data!.subtitle}</p>
              <Link
                href="/"
                className="mt-14 inline-flex items-center font-semibold group-hover:underline"
              >
                Learning more
                <ChevronsRight className="ml-2 text-xl font-semibold transition duration-300" />
              </Link>
            </div>
          ))}
        </div>
      </Motion>
    </section>
  )
}

export default InvestmentSection
