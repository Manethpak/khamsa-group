'use client'

import Link from 'next/link'
import React, { useEffect, useMemo } from 'react'
import { animate, motion, useMotionValue } from 'framer-motion'
import useMeasure from 'react-use-measure'
import Image from 'next/image'
import { getImageUrl } from '@/lib/directus'
import { Schema } from '@/lib/schema'
import { Motion } from '@/component-v2/ui/motion'

type Props = { data: Schema['Hero'] }

const HomeSection = ({ data }: Props) => {
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
    <section id="hero" className="flex flex-col w-full items-center justify-center py-20 overflow-hidden px-5">
      <div className="w-full max-w-screen-2xl flex flex-col gap-20">
        <div className="flex h-full flex-col-reverse items-center justify-center lg:gap-12 lg:flex-row sm:justify-between">
          <div className="flex flex-col gap-10 w-full h-full justify-center max-w-5xl subtitle ">
            <div className=" flex flex-col">
              <Motion delay={0.5} className="heading-title py-5">
              {data.title}
              </Motion>
              
              <Motion delay={0.6}>
              {data.subtitle}
              </Motion>
              <Motion delay={0.7}>
              {data.description}
              </Motion>
          </div>
          <Motion delay={0.8}>
          <button className="h-14 max-w-fit px-5 w-full rounded-xl bg-secondPrimary text-white font-medium">
              <Link href="/category">Explore Our Investment</Link>
            </button>
          </Motion>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.75 }}
            className="flex h-full max-h-[450px] w-full bg-blue-500 max-w-full lg:max-w-[650px] justify-center">
            <Image
              src="/images/heroContent.gif"
              alt="view of ai farm factory"
              width={620}
              height={448}
              className="max-h-full w-full object-cover object-center"
            />
          </motion.div>
        </div>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center w-full heading-title text-2xl sm:justify-between gap-10 font-semibold overflow-hidden"
          >
            <p className="max-w-72 sm:min-w-max w-full text-center sm:text-start">Our affiliate companies</p>

            <div
              className="flex gap-24 min-w-max w-full"
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
                className="flex gap-24 w-full"
              >
                {displayLogo &&
                  [...displayLogo, ...displayLogo].map((data, index) => (
                    <div key={index} className="flex h-14 min-w-fit">
                      <Image
                        src={data!.imageUrl}
                        alt={data!.name!}
                        width={250}
                        height={250}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
              </motion.div>
              
            </div>


          </motion.div>
        </div>
    </section>
  )
}

export default HomeSection
