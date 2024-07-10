import Block from '@/component/module/block/block'
import Contact from '@/component/module/contact/contact'
import Footer from '@/component/module/footer/footer'
import Hero from '@/component/module/hero/hero'
import Investment from '@/component/module/investment/invest-ment'
import Potential from '@/component/module/potential/potential'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Hero/>
      <Investment/>
      <Potential/>
      <Block/>
      <Contact/>
      <Footer/>
    </main>
  )
}
