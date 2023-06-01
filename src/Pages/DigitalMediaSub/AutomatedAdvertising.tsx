import React from 'react'
import Footer from '../../Components/Footer'
import ContactForm from '../../Components/contactForm'
import HeroServices from '../../Components/HeroServices'

function AutomatedAdvertising() {
  const data={
    heading:"Automated Advertising",
    subHeading:"Engage customers at every stage of the funnel with personalized automated advertising strategies, reaching them wherever they are.",
    image:"../images/image6.png",
    blackHeading:"Powerful Automated Advertising: Reach, Influence, and Convert Your Customers",
    blackSubHeading:"As a leading automated advertising agency, we deliver consistent brand experiences throughout the customer journey. Our expert team partners with advanced automated buying technologies to execute effective digital media campaigns. Whether you seek to raise awareness, acquire customers, or drive in-store sales, we optimize your ad spend, reach valuable audiences, and deliver impactful ad experiences.",
    strategyHeading:"Our Automated Advertising Strategy",
    box:[
      {
      image:"../images/second.png",
      heading:"Full-funnel & Audience-first",
      subHeading:"Attract, engage, and convert your target audience with tailored experiences across the entire customer journey.",
    },
    {
      image:"../images/image11.png",
      heading:"Granularity",
      subHeading:"Scale up campaign volume to gain valuable insights into strategies that drive results, and continue leveraging the successful approach.",
    },
    {
      image:"../images/four.png",
      heading:"Fraud Monitoring & Prevention",
      subHeading:"Mitigate deceptive inventory across diverse channels and empower your team to devise internal strategies for fraud prevention.",
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

export default AutomatedAdvertising
