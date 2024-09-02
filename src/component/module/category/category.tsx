import React, { useEffect, useState } from 'react'
import CategoryCard from './components/category-card' // Adjust path if necessary
import { fetchCategory } from '@/fetcher/category/fetch-category'
import { CategoryData } from '@/lib/schema'

const CategoryPage: React.FC = () => {
  const [data, setData] = useState<CategoryData | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchCategory()
        setData(result)
      } catch (error) {
        console.error('Error fetching category data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white p-5 text-start font-sans text-xl text-black">
        <h1 className="text-3xl font-bold">Explore all</h1>
      </header>
      <main className="container mx-auto p-5">
        {data ? (
          <CategoryCard
            data={data}
            onFilterClick={() => {
              // Handle filter click if necessary
              console.log('Filter clicked')
            }}
          />
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  )
}

export default CategoryPage
