'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'
import { motion, useAnimationControls, useMotionValueEvent, useScroll } from 'framer-motion'
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
      y: '5px',
      transition: { duration: 0.5, type: 'spring', stiffness: 150 },
    }
  }

  // Define animation variants for the dropdown menu
  const dropdownVariants = {
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
  }

  return (
    <motion.div
      initial="hidden"
      animate={containerControls}
      variants={navbarVariants}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="sticky top-0 w-full z-50 -mt-1 flex subtitle flex-col items-center px-5 bg-white"
    >
      {/* Navbar Section */}
      <div className="flex h-20 w-full max-w-screen-2xl items-center justify-between lg:h-20 ">
        <Link href="/" className="flex h-9 items-center gap-2">
          <Image
            src="/images/logo.avif"
            alt="Logo"
            width={250}
            height={250}
            className="h-9 w-9"
          />
          <h1 className="font-bold">Khamsa Group</h1>
        </Link>
        <div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-7 font-semibold text-sm">
              <li>
                <Link href="/journey">Our Journey</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/blog">Blogs</Link>
              </li>
              <li className="flex h-12 w-24 items-center justify-center rounded-md bg-secondPrimary text-white">
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
      {/* Dropdown menu section */}
      <motion.div
        className="absolute mt-20 h-56 w-full md:hidden bg-white"
        animate={open ? 'open' : 'closed'}
        variants={dropdownVariants}
        initial={{ opacity: 0, y: '-20px' }}
      >
        <div className="h-full">
          <ul className="flex flex-col items-center justify-center gap-7 font-semibold">
            <li>
              <Link href="/journey" onClick={() => setOpen(!open)}>
                Our Journey
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
            <li className="flex h-10 w-24 items-center justify-center rounded-xl">
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

