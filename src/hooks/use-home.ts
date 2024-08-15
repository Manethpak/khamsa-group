import directus from '@/lib/directus'
import { readSingleton } from '@directus/sdk'
import useSWR from 'swr'

export function useHome() {
  return useSWR('/hero', fetchHome)
}

export async function fetchHome() {
  return directus.request(readSingleton('Home'))
}
