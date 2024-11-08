'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AlignJustify, X } from 'lucide-react'
import {
  motion,
  useAnimationControls,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion'
import { Footer } from '@/constants'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [activeLink, setActiveLink] = useState('') // Set "/" as the default active link
  const containerControls = useAnimationControls()
  const dropdownControls = useAnimationControls()
  const { scrollY } = useScroll()

  // Update active link on component mount
  useEffect(() => {
    setActiveLink(window.location.pathname)
  }, [])

  // Listen to scroll event and update hidden state
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 50) {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }
  })

  useEffect(() => {
    if (open) {
      containerControls.start('open')
      dropdownControls.start('open')
    } else if (isHidden) {
      containerControls.start('hidden')
      dropdownControls.start('closed')
    } else {
      containerControls.start('visible')
      dropdownControls.start('closed')
    }
  }, [open, isHidden, containerControls, dropdownControls])

  const navbarVariants = {
    visible: { y: 0 },
    hidden: { y: '-100%' },
    open: {
      y: '0px',
      paddingTop: '5px',
      transition: { duration: 1, type: 'spring', stiffness: 150 },
    },
  }

  const dropdownVariants = {
    open: {
      opacity: 1,
      y: '0px',
      transition: { duration: 0.5, type: 'easeInOut', stiffness: 80 },
    },
    closed: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 150,
        damping: 15,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      animate={containerControls}
      variants={navbarVariants}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="subtitle sticky top-0 z-10 -mt-1 flex w-full flex-col items-center bg-white font-semibold"
    >
      <div className="z-10 -mt-1 flex h-20 w-full max-w-screen-2xl items-center justify-between bg-white px-5 md:px-10 lg:h-20 lg:px-24">
        <Link
          onClick={() => setActiveLink('/')}
          href="/"
          className="flex h-9 items-center gap-2 font-medium"
        >
          <Image
            src="/logo.png"
            alt="Khamsa Group logo"
            width={180}
            height={180}
            className="size-9"
          />
          <h1>Khamsa Group of Businesses</h1>
        </Link>
        <div>
          <div className="hidden md:block">
            <div className="flex items-center md:gap-4 lg:gap-7">
              {Footer.map((data, index) => (
                <div key={index}>
                  <Link
                    href={data.url}
                    className={cn(
                      activeLink === data.url
                        ? 'flex items-center justify-center rounded bg-secondPrimary px-3 py-2 text-white'
                        : ''
                    )}
                    onClick={() => setActiveLink(data.url)}
                  >
                    {data.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {open ? (
            <X
              onClick={() => setOpen(!open)}
              className="h-7 w-7 cursor-pointer md:hidden"
            />
          ) : (
            <AlignJustify
              onClick={() => setOpen(!open)}
              className="h-7 w-7 cursor-pointer md:hidden"
            />
          )}
        </div>
      </div>
      <motion.div
        className="absolute top-0 h-auto w-full bg-white pb-1 pt-20 md:hidden"
        animate={open ? 'open' : 'closed'}
        variants={dropdownVariants}
        initial={{ opacity: 0, y: '-20px' }}
      >
        <div className="h-full">
          <div className="flex flex-col items-center justify-center gap-6 py-5">
            {Footer.map((data, index) => (
              <div key={index}>
                <Link
                  onClick={() => {
                    setOpen(!open)
                    setActiveLink(data.url)
                  }}
                  href={data.url}
                  className={cn(
                    activeLink === data.url
                      ? 'flex items-center justify-center rounded bg-secondPrimary px-3 py-2 text-white'
                      : '',
                    ''
                  )}
                >
                  {data.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Navbar
