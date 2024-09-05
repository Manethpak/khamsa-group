import { useAnimation, useInView, motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import TeamsCard from './teams-card'
import { useTeams } from '@/fetcher/about/teams/use-teams'

const Teams = () => {
  const { data } = useTeams()
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
      className="flex w-full justify-center px-10 text-center"
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
          <p className="subtitle">Our team</p>
          <h1 className="title">
            Empowering Entrepreneur.
          </h1>
          <p className="text-lg font-medium">
            Meet the investment wizards who will help you navigate the complex
            world of finance and achieve your investment objectives.
          </p>
        </motion.div>
        {data && <TeamsCard team={data} />}
      </div>
    </motion.div>
  )
}

export default Teams
