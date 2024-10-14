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
      </div>
      <div className="flex h-fit flex-col gap-3 overflow-hidden">
        <h1 className={`${getColor} title h-8 overflow-clip`}>{title}</h1>
        <p className="h-40 max-w-sm overflow-clip px-1">{description}</p>
      </div>
      <div>Read More</div>
    </Link>
  )
}

export default ProjectCard
