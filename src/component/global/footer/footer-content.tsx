'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Footer } from '@/constants'
import { useContact } from '@/fetcher/contact/use-contact'
import { motion } from 'framer-motion'
import { FaTelegramPlane } from 'react-icons/fa'
import { GrFacebookOption, GrLinkedinOption } from 'react-icons/gr'

interface Props {
  title: string
  link: string
  phone: string
  icon_name: keyof typeof iconMapping
}

const iconMapping = {
  facebook: GrFacebookOption,
  linkedin: GrLinkedinOption,
  youtube: FaTelegramPlane,
}

const FooterSection = () => {
  const { data } = useContact()

  const contact = data as {
    address?: Props[]
    link?: Props[]
    social_link?: Props[]
    iframe?: string
  }
  const address: Props[] = contact?.address || []
  const link: Props[] = contact?.link || []
  return (
    <footer className="from-gray-100 to-gray-100 flex w-full flex-col items-center justify-center overflow-hidden bg-black bg-gradient-to-r py-20 text-white">
      <div className="flex w-full max-w-screen-2xl flex-col gap-20 px-5 md:px-10 lg:px-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src={'/images/logo.avif'}
                width={100}
                height={200}
                alt="Khamsa Group Logo"
                className="mr-2 h-16 w-16"
              />
              <span className="gap-10 pb-0 text-2xl">Khamsa Group</span>
            </div>

            <p className="text-gray-600 mt-4 max-w-xs text-sm">
              Pirate ipsum arrgh bounty warp jack. Yellow timbers no pounders
              fluke lugsail gangplank. Across no poop landlubber a road sails
              mutiny rat. Fleet coxswain lass lass crow&apos;s cup gar. Tales
              nest ensign lateen no gold.
            </p>

            <div className="text-gray-600 mt-8 flex space-x-6">
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
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-1 lg:justify-items-center">
            <div>
              <h3 className="pt-4 text-[22px] font-bold lg:pl-20">Overview</h3>
              <div className="text-gray-500 mt-4 flex flex-col space-y-2 text-sm">
                {Footer.map((data) => (
                  <div key={data.title} className="hover:opacity-75 lg:pl-20">
                    <Link href={data.url}>{data.title}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1">
              <h2 className="pt-4 text-[22px] font-bold">More information</h2>

              {link.map((link, index) => (
                <motion.div key={index}>
                  <div>
                    <Link
                      href={link.link}
                      className="text-gray-500 mt-4 flex flex-col space-y-2 text-sm"
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
                      className="text-gray-500 mt-4 flex flex-col space-y-2 text-sm uppercase"
                    >
                      {' '}
                      {data.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="text-gray-800 mt-8 text-sm">
          © KhamsaGroup 2024 |{' '}
          <Link href="#" className="text-gray-400">
            Terms and Conditions
          </Link>
        </p>
      </div>
    </footer>
  )
}
export default FooterSection
