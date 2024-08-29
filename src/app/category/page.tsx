import CategoryPage from '@/component/module/category/components/category-card'
import { fetchCategory } from '@/fetcher/category/fetch-category'
import React from 'react'

const Category = async () => {
  const data = await fetchCategory()
  if (!data || !Array.isArray(data)) {
    return <div>No categories found.</div>
  }

  return (
    <div className="p-5">
      {data.map((category) => (
        <CategoryPage key={category.slug} data={category} onFilterClick={function (): void {
          throw new Error('Function not implemented.')
        } } />
      ))}
    </div>
  )
}

export default Category
