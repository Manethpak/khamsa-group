import projectsData from '@/data/projects.json'

type Option = {
  limit?: number
}

export async function fetchProject(option?: Option) {
  const projects = projectsData as any[]

  // Sort by date (newest first)
  const sorted = [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  // Apply limit
  if (option?.limit && option.limit > 0) {
    return sorted.slice(0, option.limit)
  }

  return sorted
}

export async function fetchProjectBySlug(slug: string) {
  const projects = projectsData as any[]
  const project = projects.filter((p) => p.slug === slug)
  return project
}
