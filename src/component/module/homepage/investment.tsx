'use client'
import Image from 'next/image'
import React, { useMemo } from 'react'
import { Investments } from '@/constants'
import { Motion } from '@/component/ui/motion'
import { Schema } from '@/lib/schema'
import { getImageUrl } from '@/lib/directus'

type Props = { data: Schema['Investment'] }

const InvestmentSection = ({ data }: Props) => {
  const item = useMemo(() => {
    return data
      ?.items!.map((item) => {
        if (typeof item === 'object' && item !== null) {
          return {
            title: item.title,
            imageUrl: getImageUrl(item.icon as string),
            description: item.description,
          }
        }
      })
      .filter(Boolean)
  }, [data.items])
  return (
    <section
      id="investment"
      className="flex flex-col items-center justify-center gap-12 p-5 pt-12 lg:px-0"
    >
      <Motion className="flex h-28 max-w-[350px] flex-col gap-2 text-center 2xl:max-w-[600px]">
        <p className="text-xl font-bold uppercase text-primary">
          {data.subtitle}
        </p>
        <h1 className="text-4xl font-extrabold text-secondary">{data.title}</h1>
      </Motion>
      <Motion className="-mt-3 grid h-fit w-full max-w-xl grid-cols-1 justify-items-stretch gap-8 p-5 md:max-w-fit md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-3">
        {item.map((data, index) => (
          <div
            key={index}
            className="flex h-[270px] w-full max-w-[320px] flex-col items-center justify-center gap-7 justify-self-center rounded-2xl bg-white p-3 shadow-lg shadow-black/40 md:min-w-[341px] xl:min-w-[402px]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white">
              <Image
                src={data!.imageUrl}
                alt={data!.title!}
                width={250}
                height={250}
                className="h-8 w-8"
              />
            </div>
            <div className="flex flex-col gap-3 text-center">
              <h1 className="text-2xl font-extrabold text-secondary">
                {data!.title}
              </h1>
              <p className="libre_baskerville max-w-52 text-base font-medium text-gray">
                {data!.description}
              </p>
            </div>
          </div>
        ))}
      </Motion>
    </section>
  )
}

export default InvestmentSection
