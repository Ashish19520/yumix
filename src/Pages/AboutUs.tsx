import React from 'react'
import ContactForm from '../Components/contactForm'
import { Counter } from '../Components/Counter'
import Footer from '../Components/Footer'
import BannerList from '../Container/About US/BannerList'
import BottomBanner from '../Container/About US/BottomBanner'
import MidBanner from '../Container/About US/MidBanner'
import OurLeaders from '../Container/About US/OurLeaders'
import TopBanner from '../Container/About US/TopBanner'

export default function AboutUs() {
  return (
    <div>
      <TopBanner />
      <BannerList />
      <MidBanner />
      <Counter />
      
      <BottomBanner />
      <OurLeaders />
      <ContactForm />
      <Footer />
    </div>
  )
}
