'use client'
import { Motion } from '@/component/ui/motion'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaFacebookSquare, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { useContact } from '@/fetcher/contact/use-contact'

interface Props {
  title: string
  link: string
  phone: string
  icon_name: keyof typeof iconMapping
}

const iconMapping = {
  facebook: FaFacebookSquare,
  linkedin: FaLinkedin,
  youtube: FaYoutube,
}

const ContactUs = () => {
  const { data } = useContact()

  const contact = data as {
    address?: Props[]
    link?: Props[]
    social_link?: Props[]
    iframe?: string
  }
  const address: Props[] = contact?.address || []
  const link: Props[] = contact?.link || []

  const [showArrow, setShowArrow] = useState<string | null>(null)
  return (
    <div className="flex w-full flex-col items-center justify-center py-36 text-lg font-medium text-white">
      <Motion className="h-fit w-full max-w-7xl space-y-14 px-10">
        <div className="flex h-full max-h-full flex-col gap-5">
          <p className="text-base font-extrabold">contact us</p>
          <h1 className="text-4xl font-extrabold md:text-6xl">We can help</h1>
        </div>
        <div className="flex h-full w-full flex-col-reverse justify-between gap-y-14 xl:flex-row">
          <div className="h-80 w-full max-w-7xl overflow-hidden rounded-2xl md:h-[450px] xl:h-[545px] xl:max-w-[740px]">
            <iframe
              className="max-h- h-full w-full xl:max-h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={contact?.iframe as string | undefined}
            ></iframe>
          </div>
          <div className="flex w-full max-w-[400px] flex-col gap-9">
            <div></div>

            <div className="flex flex-col gap-10">
              <div className="space-y-3">
                <h1 className="text-2xl font-bold">Get in touch</h1>
                <p>
                  We&apos;re always here to help. Contact us if you are
                  interested in our service. Let&apos;s cooperate and invest in
                  the future of Cambodia.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl font-bold">Address</h2>
                {address.map((data) => (
                  <div key={data.title}>
                    <Link href={data.link}>{data.title}</Link>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                {link.map((link, index) => (
                  <motion.div
                    onHoverStart={() => setShowArrow(link.title ?? '')}
                    onHoverEnd={() => setShowArrow(null)}
                    key={index}
                    className="flex items-center gap-2"
                  >
                    <div>
                      <Link href={link.link}>{link.title}</Link>
                      <p>{link.phone}</p>
                    </div>

                    <motion.div
                      initial={{ opacity: 1, x: 0 }}
                      animate={showArrow === link.title ? { x: 5 } : { x: 0 }}
                      transition={{ type: 'spring', stiffness: 50 }}
                    >
                      <HiOutlineArrowNarrowRight />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {(contact?.social_link || []).map((data) => {
                const IconComponent = iconMapping[data.icon_name]
                return (
                  <div key={data.title} className="text-[42px]">
                    <Link target="_blank" href={`${data.link}`}>
                      <IconComponent />
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Motion>
    </div>
  )
}

export default ContactUs
