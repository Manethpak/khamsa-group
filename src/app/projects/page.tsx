import ProjectCard from '@/component/module/projects/project-card'
import React from 'react'

const Project = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const data = [
    {
      id: '1',
      title: 'Khaki Coffee Farm Mondulkiri ',
      description:
        'the first 1000 hectares of historical coffee plantation in the form of social enterprise in the kingdom of cambodia...',
      image: '/images/Factory.jpg',
      herf: '/projects',
    },
    {
      id: '2',
      title: 'Khaki Coffee Farm Mondulkiri ',
      description:
        'the first 1000 hectares of historical coffee plantation in the form of social enterprise in the kingdom of cambodia...',
      image: '/images/Factory.jpg',
      herf: '/projects',
    },
    {
      id: '3',
      title: 'Khaki Coffee Farm Mondulkiri ',
      description:
        'the first 1000 hectares of historical coffee plantation in the form of social enterprise in the kingdom of cambodia...',
      image: '/images/Factory.jpg',
      herf: '/projects',
    },
    {
      id: '4',
      title: 'Khaki Coffee Farm Mondulkiri ',
      description:
        'the first 1000 hectares of historical coffee plantation in the form of social enterprise in the kingdom of cambodia...',
      image: '/images/Factory.jpg',
      herf: '/projects',
    },
    {
      id: '5',
      title: 'Khaki Coffee Farm Mondulkiri ',
      description:
        'the first 1000 hectares of historical coffee plantation in the form of social enterprise in the kingdom of cambodia...',
      image: '/images/Factory.jpg',
      herf: '/projects',
    },
    {
      id: '6',
      title: 'Khaki Coffee Farm Mondulkiri ',
      description:
        'the first 1000 hectares of historical coffee plantation in the form of social enterprise in the kingdom of cambodia...',
      image: '/images/Factory.jpg',
      herf: '/projects',
    },
    {
      id: '7',
      title: 'Khaki Coffee Farm Mondulkiri Page2',
      description:
        'the first 1000 hectares of historical coffee plantation in the form of social enterprise in the kingdom of cambodia...',
      image: '/images/Factory.jpg',
      herf: '/projects',
    },
    {
      id: '8',
      title: 'Khaki Coffee Farm Mondulkiri Page2',
      description:
        'the first 1000 hectares of historical coffee plantation in the form of social enterprise in the kingdom of cambodia...',
      image: '/images/Factory.jpg',
      herf: '/projects',
    },
    {
      id: '9',
      title: 'Khaki Coffee Farm Mondulkiri Page2',
      description:
        'the first 1000 hectares of historical coffee plantation in the form of social enterprise in the kingdom of cambodia...',
      image: '/images/Factory.jpg',
      herf: '/projects',
    },
    {
      id: '10',
      title: 'Khaki Coffee Farm Mondulkiri Page2',
      description:
        'the first 1000 hectares of historical coffee plantation in the form of social enterprise in the kingdom of cambodia...',
      image: '/images/Factory.jpg',
      herf: '/projects',
    },
    {
      id: '11',
      title: 'Khaki Coffee Farm Mondulkiri Page2',
      description:
        'the first 1000 hectares of historical coffee plantation in the form of social enterprise in the kingdom of cambodia...',
      image: '/images/Factory.jpg',
      herf: '/projects',
    },
    {
      id: '12',
      title: 'Khaki Coffee Farm Mondulkiri Page2',
      description:
        'the first 1000 hectares of historical coffee plantation in the form of social enterprise in the kingdom of cambodia...',
      image: '/images/Factory.jpg',
      herf: '/projects',
    },
  ]
  const page = searchParams['page'] ?? '1'
  const limit = searchParams['limit'] ?? '6'

  //Define Start index and End index
  const start = (Number(page) - 1) * Number(limit)
  const end = start + Number(limit)

  //Entries projects
  const projects = data.slice(start, end)

  return (
    <section className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-screen-2xl flex-col gap-10 px-5 py-10 md:px-10 lg:px-24">
        <h1 className="heading-subtitle normal-case">Projects</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              title={project.title}
              key={project.id}
              description={project.description}
              image={project.image}
              href={project.herf}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
