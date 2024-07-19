import Link from 'next/link' // Use 'next/link' for navigation
import React from 'react'

const ContactContent = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 lg:mx-32 lg:overflow-hidden lg:rounded-lg">
      <div className="flex w-full max-w-screen-2xl flex-col bg-[#8ACEC0] p-4 lg:flex-row lg:gap-8 lg:p-8">
        {/* Card 1: Content */}
        <div className="card flex flex-col items-start justify-center rounded-lg bg-[#8ACEC0] p-4 lg:w-[530px] lg:p-8">
          <div className="flex flex-col items-start gap-4 opacity-100">
            <h2 className="font-manrope text-sm text-white lg:text-lg xl:text-xl">
              GET STARTED
            </h2>
            <p className="font-manrope text-4xl font-extrabold leading-tight text-white lg:text-5xl xl:text-6xl">
              Contact us
            </p>
            <Link href="/contact" passHref>
              <button className="h-12 rounded-xl bg-white px-4 py-2 text-base text-black focus:ring-opacity-50 lg:text-lg xl:text-xl">
                JOIN KHAMSA NOW
              </button>
            </Link>
          </div>
        </div>

        {/* Card 2: Image with overlay */}
        <div className="card relative mt-4 flex items-center justify-center overflow-hidden rounded-lg lg:mt-0 lg:h-[520px] lg:w-[720px]">
          <img
            src="/images/Factory.jpg" // Ensure the path to the image is correct
            alt="Descriptive Alt Text"
            className="h-full w-full rounded-lg object-cover"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </div>
      </div>
    </div>
  )
}

export default ContactContent
