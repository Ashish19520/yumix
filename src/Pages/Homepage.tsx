import React, { useEffect } from "react";
import { Counter } from "../Components/Counter";
import { Hero } from "../Components/Hero";
import { HomepageScroll } from "../Container/Homepage/HomepageScroll";
import { MidWhoBanner } from "../Container/Homepage/MidWhoBanner";
import { ToolBanner } from "../Container/Homepage/ToolBanner";
import { OurApproach } from "../Container/Homepage/OurApproach";
import { Certificate } from "../Container/Homepage/Certificate";
import { Tool } from "../Container/Homepage/Tool";
import { People } from "../Container/Homepage/People";
import WhyUs from "../Container/Homepage/WhyUs";
import Footer from "../Components/Footer";
import ContactForm from "../Components/contactForm";

import styled from "styled-components";
import { VideoSlide } from "../Components/VideoSlide";
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { getPost } from "../actions/posts";
import { useSelector } from "react-redux/es/exports";
export const Homepage = () => {

  const {post}=useSelector((state:any)=>state.posts);
  console.log(post);
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(()=>{
    window.scroll(0,0)
    dispatch(getPost());
  },[])
  

  return (
    <div>
      <Hero />
      <HomepageScroll />
      <MidWhoBanner />
      <OurApproach />
      <Certificate />
      <Counter />
      <Tool />
      <WhyUs />
      <People />
      <FotterArea>
        <div className="cf">
          <ContactForm />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </FotterArea>
    </div>
  );
};

const FotterArea = styled.div`
  .cf {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
