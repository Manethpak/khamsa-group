'use client'

import React, { useEffect, useRef } from 'react'
import BlogCard from '../blog/components/blog-card'
import { useAnimation, useInView, motion } from 'framer-motion'
import Link from 'next/link'
import { blogData } from '@/constants'
import { Schema } from '@/lib/schema'
import { formatDate } from '@/lib/utils'
import { getImageUrl } from '@/lib/directus'

type Props = {
  data: Schema['Blogs']
}

const BlogSection = ({ data }: Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <motion.section className="flex min-h-screen flex-col items-center justify-center bg-[#E6F9FA] py-5 font-noto">
      <div className="w-full max-w-screen-xl px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.25 }}
          className="mt-20 text-center"
        >
          <p className="subtitle">Blogs</p>
          <h1 className="title">
            Insights and news from <br /> Khamsa Group
          </h1>
          <p className="font-manrope mt-6 text-base font-semibold leading-7">
            Discover articles of hot news and important announcements <br />{' '}
            from experts at Khamsa Group
          </p>
          <div className="mt-6">
            <Link href="/blog" passHref>
              <button className="h-[46px] w-[152px] rounded-xl bg-primary px-[20px] py-[13.5px] text-white shadow-md transition-colors duration-300 hover:bg-[#7BCDB2] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50">
                See all Articles
              </button>
            </Link>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 bg-[#E6F9FA] py-5 pt-12 md:grid-cols-2">
          {data.map((blog) => (
            <BlogCard
              key={blog.title}
              title={blog.title!}
              topic={blog.topic!}
              date={formatDate(blog.date!)}
              imageUrl={getImageUrl(blog.image as string)}
              link={`/blog/` + blog.slug}
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default BlogSection
