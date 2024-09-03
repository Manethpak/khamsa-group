'use client'
import { getImageUrl } from '@/lib/directus'
import { Schema } from '@/lib/schema'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

type Props = {
  company: Schema['Company']
  category: Schema['Category']
}

const CompanyList = ({ company, category }: Props) => {
  const { slug } = useParams();
  const router = useRouter();

  return (
    <section>
      <div className="flex w-full flex-col items-center justify-center px-1 font-lato sm:px-10">
        <div className="h-full w-full max-w-7xl overflow-hidden py-16">
          <div className="flex h-10 w-full justify-between text-lg sm:text-xl">
            <h1 className="flex h-full w-full max-w-28 items-center text-xl font-semibold sm:min-w-max sm:text-2xl">
              Explore all
            </h1>
            <div className="flex items-start p-1 sm:min-w-max">
              <p>Category :</p>
              <select
              defaultValue={slug}
                className="z-10 flex h-fit max-h-64 w-36 flex-col bg-white px-2 pt-1"
                onChange={(e) => {
                  router.push(e.currentTarget.value)
                }}

              >
                <option value="all">All</option>
                {category.map((data, index) => (
                  <option className="font-lato" key={index} value={data.slug!}>
                    {data.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-16 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {company.map((data, index) => (
              <Link href={`/company/${data!.slug}`} key={index} passHref>
                <div className="relative mx-auto flex w-full max-w-[400px] flex-col justify-start gap-5 rounded-t-lg bg-white">
                  <div className="relative h-64 max-w-full">
                    <div className="relative h-full w-full">
                      <Image
                        src={getImageUrl(data.image! as string)}
                        alt={data.name!}
                        width={1920}
                        height={880}
                        quality={100}
                        className="h-full w-full rounded-lg object-cover object-center"
                      />
                    </div>
                    <div className="absolute right-0 top-0 m-4 flex h-14 w-14 items-center justify-center rounded-lg bg-white">
                      <Image
                        src={getImageUrl(data.logo! as string)}
                        alt={data.name!}
                        width={1920}
                        height={880}
                        quality={100}
                        className="h-fit w-fit rounded-lg object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-3 p-1 text-left">
                    <h2 className="text-2xl text-secondary">{data.name!}</h2>
                    <p className="px-2 font-libre text-base text-gray">
                      {data.founded!}
                    </p>
                    <div className="pt-5 text-2xl text-primary">hello</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyList