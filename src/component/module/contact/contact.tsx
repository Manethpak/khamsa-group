import React from 'react'
import ContactContent from './components/contact-content'

const Contact = () => {
  return (
    <div className="m-auto  flex min-h-screen max-w-screen-2xl items-center justify-center bg-[#8ACEC0]">
      <div className="w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px]">
        <ContactContent />
      </div>
    </div>
  )
}

export default Contact
