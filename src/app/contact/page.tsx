import ContactSection from '@/component/module/contact-page/contact-section'
import { fetchContact } from '@/fetcher/contact/fetch-contact'
import { getImageUrl } from '@/lib/directus'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `We're always here to help. Contact us if you are interested in our service. Let's cooperate and invest in the future of Cambodia.`,
  openGraph: {
    images: [getImageUrl('4acd7ab9-1666-4c9d-a8e7-bd5ecd68c4b5')],
  },
}

const ContactPage = async () => {
  const contactData = await fetchContact()
  return <ContactSection data={contactData} />
}

export default ContactPage
