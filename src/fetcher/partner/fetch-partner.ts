import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

export async function fetchPartner() {
  return directus.request(readItems('partners'))
}
