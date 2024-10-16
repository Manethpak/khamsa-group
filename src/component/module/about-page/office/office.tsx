import React from 'react'
import Image from 'next/image'
import { Schema } from '@/lib/schema'
import { getImageUrl } from '@/lib/directus'
import { Motion } from '@/component/ui/motion'

interface Props {
  office: Schema['Office']
}
const Office = ({ office }: Props) => {
  return (
    <div className="subtitle-about flex w-full flex-col items-center justify-center">
      <div className="flex h-full w-full max-w-screen-2xl flex-col gap-5 px-5 py-10 text-center md:px-10 lg:px-24">
        <Motion delay={0.5}>OUR OFFICE</Motion>
        <Motion delay={0.75} className="title">
          Work, Play and Refresh
        </Motion>
        <Motion
          delay={1}
          className="grid w-full grid-cols-2 grid-rows-6 gap-3 py-16 md:grid-cols-3"
        >
          {office.map((data, index) => (
            <div
              key={index}
              className={`flex h-[150px] min-h-full w-full flex-col items-center justify-center gap-5 text-lg md:h-[220px] ${index == 0 ? 'row-span-1 md:row-span-2' : 'row-span-2'} ${index == 1 ? 'md:row-span-1' : ''} ${index == 6 ? 'row-span-3' : ''} ${index == 8 ? 'col-span-2 md:col-span-1' : ''} `}
            >
              <Image
                src={getImageUrl(data.image! as string)}
                alt="office"
                width={1250}
                height={1250}
                className="h-full w-full object-cover object-center"
              />
            </div>
          ))}
        </Motion>
      </div>
    </div>
  )
}

export default Office
