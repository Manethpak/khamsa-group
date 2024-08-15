import directus from '@/lib/directus'
import { readItems, readSingleton } from '@directus/sdk'
import useSWR from 'swr'

export function usePartner() {
  return useSWR('/partner', fetchPartner)
}

export async function fetchPartner() {
  return directus.request(readItems('partners'))
}
