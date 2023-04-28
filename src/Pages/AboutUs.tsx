import React, { useEffect } from 'react'
import ContactForm from '../Components/contactForm'
import { Counter } from '../Components/Counter'
import Footer from '../Components/Footer'
import BannerList from '../Container/About US/BannerList'
import BottomBanner from '../Container/About US/BottomBanner'
import MidBanner from '../Container/About US/MidBanner'
import OurLeaders from '../Container/About US/OurLeaders'
import TopBanner from '../Container/About US/TopBanner'
import { Typography } from '@mui/material'

export default function AboutUs() {

useEffect(()=>{
  window.scroll(0,0)
},[])

  return (
    <div>
      <TopBanner />
      <BannerList />
      <MidBanner />
      <Typography fontSize="32px" textAlign="center" width="100%" fontFamily="Poppins-SemiBold" color="#3A3B44" style={{maxWidth:"1100px", margin:"auto"}}>Actions speak louder than words</Typography>
      <Counter />
      <BottomBanner />
      <OurLeaders />
      <ContactForm />
      <Footer />
    </div>
  )
}
