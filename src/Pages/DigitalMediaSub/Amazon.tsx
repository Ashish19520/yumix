import React from 'react'
import Footer from '../../Components/Footer'
import ContactForm from '../../Components/contactForm'
import HeroServices from '../../Components/HeroServices'

function Amazon() {
  const data={
    heading:"Amazon Ads Services",
    subHeading:"Maximize customer engagement on Amazon with our proven approach, from awareness to purchase, for optimal growth and profit.",
    image:"../images/Background.png",
    blackHeading:"Unlock Your Amazon Potential with Our Digital Marketing Services",
    blackSubHeading:"Supercharge your Amazon advertising budget with our expert team. We know every dollar counts, so we use our data-driven approach to ensure maximum return on your media spend. As recognized leaders in the Amazon agency directory, we unleash the power of Amazon's advertising tools to create",
    strategyHeading:"Our Amazon Ads Strategy",
    box:[
      {
      image:"../images/five.png",
      heading:"Profitable Growth",
      subHeading:"Fuel your growth with our tailored approach. From data analysis to strategic promotions, we assist you in reaching profitability targets. ",
    },
    {
      image:"../images/second.png",
      heading:"Customer-Centric Campaigns",
      subHeading:"Boost impact with customer-centric campaigns. We optimize offerings, amplify brand voice, and ensure cost-effective results.",
    },
    {
      image:"../images/four.png",
      heading:"Cross-Channel Integration",
      subHeading:"Boost E-Commerce sales through cross-channel integration. Align Amazon performance with other channels for maximum impact.",
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

export default Amazon
