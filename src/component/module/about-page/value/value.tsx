// components/Value.tsx
import Image from 'next/image'
import React from 'react'
import { Motion } from '@/component/ui/motion'
import { valueData } from '@/constants/about-us'

const Value = () => {
  return (
    <div className="subtitle flex w-full flex-col items-center justify-center">
      <div className="flex h-full w-full max-w-screen-2xl flex-col gap-24 px-5 py-24 md:px-10 lg:px-24">
        <div className="flex w-full flex-col items-center gap-5">
          <Motion delay={0.5}>{valueData.title}</Motion> {/* Section Title */}
          <Motion delay={0.75} className="title">
            {valueData.mainTitle} {/* Main Title */}
          </Motion>
        </div>

        {/* Value Section */}
        <div className="flex w-full flex-col items-center justify-between gap-1 lg:flex-row">
          {/* Image Section */}
          <Motion
            delay={1}
            className="flex w-full max-w-sm justify-start self-start lg:w-auto lg:max-w-md"
          >
            <Image
              src={valueData.image.src}
              alt={valueData.image.alt}
              width={525}
              height={298}
              className="h-auto max-w-full object-cover shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl"
            />
          </Motion>

          {/* Description Section */}
          <Motion delay={1.25} className="w-full lg:ml-8 lg:max-w-md">
            <p className="text-left font-manrope text-[16px] font-normal leading-[24px] tracking-[0.02em] md:text-[18px] md:leading-[28px] lg:text-[20px] lg:leading-[32px]">
              {valueData.description} {/* Description */}
            </p>
          </Motion>
        </div>
      </div>
    </div>
  )
}

export default Value
