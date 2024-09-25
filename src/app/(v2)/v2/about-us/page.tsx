import AboutSection from '@/component-v2/module/about-page/about-section/about-section'
import Contacts from '@/component-v2/module/about-page/contact/contact'
import Office from '@/component-v2/module/about-page/office/office'
import Teams from '@/component-v2/module/about-page/team/teams'
import { fetchOffice } from '@/fetcher/about/office/fetch-office'
import { fetchTeams } from '@/fetcher/about/teams/fetch-teams'
import React from 'react'

const AboutPage = async () => {
  const dataTeam = await fetchTeams()
  const dataOffice = await fetchOffice({ limit: 9 })

  return (
    <section>
      <AboutSection/>
      <Teams team={dataTeam}/>
      <Office office={dataOffice}/>
      <Contacts/>
    </section>
  )
}

export default AboutPage