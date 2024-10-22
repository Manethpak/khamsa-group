import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import FacebookIcon from '@/component/global/icon/facebook-icon'
import LinkedInIcon from '@/component/global/icon/linkedin-icon'
import Contacts from '@/component/module/about-page/contact-section'
import { fetchCompanyBySlug } from '@/fetcher/company/fetch-company'
import { getImageUrl } from '@/lib/directus'
import { cn } from '@/lib/utils'
import { dateYearFormat } from '@/utils/date-format'
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
  facebook: FacebookIcon,
  linkedin: LinkedInIcon,
}

const CompanyDetailPage = async ({ params }: Props) => {
  const result = await fetchCompanyBySlug(params.slug)

  function getHostname(url: string | URL) {
    return new URL(url).hostname
  }

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
    icon_link: result[0].icon_link as linkProps[],
    tag: result[0].tag,
    date: result[0].founded,
  }

  return (
    <div className="subtitle flex w-full flex-col items-center justify-center">
      <div className="h-fit w-full max-w-screen-2xl px-5 py-20 md:px-10 lg:px-24">
        <Link href="/company" className="flex w-fit items-center">
          <ChevronLeftIcon />
          <span>Back</span>
        </Link>

        <div className="mt-4 flex h-fit w-full flex-col gap-6 md:gap-5">
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="custom-scrollbar flex max-w-4xl flex-col items-center gap-2 overflow-y-auto lg:max-h-[500px] lg:flex-row">
              <div
                className={cn(
                  'sticky top-0 h-full w-full',
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
                  company?.moreImg?.length! > 3
                    ? 'flex w-full min-w-[180px] overflow-x-auto'
                    : 'hidden w-0',
                  'max-h-fit flex-1 gap-3 self-start lg:max-w-52 lg:flex-col'
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

            <div className="flex w-full max-w-xs flex-col gap-6 lg:px-5">
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
                  <span className="font-semibold">
                    {dateYearFormat(company.date!)}
                  </span>
                </p>
                <p>
                  Team size:{' '}
                  <span className="font-semibold">{company.company_size}</span>
                </p>
                <p>
                  Website:{' '}
                  <span className="font-semibold">
                    {company.website ? (
                      <Link href={company.website} target="_blank">
                        {getHostname(company.website)}
                      </Link>
                    ) : (
                      'N/A'
                    )}
                  </span>
                </p>
                <p>
                  Phone number:{' '}
                  <span className="font-semibold">
                    {company.phone || 'N/A'}
                  </span>
                </p>
                <p>
                  Location:{' '}
                  <span className="font-semibold capitalize">
                    {company.location}
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-5 text-4xl">
                {(company.icon_link || []).map((iconLink, index) => {
                  const IconComponent = iconMappings[iconLink.name_icon]
                  return IconComponent ? (
                    <Link
                      key={index}
                      href={iconLink.link}
                      className="flex size-12 items-center justify-center rounded-full border"
                    >
                      <IconComponent className="h-6 w-6" />
                    </Link>
                  ) : null
                })}
              </div>
            </div>
          </div>

          <div className="subtitle w-full">
            {company.about_company && (
              <div
                className="w-full max-w-4xl text-justify"
                dangerouslySetInnerHTML={{
                  __html: company.about_company!,
                }}
              />
            )}
          </div>
        </div>
      </div>
      <Contacts />
    </div>
  )
}

export default CompanyDetailPage
