'use client'
import { Motion } from '@/component/ui/motion'
import { Contact } from '@/constants'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaFacebookSquare, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'

const ContactUs = () => {
  const icon = [
    {
      id: '1',
      icon: <FaFacebookSquare />,
      url: 'https://www.facebook.com/khamsagroup/?mibextid=ZbWKwL',
    },
    {
      id: '2',
      icon:  <FaLinkedin />,
      url: 'https://www.linkedin.com/company/khamsagroup/',
    },
    {
      id: '3',
      icon: <FaYoutube />,
      url: 'https://youtu.be/f_GhQVHDH0E?si=E2vGEK0L4z1vxKng',
    },
  ]

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
              src="https://cdn.iframe.ly/api/iframe?url=https%3A%2F%2Fwww.google.com%2Fmaps%3Fq%3Dplace_id%3AChIJhyy6A6JbCTER3pHxfBV8ftk&key=462812a26b593f2dbfbfcbb14f6d699a"
            ></iframe>
          </div>
          <div className="flex w-full max-w-[400px] flex-col gap-9">
            {Contact.map((data) => (
              <div key={data.description} className="">
                <div className="flex flex-col gap-3">
                  <h1 className="text-2xl font-extrabold">{data.title}</h1>
                  <p>{data.description}</p>
                  {data.link?.map((link, index) => (
                    <motion.div
                      onHoverStart={() => setShowArrow(link.name ?? '')}
                      onHoverEnd={() => setShowArrow(null)}
                      key={index}
                      className="flex items-center gap-2 font-bold"
                    >
                      <div>
                        <Link href={`${link.url}`}>{link.name}</Link>
                        <p>{link.phone}</p>
                      </div>
                      {index !== 2 && (
                        <motion.div
                          initial={{ opacity: 1, x: 0 }}
                          animate={
                            showArrow === link.name ? { x: 5 } : { x: 0 }
                          }
                          transition={{ type: 'spring', stiffness: 50 }}
                        >
                          <HiOutlineArrowNarrowRight />
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex gap-4">
              {icon.map((data) => (
                <div key={data.id} className="text-[42px]">
                  <Link target="_blank" href={`${data.url}`}>
                    {data.icon}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Motion>
    </div>
  )
}

export default ContactUs
