import AboutSection from '@/component/module/about-page/about-section/about-section'
import Contacts from '@/component/module/about-page/contact/contact'
import Office from '@/component/module/about-page/office/office'
import Teams from '@/component/module/about-page/team/teams'
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