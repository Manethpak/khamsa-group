import ProjectList from '@/component/module/projects/project-list'
import { Motion } from '@/component/ui/motion'
import { fetchProject } from '@/fetcher/project/fetch-project'
import React from 'react'

const ProjectsPage = async () => {
  const projects = await fetchProject()
  return (
    <section className="flex w-full flex-col items-center justify-center py-20">
      <div className="subtitle flex w-full max-w-screen-2xl flex-col gap-20 px-5 md:px-10 lg:px-24">
        <Motion delay={0.75} className="title flex items-end justify-between">
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
