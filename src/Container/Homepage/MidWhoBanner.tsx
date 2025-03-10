import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "animate.css";

export const MidWhoBanner = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
        
          // entry.target.classList.add("animate__animated");
          // entry.target.classList.add("animate__backInDown")

          document
            .querySelector(".image-who")
            ?.classList.add("animate__animated");
          document
            .querySelector(".image-who")
            ?.classList.add("animate__backInLeft");
        } else {
          console.log("exit into zone");
          document
            .querySelector(".image-who")
            ?.classList.remove("animate__backInLeft");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".whoEservz");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <Banner>
      <Container maxWidth="lg" className="container whoEservz">
        <div className="first">
          <img src="./images/Ellipse 65@3x.png" className="img-dot1"></img>
          <div className="image-who">
            <img src="./yumix/4.png"></img>
          </div>
          <img src="./images/Ellipse 64@3x.png" className="img-dot2"></img>
        </div>
        <div className="second">
          <div>
            <img src="./images/Ellipse 63@3x.png" className="img-dot3"></img>
            <h2>Who We Are?</h2>
            <p>
              {/* Eservz is a leading and globally renowned e-commerce and Amazon
              specialist agency that provides cutting edge, groundbreaking and
              truly revolutionary back office support to e-commerce sellers,
              business owners and vendors on multiple online channels especially
              Amazon. */}
Our team of passionate marketers, designers, strategists, and developers works collaboratively to build powerful digital experiences. We specialize in creating data-driven strategies that optimize every aspect of your online presence from development to marketing.
            </p>
          </div>
          <div className="image-container">
          <img className="logos" alt="logo"  src="./images/in.png"></img>
         <img className="logos" alt="logo"  src="./images/us.png"></img>
          {/*  <img className="logos" alt="logo"  src="./images/uk.png"></img>
          <img className="logos" alt="logo"  src="./images/canada.png"></img> */}
          <img className="logos" alt="logo"  src="./images/aus.png"></img>
         
          </div>
          <img  src="./images/Round Cube2@3x.png" className="cube-img"></img>
        </div>
      </Container>
    </Banner>
  );
};

const Banner = styled.div`
  background: #fffcfc;
  padding: 60px 0px 90px 0px;

  .container {
    margin: auto;
    display: flex;

    @media (max-width: 600px) {
      flex-direction: column;
      width: 100%;
      padding-bottom: 40px;
    }

    .first {
      width: 40%;
      position: relative;

      .img-dot1 {
        width: 5%;
        top: 0%;
        right: 0%;

        @media (max-width: 600px) {
          display: unset;
          width: 17%;
        }
      }
      .img-dot2 {
        position: absolute;
        width: 5%;
        right: 0%;
        bottom: 60px;
        @media (max-width: 600px) {
          display: unset;
          width: 17%;
        }
      }

      img {
        width: 100%;
        object-fit: contain;

        @media (max-width: 600px) {
          padding: 0px 20px;
        }
      }

      @media (max-width: 600px) {
        width: 100%;
        align-items: center;
      }
    }
    .second {
      font-family: Montserrat;
      width: 60%;
      padding-left: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;

      .img-dot3 {
        position: absolute;
        width: 3%;
        top: 70px;
        left: 299px;
        @media (max-width: 600px) {
          display: none;
        }
      }

      .image-container {
        display: flex;
        flex-wrap:wrap;
        justify-content: flex-start;
        gap:2rem;
        margin-top:15px;

      }
      .logos{
        width:50px;
        height:38px;
      }

      .cube-img {
        position: absolute;
        width: 10%;
        right: 0%;
        bottom: 3rem;

        @media (max-width: 600px) {
          display: unset;
          bottom: -80%;
        }
        
      }

      h2 {
        font-family: Poppins-semiBold;
        font-size: 32px;
        line-height: 1.31;
        letter-spacing: 0.25px;
        text-align: left;
        color: #3a3b44;
        margin-bottom: 16px;

        @media (max-width: 600px) {
          text-align: left;
          font-size: 16px;
        }
      }
      p {
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: 0.25px;
        text-align: left;
        color: #828490;

        @media (max-width: 600px) {
          font-size: 12px;
          text-align: left;
        }
      }
      @media (max-width: 600px) {
        width: 100%;
        padding-left: unset;
      }
    }
  }
`;
