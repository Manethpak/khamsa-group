import directus from '@/lib/directus'
import { readItems, readSingleton } from '@directus/sdk'
import useSWR from 'swr'

export function useHero() {
  return useSWR('/hero', fetcherHero)
}

export async function fetcherHero() {
  return directus.request(readSingleton('hero'))
}

export function useBlogs() {
  return useSWR('/blogs', fetchBlog)
}

export async function fetchBlog() {
  return directus.request(readItems('Blogs'))
}

export function useContact() {
  return useSWR('/contact', fetchContact)
}

export async function fetchContact() {
  return directus.request(readSingleton('Contact'))
}