import { Container } from "@mui/material";
import React,{useEffect,useState} from "react";
import styled from "styled-components";
import 'animate.css';


export const MidWhoBanner = () => {

  


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


   

  return (
    <Banner>
      <Container maxWidth="lg" className="container">
        <div className="first">
          <div className="hidden">
          <img src="./images/Ecommerce_10.png"></img>
          </div>
        </div>
        <div className="second">
          <div className="hidden">
          <h2>Who's Eservz?</h2>
          <p>
            Eservz is a leading and globally renowned e-commerce and Amazon
            specialist agency that provides cutting edge, groundbreaking and
            truly revolutionary back office support to e-commerce sellers,
            business owners and vendors on multiple online channels especially
            Amazon.
          </p>
        </div>
        </div>
      </Container>
    </Banner>
  );
};

const Banner = styled.div`
  background: #fffcfc;
  padding: 55px 0px 0px 0px;

  .container {
    margin: auto;
    display: flex;

    @media (max-width: 600px) {
      flex-direction: column;
      width: 100%;
    }

    .first {
      width: 40%;
      img {
        width: 100%;
        object-fit: contain;

        
      }

      @media (max-width: 600px) {
        width: 100%;
        align-items:center;
      }
    }
    .second {
      font-family: Montserrat;
      width: 60%;
      padding-left: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h2 {
        font-size: 32px;
        font-weight: 600;
        line-height: 1.31;
        letter-spacing: 0.25px;
        text-align: left;
        color: #3a3b44;
        margin-bottom: 16px;

        @media (max-width: 600px) {
            text-align: center;
      }
      }
      p {
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: 0.25px;
        text-align: left;
        color: #828490;
      }
      @media (max-width: 600px) {
        width: 100%;
        padding-left:unset;
      }
    }

   
  }
`;
