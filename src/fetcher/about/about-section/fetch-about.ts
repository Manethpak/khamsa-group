import directus from '@/lib/directus'
import { readSingleton } from '@directus/sdk'

export async function fetchAbout() {
  return directus.request(
    readSingleton('About', {
      fields: ['*'],
    })
  )
}
