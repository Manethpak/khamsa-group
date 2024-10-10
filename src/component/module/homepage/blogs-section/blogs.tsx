import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Schema } from '@/lib/schema'
import { formatDate } from '@/lib/utils'
import { getImageUrl } from '@/lib/directus'
import { PiArrowUpRightThin } from 'react-icons/pi'
import { Motion } from '@/component/ui/motion'

type Props = {
  data: Schema['Blogs']
}

const BlogSection = ({ data }: Props) => {
  // Sort data by date (if needed)
  const sortedData = [...data].sort(
    (a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime()
  )

  return (
    <section className="flex w-full flex-col items-center justify-center py-20">
      <div className="subtitle flex w-full max-w-screen-2xl flex-col gap-20 px-5 md:px-10 lg:px-24">
        <Motion delay={0.75} className="title flex items-end justify-between">
          <h1 className="heading-subtitle normal-case">Recent Blog posts</h1>
          <Link href="/blog">See all</Link>
        </Motion>
        {/* Main Section */}
        <Motion
          delay={1}
          className="flex flex-col items-center justify-between gap-x-5 gap-y-10 lg:flex-row"
        >
          {/* Featured Blog Post */}
          <div className="w-full md:max-w-2xl">
            {sortedData.length > 0 && (
              <Link href={`/blog/` + sortedData[0].slug}>
                <div className="flex flex-col">
                  <Image
                    src={getImageUrl(sortedData[0].image as string)}
                    alt={sortedData[0].title!}
                    width={1400}
                    height={1400}
                    className="w-full object-cover object-center"
                  />
                  <div className="mt-4 flex max-h-40 justify-between gap-1 overflow-hidden">
                    <div className="w-full max-w-xl space-y-3">
                      <h1 className="heading-subtitle h-full max-h-8 overflow-hidden normal-case">
                        {sortedData[0].title}
                      </h1>
                      <p className="px-2">{sortedData[0].description}</p>
                    </div>
                    <div className="grid w-full max-w-36 place-items-end content-between">
                      <span>{formatDate(sortedData[0].date!)}</span>
                      <PiArrowUpRightThin className="size-10" />
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </div>

          {/* Smaller Blog Posts */}
          <div className="grid space-y-6 md:space-y-1 lg:space-y-5">
            {sortedData.slice(1, 5).map((blog) => (
              <Link href={`/blog/` + blog.slug} key={blog.title}>
                <div className="flex gap-3 md:min-h-5 lg:max-h-[145px]">
                  <Image
                    src={getImageUrl(blog.image as string)}
                    alt={blog.title!}
                    width={1400}
                    height={1400}
                    className="w-full max-w-56 scale-95 object-cover"
                  />
                  <div className="grid w-full max-w-md">
                    <h2 className="title h-8 overflow-hidden">{blog.title}</h2>
                    <p className="h-12 overflow-hidden px-2 lg:h-8">
                      {blog.description}...
                    </p>
                    <span>{formatDate(blog.date!)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Motion>
      </div>
    </section>
  )
}

export default BlogSection
