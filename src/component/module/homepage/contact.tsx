import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Motion } from '@/component/ui/motion'

const ContactSection = () => {
  return (
    <div className="items-s flex h-full w-full justify-center bg-primary font-noto">
      <Motion className="flex h-full w-full max-w-7xl flex-col items-center justify-center gap-12 px-7 py-24 sm:flex-row sm:justify-between sm:px-12">
        <div className="flex w-full max-w-[550px] flex-col gap-4 font-extrabold">
          <p className="subtitle text-white">GET STARTED</p>
          <h1 className="title text-white">Contact us</h1>
          <Link href="/contact" passHref>
            <button className="h-12 rounded-xl bg-white px-4 py-2 text-base font-bold text-secondary focus:ring-opacity-50">
              Join Khamsa now
            </button>
          </Link>
        </div>
        <div className="flex max-h-[450px] w-full max-w-full justify-end xl:min-h-[450px]">
          <Image
            src="/images/Factory.jpg"
            alt="view of ai farm factory"
            width={620}
            height={448}
            className="max-h-full w-full max-w-[620px] rounded-3xl object-cover object-center"
          />
        </div>
      </Motion>
    </div>
  )
}

export default ContactSection
