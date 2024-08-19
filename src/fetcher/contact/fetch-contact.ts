import directus from '@/lib/directus'
import { readSingleton } from '@directus/sdk'

export async function fetchContact() {
  return directus.request(readSingleton('Contact'))
}
