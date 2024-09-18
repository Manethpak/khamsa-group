import Navbar from '@/component/module/hero/navbar'
import Footer from '@/component/module/footer/footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
