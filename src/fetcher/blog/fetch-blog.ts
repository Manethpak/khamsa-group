import blogsData from '@/data/blogs.json'

type Option = {
  limit?: number
}

export async function fetchBlogs(option?: Option) {
  const blogs = blogsData as any[]

  // Sort by sort field and date
  const sorted = [...blogs].sort((a, b) => {
    if (a.sort !== b.sort) return (a.sort || 0) - (b.sort || 0)
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  // Apply limit
  if (option?.limit && option.limit > 0) {
    return sorted.slice(0, option.limit)
  }

  return sorted
}

export async function fetchBlogBySlug(slug: string) {
  const blogs = blogsData as any[]
  const blog = blogs.filter((b) => b.slug === slug)
  return blog
}
