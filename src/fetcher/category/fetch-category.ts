import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

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



export async function fetchCategoryBySlug(slug: string) {
  const categoryData = await directus.items('Category').readByQuery({
    filter: { slug: { _eq: slug } }, // Filters by slug
    fields: ['*', 'items.*'], // Fetch all fields, including related items
  });

  return categoryData.data; // Return the fetched data
}
