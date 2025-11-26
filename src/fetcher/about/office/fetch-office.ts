import officeData from '@/data/office.json'

type Option = {
  limit?: number
}

export async function fetchOffice(option?: Option) {
  const offices = officeData as any[]

  // Apply limit
  if (option?.limit && option.limit > 0) {
    return offices.slice(0, option.limit)
  }

  return offices
}
