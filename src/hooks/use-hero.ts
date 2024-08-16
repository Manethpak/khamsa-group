import directus from '@/lib/directus'
import { readSingleton } from '@directus/sdk'
import useSWR from 'swr'

export function useHero() {
  return useSWR('/hero', fetchHero)
}

export async function fetchHero() {
  return directus.request(
    readSingleton('Hero', {
      // @ts-expect-error
      fields: ['*', 'partners.*'],
    })
  )
}
