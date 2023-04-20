import { Container } from '@mui/system'
import React, { useEffect } from 'react';
import styled from "styled-components";

export default function BannerList() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Entering into zone");
          entry.target.classList.add("animate__animated");
          entry.target.classList.add("animate__fadeIn");
        } 
        // else {
        //   console.log("exit into zone");
        //   entry.target.classList.remove("animate__fadeIn");
        // }
      });
    });

    const hiddenElements = document.querySelectorAll(".bannerList_hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);
  return (
    <Banner>
        <Container maxWidth="lg" className="container bannerList_hidden">
            <div className="bannerText">
                <span className='banner-text-list'>List .</span> <span className='banner-text-advertise'> Advertise . Grow</span>
                <div className="bannerDetails">
                  <p>
                  There are more than 30 Million product listing on Amazon Platform. Beat your FBA competitors with our listing audit and optimization service.
                  </p>
                </div>

            </div>
            <div className="bannerImage">
              <img />
            </div>
        </Container>
    </Banner>
  )
}
const Banner =styled.div`
  .container{
    display:flex;
    padding: 48px 488px 56.8px 96px;
    border-radius: 42px;
    background-color: #eff5fc;
    .bannerText{
      width:80%;
      .banner-text-list{
        font-family: Poppins;
        font-size: 32px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.31;
        letter-spacing: 0.25px;
        text-align: left;
        color: #3a3b44;
      }
      .banner-text-advertise{
        font-family: Poppins;
        font-size: 32px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.31;
        letter-spacing: 0.25px;
        text-align: left;
        color: #828490;
      }
    }
  }
`