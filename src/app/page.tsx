import ContactSection from '@/component/module/homepage/contact'
import HeroSection from '@/component/module/homepage/hero'
import InvestmentSection from '@/component/module/homepage/investment'
import PotentialSection from '@/component/module/homepage/potential'
import BlogSection from '@/component/module/homepage/blog'
import { fetchHero } from '@/hooks/use-hero'

export default async function Home() {
  const heroData = await fetchHero()

  return (
    <main>
      <HeroSection data={heroData} />
      <InvestmentSection />
      <PotentialSection />
      <BlogSection />
      <ContactSection />
    </main>
  )
}
