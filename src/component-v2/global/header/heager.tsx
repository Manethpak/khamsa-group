'use client'
import { useAnimation, useInView, motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import Navbar from '../navbar/navbar'
import FooterContent from '../footer/footer-content'

interface Props {
  children: React.ReactNode
  className?: string
}

export const Header: React.FC<Props> = ({ children, className, }) => {

  return (
    <div className={className}>
      <Navbar/>
      {children}
      <FooterContent/>
    </div>
  )
}
