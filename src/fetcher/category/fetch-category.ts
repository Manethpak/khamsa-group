import categoriesData from '@/data/categories.json'
import companiesData from '@/data/companies.json'

export async function fetchCategory() {
  return categoriesData as any[]
}

export async function fetchCompanyByCategorySlug(slug: string): Promise<any> {
  const companies = companiesData as any[]

  if (slug === 'all') {
    // Sort by founded date (newest first)
    return [...companies].sort((a, b) => (b.founded || 0) - (a.founded || 0))
  }

  // Filter by category slug and sort
  const filtered = companies.filter((company) => {
    if (!company.category) return false
    // Handle both direct category reference and nested Category_id
    const categorySlug =
      company.category.Category_id?.slug || company.category.slug
    return categorySlug === slug
  })

  return filtered.sort((a, b) => (b.founded || 0) - (a.founded || 0))
}
