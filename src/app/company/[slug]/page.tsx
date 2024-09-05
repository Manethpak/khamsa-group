import React from 'react'
import { fetchCompanyBySlug } from '@/fetcher/company/fetch-company'
import { Schema } from '@/lib/schema'
import Image from 'next/image'
import { getImageUrl } from '@/lib/directus'
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'
import { cn, formatDate } from '@/lib/utils'
import ContactSection from '@/component/module/company-detail/contact'
import { dateYearFormat } from '@/utils/date-format'
import { Button } from '@headlessui/react'
import { ChevronLeftIcon } from 'lucide-react'

type Props = { params: { slug: string } }

interface linkProps {
  title: string
  link: string
  phone: string
  name_icon: keyof typeof iconMappings
}

export const revalidate = 300

const iconMappings = {
  facebook: FaFacebookSquare,
  linkedin: FaLinkedin,
}

const CompanyPage = async ({ params }: Props) => {
  const result = await fetchCompanyBySlug(params.slug)

  const company = {
    ...result[0],
    imgUrl: getImageUrl(result[0].image! as string),
    moreImg: result[0].more_image?.map((more: { image: string }) => {
      if (typeof more === 'object' && more !== null) {
        return {
          image: getImageUrl(more.image),
        }
      }
    }),
    link: result[0].link as linkProps[],
    icon_link: result[0].icon_link as linkProps[],
    tag: result[0].tag,
    date: result[0].founded,
  }

  return (
    <div>
      <div className="mx-auto max-w-6xl px-4 py-10 lg:px-0">
        <Link href="/category/all" className="flex w-fit">
          <ChevronLeftIcon />
          <span>Back</span>
        </Link>

        <div className="mt-4 flex h-fit w-full flex-col gap-6 md:gap-5">
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="flex max-w-4xl flex-col items-center gap-2 overflow-y-auto rounded-lg lg:max-h-[500px] lg:flex-row">
              <div
                className={cn(
                  'sticky top-0 h-full',
                  company?.moreImg?.length! > 0 ? 'h-full' : ''
                )}
              >
                <Image
                  src={company.imgUrl}
                  alt={company.name!}
                  width={700}
                  height={500}
                  quality={90}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div
                className={cn(
                  company?.moreImg?.length! > 0
                    ? 'flex w-full min-w-[180px] overflow-x-auto'
                    : 'hidden',
                  'max-h-fit flex-1 gap-3 self-start overflow-y-scroll lg:max-w-52 lg:flex-col'
                )}
              >
                {company.moreImg?.map(
                  (img: { image: string }, index: number) => (
                    <div key={index} className="max-h-48 w-full min-w-[180px]">
                      <Image
                        src={img?.image as string}
                        alt={company.name!}
                        width={400}
                        height={400}
                        quality={100}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="flex w-full max-w-xs flex-col gap-6 py-8 lg:px-5">
              <h1 className="text-3xl font-bold">{company.name}</h1>
              <div className="flex flex-wrap gap-2">
                {company.tag?.map((tag) => (
                  <span
                    key={tag}
                    className="w-fit rounded bg-[#8ACEC0] px-[8px] py-[4px] text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <p>
                  Founded:{' '}
                  <span className="font-bold">
                    {dateYearFormat(company.date!)}
                  </span>
                </p>
                <p>
                  Team size:{' '}
                  <span className="font-bold">{company.company_size}</span>
                </p>
                {company.link?.map((link, index) => (
                  <div key={index}>
                    {index === 0 && (
                      <>
                        Website:{' '}
                        <span className="font-bold">
                          <Link href={link.link}>{link.title}</Link>
                        </span>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        Phone number:{' '}
                        <span className="font-bold">{link.title}</span>
                      </>
                    )}
                  </div>
                ))}
                <p>
                  Location:{' '}
                  <span className="font-bold capitalize">
                    {company.location}
                  </span>
                </p>
              </div>
              <div className="mt-4 flex items-center gap-5 text-4xl">
                {(company.icon_link || []).map((iconLink, index) => {
                  const IconComponent = iconMappings[iconLink.name_icon]
                  return IconComponent ? (
                    <Link key={index} href={iconLink.link}>
                      <IconComponent />
                    </Link>
                  ) : null
                })}
              </div>
            </div>
          </div>

          <div className="w-full max-w-4xl lg:mt-10">
            {company.about_company && (
              <div
                className="prose min-w-full text-justify"
                dangerouslySetInnerHTML={{
                  __html: company.about_company!,
                }}
              />
            )}
          </div>
        </div>
      </div>

      <ContactSection />
    </div>
  )
}

export default CompanyPage
