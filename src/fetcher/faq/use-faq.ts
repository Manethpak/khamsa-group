import useSWR from 'swr'
import { fetchFaq } from './fetch-faq'

export function useFaq() {
  return useSWR('/faq', fetchFaq)
}
