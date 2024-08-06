'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { blogData } from '@/constants'
import Image from 'next/image'

type BlogCardProps = (typeof blogData)[0]

const BlogCard: React.FC<BlogCardProps> = ({
  link,
  imageUrl,
  title,
  description,
  date,
}) => {
  return (
    <Link href={link} key={title} passHref>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        className="card overflow-hidden rounded-[20px] shadow-lg"
        style={{
          boxShadow: '0px 10px 30px -20px #00000040',
          background: 'white',
        }}
      >
        <div>
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={375}
            className="h-[375px] w-full object-cover object-center"
          />
        </div>
        <div className="card-body p-6">
          <h2 className="card-title mb-2 text-xl font-semibold text-[#8ACEC0]">
            {title}
          </h2>
          <p className="text-gray-600">{description}</p>
          <div className="card-actions text-gray-500 mt-4">{date}</div>
        </div>
      </motion.div>
    </Link>
  )
}

export default BlogCard
