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
        url: 'https://media.licdn.com/dms/image/v2/C560BAQFICX72oX0TIg/company-logo_200_200/company-logo_200_200/0/1675677526846/khamsagroup_logo?e=1738800000&v=beta&t=P6e65kyTcs7H8APK9NFfMUF1GnwU0T_Pmy0htDsYPio',
      },
    ],
  },
}

const ContactPage = async () => {
  const contactData = await fetchContact()
  return <ContactSection data={contactData} />
}

export default ContactPage
