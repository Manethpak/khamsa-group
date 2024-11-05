import React from 'react'
import ProjectList from '@/component/module/projects-page/project-list'
import { Motion } from '@/component/ui/motion'
import { fetchProject } from '@/fetcher/project/fetch-project'
import { Metadata } from 'next'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Khamsa Group',
  description: 'MISSION: BUILD THE FUTURE WORLD',
  openGraph: {
    images: [
      {
        url: 'https://khamsa.panel.dreamslab.dev/assets/0a88d30d-1ba7-48a7-a03e-5a2de222ba86',
      },
    ],
  },
}

const ProjectsPage = async () => {
  const projects = await fetchProject()
  return (
    <section className="flex w-full flex-col items-center justify-center py-16">
      <div className="subtitle flex w-full max-w-screen-2xl flex-col gap-12 px-5 md:px-10 lg:px-24">
        <Motion delay={0.75} className="title">
          <h1 className="heading-subtitle normal-case">Projects</h1>
        </Motion>
        <Motion delay={1}>
          <ProjectList data={projects} />
        </Motion>
      </div>
    </section>
  )
}

export default ProjectsPage
