import React, { useEffect, useRef } from 'react'

import { useAnimation, useInView, motion } from 'framer-motion'
import Image from 'next/image'
import { Offices } from '@/constants'

const Office = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])
  return (
    <motion.div
    ref={ref}
    className="flex w-full justify-center px-10 text-center bg-polar"
  >
    <div className="flex h-full w-full max-w-7xl flex-col gap-24 py-24">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
        className="flex flex-col items-center gap-5 font-extrabold text-secondary"
      >
        <p className="text-base text-primary">Our office</p>
        <h1 className="max-w-[450px] text-4xl md:text-5xl">
            Work, play, and refresh.
        </h1>
      </motion.div>
      <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
      className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
    >
      {Offices.map((data) => (
        <div
          key={data.id}
          className={`flex h-[280px]  flex-col items-center justify-center gap-5   text-lg ${
            data.special ? 'md:col-span-2 xl:col-span-1 w-full' : 'max-w-3xl'}`}
        >
          <Image
            src={data.Image}
            alt="office"
            width={250}
            height={250}
            className="w-full h-full rounded-xl object-cover object-center"
          />
        </div>
      ))}
    </motion.div>
    </div>
  </motion.div>
  )
}

export default Office
