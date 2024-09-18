'use client' // Mark it as a Client Component

import React, { useEffect, useRef } from 'react'
import { useAnimation, useInView, motion } from 'framer-motion'
import { Schema } from '@/lib/schema'

type Props = {
  data: Schema['Success'] // Assuming 'data' is an array of Success objects
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
      <div className="max-w-9xl w-full justify-center">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
          className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="mx-auto flex flex-col items-center justify-center  border-black-1 bg-white p-4 font-manrope text-green-700" // 'mx-auto' for centering in col-1
              style={{ width: '290px', height: '150px' }}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
            >
              <h1 className="font-manrope text-3xl font-semibold">{item.number}</h1>
              <span className="mt-2 text-2xl font-light">{item.title}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default OurSuccess
