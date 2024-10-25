import AboutSection from '@/component/module/about-page/about-section'
import ContactSection from '@/component/module/about-page/contact-section'
import OfficeSection from '@/component/module/about-page/office-section'
import TeamsSection from '@/component/module/about-page/teams-section'
import { fetchAbout } from '@/fetcher/about/about-section/fetch-about'
import { fetchOffice } from '@/fetcher/about/office/fetch-office'
import { fetchTeams } from '@/fetcher/about/teams/fetch-teams'
import React from 'react'

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
