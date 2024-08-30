import Category from '@/component/module/category/category'
import { fetchCategory } from '@/fetcher/category/fetch-category'

import React from 'react'

const CategoryPage = async () => {
  const data = await fetchCategory()

  return <Category data={data} />
}

export default CategoryPage
