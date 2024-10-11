'use client'
import React, { useState } from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '@/app/globals.css'
import { Pagination, Navigation } from 'swiper/modules'

interface Props {
  children: React.ReactNode[]
  className?: string
}

export const Paginate: React.FC<Props> = ({ children, className }) => {
  // Group the children into chunks of 6 items per slide
  const slides = []
  for (let i = 0; i < children.length; i += 6) {
    slides.push(children.slice(i, i + 6)) // Create groups of 1 item (for single-item slides)
  }

  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
        renderBullet: function (index: number, className: string) {
          return '<span class="' + className + '">' + (index + 1) + '</span>'
        },
      }}
      allowTouchMove={false}
      navigation={true}
      modules={[Pagination, Navigation]}
      className={` ${className} pb-[100px]`}
    >
      {slides.map((slideItems, index) => (
        <SwiperSlide key={index} className="flex">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {slideItems.map((child, childIndex) => (
              <div key={childIndex} className="bg-gray-100 p-4">
                {child}
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
