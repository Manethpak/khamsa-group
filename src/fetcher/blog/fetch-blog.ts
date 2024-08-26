import directus from '@/lib/directus'
import { readItem, readItems } from '@directus/sdk'

type Option = {
  limit?: number
}

export async function fetchBlogs(option?: Option) {
  return directus.request(
    readItems('Blogs', {
      fields: ['title', 'topic', 'image', 'slug', 'date'],
      limit: option?.limit || -1,
      sort: ['sort', '-date'],
    })
  )
}

export async function fetchBlogBySlug(slug: string) {
  return directus.request(
    readItems('Blogs', {
      fields: ['*'],
      filter: { slug },
    })
  )
}
