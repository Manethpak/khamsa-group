import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

export async function fetchOffice() {
  return directus.request(readItems('Office'))
}