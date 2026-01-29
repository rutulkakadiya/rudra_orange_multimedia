import React from 'react'
import PageHeader from '../Components/CommonComponents/PageHeader'
import OurServices from '../Components/ServicesComponent/OurServices'
import bg from '../assets/HomeImg/bg1.jpg'

function ServicePage() {
  return (
    <div>
      <PageHeader
  title="Our"
  highlight="Services"
  currentPage="Services"
  subtitle="We craft powerful brand stories through branding, photography & films."
  image={bg}
/>
<OurServices/>
    </div>
  )
}

export default ServicePage
