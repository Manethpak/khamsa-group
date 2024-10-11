import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

export async function fetchSuccess() {
  return directus.request(readItems('Success'))
}
