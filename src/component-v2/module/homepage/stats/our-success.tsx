'use client' // Mark it as a Client Component

import React, { useEffect, useRef } from 'react'
import { useAnimation, useInView, motion } from 'framer-motion'
import { Schema } from '@/lib/schema'

type Props = {
  data: Schema['Success'][] // Assuming 'data' is an array of Success objects
}

const OurSuccess = ({ data }: Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <motion.div ref={ref} className="relative mt-6 w-full">
      <div className="max-w-9xl mx-auto w-full px-4">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
          className="grid grid-cols-1 place-items-center gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center border-black bg-white p-1 font-manrope text-green-700"
              style={{ width: '100%', maxWidth: '290px', height: '150px' }} // Fixed height
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
            >
              <h1 className="font-manrope text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                {item.number}
              </h1>
              <span className="mt-1 font-manrope text-sm font-light sm:text-base md:text-2xl lg:text-2xl xl:text-2xl">
                {item.title}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default OurSuccess
