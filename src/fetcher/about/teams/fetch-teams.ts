import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

export async function fetchTeams() {
  return directus.request(readItems('Team'))
}
