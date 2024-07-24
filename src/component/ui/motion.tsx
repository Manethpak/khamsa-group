'use client'
import { useAnimation, useInView, motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  special?: boolean
}

export const Motion: React.FC<Props> = ({ children, className, special }) => {
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
      transition={{
        duration: special ? 0.7 : 0.5,
        delay: special ? 0.75 : 0.5,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
