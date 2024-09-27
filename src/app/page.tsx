import HomeSection from '@/component/module/homepage/home-section/home'
import OurSuccess from '@/component/module/homepage/stats/our-success'
import Investment from '@/component/module/homepage/investment-section/investment'
import OurJourney from '@/component/module/homepage/our-journey-section/our-journey'
import BlogSection from '@/component/module/homepage/blogs-section/blogs'
import { fetchHero } from '@/fetcher/hero/fetch-hero'
import { fetchBlogs } from '@/fetcher/blog/fetch-blog'
import { fetchInvestment } from '@/fetcher/investment/fetch-investment'
import { fetchSuccess } from '@/fetcher/about/success/fetch-success'
export const revalidate = 300

export default async function Home() {
  const heroData = await fetchHero()
  const blogs = await fetchBlogs({ limit: 4 })
  const investmentData = await fetchInvestment()
  const successData = await fetchSuccess()

  return (
    <div>
      <HomeSection data={heroData} />
      <OurSuccess data={successData} />
      <Investment data={investmentData} />
      <OurJourney />
      <BlogSection />
    </div>
  )
}
