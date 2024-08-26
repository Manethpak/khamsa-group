import React from 'react'
import Image from 'next/image'
import { InOurs } from '@/constants'
import { Motion } from '@/component/ui/motion'

const InOur = () => {
  return (
    <div className="-mt-1 flex w-full items-start justify-center bg-polar px-10">
      <div className="flex h-full w-full max-w-7xl flex-col gap-24 py-24">
        <Motion className="flex w-full max-w-[540px] flex-col gap-5 font-extrabold">
          <p className="text-base text-primary">Join us in our</p>
          <h1 className="text-4xl text-secondary md:text-5xl">
            30 years journey
          </h1>
          <p className="text-lg font-normal">
            The aim of the company is to acquire and increase its investors by
            100% to facilitate high potential start-up companies from all
            industries in SEA countries by 2030.
          </p>
        </Motion>
        <div className="grid w-full grid-cols-1 gap-5 xl:grid-cols-3">
          {InOurs.map((data) => (
            <Motion
              key={data.id}
              className={`flex h-full flex-col gap-8 rounded-3xl bg-white p-10 ${data.special ? 'xl:col-span-2' : ''} ${data.specials ? 'xl:col-span-3' : ''}`}
              special={data.special}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white">
                <Image
                  src={data.Image}
                  alt="office"
                  width={250}
                  height={250}
                  className="h-8 w-8"
                />
              </div>
              <div className="w-full max-w-[730px] space-y-2">
                <h1 className="text-2xl font-extrabold text-secondary">
                  {data.title}
                </h1>
                <p>{data.description}</p>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InOur
