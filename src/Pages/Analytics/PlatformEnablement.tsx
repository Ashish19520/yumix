import React from 'react'
import Footer from '../../Components/Footer'
import ContactForm from '../../Components/contactForm'
import HeroServices from '../../Components/HeroServices'

function PlatformEnablement() {
  const data={
    heading:"Platform Enablement",
    subHeading:"Crafting and deploying a tailored assortment of tools and technologies to address your distinct data, measurement, and business requirements.",
    image:"../images/unsplash_H4ClLKv3pqw.png",
    blackHeading:"Lay a successful foundation through platform enablement.",
    blackSubHeading:"At the heart of analytics, our platform enablement specialists form a specialized, data-oriented team dedicated to ensuring your triumph. Our range of services encompasses the implementation of analytics platforms, marketing automation assistance, and extensive platform training.",
    strategyHeading:" Strategy",
    box:[
      {
      image:"../images/second.png",
      heading:"Customer Experience Optimization",
      subHeading:"Uncover investment potential through holistic customer understanding and effective measurement frameworks.",
    },
    {
      image:"../images/USA.png",
      heading:"Solution Design",
      subHeading:"Address gaps and seize opportunities with a robust assessment approach that aligns your current business position with your desired goals.",
    },
    {
      image:"../images/image11.png",
      heading:"Technology Integration",
      subHeading:"Create customized setups and implementations of your marketing technology stack that go beyond your desired goals.",
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

export default PlatformEnablement
