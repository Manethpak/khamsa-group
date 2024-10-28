import ContactSection from '@/component/module/contact-page/contact-section'
import { fetchContact } from '@/fetcher/contact/fetch-contact'
import React from 'react'

const ContactPage = async () => {
  const contactData = await fetchContact()
  return <ContactSection data={contactData} />
}

export default ContactPage
