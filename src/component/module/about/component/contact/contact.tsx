import React from 'react'
import Link from 'next/link'
import { Motion } from '@/component/ui/motion'

const Contacts = () => {
  return (
    <div className="flex w-full items-center justify-center bg-primary px-10 text-center">
      <div className="flex h-full w-full max-w-7xl justify-center py-24">
        <Motion className="flex max-w-[530px] flex-col gap-6 font-extrabold text-white">
          <p className="text-base">What are you waiting for?</p>
          <h1 className="text-4xl md:text-5xl">
            Let&apos;s invest in the future together
          </h1>
          <Link href="/contact" passHref>
            <button className="h-12 rounded-xl bg-white px-4 py-2 text-lg font-bold text-secondary focus:ring-opacity-50">
              Contact Us
            </button>
          </Link>
        </Motion>
      </div>
    </div>
  )
}

export default Contacts
