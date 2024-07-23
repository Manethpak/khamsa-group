import { useAnimation, useInView, motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { Teams } from '@/constants'
import Image from 'next/image'

const TeamsCard = () => {
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
      transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
      className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
    >
      {Teams.map((data) => (
        <div
          key={data.name}
          className="flex h-[280px] max-w-3xl flex-col items-center justify-center gap-5 rounded-xl bg-[#E6F9FA] text-lg"
        >
          <Image
            src={data.Image}
            alt="teams"
            width={250}
            height={250}
            className="h-32 w-32"
          />
          <div>
            <h1 className="font-extrabold text-[#19154E]">{data.name}</h1>
            <p className="font-medium text-[#5B5E76]">{data.position}</p>
          </div>
        </div>
      ))}
    </motion.div>
  )
}

export default TeamsCard
