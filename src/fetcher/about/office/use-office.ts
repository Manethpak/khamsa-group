import useSWR from 'swr'
import { fetchOffice } from './fetch-office'

export function useOffice() {
  return useSWR('/office', fetchOffice)
}