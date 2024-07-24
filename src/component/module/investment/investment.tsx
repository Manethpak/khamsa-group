'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { Investments } from '@/constants'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Motion } from '@/component/ui/motion'

const Investment = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView])
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay: 0.5 }}
      id="investment"
      className="flex h-[1725px] flex-col items-center justify-center gap-12 px-5 pt-12 md:h-[1241px] lg:px-0"
    >
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
        className="flex h-28 max-w-[350px] flex-col gap-2 text-center 2xl:max-w-[600px]"
      >
        <p className="text-base font-extrabold text-[#8ACEC0]">what we do</p>
        <h1 className="text-4xl font-extrabold text-[#19154E]">
          Our Investment Portfolio
        </h1>
      </motion.div>
      <Motion className="-mt-3 grid h-[1457px] w-full max-w-xl grid-cols-1 justify-items-stretch overflow-auto p-5 md:h-[900px] md:max-w-fit md:grid-cols-2 md:gap-5 lg:h-fit lg:grid-cols-3 lg:gap-3">
        {Investments.map((data) => (
          <div
            key={data.id}
            className="flex h-[270px] w-full max-w-[320px] flex-col items-center justify-center gap-7 justify-self-center rounded-2xl border bg-[#FFFFFF] p-3 shadow-lg shadow-[#00000040] md:min-w-[341px] xl:min-w-[402px]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#F6F4FF]">
              <Image
                src={data.Image}
                alt="investment"
                width={250}
                height={250}
                className="h-8 w-8"
              />
            </div>
            <div className="flex flex-col gap-3 text-center">
              <h1 className="text-2xl font-extrabold text-[#19154E]">
                {data.title}
              </h1>
              <p className="max-w-52 text-base font-medium text-[#5B5E76]">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </Motion>
    </motion.div>
  )
}

export default Investment
