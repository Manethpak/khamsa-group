import { useAnimation, useInView, motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

const Ceo = () => {
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
      variants={{
        hidden: { opacity: 0, y: 70 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
      className="flex w-full max-w-[360px] flex-col gap-5 text-center md:max-w-[600px] lg:px-14"
    >
      <h1 className="text-2xl font-semibold text-[#19144E] xl:text-3xl">
        &quot;There is no small person or small idea. Here, there are only
        dreams, many beautiful dreams&quot;
      </h1>
      <p className="text-base font-extrabold xl:text-lg">
        Long Kim Khorn - CEO
      </p>
    </motion.div>
  )
}

export default Ceo
