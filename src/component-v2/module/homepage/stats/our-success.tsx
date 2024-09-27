import React from 'react'
import { Schema } from '@/lib/schema'
import { Motion } from '@/component-v2/ui/motion'

type Props = {
  data: Schema['Success'] // Assuming 'data' is an array of Success objects
}

const OurSuccess = ({ data }: Props) => {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-screen-2xl flex-col gap-20 px-5 md:px-10 lg:px-24">
        <Motion className="grid grid-cols-1 place-items-center gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex h-36 w-full flex-col items-center justify-center border-black bg-white font-manrope text-green-700"
            >
              <h1 className="font-manrope text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                {item.number}
              </h1>
              <span className="mt-1 font-manrope text-sm font-light sm:text-base md:text-2xl lg:text-2xl xl:text-2xl">
                {item.title}
              </span>
            </div>
          ))}
        </Motion>
      </div>
    </section>
  )
}

export default OurSuccess
