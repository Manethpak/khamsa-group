import directus from '@/lib/directus'
import { readSingleton } from '@directus/sdk'

export async function fetchInvestment(slug: string) {
  return directus.request(
    readSingleton('Investment', {
      // @ts-expect-error
      fields: ['*', 'items.*', 'category.*', 'subtitle'],
    })
  )
}
