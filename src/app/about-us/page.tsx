import AboutSection from '@/component/module/about-page/about-section'
import ContactSection from '@/component/module/about-page/contact-section'
import OfficeSection from '@/component/module/about-page/office-section'
import TeamsSection from '@/component/module/about-page/teams-section'
import { fetchAbout } from '@/fetcher/about/about-section/fetch-about'
import { fetchOffice } from '@/fetcher/about/office/fetch-office'
import { fetchTeams } from '@/fetcher/about/teams/fetch-teams'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'About us',
  description:
    'Khamsa Group of Business (KGB) is a diversified company operating in various, cutting-edge sectors such as biotechnology, nanotechnology, AI, metadata,value chains, knowledge-based economies, scarce resources, renewableenergy, IT and engineering, blockchain, data industries, and cybersecurity.',
  openGraph: {
    images: [
      {
        url: 'http://localhost:3000/_next/image?url=https%3A%2F%2Fkhamsa.panel.dreamslab.dev%2Fassets%2F01192cfd-dab0-495c-b01d-dde16207749e&w=3840&q=75',
      },
    ],
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
