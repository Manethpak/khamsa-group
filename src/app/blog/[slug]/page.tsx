import React from 'react'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { Metadata, ResolvingMetadata } from 'next'
import { fetchBlogBySlug } from '@/fetcher/blog/fetch-blog'
import { getImageUrl } from '@/lib/directus'
import { formatDate } from '@/lib/utils'

type Props = {
  params: { slug: string }
}

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

  if (!result[0]) {
    redirect('/404')
  }

  const data = result[0]

  return (
    <div className="container mx-auto mt-2 p-4 md:p-6 lg:p-8">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <p className="text-base font-extrabold uppercase text-[#4ca6fc]">
          {data.topic}
        </p>
        <h1 className="pt-8 text-3xl font-extrabold capitalize text-[#19154E] md:text-4xl lg:text-5xl">
          {data.title}
        </h1>
        <h2 className="my-4 text-lg text-zinc-600 md:text-xl lg:text-2xl">
          {data.description}
        </h2>
        <time className="text-sm text-zinc-400 md:text-base lg:text-lg">
          {formatDate(data.date!)}
        </time>
      </div>

      {data.image && (
        <Image
          src={getImageUrl(data.image! as string)}
          width={1200}
          height={630}
          alt={data.title!}
          className="mx-auto mb-10 w-full rounded-xl lg:max-w-5xl"
        />
      )}

      {data.content && (
        <div
          className="prose prose-zinc mx-auto max-w-4xl"
          dangerouslySetInnerHTML={{ __html: data.content! }}
        />
      )}

      <div className="mx-4 py-12 text-start md:mx-10 lg:mx-16">
        <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          Latest Articles
        </h2>
      </div>

     <div className="mt-4 flex flex-col gap-4 md:flex-row md:justify-center">
  {[1, 2].map((_, index) => (
    <div
      key={index}
      className={`flex h-auto w-full items-center justify-between rounded-[30px] rounded-tl-[20px] md:h-[100px] md:w-[600px] ${
        index % 2 === 0 ? 'bg-white' : 'bg-white'
      } p-4 shadow`}  
    >
            {/* Blog Image */}
            <Image
              src={getImageUrl(data.image! as string)}
              width={100}
              height={100}
              alt={data.title!}
              className="rounded-lg object-cover"
            />
            <div className="ml-4 flex flex-col justify-center">
              {/* Blog Topic */}
              <p className="text-base font-extrabold uppercase text-[#4ca6fc]">
                {data.topic!}
              </p>
              {/* Blog Title */}
              <h3 className="text-lg font-bold">{data.title!}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className=" mt-8  flex w-full items-center justify-center bg-primary py-10 text-center">
        <div className="flex max-w-[600px] flex-col gap-6 text-center font-extrabold text-white">
          <p className="text-base">STAY IN THE LOOP</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl">
            Subscribe for more inspiration
          </h1>
          <form className="flex flex-col items-center justify-center gap-2 md:flex-row">
            <input
              type="email"
              placeholder="Email"
              className="h-10 w-full rounded-lg px-3 text-sm text-black focus:outline-none md:w-[200px]"
            />
            <button
              type="submit"
              className="h-10 w-full rounded-lg bg-black px-3 py-1.5 text-sm font-bold text-white focus:ring-opacity-50 md:w-[100px]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BlogPage
