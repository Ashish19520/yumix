import React, { useEffect } from "react";
import { OurWorks } from "../Container/Work/OurWorks";
import { Counter } from "../Components/Counter";
import styled from "styled-components";
import ContactForm from "../Components/contactForm";
import Footer from "../Components/Footer";

export const Works = () => {

  useEffect(()=>{
    window.scroll(0,0)
  },[])
  return (
    <div>
      <WorksWrapper className="container margin-nav">
        
        <div className="banner">
          <OurWorks />
        </div>
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
