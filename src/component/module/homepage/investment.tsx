import Image from 'next/image'
import Link from 'next/link'
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
            categorySlug: item.categorySlug, // Assuming this is the slug or identifier for the category
          }
        }
      })
      .filter(Boolean)
  }, [data.items])

  return (
    <section
      id="investment"
      className="flex flex-col items-center justify-center gap-[12px] p-5 pt-12 lg:px-0"
    >
      {/* Text above subtitle */}
      <div className="relative mb-4 mt-4 bg-white text-center">
        <p
          className="font-lib-baskerville mx-auto text-[20px] font-bold leading-[28px] tracking-[0.2px] text-black sm:text-[24px] sm:leading-[30px] md:text-[26px] md:leading-[33.6px]"
          style={{
            maxWidth: '972px',
            height: 'auto',
            position: 'relative',
          }}
        >
          Khamsa / from Arabic “Hamsa” means “five”, but also “the five fingers
          of the hand” and Romanized as “Khamsa” representing the open right
          hand, recognized and used as a sign of protection, blessings, power
          and strength in many times throughout history to provide defense
          against the bad luck and evil.
        </p>

        {/* Line below the text */}
        <div className="absolute bottom-[-10px] left-1/2 h-[5px] w-[150px] -translate-x-1/2 transform bg-primary md:w-[200px] lg:w-[250px]"></div>
      </div>

      <Motion className="flex h-28 max-w-[350px] flex-col gap-2 text-center 2xl:max-w-[600px]">
        <p className="text-base font-extrabold text-primary">{data.subtitle}</p>
        <h1 className="text-4xl font-extrabold text-secondary">{data.title}</h1>
      </Motion>

      <Motion className="-mt-3 grid h-fit w-full max-w-xl grid-cols-1 justify-items-stretch gap-[12px] p-5 md:max-w-fit md:grid-cols-2 lg:grid-cols-3">
        {item.map((data, index) => (
          <Link href={`/category/${data!.categorySlug}`} key={index} passHref>
            <div className="group flex h-[270px] w-full max-w-[320px] cursor-pointer flex-col items-center justify-center gap-7 justify-self-center rounded-2xl bg-white p-3 shadow-[0_15px_35px_rgba(0,0,0,0.2),0_10px_20px_rgba(0,0,0,0.1)] transition-all hover:bg-primary hover:shadow-[0_20px_45px_rgba(0,0,0,0.3),0_15px_30px_rgba(0,0,0,0.2)] md:min-w-[341px] xl:min-w-[402px]">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white transition-colors group-hover:bg-primary">
                <Image
                  src={data!.imageUrl}
                  alt={data!.title!}
                  width={250}
                  height={250}
                  className="h-8 w-8"
                />
              </div>
              <div className="flex flex-col gap-3 text-center">
                <h1 className="text-2xl font-extrabold text-secondary transition-colors group-hover:text-white">
                  {data!.title}
                </h1>
                <p className="max-w-52 text-base font-medium text-gray transition-colors group-hover:text-white">
                  {data!.description}
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
