'use client'
import { useAnimation, useInView, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import OurSuccess from './component/our-success/our-success'
import Teams from './component/teams/teams'
import Office from './component/office/office'
import Partners from './component/partners/partners'
import Contacts from './component/contact/contact'

const KhamsaGroup = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView])
  return (
    <motion.div
      ref={ref}
      className="w-full flex flex-col justify-center items-center"
    >
      <motion.div className="h-full space-y-24 text-pretty p-10 py-28 text-center text-2xl font-medium text-[#888888]">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
          className="h-full max-h-full space-y-5"
        >
          <p className="text-base font-extrabold text-[#8ACEC0]">ABOUT US</p>
          <h1 className="text-4xl font-extrabold text-[#19154E] md:text-6xl">
            Khamsa Group / សម្ព័ន្ធខាំសា
          </h1>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
          className="flex w-full flex-col items-center gap-20"
        >
          <p>The Future World</p>
          <Image
            src="/images/logo.avif"
            alt="logo"
            width={250}
            height={250}
            className="max-h-[720px] w-full max-w-[720px]"
          />
        </motion.div>
        <div className="flex flex-col gap-y-9 text-justify max-w-7xl w-fullmx-autor">
          <p>
            <strong>Khamsa Group /</strong>សម្ព័ន្ធខាំសា. Khamsa (ख़मसा, خمسة ,
            חַמְסָה, ⵜⴰⴼⵓⵙⵜ) from Arabic “Hamsa” means “five”, but also “the five
            fingers of the hand” and Romanized as “Khamsa” representing the open
            right hand, recognized and used as a sign of protection, blessings,
            power and strength in many times throughout history to provide defense
            against the bad luck and evil.{' '}
          </p>
          <p>
            <strong>Khamsa Investment Group Co. Ltd. or Khamsa Group</strong> was
            founded by the CEO himself, Mr. Kim Khorn Long on November 16, 2017,
            and was finally incorporated and registered in the Kingdom of Cambodia
            on August 11, 2021. The company was formed to support its
            subsidiaries, such as Khamsa Co. Ltd, Sunrise Rooster Co. Ltd., AI
            Farm Co. Ltd and Laoka Co. Ltd., the investment community to ensure
            that all its business objectives will be put into reality.{' '}
          </p>
          <p>
            We focus on industries (a) Value-chain-based industry, (b)
            meta-data-based industry, (c) AI-based industry, (d) knowledge-based
            economy, (e) scarcity resources industry, (f) renewable energy
            industry, (g) information technology and engineering, (h) internet of
            values
          </p>
          <div>
            <strong>Association </strong>
            <p>
              <strong>Khamsa Group</strong> is the conglomerate association with
              Khamsa Corp, Sunrise Rooster, Laoka, AI Farm, AutobotX, BadrobotX,
              Adone, Slum, Zox, Onecent, Lumpsum, Tongtin, CorporationK,
              VultureGO, and Tofu.
            </p>
          </div>
        </div>
      </motion.div>
      <OurSuccess/>
      <Teams/>
      <Office/>
      <Partners/>
      <Contacts/>
    </motion.div>
  )
}

export default KhamsaGroup
