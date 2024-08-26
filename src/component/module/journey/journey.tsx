'use client'
import { Motion } from '@/component/ui/motion'
import Image from 'next/image'
import React from 'react'
import InOur from './component/in-our/in-our'
import Faq from './component/faq/faq'
import Contacts from './component/contact/contact'
import { useFaq } from '@/fetcher/faq/use-faq'

const Journeys = () => {
  const { data } = useFaq()
  return (
    <div className="flex w-full flex-col items-center justify-center pt-36 text-lg font-normal text-gray">
      <Motion className="h-fit w-full space-y-24 text-pretty px-10 text-center text-2xl font-medium">
        <div className="flex h-full max-h-full flex-col items-center gap-5">
          <p className="text-base font-extrabold text-primary">
            Khamsagroup journey
          </p>
          <h1 className="max-w-[1000px] text-4xl font-extrabold text-[#19154E] md:text-6xl">
            A Journey of a thousand miles begins with a single step
          </h1>
          <p className="max-w-[720px] text-lg md:text-2xl">
            Watch a video showcasing our projects roadmaps for the next 30 years
            ahead. Join us in this excited journey!
          </p>
        </div>
        <div className="flex h-fit w-full flex-col items-center">
          <Image
            src="/images/journey.avif"
            alt="logo"
            width={250}
            height={250}
            className="max-h-[720px] w-full max-w-7xl rounded-t-xl"
          />
        </div>
      </Motion>
      <InOur />
      {data && <Faq faq={data}/>}
      <Contacts />
    </div>
  )
}

export default Journeys
