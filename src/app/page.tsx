import { fetchHero } from '@/fetcher/hero/fetch-hero'
import { fetchBlogs } from '@/fetcher/blog/fetch-blog'
import { fetchSuccess } from '@/fetcher/about/success/fetch-success'
import { fetchProject } from '@/fetcher/project/fetch-project'
import HeroSection from '@/component/module/home-page/hero-section'
import OurSuccessSection from '@/component/module/home-page/our-success-section'
import ProjectSection from '@/component/module/home-page/project-section'
import OurJourneySection from '@/component/module/home-page/our-journey-section'
import BlogSection from '@/component/module/home-page/blogs-section'
import { Metadata } from 'next'

export const revalidate = 300

export const metadata: Metadata = {
  title: 'Khamsa Group of Businesses (KGB)',
  description:
    'We are bound to become the leading investment company to establish a connected global community with common values, cultures and shared prosperity.',
  openGraph: {
    images: [
      {
        url: 'https://khamsa.panel.dreamslab.dev/assets/0a88d30d-1ba7-48a7-a03e-5a2de222ba86',
      },
    ],
  },
}

export default async function Home() {
  const heroData = await fetchHero()
  const blogsData = await fetchBlogs({ limit: 5 })
  const projectsData = await fetchProject({ limit: 10 })
  const successData = await fetchSuccess()

  return (
    <div>
      <HeroSection data={heroData} />
      <OurSuccessSection data={successData} />
      <ProjectSection data={projectsData} />
      <OurJourneySection />
      <BlogSection data={blogsData} />
    </div>
  )
}
