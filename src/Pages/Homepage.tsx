import React from 'react'
import { Counter } from '../Components/Counter'
import { Hero } from '../Components/Hero'
import { HomepageScroll } from '../Container/Homepage/HomepageScroll'
import { MidWhoBanner } from '../Container/Homepage/MidWhoBanner'
import { ToolBanner } from '../Container/Homepage/ToolBanner'
import { OurApproach } from '../Container/Homepage/OurApproach'
import { Certificate } from '../Container/Homepage/Certificate'
import { Tool } from '../Container/Homepage/Tool'
import { People } from '../Container/Homepage/People'
import { WhyUs } from '../Container/Homepage/WhyUs'
import Footer from '../Components/Footer'
import ContactForm from '../Components/contactForm'

export const Homepage = () => {
  return (
    <div>
   <Hero />
   {/* <HomepageScroll /> */}
   <MidWhoBanner />
   <OurApproach />
   <Certificate />
   <Counter />
   <Tool />
   <People />
   <WhyUs />
   <ContactForm />
   <Footer />

   </div>
  )
}
