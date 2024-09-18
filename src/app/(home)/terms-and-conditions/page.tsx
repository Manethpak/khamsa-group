import { Motion } from '@/component/ui/motion'
import { Condition } from '@/constants'
import React from 'react'

const TermCondition = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-36 text-start text-lg font-medium text-gray">
      <Motion className="h-fit w-full max-w-[1000px] space-y-7 text-pretty px-10">
        <div className="flex h-full max-h-full flex-col gap-7">
          <h1 className="text-4xl font-extrabold text-[#19154E] md:text-6xl">
            Terms & Conditions
          </h1>
          <p className="text-xl text-[#999999] md:text-2xl">
            V 1.1 - Last edited on Sep 8, 2022
          </p>
        </div>
        {Condition.map((data) => (
          <div key={data.title} className="font-libre space-y-16">
            <div className="space-y-5">{data.descriptions}</div>
            <div className="space-y-5">
              <h1 className="text-2xl font-extrabold text-[#19154E] md:text-4xl">
                {data.title}
              </h1>
              <h2 className="space-y-5">
                {data.description}
                <p className="italic">
                  Note: These Terms of Service do not replace the Terms of
                  Service for those Customers who have a separately negotiated
                  agreement.
                </p>
              </h2>
            </div>
          </div>
        ))}
      </Motion>
    </div>
  )
}

export default TermCondition
