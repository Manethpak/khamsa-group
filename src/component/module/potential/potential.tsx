'use client'
import React, { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { useAnimation, useInView, motion } from 'framer-motion'
import Ceo from './ceo'

const Potential = () => {
  const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView])
  return (
    <motion.div>
      <div className="flex w-full justify-center bg-[#E6F9FA]">
        <div className="grid max-h-full w-full grid-cols-1 items-center justify-center justify-items-stretch gap-x-24 gap-y-12 overflow-hidden px-5 py-12 md:px-10 xl:max-w-fit xl:grid-cols-2">
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 70 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
            className="max-w-full"
          >
            <div className="flex w-full max-w-[550px] flex-col gap-y-5 text-base font-extrabold">
              <p className="text-[#8ACEC0]">at khamsagroup we</p>
              <h1 className="text-4xl text-[#19154E] lg:text-5xl">
                Unlock Your Potential
              </h1>
              <p className="font-medium text-[#5B5E76] lg:text-lg">
                We have experts in various fields including business, fintech,
                AI and blockchain. We help accelerate your growth and maximize
                your success.
              </p>
            </div>
          </motion.div>
          <div className="flex h-full w-fit items-center justify-center justify-self-center">
            <ReactPlayer
              className="overflow-hidden rounded-2xl"
              controls={true}
              height="330px"
              width="550px"
              url="https://youtu.be/f_GhQVHDH0E?si=E2vGEK0L4z1vxKng"
            />
          </div>
        </div>
      </div>
      <div className="flex h-[500px] w-full items-center justify-center bg-[#FFFFFF]">
        <Ceo />
      </div>
    </motion.div>
  )
}

export default Potential
