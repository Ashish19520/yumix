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
  useEffect(() =>{

    if (window.innerWidth >= 768) {
      window.scrollTo(0, 900);
    } else {
      window.scrollTo(0, 700);
    }
  },[])
  return (
    <div>
        <OurServices />
        
        {/* <ServiceWeProvide/> */}
        {/* <ServicesBanner /> */}
        <ComprehensiveServices/>
        <div className='about-content-container'>
          <p className='about-content-display'>
          Furthermore, we specialize in crafting ecommerce websites and applications using platforms such as<b> Magento, Shopify, and BigCommerce. </b> Additionally, our expertise extends to offering comprehensive accounting and bookkeeping services through <b>Quickbooks</b>.<br/>
          ESERVZ is your gateway to a thriving ecommerce future. With a laser-focused approach to marketplace management and a dedication to your brand's growth, we ensure your success across Amazon, Walmart, eBay, and your brand's own website. Join us on this exhilarating journey and watch your ecommerce endeavours soar to unprecedented heights. Contact us today to embark on your path to ecommerce excellence.

          </p>
        </div>
        <ToolsToService/>
        <ContactForm />
        <Footer />
        
    </div>
  )
}


