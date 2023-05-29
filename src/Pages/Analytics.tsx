import React from 'react'
import Footer from '../Components/Footer'
import ContactForm from '../Components/contactForm'
import { HeroSectionAnalytics } from '../Container/Analytics/HeroSectionAnalytics'
import Strategy from '../Container/Analytics/Strategy'
import AnalyticsMap from '../Container/Analytics/AnalyticsMap'

function Analytics() {
  return (
    <div>
        <HeroSectionAnalytics/>
        <Strategy/>
        <AnalyticsMap/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default Analytics
