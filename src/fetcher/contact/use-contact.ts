import { fetchContact } from './fetch-contact'

/**
 * Hook to fetch contact data (static)
 * Note: Since data is now static, this hook simply returns the data
 * No caching/revalidation is needed
 */
export function useContact() {
  return fetchContact()
}
