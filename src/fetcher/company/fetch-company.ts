import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

type Option = {
  limit?: number
}

export async function fetchCompany(option?: Option) {
  return directus.request(
    readItems('Company', {
      // @ts-expect-error
      fields: ['*', 'category.Category_id.title', 'logo'],
      limit: option?.limit || -1,
    })
  )
}

export async function fetchCompanyBySlug(slug: string) {
  return directus.request(
    readItems('Company', {
      // @ts-expect-error
      fields: ['*', 'category.*','more_image.*'],
      filter: { slug },
    })
  )
}
