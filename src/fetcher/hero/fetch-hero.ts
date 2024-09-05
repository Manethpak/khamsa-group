import directus from '@/lib/directus'
import { readSingleton } from '@directus/sdk'

export async function fetchHero() {
  return directus.request(
    readSingleton('Hero', {
      // @ts-expect-error
      fields: ['*', 'company.name', 'company.logo'],
    })
  )
}
