'use client'

import { useAnimation, useInView, motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { blogData } from '@/constants'

const BlogHomePage: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#E6F9FA] py-5">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.7 }}
        className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-2"
      >
        {blogData.map((blog) => (
          <Link href={blog.link} key={blog.id} passHref>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="card overflow-hidden rounded-[20px] shadow-lg"
              style={{
                boxShadow: '0px 10px 30px -20px #00000040',
                background: '#FFFFFF',
              }}
            >
              <figure className="h-[401.48px] w-full">
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="card-body p-6">
                <h2 className="card-title mb-2 text-xl font-semibold text-[#8ACEC0]">
                  {blog.title}
                </h2>
                <p className="text-gray-600">{blog.description}</p>
                <div className="card-actions mt-4 text-gray-500">
                  {blog.date}
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  )
}

export default BlogHomePage
