'use client'

import Image from 'next/image'
import React from 'react'
import Navbar from './navbar'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div>
      <div className="h-[880px] w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
          className="h-full w-full"
        >
          <Image
            src="/images/bg-home.avif"
            alt=""
            width={250}
            height={250}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 top-0">
          <Navbar />
        </div>
      </div>
    </div>
  )
}

export default Hero
