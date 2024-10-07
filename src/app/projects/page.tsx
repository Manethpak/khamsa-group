import ProjectCard from '@/component/module/projects/project-card'

const Project = () => {
  const projects = Array(6).fill({
    title: 'Khaki Coffee Farm Mondulkiri',
    description:
      'the first 1000 hectares of historical coffee plantation in the form of social enterprise in the kingdom of cambodia...',
    image: '/images/Factory.jpg',
    herf: '/projects',
  })

  return (
    <section className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-screen-2xl flex-col gap-10 px-5 py-10 md:px-10 lg:px-24">
        <h1 className="heading-subtitle normal-case">Projects</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              title={project.title}
              key={project.title}
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
