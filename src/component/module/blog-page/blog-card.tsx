'use client'
import { cn } from '@/lib/utils'
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

  const getColor =
    pathname === '/blog'
      ? 'line-clamp-2 sm:line-clamp-1'
      : 'text-white font-medium subtitle line-clamp-2'

  return (
    <Link href={link} key={title} className="space-y-5">
      <div
        className={cn(
          getColor,
          'relative aspect-square max-h-[400px] min-h-[250px] w-full'
        )}
      >
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={400}
          quality={100}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute left-0 top-0 m-4 flex items-center justify-center rounded bg-secondPrimary px-4 py-1 text-white">
          {topic}
        </div>
      </div>
      <div className="flex min-h-36 flex-col gap-3">
        <h1
          className={cn(
            getColor,
            'title line-clamp-3 h-fit text-base sm:line-clamp-2 sm:text-xl'
          )}
        >
          {title}
        </h1>
        <p className="line-clamp-4 h-fit max-h-36 max-w-sm px-1 text-sm sm:line-clamp-4">
          {' '}
          {description}
        </p>
      </div>
      <p className="line-clamp-4 h-fit max-w-sm px-1 text-sm sm:line-clamp-4">
        {date}
      </p>
    </Link>
  )
}

export default BlogCard
