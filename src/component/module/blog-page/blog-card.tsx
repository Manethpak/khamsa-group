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
      <div className="flex flex-col gap-3">
        <h1 className={cn(getColor, 'title')}>{title}</h1>
        <p className="line-clamp-4 max-w-sm px-1 sm:line-clamp-2">
          {description}
        </p>
      </div>
      <div>{date}</div>
    </Link>
  )
}

export default BlogCard
