import React from 'react'
import './HomePage.css'
import Logo from '../components/logo/Logo'
import HeaderPage from '../components/headerPage/HeaderPage'
import Hero from '../components/hero/Hero'

const HomePage = () => {
  return (
    <div className='homePage'>
      <HeaderPage />
      <Hero />
      <div className='bgGlowPurple'></div>
      <div className='bgGlowBlue'></div>
    </div>
  )
}

export default HomePage