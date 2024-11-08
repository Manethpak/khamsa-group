import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Share from '@/component/ui/share'
import ProjectCard from '@/component/module/projects-page/project-card'
import { notFound } from 'next/navigation'
import { Metadata, ResolvingMetadata } from 'next'
import { getImageUrl } from '@/lib/directus'
import { formatDate } from '@/lib/utils'
import { Motion } from '@/component/ui/motion'
import {
  fetchProject,
  fetchProjectBySlug,
} from '@/fetcher/project/fetch-project'

type Props = {
  params: { slug: string }
}

export const revalidate = 300

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const result = await fetchProjectBySlug(params.slug)

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: result[0].title,
    description: result[0].description,
    openGraph: {
      images: [getImageUrl(result[0].image as string), ...previousImages],
    },
  }
}

const ProjectsDetailPage = async ({ params }: Props) => {
  const result = await fetchProjectBySlug(params.slug)
  const projects = await fetchProject({ limit: 4 })

  if (!result[0]) {
    notFound()
  }

  const project = result[0]

  return (
    <section className="flex w-full flex-col items-center justify-center gap-12 pt-20">
      <div className="subtitle relative flex w-full max-w-screen-2xl flex-col gap-8 px-5 sm:px-32 md:px-40 lg:px-72">
        <Motion
          delay={0.5}
          className="sm:title flex items-end justify-between gap-5"
        >
          <h1 className="heading-title w-full max-w-fit text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            {project.topic}
          </h1>
          <time className="md:2xl w-full max-w-fit text-xs sm:text-xl">
            {formatDate(project.date!)}
          </time>
        </Motion>
        <Motion
          delay={0.75}
          className="relative flex w-full items-center justify-between border-b border-t py-7 text-[#C3C3C3]"
        >
          <time className="subtitle flex flex-col gap-x-8 gap-y-2 px-3 text-base sm:flex-row">
            <li>Last Update at {formatDate(project.date_updated!)}</li>
          </time>
          <Share />
        </Motion>
        <Motion delay={0.85} className="space-y-5 text-justify">
          <h1 className="heading-subtitle">{project.title}</h1>
          <h2>{project.description}</h2>
        </Motion>
        <Motion delay={0.95} className="container mx-auto">
          {project.image && (
            <Image
              src={getImageUrl(project.image! as string)}
              width={1200}
              height={1200}
              quality={100}
              alt={project.title!}
              className="mx-auto w-full"
            />
          )}
        </Motion>
        <Motion delay={1}>
          {project.content && (
            <div
              className="flex w-full flex-col items-center justify-center text-justify"
              dangerouslySetInnerHTML={{ __html: project.content! }}
            />
          )}
        </Motion>
      </div>
      <div className="flex w-full flex-col items-center justify-center bg-primary">
        <div className="flex w-full max-w-screen-2xl flex-col gap-14 px-5 py-14 text-white md:px-10 lg:px-24">
          <Motion
            delay={0.2}
            className="title flex items-end justify-between text-white"
          >
            <h1 className="heading-subtitle normal-case text-white">
              More projects
            </h1>
            <Link href="/projects" className="text-lg lg:text-xl">
              See all
            </Link>
          </Motion>
          <Motion
            delay={0.5}
            className="grid grid-cols-2 gap-6 text-white sm:grid-cols-3 md:grid-cols-4"
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title!}
                topic={project.topic!}
                description={project.description!}
                imageUrl={getImageUrl(project.image as string)}
                link={`/projects/` + project.slug}
              />
            ))}
          </Motion>
        </div>
      </div>
    </section>
  )
}

export default ProjectsDetailPage
