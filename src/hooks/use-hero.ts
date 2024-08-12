import directus from '@/lib/directus'
import { readSingleton } from '@directus/sdk'
import useSWR from 'swr'

export function useHero() {
  return useSWR('/hero', fetcherHero)
}

export async function fetcherHero() {
  return directus.request(readSingleton('hero'))
}
