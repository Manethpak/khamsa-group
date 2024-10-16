'use client'
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
    <Link href={link} key={title} className="space-y-5">
      <div className={`${getColor}relative aspect-square w-full`}>
        <Image
          src={imageUrl}
          alt={title}
          width={1400}
          height={1400}
          className="relative h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className={`${getColor} title line-clamp-2 sm:line-clamp-1`}>
          {title}
        </h1>
        <p className="line-clamp-4 max-w-sm px-1 sm:line-clamp-2">
          {description}
        </p>
      </div>
      <div>Read More</div>
    </Link>
  )
}

export default ProjectCard
