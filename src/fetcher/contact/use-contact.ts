import useSWR from 'swr'
import { fetchContact } from './fetch-contact'

export function useContact() {
  return useSWR('/contact', fetchContact)
}
