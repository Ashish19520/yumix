import { Container } from "@mui/material";
import React, { useEffect,useState } from "react";
import styled from "styled-components";
//@ts-ignore

import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import {  testimonialPlay} from "../../actions/posts"
import { useSelector } from "react-redux/es/exports"

export const Certificate = () => {
  const response=useSelector((state:any)=>state?.posts?.testimonials);
  const dispatch: Dispatch<any> = useDispatch();
  const [brands,setBrands]=useState();

  useEffect(()=>{
    dispatch(testimonialPlay())
  },[])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Entering into zone");
          entry.target.classList.add("animate__animated");
          entry.target.classList.add("animate__fadeIn");
        } else {
          console.log("exit into zone");
          entry.target.classList.remove("animate__fadeIn");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);
console.log(response?.data[0]?.attributes?.t_url)
  return (
    <Certif>
      <Container maxWidth="lg" className="container hidden">
      <div className="rightDiv">
          <img src="./images/i2.png" className="i2" ></img>  
        
        </div>
        <div className="leftDiv">
          <img src="./images/Ellipse 64@3x.png" className="img-dot2"></img>
          
          <div className="title">
            <h2>What We Do?</h2>
          </div>
          <div className="subtitle">
            <p className="justify">
            As a specialized e-Commerce agency, we focus on leading marketplaces like Amazon, Walmart, eBay, and your website. Our services drive your brand to new heights through expert solutions. From successful launches to precise PPC Ads, we ensure seamless restocking, optimize strategies, and enhance conversion rates. Trust us for ratings, compliance, and ultimate revenue growth.
            </p>
          </div>
          <img src="./images/Ellipse 63@3x.png" className="img-dot3"></img>
        </div>
        
      </Container>
    </Certif>
  );
};

const Certif = styled.div`
  background: #fffcfc;
  padding: 60px 0px;

  @media (max-width: 600px) {
    padding-bottom: 30px;
  }
  .container {
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: 600px) {
      flex-direction: column-reverse;
      width: 100%;
    }

    .img-dot2 {
      position: absolute;
      width: 2%;
      top: -50px;
      right: 65%;

      @media (max-width: 600px) {
        display: none;
      }
    }
   

    .img-dot3 {
      position: absolute;
      width: 2%;
      top: 40px;
      left: 5%;
    }

    .leftDiv {
      width: 50%;
      padding-right: 20px;

      @media (max-width: 600px) {
        width: 100%;
        align-items: center;
      }
      .title {
        h2 {
          font-family: Poppins-semiBold;
          font-size: 32px !important;
          /* font-weight: 600; */
          line-height: 1.31;
          letter-spacing: 0.25px;
          text-align: left;
          color: #3a3b44;
          margin-bottom: 16px;

          @media (max-width: 600px) {
            text-align: center;
            margin-bottom: 20px;
            font-size: 16px !important;
          }
        }
      }

      .subtitle {
        font-family: Montserrat;
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: 0.25px;
        text-align: left;
        color: #828490;

        @media (max-width: 600px) {
          text-align: center;
          margin-bottom: 40px;
          font-size: 14px;
        }
      }
    }
    .rightDiv {
      width: 50%;

      @media (max-width: 600px) {
        flex-direction: column;
        width: 100%;
        align-items: center;
        padding-bottom: 40px;
      }
      @media (max-width: 300px) {
        flex-direction: column;
        width: 100%;
        align-items: center;
        padding-bottom: 40px;
      }
      .i2{
        width: 80%;
      }
      .rh5v-Volume_icon{
        height: 29px;
        width: 29px;
      }
      img {
        width: 100%;
      }
    }
  }
`;
