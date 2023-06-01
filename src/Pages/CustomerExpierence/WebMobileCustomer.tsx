import React from 'react'
import Footer from '../../Components/Footer'
import ContactForm from '../../Components/contactForm'
import HeroServices from '../../Components/HeroServices'

function WebMobileCustomer() {
  const data={
    heading:"Mobile & Web Development",
    subHeading:"Upgrade to a best-in-class website built to drive conversions, spotlight your brand in the best light, and optimize performance.",
    image:"../images/image18.png",
    blackHeading:"Crafted to Perfection: Exceptional Web Design Tailored for You",
    blackSubHeading:"Our team stays attuned to customer behavior and embraces cutting-edge technology to create personalized web and mobile solutions that perfectly fit your requirements. Whether it's on desktop or mobile, we ensure delightful digital experiences for your customers across all platforms. As a comprehensive development firm, we handle every aspect of the process, saving you time and money while providing complete transparency at each step.",
    strategyHeading:" Strategy",
    box:[
      {
      image:"../images/USA.png",
      heading:"Goal-Oriented Landing Pages",
      subHeading:"Take charge of your media traffic using lead-capturing landing pages specifically designed to drive conversions.",
    },
    {
      image:"../images/image15.png",
      heading:"Integrated Redesign & Development",
      subHeading:"Develop innovative concepts that align with your brand's strategy, combining cutting-edge creativity with valuable data-driven insights.",
    },
    {
      image:"../images/USA.png",
      heading:"Dedicated Maintenance",
      subHeading:"Streamline the maintenance and enhancement of your current experience with a skilled and proactive team.",
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

export default WebMobileCustomer
