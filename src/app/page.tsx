import ContactSection from '@/component/module/homepage/contact'
import HeroSection from '@/component/module/homepage/hero'
import InvestmentSection from '@/component/module/homepage/investment'
import PotentialSection from '@/component/module/homepage/potential'
import BlogSection from '@/component/module/homepage/blog'
import { fetchHero } from '@/fetcher/hero/fetch-hero'
import { fetchBlogs } from '@/fetcher/blog/fetch-blog'
import { fetchInvestment } from '@/fetcher/investment/fetch-investment'

export default async function Home() {
  const heroData = await fetchHero()
  const blogs = await fetchBlogs({ limit: 4 })
  const investmentData = await fetchInvestment()

  return (
    <main>
      <HeroSection data={heroData} />
      <InvestmentSection data={investmentData}/>
      <PotentialSection />
      <BlogSection data={blogs} />
      <ContactSection />
    </main>
  )
}
