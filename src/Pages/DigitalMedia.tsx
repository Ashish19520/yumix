import React from 'react'
import Footer from '../Components/Footer'
import { HeroSectionDigital } from '../Container/DigitalMedia/HeroSectionDigital'
import ContactForm from '../Components/contactForm'
import Stategy from '../Container/DigitalMedia/Stategy'
import DigitalMap from '../Container/DigitalMedia/DigitalMap'

function DigitalMedia() {
  return (
    <div>
      <HeroSectionDigital/>
      <Stategy/>
      <DigitalMap/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default DigitalMedia
