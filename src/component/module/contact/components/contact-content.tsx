import React from 'react';

const ContactContent = () => {
  return (
    <div className="flex min-h-screen flex-col items-start justify-center px-4 lg:mx-32 lg:overflow-hidden lg:rounded-lg">
      <div className="flex w-full max-w-screen-2xl flex-col bg-[#8ACEC0] p-4 lg:flex-row lg:gap-8 lg:p-8">
        {/* Card 1: Content */}
        <div className="card mx-auto mb-4 flex flex-col items-start rounded-lg bg-[#8ACEC0] p-4 lg:mb-0 lg:mr-20 lg:p-8">
          <h2 className="font-manrope leading-2 card-title mb-1 mt-4 text-sm text-white">
            GET STARTED
          </h2>
          <p className="font-manrope mb-2 mt-2 text-start text-lg font-bold tracking-tight text-white lg:text-3xl">
            Contact us
          </p>
          <button className="h-[46px] w-[160.16px] items-start rounded-xl bg-white px-2 py-[4px] text-sm text-black focus:ring-opacity-50">
            JOIN KHAMSA NOW
          </button>
        </div>

        {/* Card 2: Image with overlay */}
        <div className="card relative mx-auto flex h-auto w-full items-center justify-center overflow-hidden rounded-lg lg:h-[447px] lg:w-[620px]">
          <img
            src="./images/Factory.jpg"
            alt="Descriptive Alt Text"
            className="h-full w-full rounded-lg object-cover"
            style={{ maxWidth: '620px', maxHeight: '447px' }}
          />
        </div>
      </div>
    </div>
  )
};

export default ContactContent;
