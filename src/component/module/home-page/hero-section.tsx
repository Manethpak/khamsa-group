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
            website: company.website,
          }
        }
      })
      .filter(Boolean)
  }, [data.company])

  return (
    <section
      id="hero"
      className="flex w-full flex-col items-center justify-center overflow-hidden py-20"
    >
      <div className="flex w-full max-w-screen-2xl flex-col gap-20 px-5 md:px-10 lg:px-24">
        <div className="flex h-full flex-col-reverse items-center justify-center sm:justify-between lg:flex-row lg:gap-12">
          <div className="subtitle flex h-full w-full max-w-5xl flex-col justify-center gap-10">
            <div className="flex flex-col">
              <Motion delay={0.5} className="heading-title py-5">
                {data.title}
              </Motion>

              <Motion delay={0.6}>{data.subtitle}</Motion>
              <Motion delay={0.7}>{data.description}</Motion>
            </div>
            <Motion delay={0.8}>
              <button className="h-14 w-full max-w-fit rounded bg-secondPrimary px-5 font-semibold text-white">
                <Link href="#investment">Explore Our Investment</Link>
              </button>
            </Motion>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.75 }}
            className="flex h-full max-h-[450px] w-full max-w-full justify-center lg:h-full lg:max-w-[650px]"
          >
            <Image
              src={getImageUrl(data.image! as string)}
              alt={data.image! as string}
              width={1920}
              height={1900}
              quality={100}
              className="max-h-full w-full object-cover object-center"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
          className="heading-title flex w-full flex-col items-center gap-10 overflow-hidden text-lg font-medium sm:flex-row sm:justify-between"
        >
          <p className="w-full max-w-72 text-center sm:min-w-max sm:text-start">
            Our Affiliate Companies
          </p>

          <div
            className="flex w-full min-w-max gap-24"
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
              className="flex w-full gap-24"
            >
              {displayLogo &&
                [...displayLogo, ...displayLogo].map((data, index) => (
                  <Link
                    href={data?.website || '#'}
                    key={index}
                    className="flex h-14 min-w-fit"
                    target="_blank"
                  >
                    <Image
                      src={data!.imageUrl}
                      alt={data!.name!}
                      width={250}
                      height={250}
                      className="h-full w-full object-cover"
                    />
                  </Link>
                ))}
            </motion.div>
            <motion.div
              ref={ref}
              style={{
                x: xTranslation,
                whiteSpace: `nowrap`,
              }}
              className="flex w-full gap-24"
            >
              {displayLogo &&
                [...displayLogo, ...displayLogo].map((data, index) => (
                  <Link
                    href={data?.website || '#'}
                    key={index}
                    className="flex h-14 min-w-fit"
                    target="_blank"
                  >
                    <Image
                      src={data!.imageUrl}
                      alt={data!.name!}
                      width={250}
                      height={250}
                      className="h-full w-full object-cover"
                    />
                  </Link>
                ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
