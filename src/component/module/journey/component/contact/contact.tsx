import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Motion } from '@/component/ui/motion'

const Contacts = () => {
  return (
    <div className="items-s flex h-full w-full justify-center bg-primary px-10">
      <Motion className="flex h-full w-full max-w-7xl flex-col items-center justify-center gap-12 py-24 sm:flex-row sm:justify-between">
        <div className="flex w-full max-w-[550px] flex-col gap-6 font-extrabold text-white">
          <p className="text-base">LET&apos;S GOO</p>
          <h1 className="text-4xl md:text-5xl">Want to know more about us?</h1>
          <Link href="/contact" passHref>
            <button className="h-12 rounded-xl bg-white px-4 py-2 text-base font-bold text-secondary focus:ring-opacity-50">
              Let&apos;s talk
            </button>
          </Link>
        </div>
        <div className="flex w-full max-w-full justify-end">
          <Image
            src="/images/Farm.jpeg"
            alt="farm"
            width={250}
            height={250}
            layout="responsive"
            className="max-h-[640px] w-full max-w-[650px] rounded-3xl object-cover object-center"
          />
        </div>
      </Motion>
    </div>
  )
}

export default Contacts
