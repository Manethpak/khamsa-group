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

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Khamsa Group of Businesses (KGB)',
    description: `We are bound to become the leading investment company to establish a connected global community with common values, cultures and shared prosperity.

    We desire to be recognized as a largest high-net-worth-individual’s asset management corporation in Asia by 2050.

    We focus on industries (a) Value-chain-based industry, (b) meta-data-based industry, (c) AI-based industry, (d) knowledge-based economy, (e) scarcity resources industry, (f) renewable energy industry, (g) information technology and engineering, (h) internet of values. `,
    openGraph: {
      images: [
        {
          url: 'https://media.licdn.com/dms/image/v2/C560BAQFICX72oX0TIg/company-logo_200_200/company-logo_200_200/0/1675677526846/khamsagroup_logo?e=1738800000&v=beta&t=P6e65kyTcs7H8APK9NFfMUF1GnwU0T_Pmy0htDsYPio',
        },
      ],
    },
  }
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
