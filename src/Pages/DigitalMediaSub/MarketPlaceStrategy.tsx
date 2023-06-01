import React from 'react'
import Footer from '../../Components/Footer'
import ContactForm from '../../Components/contactForm'
import HeroServices from '../../Components/HeroServices'

function MarketPlaceStrategy() {
  const data={
    heading:"Marketplace Listing Services",
    subHeading:"Shape the journey of potential customers across the marketplace to elevate your chances of success and boost your revenue. ",
    image:"../images/image.png",
    blackHeading:"Unleash eCommerce Success with Our Marketplaces Listing Services",
    blackSubHeading:"Unlock extraordinary results beyond traditional search engines through our extensive search and product marketing expertise. Our marketplace listing services capitalize on lucrative opportunities like Amazon Advertising & Walmart Media Group, expanding your eCommerce initiatives and placing your brand in front of prospective buyers precisely when it matters most. Experience the power of targeted marketplace strategies that drive exponential growth for your business.",
    strategyHeading:"Our Marketplace Strategy",
    box:[
      {
      image:"../images/Image9.png",
      heading:"Integrated Search Strategies",
      subHeading:"With our Integrated Search Strategies, leverage the power of traditional and unconventional channels to drive meaningful results. ",
    },
    {
      image:"../images/Image10.png",
      heading:"Monitor Products’ Retail Health",
      subHeading:"Strategically allocate budget through valuable insights into product profitability, growth potential, and scalability.",
    },
    {
      image:"../images/four.png",
      heading:"Analyze Cross-Channel Insights",
      subHeading:"Tailor your spending mix by analyzing and correlating the impact across different channels, generating the most significant impact.",
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

export default MarketPlaceStrategy
