import BlogList from '@/component/module/blog/blog-list'
import { fetchBlogs } from '@/fetcher/blog/fetch-blog'

import React from 'react'

const BlogsPage = async () => {
  const data = await fetchBlogs()

  return <BlogList data={data} />
}

export default BlogsPage
