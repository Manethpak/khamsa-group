'use client'
import React, { useEffect, useRef } from 'react'
import BlogCard from './components/blog-card'
import { useAnimation, useInView, motion } from 'framer-motion'
import Link from 'next/link'

const BlogContent = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView])

  return (
    <motion.div className="flex min-h-screen flex-col items-center justify-center bg-[#E6F9FA] py-5">
      <div className="w-full max-w-screen-xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
          className="mt-20 text-center"
        >
          <p className="text-sm font-medium text-[#8ACEC0]">Blog</p>
          <h1 className="font-manrope mt-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Insights and news from <br /> KhamsaGroup
          </h1>
          <p className="font-manrope mt-6 text-base font-semibold leading-7">
            Discover articles of hot news and important announcements <br />{' '}
            from experts at KhamsaGroup
          </p>
          <div className="mt-6">
            <Link href="/blog" passHref>
              <button className="h-[46px] w-[153.16px] rounded-xl bg-[#8ACEC0] px-[20px] py-[13.5px] pl-[20px] pr-[19.58px] text-white shadow-md transition-colors duration-300 hover:bg-[#7BCDB2] focus:outline-none focus:ring-2 focus:ring-[#8ACEC0] focus:ring-opacity-50">
                See all Articles
              </button>
            </Link>
          </div>
        </motion.div>
        <BlogCard />
      </div>
    </motion.div>
  )
}

export default BlogContent
