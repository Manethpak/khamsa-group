import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className="h-full w-full font-extrabold text-center flex flex-col gap-5 justify-center items-center py-36">
      <h1 className="text-[#8ACEC0] text-7xl md:text-9xl">404</h1>
      <h2 className="text-[#19154E] text-5xl md:text-7xl">Page not found.</h2>
      <p className="text-[#5B5E76] font-medium text-xl md:text-2xl w-full max-w-[700px]">The page you are looking for doesn't exist or has been moved. Please go back to the homepage.</p>
      <Link href="/" passHref>
            <button className="h-12 rounded-xl bg-[#8ACEC0] px-4 py-2 text-lg font-bold focus:ring-opacity-50">
              Go back home
            </button>
          </Link>
    </div>
  )
}

export default NotFound