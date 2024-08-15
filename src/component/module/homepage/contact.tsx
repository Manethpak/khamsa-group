'use client'
import React, { useEffect, useRef } from 'react'
import ContactContent from '../contact/components/contact-content'
import { useAnimation, useInView, motion } from 'framer-motion'

const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])
  return (
    <motion.section
      id="contact"
      className="flex min-h-screen w-full items-center justify-center bg-primary"
    >
      <div className="w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
          className="mx-auto w-full max-w-[1280px]"
        >
          <ContactContent />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ContactSection
