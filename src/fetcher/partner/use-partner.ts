import useSWR from 'swr'
import { fetchPartner } from './fetch-partner'

export function usePartner() {
  return useSWR('/partner', fetchPartner)
}
