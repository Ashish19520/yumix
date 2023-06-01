import React from 'react'
import Footer from '../../Components/Footer'
import ContactForm from '../../Components/contactForm'
import HeroServices from '../../Components/HeroServices'

function MarketingMeasuremnet() {
  const data={
    heading:"Marketing Measurement",
    subHeading:"Make fast, informed decisions to drive your business forward with a detailed digital marketing measurement framework that eliminates data bottlenecks.",
    image:"../images/unsplash_s8HyIEe7lF0.png",
    blackHeading:"Boost your results with advanced marketing measurement.",
    blackSubHeading:"Through our exclusive technology platform, i2pify, and other top-notch solutions, we offer clients a comprehensive perspective on their campaign performance. Our descriptive, predictive, and prescriptive insights in online marketing measurement cover all marketing investments. We empower marketers to enhance customer experiences and achieve favorable business results by delivering exceptional cross-channel reporting and establishing a unified digital marketing measurement framework as the ultimate reference point.",
    strategyHeading:" Strategy",
    box:[
      {
      image:"../images/Image11.png",
      heading:"Cross-Channel Reporting",
      subHeading:"Gain a consolidated perspective of insights from all your digital marketing endeavors to effectively optimize your media expenditure.",
    },
    {
      image:"../images/image15.png",
      heading:"Custom Analysis",
      subHeading:"Navigate the intricate and ever-evolving customer journey to make well-informed decisions regarding media spend, pacing, and creative strategies.",
    },
    {
      image:"../images/USA (1).png",
      heading:"Goal-Oriented Strategies",
      subHeading:"Reach your measurement marketing goals by employing strategies that align technology and processes with your analytics maturity level. ",
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

export default MarketingMeasuremnet
