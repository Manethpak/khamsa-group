import './globals.css'
import Navbar from '@/component-v2/global/navbar/navbar'
import FooterContent from '@/component-v2/global/footer/footer-content'


export default function v2Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
        <Navbar/>
        {children}
        <FooterContent/>
      </>
  )
}
