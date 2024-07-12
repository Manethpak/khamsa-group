import Contact from '@/component/module/contact/contact'
import Footer from '@/component/module/footer/footer'
import Hero from '@/component/module/hero/hero'
import Investment from '@/component/module/investment/investment'
import Potential from '@/component/module/potential/potential'
import Image from 'next/image'
import Blog from './blog/page'


export default function Home() {
  return (
    <main>
      <Hero/>
      <Investment/>
      <Potential/>
      <Blog/>
      <Contact/>
      <Footer/>
    </main>
  )
}
