import directus from '@/lib/directus'
import { readItem, readItems } from '@directus/sdk'

type Option = {
  limit?: number
}

export async function fetchProject(option?: Option) {
  return directus.request(
    readItems('Project', {
      fields: ['title', 'image', 'slug', 'date', 'description','content'],
      limit: option?.limit || -1,
      sort: ['sort', '-date'],
    })
  )
}

export async function fetchProjectBySlug(slug: string) {
  return directus.request(
    readItems('Project', {
      fields: ['*'],
      filter: { slug },
    })
  )
}
