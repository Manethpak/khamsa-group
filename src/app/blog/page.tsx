import BlogList from '@/component/module/blog-page/blog-list'
import { Motion } from '@/component/ui/motion'
import { fetchBlogs } from '@/fetcher/blog/fetch-blog'
import React from 'react'

const BlogPage = async () => {
  const blogs = await fetchBlogs()
  return (
    <section className="flex w-full flex-col items-center justify-center py-20">
      <div className="subtitle flex w-full max-w-screen-2xl flex-col gap-20 px-5 md:px-10 lg:px-24">
        <Motion delay={0.75} className="title flex items-end justify-between">
          <h1 className="heading-subtitle normal-case">Recent Blog posts</h1>
        </Motion>
        <Motion delay={1}>
          <BlogList data={blogs}/>
        </Motion>
      </div>
    </section>
  )
}

export default BlogPage
