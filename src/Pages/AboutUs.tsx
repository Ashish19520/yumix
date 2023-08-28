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
import styled from 'styled-components'
import  Works  from '../Components/Works'
import AboutBottomBanner from '../Container/About US/AboutBottomBanner'
import Team from '../Container/About US/Team'

export default function AboutUs() {

useEffect(()=>{
  window.scroll(0,0)
},[])
  const data={
    heading:"We're Dedicated to Achieving Results That Propel Your Ecommerce Success",
    para:"Our primary emphasis remains on achieving tangible outcomes. Through our comprehensive multi-channel ecommerce service encompassing platforms such as Amazon, Walmart, eBay, and your custom website, you'll be equipped with a dedicated team of experts committed to fostering the growth necessary for triumphing in the dynamic and competitive online market."
  }
  const data2=[{
    src:"../images/Group 162947.png",
    head:"Account Managers",
    para:"Account Managers are the primary points of contact between the team and the brands or retailers they work with. They handle client relationships, address inquiries, provide updates, and ensure effective communication throughout the partnership."
},
{
    src:"../images/Group 162946.png",
    head:"Launch Strategy Experts",
    para:"Launch Strategy Experts develop comprehensive plans for launching new products or brands on online marketplaces. They outline the necessary steps, from product listing optimisation to marketing campaigns, to generate initial sales momentum and visibility."
},
{
    src:"../images/Group 162948.png",
    head:"Catalog Managers",
    para:"Catalog Managers are the primary points of contact between the team and the brands or retailers they work with. They handle client relationships, address inquiries, provide updates, and ensure effective communication throughout the partnership."
},
{
    src:"../images/Group 162949.png",
    head:"Category Managers",
    para:"Category Managers focus on specific product categories and are responsible for optimizing product assortments, pricing, and promotions within those categories. They help ensure that the right products are listed in the right categories, leading to increased visibility and sales."


},
{
    src:"../images/Group 162951.png",
    head:"Creative Designers",
    para:"Creative Designers play a crucial role in creating visually appealing and engaging assets for product listings, advertising campaigns, and branding materials. Their designs help capture attention, communicate brand messages, and enhance the overall customer experience."
},
{
    src:"../images/Group 162950.png",
    head:"PPC Advertisement Experts",
    para:"PPC Experts specialize in managing pay-per-click advertising campaigns on platforms like Amazon, Walmart, eBay, and Google. They conduct keyword research, optimize ad copy, monitor performance, and make data-driven adjustments to maximize ad ROI and drive sales."
   
},
{
    src:"../images/Group 162952.png",
    head:"Ratings and Reviews Managers",
    para:"Ratings and Reviews Managers play a crucial role in influencing customer purchasing decisions. They focus on managing and improving the overall review profile of products by actively seeking positive reviews, addressing customer concerns, and managing feedback effectively."    }
]
const content={
  heading:"Our Team",
  para:"Our team consists of various experts and professionals having years of experience and who possess a deep understanding of e-commerce operations, trends, and strategies. They can provide valuable insights and guidance on overall e-commerce strategies, marketplace optimization, and industry best practices",
  para2:""
}
  return (
    <div >
      <TopBanner/>
      <BannerList />
      <Team data={data2} content={content}/>
      <MidBanner />
      <TypoWrapper>
      <Typography fontSize="32px" textAlign="center" width="100%" fontFamily="Poppins-SemiBold" color="#3A3B44" style={{maxWidth:"1100px", margin:"auto"}} className='about-typo'>Actions speak louder than words</Typography>
      </TypoWrapper>
      <Counter />
      <BottomBanner />
      {/* <OurLeaders /> */}
      
      <TypoWrapper>
      <Typography fontSize="32px" textAlign="center" width="100%" fontFamily="Poppins-SemiBold" color="#3A3B44" style={{maxWidth:"1100px", margin:"auto"}} className='about-typo'>Collaborative Ventures We've Engaged In</Typography>
      </TypoWrapper>
      
       <Works/>
       <AboutBottomBanner data={data}/>
      <ContactForm />
      
      <Footer />
    </div>
  )
}

const TypoWrapper=styled.div`
  margin: auto;

  .about-typo{
    font-size:32px; 
    text-align:center;
     width:100%;
     
    font-family:Poppins-SemiBold;
    color:#3A3B44;

    @media(max-width:600px){
      font-size:16px;
    }
  }

`
