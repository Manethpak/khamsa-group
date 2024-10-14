'use client'
import { usePathname } from 'next/navigation'
import React, { useRef, useState } from 'react'
import FacebookIcon from '@/component/global/icon/facebook-icon'
import TelegramIcon from '@/component/global/icon/telegram-icon'
import LinkedInIcon from '@/component/global/icon/linkedin-icon'
import { LinkedinShareButton, TelegramShareButton } from 'react-share'
import { ShareIcon } from 'lucide-react'

const Share = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
  const currentPageUrl = `${baseUrl}${pathname}`

  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex justify-end"
      >
        <ShareIcon className="subtitle size-6 cursor-pointer" />
      </div>
      {isOpen && (
        <div className="flex h-full w-full items-center justify-center px-10">
          <div className="h-fit w-full max-w-sm">
            <div className="absolute right-0 mt-5 flex w-fit justify-center gap-5 bg-white px-14 py-5 font-semibold">
              <LinkedinShareButton
                url={currentPageUrl}
                title="Say something about this ..."
              >
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#0077B5] text-white">
                  <LinkedInIcon />
                </div>
                Linkedin
              </LinkedinShareButton>
              <TelegramShareButton url={currentPageUrl}>
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#229ED9] text-white">
                  <TelegramIcon />
                </div>
                Telegram
              </TelegramShareButton>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Share
