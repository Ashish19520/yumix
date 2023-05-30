import React from 'react'
import Footer from '../Components/Footer'
import ContactForm from '../Components/contactForm'
import AmazonHero from '../Container/Amazon/AmazonHero'
import AmazonMap from '../Container/Amazon/AmazonMap'

function Amazon() {
  return (
    <div>
      <AmazonHero/>
      <AmazonMap/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Amazon
