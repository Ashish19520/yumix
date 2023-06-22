import React from 'react'
import Footer from '../../Components/Footer'
import ContactForm from '../../Components/contactForm'
import HeroServices from '../../Components/HeroServices'

function PaidSearch() {
  const data={
    heading:"Paid Search (PPC) Marketing Services",
    subHeading:"Maximize results and your budget with a unique, granular approach to delivering the most relevant experience to your customers.",
    image:"../images/laptop.png",
    blackHeading:"Capture And Convert Demand Through Paid Search, With A PPC Agency",
    blackSubHeading:"Eservz started with paid search and has spent more than a decade using a successful strategy to obtain high returns and conversions. Our PPC services target customers at every stage of their journey by optimizing budget allocation and delivering personalized experiences based on data. Our customized approach uses different delivery methods to maximize your budget.",
    strategyHeading:"Our Paid Search Strategy",
    box:[
      {
      image:"../images/first.png",
      heading:"Granularity",
      subHeading:"Find and activate on opportunities with the greatest impact potential through a highly granular, intent-driven account structure.",
    },
    {
      image:"../images/second.png",
      heading:"Team + Technology",
      subHeading:"Scale your program and achieve superior results with our blended, people-powered approach to automation.",
    },
    {
      image:"../images/Group 38597.png",
      heading:"Closed-Loop Strategies",
      subHeading:"Drive ROI, not just conversions, by tying offline data to online keyword performance.",
    },
    ]
  }
  return (
    <div>
      <HeroServices data={data}/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default PaidSearch
