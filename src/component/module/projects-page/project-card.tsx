'use client'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type ProjectCardProps = {
  imageUrl: string
  title: string
  link: string
  description: string
  topic: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  link,
  imageUrl,
  title,
  description,
  topic,
}) => {
  const pathname = usePathname()

  const getColor =
    pathname === '/projects' ? '' : 'text-white font-medium subtitle'

  return (
    <Link href={link} key={title} className="h-full max-h-full space-y-5">
      <div className={cn(getColor, 'relative aspect-square w-full')}>
        <Image
          src={imageUrl}
          alt={title}
          width={1400}
          height={1400}
          quality={100}
          className="relative h-full w-full object-cover object-center"
        />
        <div className="absolute left-0 top-0 m-4 flex items-center justify-center rounded bg-secondPrimary/85 px-4 py-1 text-white">
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
        <p className="line-clamp-4 h-fit px-1 text-justify text-sm sm:line-clamp-4">
          {description}
        </p>
      </div>
      <div className="h-fit px-1 text-sm">Read More</div>
    </Link>
  )
}

export default ProjectCard
