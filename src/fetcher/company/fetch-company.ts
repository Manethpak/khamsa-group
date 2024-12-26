import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

type Option = {
  limit?: number
}

export async function fetchCompany(option?: Option) {
  return directus.request(
    readItems('Company', {
      fields: [
        '*',
        // @ts-expect-error
        'category.Category_id.title',
        'logo',
        'company_description',
        'phone',
      ],
      limit: option?.limit || -1,
      sort: ['founded'],
      filter: { active: { _eq: true } },
    })
  )
}

export async function fetchCompanyBySlug(slug: string) {
  return directus.request(
    readItems('Company', {
      // @ts-expect-error
      fields: ['*', 'category.*', 'more_image.*'],
      filter: { slug },
    })
  )
}
