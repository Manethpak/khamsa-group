'use client'

import React from 'react'

const SubscriptionSection = () => {
  return (
    <div className="flex w-full items-center justify-center bg-white text-center">
      <div className="flex h-full w-full max-w-7xl flex-col items-center justify-center py-20">
        <div className="flex max-w-[600px] flex-col gap-6 text-center font-extrabold text-black">
          <p className="text-base">STAY IN THE LOOP</p>
          <h1 className="text-4xl md:text-5xl">
            Subscribe for more inspiration
          </h1>
          <form className="flex items-center justify-center gap-2">
            <input
              type="email"
              placeholder="Email"
              className="h-10 w-[200px] rounded-lg px-3 text-sm text-black focus:outline-none"
            />
            <button
              type="submit"
              className="h-10 w-[100px] rounded-lg bg-[#8ACEC0] px-3 py-1.5 text-sm font-bold text-white focus:ring-opacity-50"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionSection
