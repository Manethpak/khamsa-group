'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'
import { motion, useAnimationControls } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const containerControls = useAnimationControls()

  const getBgColor =
    pathname === '/'
    ? `bg-black text-white md:bg-white md:text-secondary lg:bg-gray/50 lg:text-white absolute top-0 w-full
       ${open ? 'z-[100]' : 'z-[50]'}`
  : `bg-white text-secondary ${open ? 'relative z-50' : ''}`

  const dropdownBgColor =
    pathname === '/' ? 'bg-black text-white' : 'bg-white text-secondary'

  const contactBgColor =
    pathname === '/' ? 'bg-white text-secondary' : 'bg-[#8ACEC0] text-white'

  useEffect(() => {
    if (open) {
      containerControls.start('open')
    } else {
      containerControls.start('closed')
    }
  }, [open, containerControls])

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
      className={`${getBgColor} -mt-1 flex w-full flex-col items-center md:px-10`}
    >
      {/* navbar section */}
      <div className="flex h-20 w-full max-w-7xl items-center justify-between px-5 font-noto md:px-6 lg:h-20">
        <Link href="/" className="flex h-9 items-center gap-2">
          <Image
            src="/images/logo.avif"
            alt="Logo"
            width={250}
            height={250}
            className="h-9 w-9"
          />
          <h1 className="font-extrabold">Khamsa Group</h1>
        </Link>
        <div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-7 font-semibold">
              <li>
                <Link href="/journey">Our Journey</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/blog">Blogs</Link>
              </li>
              <li className="flex h-12 w-24 items-center justify-center rounded-xl bg-primary text-white">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          {open ? (
            <IoClose
              onClick={() => setOpen(!open)}
              className="h-7 w-7 md:hidden cursor-pointer"
            />
          ) : (
            <IoMenu
              onClick={() => setOpen(!open)}
              className="h-7 w-7 md:hidden cursor-pointer"
            />
          )}
        </div>
      </div>
      <motion.div
        className={`${dropdownBgColor} absolute mt-20 h-56 w-full md:hidden`}
        animate={open ? 'open' : 'closed'}
        initial={{ opacity: 0, y: '-20px' }}
        variants={{
          open: {
            opacity: 1,
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
              <Link href="/journey" onClick={() => setOpen(!open)}>Our Journey</Link>
            </li>
            <li>
              <Link href="/about-us" onClick={() => setOpen(!open)}>About Us</Link>
            </li>
            <li>
              <Link href="/blog" onClick={() => setOpen(!open)}>Blogs</Link>
            </li>
            <li
              className={`${contactBgColor} flex h-10 w-24 items-center justify-center rounded-xl`}
            >
              <Link href="/contact" onClick={() => setOpen(!open)}>Contact</Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Navbar
