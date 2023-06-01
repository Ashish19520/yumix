import React from 'react'
import Footer from '../../Components/Footer'
import ContactForm from '../../Components/contactForm'
import HeroServices from '../../Components/HeroServices'

function ContentMarketingCustomer() {
  const data={
    heading:"Content Marketing",
    subHeading:"Engage and delight users with customized, traffic-driving content that supports your business goals.",
    image:"../images/image17.png",
    blackHeading:"Irresistible Content: Captivating and Converting at Its Best",
    blackSubHeading:"As a content marketing agency, our focus goes beyond meeting customers' needs. We strive to create content that inspires action. Our team, consisting of innovative thinkers, designers, and writers, harnesses data-driven insights to develop concepts, strategies, campaigns, and remarkable digital experiences that drive conversions.",
    strategyHeading:" Strategy",
    box:[
      {
      image:"../images/USA.png",
      heading:"Business-First Frameworks",
      subHeading:"Create a worthwhile investment in a content framework that focuses on achieving your business objectives.",
    },
    {
      image:"../images/image15.png",
      heading:"Informed & Elevated Creation",
      subHeading:"Utilise data-driven content that effectively communicates with your target audiences and boosts audience engagement.",
    },
    {
      image:"../images/second.png",
      heading:"Data-Driven Optimization",
      subHeading:"Enhance existing content through data-driven reimagining to amplify your brand's impact.",
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

export default ContentMarketingCustomer
