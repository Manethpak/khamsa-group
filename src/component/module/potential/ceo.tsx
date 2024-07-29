
import { Motion } from '@/component/ui/motion'
import React from 'react'

const Ceo = () => {
  return (
    <Motion
      className="flex w-full max-w-[360px] flex-col gap-5 text-center md:max-w-[600px] lg:px-14"
    >
      <h1 className="text-2xl font-semibold text-secondary xl:text-3xl">
        &quot;There is no small person or small idea. Here, there are only
        dreams, many beautiful dreams&quot;
      </h1>
      <p className="text-base font-extrabold xl:text-lg">
        Long Kim Khorn - CEO
      </p>
    </Motion>
  )
}

export default Ceo
