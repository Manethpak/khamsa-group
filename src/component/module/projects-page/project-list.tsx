import React from 'react'
import { Schema } from '@/lib/schema'
import { Paginate } from '@/component/ui/pagination'
import { getImageUrl } from '@/lib/directus'
import ProjectCard from './project-card'

type Props = {
  data: Schema['Project']
}

const ProjectList = ({ data }: Props) => {
  return (
    <Paginate>
      {data.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title!}
          topic={project.topic!}
          description={project.description!}
          imageUrl={getImageUrl(project.image as string)}
          link={`/projects/` + project.slug}
        />
      ))}
    </Paginate>
  )
}

export default ProjectList
