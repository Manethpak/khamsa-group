import React from 'react'

const ContactUs = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 lg:mx-32 lg:flex-row lg:overflow-hidden lg:rounded-lg">
      {/* Column 1: Image */}
      <div className="card relative mt-4 w-full lg:mt-0 lg:h-[544.53px] lg:w-[740px] lg:border-r-0">
        <img
          src="/images/map.png" // Ensure the path to the image is correct
          alt="Descriptive Alt Text"
          className="h-full w-full rounded-lg object-cover"
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </div>

      {/* Column 2: Content */}
      <div className="card flex w-full flex-col items-center justify-center rounded-lg bg-[#8ACEC0] p-4 lg:w-[400px] lg:items-start lg:p-8">
        <div className="flex flex-col items-center gap-4 text-white opacity-100 lg:items-start">
          <h2 className="font-manrope text-center text-base lg:text-left lg:text-xl">
            Get in touch
          </h2>
          <p className="font-manrope text-center text-sm lg:text-left lg:text-base xl:text-lg">
            We’re always here to help. Contact us if you are interested in our
            service. Let's cooperate and invest in the future of Cambodia.
          </p>
          <h2 className="font-manrope text-center text-base lg:text-left lg:text-xl">
            Address:
          </h2>
          <p className="font-manrope text-center text-sm lg:text-left lg:text-base xl:text-lg">
            Building#3, St39D, Anlungkung village, Preysor District, Dangkor
            Commune, Phnom Penh, Cambodia
          </p>
          <h2 className="font-manrope text-center text-base lg:text-left lg:text-xl">
            Contact:
          </h2>
          <p className="font-manrope text-center text-sm lg:text-left lg:text-base xl:text-lg">
            info@khamsagroup.com <br />
            <a href="https://linktr.ee/KhamsaGroup" className="text-blue-400">
              linktr.ee/KhamsaGroup
            </a>{' '}
            <br />
            +855(0)15686933
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
