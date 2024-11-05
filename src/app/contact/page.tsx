import ContactSection from '@/component/module/contact-page/contact-section'
import { fetchContact } from '@/fetcher/contact/fetch-contact'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `We're always here to help. Contact us if you are interested in our service. Let's cooperate and invest in the future of Cambodia.`,
  openGraph: {
    images: [
      {
        url: 'https://khamsa.panel.dreamslab.dev/assets/0a88d30d-1ba7-48a7-a03e-5a2de222ba86',
      },
    ],
  },
}

const ContactPage = async () => {
  const contactData = await fetchContact()
  return <ContactSection data={contactData} />
}

export default ContactPage
