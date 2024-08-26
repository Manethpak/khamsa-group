'use client' // Add this directive to make this file a Client Component

import { useRouter } from 'next/navigation'
import React from 'react'
import { Investments } from '@/constants'

const CategoryPage = ({ params }: { params: { slug: string } }) => {
  const router = useRouter()

  const investment = Investments.find((inv) => inv.id === params.slug)
  if (!investment) {
    return <p>Investment not found.</p>
  }
  const itemsToShow = Investments.slice(0, 12)

  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-4 p-4">
      {itemsToShow.map((inv) => (
        <div
          key={inv.id}
          className="h-[590px] w-[423px] rounded-tl-[10px] rounded-tr-[10px] bg-blue-500 p-4 opacity-0"
        >
          <h2>{inv.title}</h2>
          <p>{inv.description}</p>
        </div>
      ))}
    </div>
  )
}

export default CategoryPage
