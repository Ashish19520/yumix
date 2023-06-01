import React from 'react'
import Footer from '../../Components/Footer'
import ContactForm from '../../Components/contactForm'
import HeroServices from '../../Components/HeroServices'

function SocialMediaManagement() {
  const data={
    heading:"Social Media Management",
    subHeading:"Grow your brand on the largest digital marketing stage with our audience-first approach, capturing attention and driving conversions across top platforms. ",
    image: "../images/image4.png",
    blackHeading:"Amplify Your Social Media Strategy for Maximum Impact Across Platforms",
    blackSubHeading:"Unlock the full power of social media marketing with our comprehensive and results-oriented approach. Our tailored strategies cover audience targeting, engaging messaging, and measurable KPIs to meet your brand's goals. With our expertise, we deliver consistent and impactful results across both established and emerging platforms throughout the customer journey.",
    strategyHeading:"Our Affiliated Advertising Strategy",
    box:[
      {
      image:"../images/Image13.png",
      heading:"Paid Social Media Marketing Service",
      subHeading:"Boost brand presence, attract prospective leads, and achieve higher conversion rates with our tailored paid social media initiatives.",
    },
    {
      image:"../images/Image12.png",
      heading:"Organic Social Media Marketing",
      subHeading:"Establish a solid base and cultivate a customer community through compelling content creation and strategic planning driven by data.",
    },
    {
      image:"../images/first.png",
      heading:"Advanced Audience Strategies",
      subHeading:"Harness the power of user data to optimize social media investments, combining first-party and third-party insights for maximum impact.",
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

export default SocialMediaManagement
