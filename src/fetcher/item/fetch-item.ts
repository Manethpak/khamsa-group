import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

export async function fetchItem() {
  return directus.request(readItems('Item'))
}