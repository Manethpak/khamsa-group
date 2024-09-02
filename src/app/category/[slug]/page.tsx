import { fetchCategoryBySlug } from '@/fetcher/category/fetch-category'
import { notFound } from 'next/navigation'
import { Metadata, ResolvingMetadata } from 'next'
import CategoryCard from '@/component/module/category/components/category-card'
import { getImageUrl } from '@/lib/directus'

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const result = await fetchCategoryBySlug(params.slug)
    const previousImages = (await parent).openGraph?.images || []

    if (!result[0]) {
      throw new Error('Category not found')
    }

    return {
      title: result[0]?.title || 'Category',
      description: result[0]?.description || 'Category description',
      openGraph: {
        images: [getImageUrl(result[0]?.image as string), ...previousImages],
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: 'Error',
      description: 'Failed to fetch category metadata',
    }
  }
}

const CategoryPage = async ({ params }: Props) => {
  try {
    const result = await fetchCategoryBySlug(params.slug)

    if (!result[0]) {
      return notFound() // Render 404 if no result
    }

    const data = result[0]

    return (
      <div className="p-5">
        <CategoryCard data={data} onFilterClick={function (): void {
          throw new Error('Function not implemented.')
        } } />
      </div>
    )
  } catch (error) {
    console.error('Error fetching category data:', error)
    return notFound() // Render 404 if there's an error
  }
}

export default CategoryPage
