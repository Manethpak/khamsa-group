import Contact from '@/component/module/contact/contact'
import Hero from '@/component/module/hero/hero'
import Investment from '@/component/module/investment/investment'
import Potential from '@/component/module/potential/potential'
import BlogContent from '@/component/module/blog/blog'


export default function Home() {
  return (
    <main>
      <Hero/>
      <Investment/>
      <Potential/>
      <BlogContent/>
      <Contact/>
    </main>
  )
}
