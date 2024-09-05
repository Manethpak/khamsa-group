'use client'
import React from 'react'
import ContactSection from '../homepage/contact'
import { Schema } from '@/lib/schema'
import Image from 'next/image'
import { getImageUrl } from '@/lib/directus'
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'
import { cn, formatDate } from '@/lib/utils'

type Props = {
  data: Schema['Company']
}

interface linkProps {
  title: string
  link: string
  phone: string
  name_icon: keyof typeof iconMappings
}

const iconMappings = {
  facebook: FaFacebookSquare,
  linkedin: FaLinkedin,
}

const CompanyDetail = ({ data }: Props) => {
  const companies = data.map((item) => {
    const moreImg = item.more_image
      ?.map((more) => {
        if (typeof more === 'object' && more !== null) {
          return {
            imageUrl: getImageUrl(more.image as string),
          }
        }
      })
      .filter(Boolean)

    const link = item.link as linkProps[]
    const icon_link = item?.icon_link as linkProps[]
    console.log(icon_link)

    return {
      name: item.name,
      imgUrl: getImageUrl(item.image! as string),
      moreImg,
      about_company: item.about_company,
      tag: item.tag,
      date: item.founded,
      location: item.location,
      company_size: item.company_size,
      link,
      icon_link,
    }
  })

  return (
    <div>
      {companies.map((company, index) => (
        <div key={index}>
          <div className="flex w-full flex-col items-center justify-center p-10">
            <div className="flex h-fit w-full max-w-7xl flex-col gap-10 py-10 md:gap-5">
              <div className="flex h-full flex-col justify-between gap-3 lg:flex-row">
                <div className="flex w-full max-w-full flex-col items-center gap-3 overflow-y-hidden lg:flex-row">
                  <div className="h-full w-full lg:max-w-3xl">
                    <Image
                      src={company.imgUrl}
                      alt={company.name!}
                      width={1200}
                      height={900}
                      quality={100}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div
                    className={cn(
                      company?.moreImg ? 'flex' : 'hidden',
                      'mx-auto max-h-fit w-full gap-3 overflow-scroll lg:max-w-52 lg:flex-col'
                    )}
                  >
                    {company.moreImg?.map((img, index) => (
                      <div key={index} className="max-h-48 max-w-full">
                        <Image
                          src={img?.imageUrl as string}
                          alt={company.name!}
                          width={1200}
                          height={1200}
                          quality={100}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    ))}
                    <div className=""></div>
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
                        {formatDate(company.date!)}
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
              <div className="mt-10 w-full max-w-4xl">
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
        </div>
      ))}
      <ContactSection />
    </div>
  )
}

export default CompanyDetail
