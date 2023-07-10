import React from 'react'
import Footer from '../../Components/Footer'
import ContactForm from '../../Components/contactForm'
import HeroServices from '../../Components/HeroServices'

function AdvancedAnalytics() {
  const data={
    heading:"Advanced Analytics",
    subHeading:"Gain comprehensive understanding to optimize your marketing budget with our integrated analytic methodology, allowing you to make smarter decisions with each dollar spent.",
    image:"../images/unsplash_eveI7MOcSmw.png",
    blackHeading:"Turn Insights into Action",
    blackSubHeading:"Our advanced analytics solutions combine statistics, predictive analytics, customer modeling, and industry data to drive your organization's strategy. Our team evaluates your business data, including customers, competitors, and industry trends. We provide historical and future performance insights to help you allocate resources effectively and achieve your goals.",
    strategyHeading:" Strategy",
    box:[
      {
      image:"../images/Group 38596.png",
      heading:"Utilize Predictive Analytics",
      subHeading:"Enhance budget allocation and boost conversions through predictive analysis of campaign performance and customer behavior.",
    },
    {
      image:"../images/second.png",
      heading:"Create Persona Segmentations",
      subHeading:"Gain insights into your customers' demographics, behaviors, and conversion probabilities, enabling you to tailor your messaging effectively.",
    },
    {
      image:"../images/USA (1).png",
      heading:"Customer Lifetime Value Analysis",
      subHeading:"Identify potential high-value customers and employ lead scoring for precise targeting and optimized spending.",
    },
    ]
  }
  return (
    <div>
      <HeroServices data={data}/>
      {/* <AmazonMap/> */}
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default AdvancedAnalytics
