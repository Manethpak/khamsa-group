'use client'

import { useAnimation, useInView, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { Motion } from '@/component/ui/motion'
import { Schema } from '@/lib/schema'
import { getImageUrl } from '@/lib/directus'

interface Props {
  about: Schema['About']
}

const AboutSection = ({ about }: Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])
  return (
    <section className="subtitle flex w-full flex-col items-center justify-center pt-16">
      <div className="h-fit w-full max-w-screen-2xl px-5 md:px-10 lg:px-24">
        <div className="flex flex-col gap-8">
          <Motion className="heading-subtitle">About Us</Motion>
          <div className="flex w-full flex-col-reverse items-start justify-between gap-5 lg:flex-row lg:items-start">
            <div className="flex w-full max-w-2xl flex-col justify-start gap-8">
              {about.description! && (
                <Motion delay={0.5}>
                  <div
                    className="space-y-5 text-justify"
                    dangerouslySetInnerHTML={{ __html: about.description! }}
                  />
                </Motion>
              )}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
              className="flex max-h-[450px] w-full max-w-full justify-end md:min-h-[450px] xl:min-h-[250px]"
            >
              <Image
                src={getImageUrl(about.image_about! as string)}
                alt={about.image_about! as string}
                width={1200}
                height={1200}
                className="max-h-full w-full object-cover object-center lg:max-w-[620px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex max-w-screen-2xl flex-col gap-10 px-5 pt-20 md:px-10 lg:px-24">
        <div className="flex w-full flex-col items-center gap-3">
          <Motion delay={0.5} className="title">
            OUR VALUE
          </Motion>
          <Motion delay={0.75} className="subtitle-about">
            {about.title}
          </Motion>
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-10">
          <Motion
            delay={1}
            className="flex w-full flex-1 justify-start self-start sm:min-w-[28rem]"
          >
            <Image
              src={getImageUrl(about.image_value! as string)}
              alt={about.image_about! as string}
              width={1200}
              height={1200}
              className="h-auto max-w-full object-cover shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl"
            />
          </Motion>

          <Motion delay={1.25} className="w-full">
            <p className="text-justify">{about.subtitle}</p>
          </Motion>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
