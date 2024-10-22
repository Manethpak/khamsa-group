import AboutSection from '@/component/module/about-page/about-section'
import ContactSection from '@/component/module/about-page/contact-section'
import OfficeSection from '@/component/module/about-page/office-section'
import TeamsSection from '@/component/module/about-page/teams-section'
import ValueSection from '@/component/module/about-page/value-section'
import { fetchOffice } from '@/fetcher/about/office/fetch-office'
import { fetchTeams } from '@/fetcher/about/teams/fetch-teams'
import React from 'react'

const AboutPage = async () => {
  const dataTeam = await fetchTeams()
  const dataOffice = await fetchOffice({ limit: 9 })

  return (
    <section>
      <AboutSection />
      <ValueSection />
      <TeamsSection team={dataTeam} />
      <OfficeSection office={dataOffice} />
      <ContactSection />
    </section>
  )
}

export default AboutPage
