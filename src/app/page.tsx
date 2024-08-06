import ContactSection from '@/component/module/homepage/contact'
import HeroSection from '@/component/module/homepage/hero'
import InvestmentSection from '@/component/module/homepage/investment'
import PotentialSection from '@/component/module/homepage/potential'
import BlogSection from '@/component/module/homepage/blog'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <InvestmentSection />
      <PotentialSection />
      <BlogSection />
      <ContactSection />
    </main>
  )
}
