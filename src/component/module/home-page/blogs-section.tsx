import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Schema } from '@/lib/schema'
import { formatDate } from '@/lib/utils'
import { getImageUrl } from '@/lib/directus'
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
      <div className="subtitle flex w-full max-w-screen-2xl flex-col gap-10 px-5 md:px-10 lg:px-24">
        <Motion delay={0.75} className="title flex items-end justify-between">
          <h1 className="heading-subtitle uppercase">Blog Posts</h1>
          <Link href="/blog" className="text-lg">
            See all
          </Link>
        </Motion>
        {/* Main Section */}
        <Motion
          delay={1}
          className="flex flex-col justify-between gap-x-4 gap-y-10 lg:flex-row"
        >
          {/* Featured Blog Post */}
          <div className="w-full xl:max-w-[39rem]">
            {sortedData.length > 0 && (
              <Link href={`/blog/` + sortedData[0].slug}>
                <div className="flex flex-col">
                  <Image
                    src={getImageUrl(sortedData[0].image as string)}
                    alt={sortedData[0].title!}
                    width={800}
                    height={800}
                    quality={100}
                    className="w-full object-cover object-center"
                  />
                  <div className="mt-4 flex max-h-40 justify-between gap-1 overflow-hidden">
                    <div className="w-full space-y-6 md:space-y-8">
                      <h1 className="heading-subtitle line-clamp-2 h-fit normal-case">
                        {sortedData[0].title}
                      </h1>
                      <p className="line-clamp-2 px-2">
                        {sortedData[0].description}
                      </p>
                    </div>
                    <div className="grid w-full max-w-36 place-items-end content-between">
                      <span className="pt-2">
                        {formatDate(sortedData[0].date!)}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-move-up-right size-7 sm:size-10"
                      >
                        <path d="M13 5H19V11" />
                        <path d="M19 5L5 19" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </div>

          {/* Smaller Blog Posts */}
          <div className="grid space-y-6 lg:space-y-1 xl:space-y-4">
            {sortedData.slice(1, 5).map((blog) => (
              <Link href={`/blog/` + blog.slug} key={blog.title}>
                <div className="flex gap-3 md:min-h-5 lg:max-h-[145px]">
                  <Image
                    src={getImageUrl(blog.image as string)}
                    alt={blog.title!}
                    width={1400}
                    height={1400}
                    className="w-full max-w-36 scale-95 object-cover sm:max-w-56"
                  />
                  <div className="grid w-full max-w-lg">
                    <h2 className="title line-clamp-2 h-fit text-base sm:text-xl">
                      {blog.title}
                    </h2>
                    <p className="line-clamp-2 h-fit text-sm">
                      {blog.description}
                    </p>
                    <span className="text-sm">{formatDate(blog.date!)}</span>
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
