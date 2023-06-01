import React from 'react'
import Footer from '../Components/Footer'
import ContactForm from '../Components/contactForm'
import CustomerMap from '../Container/CustomerExpierence/CustomerMap'
import StategyCustomer from '../Container/CustomerExpierence/StategyCustomer'
import { HeroSectionCustomer } from '../Container/CustomerExpierence/HeroSectionCustomer'


function CustomerExpierence() {
  return (
    <div>
      <HeroSectionCustomer/>
      <StategyCustomer/>
      <CustomerMap/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default CustomerExpierence
