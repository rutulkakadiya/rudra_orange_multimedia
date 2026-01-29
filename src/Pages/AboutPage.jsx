import React from 'react'
import PageHeader from '../Components/CommonComponents/PageHeader'
import AboutSection from '../Components/AboutComponents/AboutSection'
import VisionMissionValues from '../Components/AboutComponents/VisionMissionValues'
import bg from '../assets/HomeImg/bg1.jpg'

function AboutPage() {
  return (
    <div>
     <PageHeader
  title="About"
  highlight="Us"
  currentPage="About"
  subtitle="We craft powerful brand stories through branding, photography & films."
  image={bg}
/>

<AboutSection/>
<VisionMissionValues/>
    </div>
  )
}

export default AboutPage
