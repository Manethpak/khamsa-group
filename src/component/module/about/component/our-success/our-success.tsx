import React, { useEffect, useRef } from 'react'
import { useAnimation, useInView, motion } from 'framer-motion'
import { Schema } from '@/lib/schema'
interface Props {
  success: Schema['Success']
}
const OurSuccess = ({ success }: Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])
  return (
    <motion.div ref={ref} className="flex w-full justify-center bg-polar px-10">
      <div className="grid h-full w-full max-w-7xl grid-cols-1 gap-14 py-16 lg:grid-cols-2">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
          className="flex max-w-[530px] flex-col gap-5 font-extrabold"
        >
          <p className="text-base text-primary">OUR SUCCESS</p>
          <h1 className="text-4xl text-secondary md:text-5xl">
            Leading development for modern teams .
          </h1>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
          className="grid grid-cols-1 gap-5 font-extrabold md:grid-cols-2"
        >
          {success.map((data) => (
            <div
              key={data.number}
              className="flex h-[126px] max-w-3xl flex-col items-center justify-center rounded-xl bg-white"
            >
              <h1 className="text-[40px] text-secondary">{data.number}</h1>
              <p className="text-lg text-gray">{data.title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default OurSuccess
