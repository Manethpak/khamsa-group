'use client'
import { useAnimation, useInView, motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { Schema } from '@/lib/schema'
import { getImageUrl } from '@/lib/directus'
import { formatDate } from '@/lib/utils'
import BlogCard from './components/blog-card'
import SubscriptionSection from './components/subscription-section'

type Props = {
  data: Schema['Blogs']
}

const BlogList = ({ data }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <div className="flex w-full flex-col items-center justify-center bg-[#E6F9FA] py-36 text-lg font-normal text-[#5B5E76]">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
        className="grid w-full max-w-screen-lg grid-cols-1 gap-[20px] p-6 md:grid-cols-2"
      >
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
      </motion.div>

      <SubscriptionSection />
    </div>
  )
}

export default BlogList
