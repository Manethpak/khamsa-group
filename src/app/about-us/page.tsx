import AboutSection from '@/component/module/about-page/about-section'
import ContactSection from '@/component/module/about-page/contact-section'
import OfficeSection from '@/component/module/about-page/office-section'
import TeamsSection from '@/component/module/about-page/teams-section'
import { fetchAbout } from '@/fetcher/about/about-section/fetch-about'
import { fetchOffice } from '@/fetcher/about/office/fetch-office'
import { fetchTeams } from '@/fetcher/about/teams/fetch-teams'
import { getImageUrl } from '@/lib/directus'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'About us',
  description:
    'Khamsa Group of Business (KGB) is a diversified company operating in various, cutting-edge sectors such as biotechnology, nanotechnology, AI, metadata,value chains, knowledge-based economies, scarce resources, renewableenergy, IT and engineering, blockchain, data industries, and cybersecurity.',
  openGraph: {
    images: [getImageUrl('4fe7ce7c-3802-40ca-b53c-e3b991a9d9ba')],
  },
}

const AboutPage = async () => {
  const dataTeam = await fetchTeams()
  const dataOffice = await fetchOffice({ limit: 9 })
  const dataAbout = await fetchAbout()

  return (
    <section>
      <AboutSection about={dataAbout} />
      <TeamsSection team={dataTeam} />
      <OfficeSection office={dataOffice} />
      <ContactSection />
    </section>
  )
}

export default AboutPage
