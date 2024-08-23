import useSWR from 'swr'
import { fetchItem } from './fetch-item'

export function useItem() {
  return useSWR('/item', fetchItem)
}
