import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

export async function fetchFaq() {
  return directus.request(readItems('FAQ'))
}