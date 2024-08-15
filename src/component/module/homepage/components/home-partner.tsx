'use client'

import React, { useEffect, useMemo } from 'react'
import { animate, motion, useMotionValue } from 'framer-motion'
import useMeasure from 'react-use-measure'
import { usePartner } from '@/hooks/use-partner'
import Image from 'next/image'
import { getImageUrl } from '@/lib/directus'

const HomePartnerCarousel = () => {
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

  const { data } = usePartner()

  const displayLogo = useMemo(() => {
    if (!data) return []
    return data.map((partner) => ({
      name: partner.name!,
      link: partner.url,
      imageUrl: getImageUrl(partner.image),
    }))
  }, [data])

  return (
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
        {[...displayLogo, ...displayLogo].map((data, index) => (
          <div key={index} className="flex h-12 min-w-fit">
            <Image
              src={data.imageUrl}
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
        {[...displayLogo, ...displayLogo].map((data, index) => (
          <div key={index} className="flex h-12 min-w-fit">
            <Image
              src={data.imageUrl}
              alt={data.name}
              width={250}
              height={250}
              className="h-full w-full object-cover"
              style={{ filter: 'grayscale(1) invert(1)' }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default HomePartnerCarousel
