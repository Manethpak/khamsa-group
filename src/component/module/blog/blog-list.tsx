'use client'
import { useAnimation, useInView, motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { blogData } from '@/constants'
import BlogCard from './components/blog-card'

const BlogList: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <div className="flex w-full flex-col items-center justify-center bg-[#E6F9FA] pt-36 text-lg font-normal text-[#5B5E76]">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
        className="grid w-full max-w-screen-lg grid-cols-1 gap-[20px] md:grid-cols-2"
      >
        {blogData.map((blog) => (
          <BlogCard key={blog.title} {...blog} />
        ))}
      </motion.div>
    </div>
  )
}

export default BlogList
