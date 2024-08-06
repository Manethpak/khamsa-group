'use client'
import { useAnimation, useInView, motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { blogData } from '@/constants'
import Image from 'next/image'

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
        className="grid w-full max-w-screen-lg grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cols-2" // Updated grid and gap
      >
        {blogData.map((blog) => (
          <Link href={blog.link} key={blog.title} passHref>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="card overflow-hidden shadow-lg"
              style={{
                boxShadow: '0px 10px 30px -20px #00000040',
                background: '#FFFFFF',
                borderRadius: '25px', // Updated border radius
                opacity: 1, // Ensure opacity is visible
              }}
            >
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                className="h-auto w-full object-cover"
                style={{ maxHeight: '401px' }} // Adjust max height for image
                width={475}
                height={400}
              />

              <div className="card-body p-6">
                <h2 className="card-title mb-2 text-xl font-semibold text-black">
                  {blog.title}
                </h2>
                <p className="text-gray-700">{blog.description}</p>
                <div className="card-actions text-gray-500 mt-4">
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
