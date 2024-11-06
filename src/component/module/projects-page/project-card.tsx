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
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  link,
  imageUrl,
  title,
  description,
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
          className="relative h-full w-full object-cover object-center"
        />
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
        <p className="line-clamp-4 h-fit max-w-sm px-1 text-sm sm:line-clamp-4">
          {description}
        </p>
      </div>
      <div className="line-clamp-4 h-fit max-w-sm px-1 text-sm sm:line-clamp-2">
        Read More
      </div>
    </Link>
  )
}

export default ProjectCard
