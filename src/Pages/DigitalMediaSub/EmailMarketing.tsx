import React from 'react'
import Footer from '../../Components/Footer'
import ContactForm from '../../Components/contactForm'
import HeroServices from '../../Components/HeroServices'

function EmailMarketing() {
  const data={
    heading:"Email Marketing",
    subHeading:"Foster brand engagement and optimize ROI by delivering tailored messages at the most opportune moments.",
    image:"../images/Image5.png",
    blackHeading:"Merge the Power of Data and Creativity in Email Marketing",
    blackSubHeading:"Unleash the combined potential of data-driven insights and creative expertise in your email marketing campaigns. Our solutions encompass strategic planning, creative design, platform selection, and performance analysis, all aimed at integrating and expanding email marketing within your overall strategy. Experience enhanced customer engagement with our comprehensive approach.",
    strategyHeading:"Our Email Marketing Strategy",
    box:[
      {
      image:"../images/Image14.png",
      heading:"Customized Creative",
      subHeading:"Craft a personalized and seamless email journey for your customers, delivering tailored messages to ensure a delightful user experience.",
    },
    {
      image:"../images/image11.png",
      heading:"Select Platform & Implement",
      subHeading:"Discover the perfect platform that meets your unique needs and seamlessly integrates with your existing toolkit.",
    },
    {
      image:"../images/second.png",
      heading:"Campaign Execution",
      subHeading:"Enhance email campaign performance with optimized content, customized measurement, and platform integration.",
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

export default EmailMarketing
