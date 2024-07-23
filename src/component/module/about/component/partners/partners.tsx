import { useAnimation, useInView, motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { Partner } from '@/constants'
import Image from 'next/image'

const Partners = () => {
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
      className="flex w-full justify-center px-10 text-center"
    >
      <div className="flex h-full w-full max-w-4xl flex-col items-center gap-16 py-20">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
          className="flex flex-col items-center gap-5 font-extrabold text-[#19154E]"
        >
          <h1 className="max-w-[560px] text-4xl md:text-5xl">
            Meet our partners
          </h1>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
          className="flex max-w-[630px] flex-col items-center justify-center gap-5 md:flex-row"
        >
          <div className="flex gap-5">
            {Partner.slice(0, 3).map((data) => (
              <div key={data.id} className="h-12 max-w-full">
                <Image
                  src={data.Image}
                  alt="partners"
                  width={250}
                  height={250}
                  className="h-full w-full object-center"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-5">
            {Partner.slice(3).map((data) => (
              <div key={data.id} className="h-12 max-w-full">
                <Image
                  src={data.Image}
                  alt="partners"
                  width={250}
                  height={250}
                  className="h-full w-full object-center"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Partners
