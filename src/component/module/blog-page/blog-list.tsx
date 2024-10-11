import { Motion } from '@/component/ui/motion'
import React from 'react'
import BlogCard from './blog-card'
import { Schema } from '@/lib/schema'
import { Paginate } from '@/component/ui/pagination'
import { formatDate } from '@/lib/utils'
import { getImageUrl } from '@/lib/directus'

type Props = {
  data: Schema['Blogs']
}

const BlogList = ({ data }: Props) => {
  return (
    <Paginate>
      {data.map((blog) => (
        <BlogCard
          key={blog.title}
          title={blog.title!}
          topic={blog.topic!}
          description={blog.description!}
          date={formatDate(blog.date!)}
          imageUrl={getImageUrl(blog.image as string)}
          link={`/blog/` + blog.slug}
        />
      ))}
    </Paginate>
  )
}

export default BlogList