import React from 'react'
import { useEffect } from 'react'
import { OurServices } from '../Container/OurServices/OurServices'
import { ServiceWeProvide } from '../Container/OurServices/ServiceWeProvide'
import { ServicesBanner } from '../Container/OurServices/ServicesBanner'
import ContactForm from '../Components/contactForm'
import Footer from '../Components/Footer'
import ToolsToService from '../Components/ToolsToService'
import ComprehensiveServices from '../Container/OurServices/ComprehensiveServices'
import { Navigate } from 'react-router-dom'

export const Services = () => {

  return (
    <div>
        <OurServices />
        
        {/* <ServiceWeProvide/> */}
        {/* <ServicesBanner /> */}
        <ComprehensiveServices/>
        <div className='about-content-container'>
          <h2>Ready to Transform Your Business?
          </h2>
          <p className='about-content-display' style={{textAlign:"left"}}>
          {/* Furthermore, we specialize in crafting e-Commerce websites and applications using platforms such as<b> Magento, Shopify, and BigCommerce. </b><br/><br/> Additionally, our expertise extends to offering comprehensive accounting and bookkeeping services through <b>Quickbooks</b>.<br/><br/>
          ESERVZ is your gateway to a thriving e-Commerce future. With a laser-focused approach to marketplace management and a dedication to your brand's growth, we ensure your success across Amazon, Walmart, eBay, and your brand's own website. Join us on this exhilarating journey and watch your e-Commerce endeavours soar to unprecedented heights. Contact us today to embark on your path to e-Commerce excellence. */}
Contact us today to learn more about our services and how we can help your business succeed in the digital age.

          </p>
        </div>
        <ToolsToService/>
        <ContactForm />
        <Footer />
        
    </div>
  )
}


