import React from 'react'
import PageHeader from '../Components/CommonComponents/PageHeader'
import ContactSection from '../Components/ContactComponent/ContactSection'
import bg from '../assets/HomeImg/bg1.jpg'

function ContactPage() {
  return (
    <div>
      <PageHeader
  title="Contact"
  highlight="Us"
  currentPage="Contact"
  subtitle="We craft powerful brand stories through branding, photography & films."
  image={bg}
/>
<ContactSection/>
    </div>
  )
}

export default ContactPage
