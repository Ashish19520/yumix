import React, { useEffect } from "react";
import { OurWorks } from "../Container/Work/OurWorks";
import { Counter } from "../Components/Counter";
import styled from "styled-components";
import ContactForm from "../Components/contactForm";
import Footer from "../Components/Footer";
import AboutBottomBanner from "../Container/About US/AboutBottomBanner";
import Team from "../Container/About US/Team";

export const Works = () => {

  useEffect(()=>{
    window.scroll(0,0)
  },[])
  
  const data={
    heading:"Our Success Stories Reflect Expertise and Results",
    para:"The ESERVZ portfolio isn't just a list of names; it's a testament to the outcomes we've achieved. Through meticulous product listings, engaging brand stores, targeted advertising, and holistic marketplace management, we've driven substantial growth and visibility for our clients."
  }
  const data2={
    para:"As we continue to collaborate with industry-known brands and expand our footprint, our portfolio serves as a living testament to the value we provide. Your business's growth is our priority, and we're excited to bring our expertise to the table. Join the ranks of our satisfied clients and experience the ESERVZ difference.",
    para2:"  Thank you for considering ESERVZ as your trusted e-commerce partner."
  }

  const data3=[{
    src:"../images/Group 162943.png",
    head:"Expert Insights",
    para:"Our experience spans diverse industries, giving us a deep understanding of what works best for each product category."
},
{
    src:"../images/tailor.png",
    head:"Tailored Strategies",
    para:"We don't believe in one-size-fits-all solutions. Each client benefits from strategies tailored to their unique needs and goals."
},
{
    src:"../images/bulb.png",
    head:"Innovation and Adaptability",
    para:"The ever-changing e-commerce landscape demands continuous innovation. Our strategies evolve alongside industry trends."
},
{
    src:"../images/chat.png",
    head:"Client-Centric Approach",
    para:"Our success is rooted in your success. We're committed to achieving your e-commerce aspirations and exceeding your expectations."


},
]
const content={
  heading:"The ESERVZ Advantage",
  para:"",
  para2:""
}
  return (
    <div>
      <WorksWrapper className="container margin-nav">
        
        <div className="banner">
          <OurWorks />
        </div>
        <AboutBottomBanner data={data}/>
        <Team data={data3} content={content}/>
        <AboutBottomBanner data={data2}/>
        <div className="counter">
          <Counter />
        </div>
        <ContactForm />
        <Footer />
      </WorksWrapper>
    </div>
  );
};

const WorksWrapper = styled.div`
  background: #fffcfc;


  .banner {
    margin-bottom: 64px;

    @media (max-width: 600px) {
        padding-bottom: 0px;
    }
  }

  .counter{
    padding-bottom:41px;
  }
`;
