import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'
import { Schema } from '@/lib/schema'

// type Option = {
//   limit?: number
// }

export async function fetchCategory() {
  return directus.request(
    readItems('Category', {
      fields: ['*'],
    })
  )
}

export async function fetchCompanyByCategorySlug(
  slug: string
): Promise<Schema['Company']> {
  const filter =
    slug === 'all'
      ? undefined
      : {
          category: {
            Category_id: {
              slug: {
                _eq: slug,
              },
            },
          },
        }

  return await directus.request(
    readItems('Company', {
      // @ts-expect-error type has no knowledge of deep nested
      fields: ['*', 'category.Category_id.slug', 'category.Category_id.title'],
      // @ts-expect-error type has no knowledge of deep nested
      filter: {
        ...filter,
      },
      sort: ['-founded'],
    })
  )
}
