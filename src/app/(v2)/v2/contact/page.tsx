'use client'
import { Motion } from '@/component/ui/motion'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { useContact } from '@/fetcher/contact/use-contact'
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

const ContactPage = () => {
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
    <div className="subtitle flex w-full flex-col items-center justify-center py-20">
      <Motion className="h-fit w-full max-w-screen-2xl px-5 md:px-10 lg:px-24">
        <div className="flex h-full w-full flex-col-reverse gap-6 gap-y-14 lg:flex-row">
          <div className="h-full w-full lg:w-fit">
            <iframe
              className="h-80 w-full lg:h-[580px] lg:w-[760px] lg:max-w-lg xl:max-w-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={contact?.iframe as string | undefined}
            ></iframe>
          </div>
          <div className="flex w-full max-w-sm flex-col gap-6">
            <div className="flex w-full flex-col gap-6">
              <div className="space-y-3">
                <h1 className="title">Get in touch</h1>
                <p>
                  We&apos;re always here to help. Contact us if you are
                  interested in our service. Let&apos;s cooperate and invest in
                  the future of Cambodia.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="title">Address</h2>
                {address.map((data) => (
                  <div key={data.title}>
                    <Link href={data.link}>{data.title}</Link>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="title">Number</h2>
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
            <div className="flex flex-col gap-4">
              <h2 className="title">Follow us on:</h2>
              <div className="flex gap-4">
                {(contact?.social_link || []).map((data) => {
                  const IconComponent = iconMapping[data.icon_name]
                  return (
                    <div
                      key={data.title}
                      className="flex size-12 items-center justify-center rounded-full border"
                    >
                      <Link target="_blank" href={`${data.link}`}>
                        <IconComponent className="h-6 w-6" />
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </Motion>
    </div>
  )
}

export default ContactPage
