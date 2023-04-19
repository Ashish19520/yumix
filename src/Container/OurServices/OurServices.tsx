import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";

export const OurServices = () => {
  return (
    <ServicesWrapper>
      <Container maxWidth="lg" className="container">

        <div className="hero">
          <img src="./images/Round Cube2@3x.png" className="img-cube_1"></img>
          <img src="./images/FullRock1@3x.png" className="img-rock_1"></img>
          <h1>Our Services</h1>
          <div className="subTitle">
            ESERVZ is a full cycle Amazon Business Management Agency. If you run
            your business on Amazon Vendor Central or Amazon Seller Central, or
            went for Amazon FBA or Amazon MFN we have everything to rock your
            business.
          </div>
          <div className="img-block">
            <img src="./images/IllustrationService.png"></img>
          </div>
        </div>
      </Container>
    </ServicesWrapper>
  );
};

const ServicesWrapper = styled.div`
  background: #fffcfc;
  .container {
    margin: auto;
    padding: 40px 0px;
    background-image: url("./images/Hero Bg.png");
    background-repeat: no-repeat;
    background-position: 30% 80%;

    @media (max-width: 1100px) {
      background-image: unset;
    }
    .hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;

      .img-cube_1{
        width: 15%;
        right: 6%;
        top: 20%;
        position: absolute;
      }

      .img-rock_1{
        position: absolute;
        width: 10%;
        left: 5%;
        bottom: 20%;
      }

      h1 {
        font-family: Poppins-bold;
        font-size: 40px;
        font-weight: bold;
        line-height: 1.25;
        letter-spacing: 0.25px;
        color: #0b0720;
        margin-bottom: 16px;
        margin-top: 30px;

        @media (max-width: 600px) {
          font-size: 35px;
        }
      }
      .subTitle {
        font-family: 'Montserrat';
        width: 65%;
        text-align: center;
        font-size: 18px;
        line-height: 1.33;
        letter-spacing: 0.25px;
        color: #696969;
        margin-bottom: 40px;

        @media (max-width: 600px) {
          font-size: 16px;
        }
      }
    }
    .img-block{
        @media (max-width: 600px) {
          width:100%;
          display:flex;
          align-items:center;
            justify-content:center;
          img{
            width:80%;
            
          }
        }
    }
  }
`;
