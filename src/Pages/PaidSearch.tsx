import React from 'react'
import PaidHero from '../Container/PaidSearch/PaidHero'
import Footer from '../Components/Footer'
import ContactForm from '../Components/contactForm'
import PaidMap from '../Container/PaidSearch/PaidMap'

function PaidSearch() {
  return (
    <div>
      <PaidHero/>
      <PaidMap/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default PaidSearch
