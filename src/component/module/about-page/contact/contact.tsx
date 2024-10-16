'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Motion } from '@/component/ui/motion'
import { useAnimation, useInView, motion } from 'framer-motion'

const Contacts = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])
  return (
    <section
      ref={ref}
      id="hero"
      className="flex w-full flex-col items-center justify-center overflow-hidden bg-primary py-20"
    >
      <div className="flex w-full max-w-screen-2xl flex-col gap-20 px-5 md:px-10 lg:px-24">
        <div className="flex h-full flex-col-reverse items-center justify-center gap-y-10 sm:justify-between lg:flex-row lg:gap-12">
          <div className="subtitle flex h-full w-full max-w-5xl flex-col justify-center gap-10">
            <div className="flex flex-col gap-5 lg:gap-7">
              <Motion delay={0.5} className="text-white">
                What Are You Waiting For?
              </Motion>
              <Motion
                delay={0.6}
                className="heading-title font-semibold leading-snug text-white"
              >
                Let&apos;s Invest in the Future Together
              </Motion>
              <Motion delay={0.7}>
                <button className="h-14 w-full max-w-fit rounded bg-white px-5 font-medium">
                  <Link href="/contact">Contact Us</Link>
                </button>
              </Motion>
            </div>
          </div>
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.75 }}
            className="flex h-full max-h-[450px] w-full max-w-full justify-center lg:max-w-[650px]"
          >
            <Image
              src="/images/about-contact.jpg"
              alt="view of ai farm factory"
              width={620}
              height={448}
              className="max-h-full w-full object-cover object-center"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
