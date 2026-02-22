import React from 'react'
import './HomePage.css'
import Logo from '../components/logo/Logo'
import HeaderPage from '../components/headerPage/HeaderPage'
import Hero from '../components/hero/Hero'
import RangeTecnologies from '../components/rangeTecnologies/RangeTecnologies'
import ExperienceSection from '../components/experienceSection/ExperienceSection'
import SelectedWorksSection from '../components/selectedWorks/SelectedWorksSection'
import ContactSection from '../components/contactSection/ContactSection'

const HomePage = () => {
  return (
    <div className='homePage'>
      <HeaderPage />
      <Hero />
      <RangeTecnologies />
      <ExperienceSection />
      <SelectedWorksSection />
      <ContactSection />
      <div className='bgGlowPurple'></div>
      <div className='bgGlowBlue'></div>
    </div>
  )
}

export default HomePage