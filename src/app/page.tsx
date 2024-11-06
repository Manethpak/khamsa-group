import { fetchHero } from '@/fetcher/hero/fetch-hero'
import { fetchBlogs } from '@/fetcher/blog/fetch-blog'
import { fetchSuccess } from '@/fetcher/about/success/fetch-success'
import { fetchProject } from '@/fetcher/project/fetch-project'
import HeroSection from '@/component/module/home-page/hero-section'
import OurSuccessSection from '@/component/module/home-page/our-success-section'
import ProjectSection from '@/component/module/home-page/project-section'
import OurJourneySection from '@/component/module/home-page/our-journey-section'
import BlogSection from '@/component/module/home-page/blogs-section'
import InvestmentSection from '@/component/module/home-page/investment-section'
import { fetchCategory } from '@/fetcher/category/fetch-category'
export const revalidate = 300

export default async function Home() {
  const heroData = await fetchHero()
  const blogsData = await fetchBlogs({ limit: 5 })
  const projectsData = await fetchProject({ limit: 10 })
  const categoryData = await fetchCategory()
  const successData = await fetchSuccess()

  return (
    <div>
      <HeroSection data={heroData} />
      <OurSuccessSection data={successData} />
      <ProjectSection data={projectsData} />
      <InvestmentSection data={categoryData} />
      <OurJourneySection />
      <BlogSection data={blogsData} />
    </div>
  )
}
