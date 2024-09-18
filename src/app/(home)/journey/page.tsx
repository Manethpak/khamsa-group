import Image from 'next/image'
import React from 'react'

import InOur from '@/component/module/journey/component/in-our'
import Faq from '@/component/module/journey/component/faq'
import Contacts from '@/component/module/journey/component/contact'
import { Motion } from '@/component/ui/motion'
import { fetchFaq } from '@/fetcher/faq/fetch-faq'

export const revalidate = 300

export default async function JourneyPage() {
  const faq = await fetchFaq()

  return (
    <div className="font-noto flex w-full flex-col items-center justify-center pt-36 text-lg text-gray">
      <Motion className="h-fit w-full space-y-24 text-pretty px-10 text-center text-2xl font-medium">
        <div className="flex h-full max-h-full flex-col items-center gap-5">
          <p className="subtitle">Khamsagroup journey</p>
          <h1 className="heading-title max-w-[1000px] text-secondary">
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
            alt="showcasing our journey in the next 30 years"
            width={1200}
            height={654}
            quality={100}
            className="max-h-[720px] w-full max-w-7xl rounded-t-xl"
          />
        </div>
      </Motion>
      <InOur />
      {faq && <Faq faq={faq} />}
      <Contacts />
    </div>
  )
}
