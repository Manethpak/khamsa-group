'use client'

import { useAnimation, useInView, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { ABOUT_US } from '@/constants/about-us'
import { Motion } from '@/component/ui/motion'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])
  return (
    <section className="subtitle flex w-full flex-col items-center justify-center pt-20">
      <div className="h-fit w-full max-w-screen-2xl px-5 md:px-10 lg:px-24">
        <div className="flex flex-col gap-8">
          <Motion className="title">About Us</Motion>
          <div className="flex w-full flex-col-reverse items-start justify-between gap-5 lg:flex-row lg:items-center">
            <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-5 px-4">
              {ABOUT_US.map((data, index) => (
                <Motion key={data.title} delay={index * 0.2} className="flex">
                  <p>
                    <span className="font-medium">{data.title}</span>
                    {data.subtitle}
                  </p>
                </Motion>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
              className="flex max-h-[450px] w-full max-w-full justify-end md:min-h-[450px]"
            >
              <Image
                src="/images/about.jpeg"
                alt="view of ai farm factory"
                width={620}
                height={448}
                className="max-h-full w-full object-cover object-center lg:max-w-[620px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
