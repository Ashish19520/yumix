import React from 'react'
import Footer from '../../Components/Footer'
import ContactForm from '../../Components/contactForm'
import HeroServices from '../../Components/HeroServices'

function AffilateAdvertising() {
  const data={
    heading:"Affiliate Advertising",
    subHeading:"Set performance-based guidelines with advertising affiliates to pay for results that directly impact your bottom line. ",
    image:"../images/Image2.png",
    blackHeading:"Accelerate Business Growth with an Affiliate Marketing Agency",
    blackSubHeading:"Overcome challenges and maximize success in affiliate marketing with Eservz's expert services. Our team specializes in building lucrative affiliate programs that seamlessly integrate into your digital marketing strategies, ensuring incremental value and effective partner management.",
    strategyHeading:"Our Affiliated Advertising Strategy",
    box:[
      {
      image:"../images/Image10.png",
      heading:"Advanced Commission Strategies",
      subHeading:"Motivate the right partners by offering performance-based commission structures that go beyond the last click. ",
    },
    {
      image:"../images/second.png",
      heading:"Diverse Network of Partners",
      subHeading:"Tap into a vast network of well-established, long-standing relationships and innovative traditional affiliates.",
    },
    {
      image:"../images/four.png",
      heading:"Incrementality Measurement",
      subHeading:"Analyze website traffic, track partner-driven customer acquisition, and measure pre-checkout conversions.",
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

export default AffilateAdvertising
