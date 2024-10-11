'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo, useState } from 'react'
import { Schema } from '@/lib/schema'
import { Motion } from '@/component/ui/motion'
import { getImageUrl } from '@/lib/directus'
import { Virtual, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/navigation'
import { MoveRight } from 'lucide-react'

type Props = { data: Schema['Investment'] }

const Investment = ({ data }: Props) => {
  const items = useMemo(() => {
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
  }, [data?.category])

  return (
    <section
      id="investment"
      className="subtitle flex flex-col items-center justify-center py-24"
    >
      <div className="flex w-full max-w-screen-2xl flex-col gap-10 pl-5 md:pl-10 lg:pl-24">
        <Motion className="">
          <p className="heading-subtitle">{data.subtitle}</p>
        </Motion>
        <Swiper
          modules={[Virtual, Navigation, Pagination, Scrollbar]}
          grabCursor={true}
          navigation={{
            nextEl: '.custom-swiper-next',
          }}
          scrollbar={{
            el: '.custom-swiper-scroll',
            draggable: true,
          }}
          virtual
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 3, spaceBetween: 15 },
            1280: { slidesPerView: 4, spaceBetween: 20 },
          }}
          className="flex w-full"
        >
          {items.map((data, index) => (
            <SwiperSlide
              key={index}
              className="flex max-h-full max-w-full flex-col items-center justify-center gap-7"
            >
              <Motion className="flex h-full max-w-fit flex-col gap-3">
                <Image
                  // src={data!.imageUrl}
                  src="/images/test.jpg"
                  alt={data!.title!}
                  width={1200}
                  height={1200}
                  className="h-40 max-h-full min-h-full w-96 min-w-full max-w-full object-cover object-center sm:h-56 md:h-80"
                />
                <div className="flex h-48 flex-col gap-3 overflow-hidden">
                  <h1 className="title">{data!.title}</h1>
                  <p className="max-w-sm">{data!.subtitle}</p>
                </div>
                <Link href={`/project-detail/`} passHref>
                  <p>Read More</p>
                </Link>
              </Motion>
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <Motion className="flex h-40 max-h-full min-h-full min-w-full max-w-full flex-col justify-center gap-3 sm:h-56 md:h-80">
              <Link
                href="/project"
                className="subtitle mx-14 flex size-24 items-center justify-center rounded-full border border-secondPrimary text-secondPrimary"
              >
                See More{' '}
              </Link>
            </Motion>
          </SwiperSlide>
          <div className="relative mt-5 flex h-14 xl:h-20 w-full max-w-full items-center cursor-pointer">
            <div className="custom-swiper-next font-thin absolute bottom-0 right-10 flex size-14 xl:size-20 text-3xl items-center justify-center border rounded-full border-secondPrimary text-secondPrimary ">
              <MoveRight />
            </div>
            <div className="custom-swiper-scroll relative mr-32 flex h-1 w-full max-w-7xl items-center rounded-md bg-[#E0E0E0]" />
          </div>
        </Swiper>
      </div>
    </section>
  )
}

export default Investment
