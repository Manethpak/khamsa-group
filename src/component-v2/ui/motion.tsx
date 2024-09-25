'use client'
import { useAnimation, useInView, motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
}

export const Motion: React.FC<Props> = ({ children, className, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView , controls])

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  )
}
