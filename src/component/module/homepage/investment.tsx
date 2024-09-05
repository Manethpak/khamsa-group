import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo } from 'react'
import { Motion } from '@/component/ui/motion'
import { Schema } from '@/lib/schema'
import { getImageUrl } from '@/lib/directus'

type Props = { data: Schema['Investment'] }

const InvestmentSection = ({ data }: Props) => {
  const item = useMemo(() => {
    return data
      ?.category!.map((item) => {
        if (typeof item === 'object' && item !== null) {
          return {
            title: item.title,
            imageUrl: getImageUrl(item.image as string),
            subtitle: item.subtitle,
            categorySlug: item.slug,
          }
        }
      })
      .filter(Boolean)
  }, [data.category])

  return (
    <section
      id="investment"
      className="flex flex-col items-center justify-center gap-20 px-5 py-12 lg:px-0"
    >
      <Motion className="flex h-28 max-w-[350px] flex-col gap-2 text-center 2xl:max-w-[600px]">
        <p className="text-xl uppercase text-primary">{data.subtitle}</p>
        <h1 className="my-4 text-4xl font-bold text-secondary lg:text-5xl">
          {data.title}
        </h1>
      </Motion>

      <Motion className="-mt-3 grid h-fit w-full max-w-xl grid-cols-1 justify-center gap-8 p-5 md:max-w-fit md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-3">
        {item.map((data, index) => (
          <Link href={`/category/${data!.categorySlug}`} key={index} passHref>
            <div className="group mx-auto flex h-[270px] w-full max-w-[320px] cursor-pointer flex-col items-center justify-center gap-7 justify-self-center rounded-2xl bg-white p-3 shadow-[0_15px_35px_rgba(0,0,0,0.2),0_10px_20px_rgba(0,0,0,0.1)] transition-all hover:bg-primary md:min-w-[341px] lg:min-w-[325px] xl:min-w-[402px]">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white transition-colors group-hover:bg-primary">
                <Image
                  src={data!.imageUrl}
                  alt={data!.title!}
                  width={64}
                  height={64}
                  className="h-12 w-12 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </div>
              <div className="flex flex-col gap-3 text-center">
                <h1 className="text-2xl font-extrabold text-secondary transition-colors group-hover:text-white">
                  {data!.title}
                </h1>
                <p className="max-w-52 text-base font-medium text-gray transition-colors group-hover:text-white">
                  {data!.subtitle}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </Motion>
    </section>
  )
}

export default InvestmentSection
