'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import HomePartnerCarousel from './components/home-partner'

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="relative flex h-[880px] w-full items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut', delay: 0.5 }}
          className="h-full w-full"
        >
          <Image
            src="/images/bg-home.avif"
            alt=""
            width={250}
            height={250}
            className="h-full w-full object-cover object-center"
          />
        </motion.div>
        <div className="absolute mt-28 flex h-full w-full flex-col justify-center gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
            className="space-y-5 text-center text-white"
          >
            <div className="text-4xl font-extrabold md:text-6xl lg:text-[68px]">
              <h1>Build The Future</h1>
              <h1> World.</h1>
            </div>
            <p className="text-lg font-medium md:text-xl lg:text-2xl">
              We wish to see through new creation, innovation and creativity.
            </p>
            <button className="h-14 w-64 rounded-xl bg-white text-lg font-bold text-secondary">
              <Link href="#investment">Explore Our Investment</Link>
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
            className="text-gray-400 mx-10 flex flex-col items-center justify-center gap-4 overflow-clip text-sm font-medium md:mx-auto md:max-w-4xl"
          >
            <p>Our affiliate companies</p>
            <HomePartnerCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
