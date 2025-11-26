import { fetchHero } from './fetch-hero'

export function useHero() {
  return fetchHero()
}
