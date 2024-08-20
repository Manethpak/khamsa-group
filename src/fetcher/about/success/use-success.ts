import useSWR from 'swr'
import { fetchSuccess } from './fetch-success'

export function useSuccess() {
  return useSWR('/success', fetchSuccess)
}
