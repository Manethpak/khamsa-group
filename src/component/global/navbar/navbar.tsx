'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AlignJustify, X } from 'lucide-react'
import {
  motion,
  useAnimationControls,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion'
import Link from 'next/link'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const containerControls = useAnimationControls()
  const dropdownControls = useAnimationControls()
  const { scrollY } = useScroll()

  // Listen to scroll event and update hidden state
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 50) {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }
  })

  // Update navbar controls based on open state and hidden state
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

  // Define animation variants for the navbar
  const navbarVariants = {
    visible: { y: 0 },
    hidden: { y: '-100%' },
    open: {
      y: '0px',
      paddingTop: '5px',
      transition: { duration: 1, type: 'spring', stiffness: 150 },
    },
  }

  // Define animation variants for the dropdown menu
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
      className="subtitle z-10 sticky top-0 -mt-1 flex w-full flex-col items-center bg-white font-semibold"
    >
      {/* Navbar Section */}
      <div className="z-10 -mt-1 flex h-20 w-full max-w-screen-2xl items-center justify-between bg-white px-5 md:px-10 lg:h-20 lg:px-24">
        <Link href="/" className="flex h-9 items-center gap-2 font-medium">
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
            <ul className="flex items-center md:gap-4 lg:gap-7">
              <li>
                <Link href="/company">Company</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/blog">Blogs</Link>
              </li>
              <li className="flex h-12 w-24 items-center justify-center rounded bg-secondPrimary text-white">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
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
      {/* Dropdown menu section */}
      <motion.div
        className="absolute top-0 h-auto w-full bg-white pb-1 pt-20 md:hidden"
        animate={open ? 'open' : 'closed'}
        variants={dropdownVariants}
        initial={{ opacity: 0, y: '-20px' }}
      >
        <div className="h-full">
          <ul className="flex flex-col items-center justify-center gap-6">
            <li>
              <Link href="/company" onClick={() => setOpen(!open)}>
                Company
              </Link>
            </li>
            <li>
              <Link href="/projects" onClick={() => setOpen(!open)}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/about-us" onClick={() => setOpen(!open)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={() => setOpen(!open)}>
                Blogs
              </Link>
            </li>
            <li className="flex w-24 items-center justify-center rounded-xl pb-5">
              <Link href="/contact" onClick={() => setOpen(!open)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Navbar
