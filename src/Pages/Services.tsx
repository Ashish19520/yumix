import React from 'react'
import { OurServices } from '../Container/OurServices/OurServices'
import { ServiceWeProvide } from '../Container/OurServices/ServiceWeProvide'
import { ServicesBanner } from '../Container/OurServices/ServicesBanner'
import ContactForm from '../Components/contactForm'
import Footer from '../Components/Footer'

export const Services = () => {
  return (
    <div>
        <OurServices />
        <ServiceWeProvide />
        <ServicesBanner />
        {/* <ContactForm />
        <Footer /> */}
        
    </div>
  )
}


