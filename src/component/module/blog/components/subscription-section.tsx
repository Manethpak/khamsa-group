'use client'

import { Motion } from '@/component/ui/motion'
import { usePathname } from 'next/navigation'
import React from 'react'

const SubscriptionSection = () => {
  const pathname = usePathname()
  
  // Determine the background color based on the path
  const getBgColor =
    pathname === '/blog'
      ? 'bg-white text-black'
      : 'bg-primary text-white'

      const getButtonColor =
      pathname === '/blog'
        ? 'bg-primary text-black'
        : 'bg-black text-white'
        

  return (
    <div className={`flex w-full items-center justify-center ${getBgColor} text-center font-noto`}>
      <div className="flex h-full w-full max-w-7xl flex-col items-center justify-center py-20">
        <Motion className="flex max-w-[600px] flex-col gap-6 text-center font-semibold ">
        <p className= {`${getBgColor} subtitle`}>STAY IN THE LOOP</p>
        <h1 className={`${getBgColor} title`}>Subscribe for more inspiration.</h1>
          <form className="flex items-center justify-center gap-2">
            <input
              type="email"
              placeholder="Email"
              className="h-10 w-[200px] font-light bg-slate-200/70 rounded-lg px-3 text-black focus:outline-none"
            />
            <button
              type="submit"
              className={`${getButtonColor}  h-10 w-[100px] rounded-lg px-3 py-1.5 text-sm font-bold focus:ring-opacity-50`}
            >
              Subscribe
            </button>
          </form>
        </Motion>
      </div>
    </div>
  )
}

export default SubscriptionSection
