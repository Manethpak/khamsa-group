import { Motion } from '@/component/ui/motion'
import { Condition } from '@/constants/condition'
import React from 'react'

const TermCondition = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-36 text-start text-lg text-deepGreen">
      <Motion className="h-fit w-full max-w-[1000px] space-y-7 text-pretty px-10">
        <div className="flex h-full max-h-full flex-col gap-7">
          <h1 className="font-manrope text-4xl font-bold md:text-6xl">
            Terms & Conditions
          </h1>
          <p className="text-xl md:text-2xl">
            V 2.0 - Last updated: December 11, 2024
          </p>
        </div>
        {Condition.map((data) => (
          <div key={data.title} className="space-y-10">
            <h2 className="font-manrope text-2xl font-bold md:text-5xl">
              {data.subtitle}
            </h2>
            <h2 className="font-manrope text-2xl font-bold md:text-4xl">
              {data.title1}
            </h2>
            <p>{data.des1}</p>

            <div className="space-y-5">{data.descriptions}</div>
            <div className="space-y-5">
              <h1 className="font-manrope text-2xl font-bold md:text-4xl">
                {data.title}
              </h1>
              <h2 className="space-y-5 font-manrope">{data.description}</h2>
            </div>
          </div>
        ))}
      </Motion>
    </div>
  )
}

export default TermCondition
