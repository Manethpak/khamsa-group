import React, { useEffect, useRef } from 'react'
import { useAnimation, useInView, motion } from 'framer-motion'
import Link from 'next/link'

const Contacts = () => {
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
      className="flex w-full items-center justify-center bg-[#8ACEC0] px-10 text-center"
    >
      <div className="flex h-full w-full max-w-7xl justify-center py-24">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
          className="flex max-w-[530px] flex-col gap-6 font-extrabold text-white"
        >
          <p className="text-base">What are you waiting for?</p>
          <h1 className="text-4xl md:text-5xl">
            Let's invest in the future together
          </h1>
          <Link href="/contact" passHref>
            <button className="h-12 rounded-xl bg-white px-4 py-2 text-lg font-bold text-[#19154E] focus:ring-opacity-50">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Contacts
