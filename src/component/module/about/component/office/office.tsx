import React, { useEffect, useRef } from 'react'
import { useAnimation, useInView, motion } from 'framer-motion'
import Image from 'next/image'
import { Schema } from '@/lib/schema'
import { getImageUrl } from '@/lib/directus'

interface Props {
  office: Schema['Office']
}
const Office = ({ office }: Props) => {
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
      className="flex w-full justify-center bg-polar px-10 text-center"
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
          <p className="subtitle">Our office</p>
          <h1 className="title max-w-[450px] ">
            Work, Play, and Refresh.
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
          {office.map((data, index) => (
            <div
              key={index}
              className={`flex h-[280px] flex-col items-center justify-center gap-5 text-lg ${
                index == 2 ? 'w-full md:col-span-2 xl:col-span-1' : 'max-w-3xl'
              }`}
            >
              <Image
                src={getImageUrl(data.image! as string)}
                alt="office"
                width={250}
                height={250}
                className="h-full w-full rounded-xl object-cover object-center"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Office
