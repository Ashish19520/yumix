import React from 'react'
import Footer from '../../Components/Footer'
import ContactForm from '../../Components/contactForm'
import HeroServices from '../../Components/HeroServices'

function SeoMarketing() {
  const data={
    heading:"SEO Marketing Services",
    subHeading:"Drive brand discovery, enhance website engagement, and optimize conversions with our comprehensive cross-functional approach, delivering the ultimate customer experience. ",
    image: "../images/image3.png",
    blackHeading:"Skyrocket Your Organic Performance with Proven SEO Solutions",
    blackSubHeading:"Harness the power of SEO to unlock your website's full potential with our expert services at Eservz. We integrate content, technical, offsite, and user experience (UX) best practices to deliver real results. Our team of experts guides you through the complex world of SEO, creating a prioritized plan based on speed and impact. With dedicated content strategists, copywriters, web development experts, and UX designers, we keep you ahead of industry changes.",
    strategyHeading:"Our SEO Marketing Strategy",
    box:[
      {
      image:"../images/image11.png",
      heading:"Using Tech to Prioritize",
      subHeading:"Uncover quick wins and long-term opportunities with our proprietary technology that merges ranking and analytics data. ",
    },
    {
      image:"../images/second.png",
      heading:"In-House Expertise",
      subHeading:"Decode your site's infrastructure and optimize SEO performance with the power of our on-site, fully integrated development team.",
    },
    {
      image:"../images/first.png",
      heading:"Paid & Organic Integration",
      subHeading:"Unlock superior results with a holistic, collaborative process using paid insights and implement best practices for media landing pages.  ",
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

export default SeoMarketing
