'use client'
import { Footer } from '@/constants'
import { useContact } from '@/fetcher/contact/use-contact'
import Link from 'next/link'
import React from 'react'

interface Props {
  title: string
  link: string
  phone: string
}

const FooterContent = () => {
  const {data} = useContact()
  const contact = data as {
    address?: Props[]
    link?: Props[]
    social_link?: Props[]
    iframe?: string
  }
  const address: Props[] = contact?.address || []
  const link: Props[] = contact?.link || []
  return (
    <footer className="flex w-full flex-col items-center bg-black p-10 font-noto text-white shadow-md">
      <div className="flex w-full max-w-7xl flex-col gap-10 md:px-14">
        <h1 className="text-2xl font-bold">KhamsaGroup</h1>
        <div className="flex w-full flex-col justify-between gap-10 sm:flex-row">
          <div className="flex w-full max-w-lg flex-col gap-3">
            <p>Overview</p>
            {Footer.map((data) => (
              <div
                key={data.title}
                className="text-sm font-normal text-white/70"
              >
                <Link href={data.url}>{data.title}</Link>
              </div>
            ))}
          </div>
          <div className="flex w-full max-w-lg flex-col gap-3">
            <p>More Information</p>
            <div className="flex flex-col gap-3 text-sm font-normal text-white/70">
              {link.map((link, index) => (
                <div key={index}>
                  <Link href={link.link}>{link.title}</Link>
                  <p>{link.phone}</p>
                </div>
              ))}
              {address.map((data) => (
                <div key={data.title}>
                  <Link href={data.link}>{data.title}</Link>
                </div>
              ))}
              <Link href="/terms-and-conditions">Terms and Conditions</Link>
            </div>
          </div>
        </div>
        <span className="text-xs font-normal text-white/70">
          © KhamsaGroup 2023.
        </span>
      </div>
    </footer>
  )
}
export default FooterContent
