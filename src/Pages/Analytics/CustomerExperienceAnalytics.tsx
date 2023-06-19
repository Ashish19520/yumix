import React from 'react'
import Footer from '../../Components/Footer'
import ContactForm from '../../Components/contactForm'
import HeroServices from '../../Components/HeroServices'

function CustomerExperienceAnalytics() {
  const data={
    heading:"Customer Experience Analytics",
    subHeading:"Achieve improved conversion rates, seamless customer interactions, and enhanced UX with our bespoke testing methodologies and advanced statistical techniques.",
    image:"../images/Image8.png",
    blackHeading:"Make the most of client data to cultivate remarkable experiences.",
    blackSubHeading:"Our customer analytics approach focuses on the crucial role of user experience (UX) in building strong customer relationships. Through behavioral analysis, A/B testing, and personalized on-site interventions, data guides every step of our marketing analytics agency services. We help brands leverage customer analytics to create relevant online experiences that drive loyalty, engagement, and conversions.",
    strategyHeading:"Strategy",
    box:[
      {
      image:"../images/Group 38596.png",
      heading:"Strengthen Performance",
      subHeading:"Improve customer experience, increase engagement, and optimize conversions through testing, implementation and measurement.",
    },
    {
      image:"../images/USA.png",
      heading:"Focus on the Experience",
      subHeading:"Understand the “why” behind your user’s behavior and uncover customer personas to improve content strategy.",
    },
    {
      image:"../images/USA (1).png",
      heading:"Data-backed Insights",
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

export default CustomerExperienceAnalytics
