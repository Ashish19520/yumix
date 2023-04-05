import React from 'react'
import ContactForm from '../Components/contactForm'
import { Counter } from '../Components/Counter'
import Footer from '../Components/Footer'
import BottomBanner from '../Container/Homepage/About US/BottomBanner'
import MidBanner from '../Container/Homepage/About US/MidBanner'
import OurLeaders from '../Container/Homepage/About US/OurLeaders'
import TopBanner from '../Container/Homepage/About US/TopBanner'

export default function AboutUs() {
  return (
    <div>
      <TopBanner />
      <MidBanner />
      <Counter />
      
      <BottomBanner />
      <OurLeaders />
      <ContactForm />
      <Footer />
    </div>
  )
}
