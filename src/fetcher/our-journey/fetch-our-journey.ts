import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

export async function fetchJourney() {
  return directus.request(readItems('Journey'))
}
