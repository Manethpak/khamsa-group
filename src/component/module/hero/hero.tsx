'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import { animate, motion, useMotionValue } from 'framer-motion'
import { logo } from '@/constants'
import useMeasure from 'react-use-measure'

const Hero = () => {
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

  return (
    <div>
      <div className="h-[880px] w-full flex justify-center items-center overflow-hidden relative">
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
        <div className="absolute flex flex-col justify-center h-full gap-24 mt-28 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
            className="space-y-5 text-center text-[#FFFFFF]"
          >
            <div className="text-4xl font-extrabold md:text-6xl lg:text-[68px]">
              <h1>Build The Future</h1>
              <h1> World.</h1>
            </div>
            <p className="text-lg font-medium md:text-xl lg:text-2xl">
              We wish to see through new creation, innovation and creativity.
            </p>
            <button className="h-14 w-64 rounded-xl bg-[#FFFFFF] text-lg font-bold text-[#19154E]">
              <a href="#investment">Explore Our Investment</a>
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
            className="mx-10 flex flex-col items-center justify-center gap-4 overflow-clip text-sm font-medium text-gray-400 md:mx-auto md:max-w-4xl"
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
    </div>
  )
}

export default Hero
