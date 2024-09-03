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

export async function fetchCompanyByCategorySlug(slug: string): Promise<Schema['Company']> {

  const filter =
    slug === 'all'
      ? undefined
      : {
          Category_id: {
            slug: {
              _eq: slug,
            },
          },
        }

  const result = await directus.request(
    // @ts-expect-error type has no knowledge of deep nested
    readItems('Company_Category', {
      fields: ['*', 'Company_id.*', 'Category_id.slug', 'Category_id.title'],
      filter: {
        ...filter
      },
    })
  )
  console.log(result)

  return result.map((data) => {
    // @ts-expect-error type has no knowledge of deep nested
    return { ...data.Company_id, category: data.Category_id }
  })
}
