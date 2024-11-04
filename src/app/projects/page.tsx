import React from 'react'
import ProjectList from '@/component/module/projects-page/project-list'
import { Motion } from '@/component/ui/motion'
import { fetchProject } from '@/fetcher/project/fetch-project'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Khamsa Group',
    description: 'MISSION: BUILD THE FUTURE WORLD',
    openGraph: {
      images: [
        {
          url: 'https://media.licdn.com/dms/image/v2/C560BAQFICX72oX0TIg/company-logo_200_200/company-logo_200_200/0/1675677526846/khamsagroup_logo?e=1738800000&v=beta&t=P6e65kyTcs7H8APK9NFfMUF1GnwU0T_Pmy0htDsYPio',
        },
      ],
    },
  }
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
