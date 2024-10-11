'use client'
import { Paginate } from '@/component/ui/pagination'
import { getImageUrl } from '@/lib/directus'

import { formatDate } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type BlogCardProps = {
  imageUrl: string
  title: string
  topic: string
  date: string
  link: string
  description: string
}

const BlogCard: React.FC<BlogCardProps> = ({
  link,
  imageUrl,
  title,
  topic,
  date,
  description,
}) => {
  const pathname = usePathname()

  const getColor = pathname === '/blog' ? '' : 'text-white font-medium subtitle'

  return (
    <Link href={link} key={title} className="space-y-5">
      <div
        className={`${getColor}relative aspect-square max-h-[400px] min-h-[250px] w-full`}
      >
        <Image
          src={imageUrl}
          alt={title}
          width={1400}
          height={1400}
          className="relative h-full w-full object-cover object-center"
        />
        <div className="absolute left-0 top-0 m-4 flex items-center justify-center rounded bg-secondPrimary px-4 py-1 text-white">
          {topic}
        </div>
      </div>
      <div className="flex h-fit flex-col gap-3 overflow-hidden">
        <h1 className={`${getColor} title h-8 overflow-clip`}>{title}</h1>
        <p className="h-40 max-w-sm overflow-clip px-1">{description}</p>
      </div>
      <div>{date}</div>
    </Link>
  )
}

export default BlogCard
