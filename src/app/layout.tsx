import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/component/module/hero/navbar'
import Footer from '@/component/module/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Khamsa Group',
  description: 'Khamsa Group',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>
        <Navbar/>
          {children}
        <Footer/>  
      </body>
    </html>
  )
}
