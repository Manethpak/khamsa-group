import companiesData from '@/data/companies.json'

type Option = {
  limit?: number
}

export async function fetchCompany(option?: Option) {
  const companies = companiesData as any[]

  // Sort by founded date
  const sorted = [...companies].sort(
    (a, b) => (a.founded || 0) - (b.founded || 0)
  )

  // Apply limit
  if (option?.limit && option.limit > 0) {
    return sorted.slice(0, option.limit)
  }

  return sorted
}

export async function fetchCompanyBySlug(slug: string) {
  const companies = companiesData as any[]
  const company = companies.filter((c) => c.slug === slug)
  return company
}
