import useSWR from 'swr'
import { fetchHero } from './fetch-hero'

export function useHero() {
  return useSWR('/hero', fetchHero)
}
