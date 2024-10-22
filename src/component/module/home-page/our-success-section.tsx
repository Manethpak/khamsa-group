import React from 'react'
import { Schema } from '@/lib/schema'
import { Motion } from '@/component/ui/motion'

type Props = {
  data: Schema['Success'] // Assuming 'data' is an array of Success objects
}

const OurSuccessSection = ({ data }: Props) => {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-screen-2xl flex-col gap-20">
        <Motion className="grid grid-cols-1 place-items-center gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex h-36 w-full flex-col items-center justify-center gap-3 border-black bg-white"
            >
              <h1 className="title text-3xl md:text-[32px]">{item.number}</h1>
              <span className="subtitle">{item.title}</span>
            </div>
          ))}
        </Motion>
      </div>
    </section>
  )
}

export default OurSuccessSection
