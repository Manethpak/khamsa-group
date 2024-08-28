import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/component/module/hero/navbar'
import Footer from '@/component/module/footer/footer'
import { lato, libre, noto_serif_khmer } from '@/utils/fonts'

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
      <body className={` ${lato} ${libre} ${noto_serif_khmer}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
