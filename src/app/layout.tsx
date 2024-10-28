import Navbar from '@/component/global/navbar/navbar'
import FooterContent from '@/component/global/footer/footer-content'
import type { Metadata } from 'next'
import './globals.css'
import {
  libre,
  noto_sans,
  noto_sans_khmer,
  noto_serif_khmer,
  manrope,
} from '@/utils/fonts'
import ScrollToTop from '@/component/ui/scroll-to-top'
import { fetchContact } from '@/fetcher/contact/fetch-contact'

export const metadata: Metadata = {
  title: 'Khamsa Group',
  description: 'Khamsa Group',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const contactData = await fetchContact()

  return (
    <html lang="en" className="!scroll-smooth bg-[#F7F7F7]">
      <body
        className={`${libre} ${noto_serif_khmer} ${noto_sans} ${noto_sans_khmer} ${manrope}`}
      >
        <ScrollToTop />
        <Navbar />
        {children}
        <FooterContent data={contactData} />
      </body>
    </html>
  )
}
