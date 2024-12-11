'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FacebookIcon from '@/component/global/icon/facebook-icon'
import LinkedInIcon from '@/component/global/icon/linkedin-icon'
import LinkTreeIcon from '../icon/linktree-icon'
import { Footer } from '@/constants'
import { motion } from 'framer-motion'
import { Schema } from '@/lib/schema'

interface Props {
  title: string
  link: string
  phone: string
  icon_name: keyof typeof iconMapping
}

type Prop = {
  data: Schema['Contact']
}

const iconMapping = {
  facebook: FacebookIcon,
  linkedin: LinkedInIcon,
  linkTree: LinkTreeIcon,
}

const FooterSection = ({ data }: Prop) => {
  const contact = data as {
    address?: Props[]
    link?: Props[]
    social_link?: Props[]
    iframe?: string
  }
  const address: Props[] = contact?.address || []
  const link: Props[] = contact?.link || []
  return (
    <footer className="from-gray-100 to-gray-100 flex w-full flex-col items-center justify-center overflow-hidden bg-black bg-gradient-to-r py-24 text-white">
      <div className="flex w-full max-w-screen-2xl flex-col gap-5 px-5 md:px-10 lg:px-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Khamsa Group Logo"
                width={200}
                height={200}
                className="mr-2 size-16"
              />
              <span className="gap-10 pb-0 text-2xl">
                Khamsa Group of Businesses
              </span>
            </div>

            <p className="text-gray-600 mt-4 max-w-xs text-sm">
              Shape the Future We Envision Through New Creations, Innovation,
              and Creativity.
            </p>

            <div className="text-gray-600 mt-5 flex gap-4">
              {contact?.social_link?.map(({ icon_name, link }, index) => {
                const IconComponent = iconMapping[icon_name]
                return (
                  <div
                    key={index}
                    className="rounded-full border-2 p-2 text-2xl"
                  >
                    <Link href={link} target="_blank">
                      <IconComponent />
                    </Link>
                  </div>
                )
              })}
            </div>
            <p className="text-gray-800 mt-7 hidden text-sm lg:block">
              © KhamsaGroup 2024 |{' '}
              <Link href="#" className="text-gray-400">
                Terms and Conditions
              </Link>
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-1 lg:justify-items-center">
            <div>
              <h3 className="pt-4 text-[22px] font-bold lg:pl-20">Overview</h3>
              <div className="text-gray-500 mt-4 flex flex-col space-y-4 text-sm">
                {Footer.map((data) => (
                  <div key={data.title} className="hover:opacity-75 lg:pl-20">
                    <Link href={data.url}>{data.title}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 space-y-4">
              <h2 className="pt-4 text-[22px] font-bold">More Information</h2>
              {link.map((link, index) => (
                <motion.div key={index}>
                  <div>
                    <Link
                      href={link.link}
                      className="text-gray-500 flex flex-col space-y-2 text-sm"
                    >
                      {link.title}
                    </Link>
                    <p>{link.phone}</p>
                  </div>
                </motion.div>
              ))}
              <div className="items-center sm:items-center">
                {address.map((data) => (
                  <div key={data.title} className="">
                    <Link
                      href={data.link}
                      className="text-gray-500 flex flex-col space-y-2 text-sm"
                    >
                      {' '}
                      {data.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-gray-800 mt-5 text-sm lg:hidden">
              © KhamsaGroup 2024 |{' '}
              <Link href="#" className="text-gray-400">
                Terms and Conditions
              </Link>
            </p>
          </div>
        </div>
        <p className="text-gray-800 text-sm">
          © KhamsaGroup 2024 |
          <Link href="/terms-and-conditions" className="text-gray-400">
            Terms and Conditions
          </Link>
        </p>
      </div>
    </footer>
  )
}
export default FooterSection
