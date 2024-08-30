import directus from '@/lib/directus'
import { readItem, readItems } from '@directus/sdk'

type Option = {
  limit?: number
}

export async function fetchCategory(option?: Option) {
  return directus.request(
    readItems('Category', {
      fields: ['title', 'topic', 'image', 'slug', 'date'],
      limit: option?.limit || -1,
      sort: ['sort', '-date'],
    })
  )
}

export async function fetchCatgoryBySlug(slug: string) {
  return directus.request(
    readItems('Category', {
      fields: ['*'],
      filter: { slug },
    })
  )
}