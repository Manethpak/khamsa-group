import directus from '@/lib/directus'
import { readItems } from '@directus/sdk'

type Option = {
  limit?: number
}

export async function fetchOffice(option?: Option) {
  return directus.request(readItems('Office',{
    limit: option?.limit || -1,
  }))
}