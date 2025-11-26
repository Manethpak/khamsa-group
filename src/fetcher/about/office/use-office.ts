import { fetchOffice } from './fetch-office'

type Option = {
  limit?: number
}

export function useOffice(option?: Option) {
  return fetchOffice(option)
}
