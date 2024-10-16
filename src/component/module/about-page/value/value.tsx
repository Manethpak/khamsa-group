import Image from 'next/image'
import React from 'react'
import { Motion } from '@/component/ui/motion'
import { valueData } from '@/constants/about-us'

const Value = () => {
  return (
    <div className="subtitle flex w-full flex-col items-center justify-center">
      <div className="flex max-w-screen-2xl flex-col gap-10 px-5 py-12 md:px-10 lg:px-24">
        <div className="flex w-full flex-col items-center gap-5">
          <Motion delay={0.5} className="subtitle-about">
            {valueData.title}
          </Motion>
          <Motion delay={0.75} className="title">
            {valueData.mainTitle}
          </Motion>
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-10">
          <Motion
            delay={1}
            className="flex w-full flex-1 justify-start self-start sm:min-w-[28rem]"
          >
            <Image
              src={valueData.image.src}
              alt={valueData.image.alt}
              width={525}
              height={298}
              className="h-auto max-w-full object-cover shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl"
            />
          </Motion>

          <Motion delay={1.25} className="w-full">
            <p className="text-left font-manrope">{valueData.description}</p>
          </Motion>
        </div>
      </div>
    </div>
  )
}

export default Value
