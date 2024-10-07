import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ProjectCardProps = {
  title: string
  description: string
  image: string
  href: string
}

const ProjectCard = ({ title, description, image, href }: ProjectCardProps) => {
  return (
    <div className="w-full">
      <div className="aspect-square max-h-[400px] min-h-[250px] w-full">
        <Image
          src={image}
          width={400}
          height={400}
          className="h-full w-full object-cover object-center"
          alt="project"
        />
      </div>
      <div className="flex w-full flex-col gap-5">
        <h1 className="w-[80%] pt-5 title ">{title}</h1>
        <div className="flex flex-col justify-between gap-8 pb-8 subtitle">
          <p>{description}</p>
          <Link href={href} >
            Read more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
