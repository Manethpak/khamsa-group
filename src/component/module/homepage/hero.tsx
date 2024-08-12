'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import { animate, motion, useMotionValue } from 'framer-motion'
import { logo } from '@/constants'
import useMeasure from 'react-use-measure'
import Link from 'next/link'
import { useHero } from '@/hooks/use-hero'

const HeroSection = () => {
  let [ref, { width }] = useMeasure()
  const xTranslation = useMotionValue(0)
  useEffect(() => {
    let controls
    let finalPosition = -width / 2 - 11

    controls = animate(xTranslation, [0, finalPosition], {
      ease: 'linear',
      duration: 25,
      repeat: Infinity,
      repeatType: 'loop',
    })
    return controls.stop
  }, [xTranslation, width])

  const { data } = useHero()

  useEffect(() => console.log(data), [data])

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
            <div
              className="relative flex w-full gap-24"
              style={{
                maskImage: `linear-gradient(
                      to right,
                      transparent,
                      #000 10% 90%,
                      transparent
                    )`,
                whiteSpace: `nowrap`,
              }}
            >
              <motion.div
                ref={ref}
                style={{
                  x: xTranslation,
                  whiteSpace: `nowrap`,
                }}
                className="relative flex min-w-max gap-24"
              >
                {[...logo, ...logo].map((data) => (
                  <div key={data.id} className="flex h-12 min-w-fit">
                    <Image
                      src={data.Image}
                      alt=""
                      width={250}
                      height={250}
                      className="h-full w-full object-cover"
                      style={{ filter: 'grayscale(1) invert(1)' }}
                    />
                  </div>
                ))}
              </motion.div>
              <motion.div
                ref={ref}
                style={{
                  x: xTranslation,
                  whiteSpace: `nowrap`,
                }}
                className="relative flex min-w-max gap-24"
              >
                {[...logo, ...logo].map((data) => (
                  <div key={data.id} className="flex h-12 min-w-fit">
                    <Image
                      src={data.Image}
                      alt=""
                      width={250}
                      height={250}
                      className="h-full w-full object-cover"
                      style={{ filter: 'grayscale(1) invert(1)' }}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
