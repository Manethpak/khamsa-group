// src/app/category/[slug]/page.tsx
import { fetchCategoryBySlug } from '@/lib/directus'
import { notFound } from 'next/navigation' // This handles the 404 error for missing data

type Category = {
  title: string
  sub_title: string
  icons: string
  tag: string
  date: string
  items: Array<{ title: string; description: string; imageUrl: string }>
}

export default async function Page({ params }: { params: { slug: string } }) {
  // Fetch category data based on the slug
  const categoryData = await fetchCategoryBySlug(params.slug)

  // Check if category data is found
  if (!categoryData || categoryData.length === 0) {
    notFound() // This will render the 404 page
  }

  const category = categoryData[0] // Extract category details

  return (
    <div className="p-5">
      <h1 className="text-4xl font-bold">{category.title}</h1>
      <p className="mt-2 text-lg">{category.sub_title}</p>
      <img src={category.icons} alt={category.title} className="mt-4" />
      <div className="mt-5 grid grid-cols-4 gap-4">
        {category.items.slice(0, 12).map((item, index) => (
          <div
            key={index}
            className="relative flex transform flex-col items-center justify-between overflow-hidden rounded-t-lg bg-white shadow-lg transition-transform hover:scale-105"
            style={{
              width: '423px',
              height: '590px',
              borderRadius: '10px 10px 0 0',
              opacity: 1,
            }}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="h-2/3 w-full object-cover"
              style={{ borderRadius: '10px 10px 0 0' }}
            />
            <div className="flex flex-col items-center p-4">
              <h2 className="mb-2 text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600 text-center text-base">
                {item.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
