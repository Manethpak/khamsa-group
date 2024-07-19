'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'
import { motion, useAnimationControls } from 'framer-motion'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const containerControls = useAnimationControls()

  const getBgColor = () => {
    if (pathname === '/') {
      return 'bg-black text-white md:bg-white md:text-[#19154E] lg:bg-[#5B5E76]/50 lg:text-white absolute top-0 z-[100] w-full'
    } else {
      return 'bg-white text-[#19154E] fixed relative'
    }
  }

  const dropdownBgColor = () => {
    if (pathname === '/') {
      return 'bg-black text-white mt-20'
    } else {
      return 'bg-white text-[#19154E] '
    }
  }

  const contactBgColor = () => {
    if (pathname === '/') {
      return 'bg-white text-[#19154E]'
    } else {
      return 'bg-[#8ACEC0] text-white '
    }
  }

  useEffect(() => {
    if (open) {
      containerControls.start('open')
    } else {
      containerControls.start('closed')
    }
  }, [open])

  return (
    <motion.div
      initial="close"
      animate={containerControls}
      variants={{
        open: {
          y: '5px',
          transition: { duration: 0.5, type: 'spring', stiffness: 150 },
        },
        closed: {
          y: '0px',
          transition: { duration: 0.5, type: 'spring', stiffness: 150 },
        },
      }}
      transition={{ stiffness: 150 }}
      className={`${getBgColor()} w-full`}
    >
      {/* navbar section */}
      <div
        className={`z-[1000] flex h-20 w-full items-center justify-between px-5 md:h-12 md:px-6 lg:h-20 lg:px-28 2xl:px-80 ${getBgColor()}`}
      >
        <a href="/" className="flex h-9 items-center gap-2">
          <Image
            src="/images/logo.avif"
            alt="Logo"
            width={250}
            height={250}
            className="h-9 w-9"
          />
          <h1 className="font-extrabold">Khamsa Group</h1>
        </a>
        <div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-7 font-semibold">
              <li>
                <a href="/journey">Our Journey</a>
              </li>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/block">Blogs</a>
              </li>
              <li className="flex h-12 w-24 items-center justify-center rounded-xl bg-[#8ACEC0] text-white">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          {open ? (
            <IoClose
              onClick={() => setOpen(!open)}
              className="h-7 w-7 md:hidden"
            />
          ) : (
            <IoMenu
              onClick={() => setOpen(!open)}
              className="h-7 w-7 md:hidden"
            />
          )}
        </div>
      </div>
      <motion.div
        className={`${dropdownBgColor()} absolute h-56 w-full`}
        animate={open ? 'open' : 'closed'}
        variants={{
          open: {
            y: '-5px',
            transition: { duration: 0.5, type: 'spring', stiffness: 150 },
          },
          closed: {
            opacity: 0,
            y: '-20px',
            transition: {
              duration: 0.5,
              type: 'spring',
              stiffness: 150,
              damping: 15,
            },
          },
        }}
      >
        <div className="h-full">
          <ul className="flex flex-col items-center justify-center gap-7 font-semibold">
            <li>
              <a href="/journey">Our Journey</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/block">Blogs</a>
            </li>
            <li className={`${contactBgColor()} flex h-10 w-24 items-center justify-center rounded-xl`}>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Navbar
