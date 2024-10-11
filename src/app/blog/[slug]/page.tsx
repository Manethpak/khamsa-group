import React from 'react'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { Metadata, ResolvingMetadata } from 'next'
import { fetchBlogBySlug, fetchBlogs } from '@/fetcher/blog/fetch-blog'
import { getImageUrl } from '@/lib/directus'
import { formatDate } from '@/lib/utils'
import { Motion } from '@/component/ui/motion'
import Link from 'next/link'
import BlogCard from '@/component/module/blog-page/blog-card'
import Share from '@/component/ui/share'

type Props = {
  params: { slug: string }
}

export const revalidate = 300

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const result = await fetchBlogBySlug(params.slug)

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: result[0].title,
    description: result[0].description,
    openGraph: {
      images: [getImageUrl(result[0].image as string), ...previousImages],
    },
  }
}

const BlogPage = async ({ params }: Props) => {
  const result = await fetchBlogBySlug(params.slug)
  const blogs = await fetchBlogs({ limit: 4 })

  if (!result[0]) {
    redirect('/404')
  }

  const blog = result[0]

  return (
    <section className="flex w-full flex-col items-center justify-center gap-12 pt-20">
      <div className="subtitle relative flex w-full max-w-screen-2xl flex-col gap-12 px-24 md:px-32 lg:px-40">
        <Motion delay={0.5} className="sm:title flex items-end justify-between">
          <h1 className="heading-title w-full max-w-fit">{blog.topic}</h1>
          <time>{formatDate(blog.date!)}</time>
        </Motion>
        <Motion
          delay={0.75}
          className="relative flex w-full items-center justify-between border-b border-t py-7 text-[#C3C3C3]"
        >
          <time className="subtitle flex flex-col gap-x-8 gap-y-2 sm:flex-row">
            <li>Published {formatDate(blog.date_created!)}</li>
            <li>Updated{formatDate(blog.date_updated!)}</li>
          </time>
          <Share />
        </Motion>
        <Motion delay={0.85} className="space-y-5">
          <h1 className="heading-subtitle">{blog.title}</h1>
          <h2 className="">{blog.description}</h2>
        </Motion>
        <Motion delay={0.95} className="container mx-auto p-4 md:p-6 lg:p-8">
          {blog.image && (
            <Image
              src={getImageUrl(blog.image! as string)}
              width={1200}
              height={630}
              alt={blog.title!}
              className="mx-auto mb-10 w-full lg:max-w-5xl"
            />
          )}
        </Motion>
        <Motion delay={1}>
          {blog.content && (
            <div
              className=""
              dangerouslySetInnerHTML={{ __html: blog.content! }}
            />
          )}
        </Motion>
      </div>
      <div className="flex w-full flex-col items-center justify-center bg-primary">
        <div className="flex w-full max-w-screen-2xl flex-col gap-14 text-white px-5 py-14 md:px-10 lg:px-24">
          <Motion delay={0.75} className="title text-white flex items-end justify-between">
            <h1 className="heading-subtitle normal-case text-white ">More topic</h1>
            <Link href="/blog">See all</Link>
          </Motion>
          <Motion delay={1} className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 text-white">
            {blogs.map((blog) => (
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
          </Motion>
        </div>
      </div>
    </section>
  )
}

export default BlogPage