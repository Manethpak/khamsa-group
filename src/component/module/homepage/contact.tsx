import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Motion } from '@/component/ui/motion'

const ContactSection = () => {
  return (
    <div className="items-s flex h-full w-full justify-center bg-primary">
      <Motion className="flex h-full w-full max-w-7xl flex-col items-center justify-center gap-12 py-24 px-7 sm:px-12 sm:flex-row sm:justify-between">
        <div className="flex w-full max-w-[550px] flex-col gap-4 font-extrabold text-white">
          <p className="text-base">GET STARTED</p>
          <h1 className="text-4xl md:text-5xl">Contact us</h1>
          <Link href="/contact" passHref>
            <button className="h-12 rounded-xl bg-white px-4 py-2 text-base font-bold text-secondary focus:ring-opacity-50">
              Join Khamsa now
            </button>
          </Link>
        </div>
        <div className="flex w-full max-w-full justify-end max-h-[450px] xl:min-h-[450px] bg-red-500">
          <Image
            src="/images/Factory.jpg"
            alt="farm"
            width={250}
            height={250}
            className="max-h-full w-full max-w-[620px] rounded-3xl object-cover object-center"
          />
        </div>
      </Motion>
    </div>

  )
}

export default ContactSection
