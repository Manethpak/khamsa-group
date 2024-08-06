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
      className="m-auto flex min-h-screen max-w-screen-2xl items-center justify-center bg-primary"
    >
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
        className="w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px]"
      >
        <ContactContent />
      </motion.div>
    </motion.section>
  )
}

export default ContactSection
