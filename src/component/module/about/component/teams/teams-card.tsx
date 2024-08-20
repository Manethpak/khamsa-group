import { useAnimation, useInView, motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Schema } from '@/lib/schema'
import { getImageUrl } from '@/lib/directus'

interface Props {
  team: Schema['Team']
}
const TeamsCard = ({ team }: Props) => {
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
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
      className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
    >
      {team.map((data) => (
        <div
          key={data.name}
          className="flex h-[280px] max-w-3xl flex-col items-center justify-center gap-5 rounded-xl bg-polar text-lg"
        >
          <Image
            src={getImageUrl(data.image! as string)}
            alt={data.name!}
            width={250}
            height={250}
            className="h-32 w-32"
          />
          <div>
            <h1 className="font-extrabold text-secondary">{data.name}</h1>
            <p className="font-medium text-gray">{data.position}</p>
          </div>
        </div>
      ))}
    </motion.div>
  )
}

export default TeamsCard
