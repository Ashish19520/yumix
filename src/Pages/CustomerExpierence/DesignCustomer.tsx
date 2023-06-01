import React from 'react'
import Footer from '../../Components/Footer'
import ContactForm from '../../Components/contactForm'
import HeroServices from '../../Components/HeroServices'

function DesignCustomer() {
  const data={
    heading:"Design",
    subHeading:"Attract and impress your audience, outshine your competitors, and achieve business goals with unique data-driven content that wins over consumers.",
    image:"../images/image19.png",
    blackHeading:"Data Driven Design",
    blackSubHeading:"We transform data-driven insights into imaginative strategies that bring a human touch to your brand, setting it apart from others. Our experienced team of creative professionals creates memorable and customized brand experiences, including website design, brand strategy, social media assets, video creation, and more. Leveraging analytics and user insights, we inspire users to take action and achieve impactful results.",
    strategyHeading:" Strategy",
    box:[
      {
      image:"../images/USA.png",
      heading:"Inspiring Assets",
      subHeading:"Increase conversions with channel-specific media assets that elevate your brand and win over consumers.",
    },
    {
      image:"../images/image15.png",
      heading:"Harmonious Concepting",
      subHeading:"Develop innovative concepts that align with your brand's strategy, combining cutting-edge creativity with valuable data-driven insights.",
    },
    {
      image:"../images/second.png",
      heading:"Seamless User Experience",
      subHeading:"Make confident, informed decisions backed by rigorous testing, and get statistically-validated results afterward.",
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

export default DesignCustomer
