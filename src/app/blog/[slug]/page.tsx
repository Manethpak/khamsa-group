import { fetchBlogBySlug } from '@/fetcher/blog/fetch-blog'
import { getImageUrl } from '@/lib/directus'
import { formatDate } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { redirect } from 'next/navigation'
import { Metadata, ResolvingMetadata } from 'next'

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
    <div className="container mx-auto p-4 md:p-3 lg:p-8">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <p className="text-base font-extrabold uppercase text-[#4ca6fc]">
          {data.topic}
        </p>
        <h1 className="pt-16 text-4xl font-extrabold capitalize text-[#19154E] md:text-6xl">
          {data.title}
        </h1>
        <h2 className="my-6 text-lg text-zinc-600 md:text-xl">
          {data.description}
        </h2>
        <time className="text-sm text-zinc-400 md:text-lg">
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
    </div>
  )
}

export default BlogPage
