'use client'

import Link from 'next/link'
import React, { useEffect, useMemo } from 'react'
import { animate, motion, useMotionValue } from 'framer-motion'
import useMeasure from 'react-use-measure'
import Image from 'next/image'
import { getImageUrl } from '@/lib/directus'
import { Schema } from '@/lib/schema'
import { Motion } from '@/component/ui/motion'

type Props = { data: Schema['Hero'] }

const HeroSection = ({ data }: Props) => {
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

  const displayLogo = useMemo(() => {
    return data
      ?.company!.map((company) => {
        if (typeof company === 'object' && company !== null) {
          return {
            name: company.name,
            imageUrl: getImageUrl(company.logo as string),
          }
        }
      })
      .filter(Boolean)
  }, [data.company])

  return (
    <section id="hero">
      <div className="font-noto relative flex h-[880px] w-full items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut', delay: 0.5 }}
          className="h-full w-full"
        >
          <Image
            src={getImageUrl(data.image as string)}
            alt="globe background image"
            width={1920}
            height={880}
            quality={100}
            className="h-full w-full object-cover object-center"
          />
        </motion.div>
        <div className="absolute flex h-full w-full flex-col justify-center gap-24 bg-black/45 pt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
            className="space-y-5 text-center text-white"
          >
            <div className="text-4xl font-extrabold capitalize md:text-6xl lg:text-[68px]">
              {data.title}
            </div>
            <p className="text-lg font-medium md:text-xl lg:text-2xl">
              {data.subtitle}
            </p>
            <button className="h-14 w-64 rounded-xl bg-white text-lg font-bold text-secondary">
              <Link href="/category">Explore Our Investment</Link>
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
            className="mx-10 flex flex-col items-center justify-center gap-4 overflow-clip text-sm font-medium text-white md:mx-auto md:max-w-4xl"
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
                {displayLogo &&
                  [...displayLogo, ...displayLogo].map((data, index) => (
                    <div key={index} className="flex h-12 min-w-fit">
                      <Image
                        src={data!.imageUrl}
                        alt={data!.name!}
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
                {[...displayLogo, ...displayLogo].map((data, index) => (
                  <div key={index} className="flex h-12 min-w-fit">
                    <Image
                      src={data!.imageUrl}
                      alt={data!.name!}
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
      <div className="flex w-full items-center justify-center bg-polar py-32">
        <Motion className="flex w-full max-w-4xl flex-col gap-5 text-center">
          <h1 className="font-lib-baskerville mx-auto text-[20px] font-bold leading-[28px] tracking-[0.2px] text-black sm:text-[24px] sm:leading-[30px] md:text-[26px] md:leading-[33.6px]">
            {data.description}
          </h1>

          {/* 15px primary color line under the description */}
          <div className="mx-auto mt-2 h-[1px] w-[200px] bg-primary"></div>
        </Motion>
      </div>
    </section>
  )
}

export default HeroSection
