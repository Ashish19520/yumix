import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";

export const Certificate = () => {
  return (
    <Certif>
      <Container maxWidth="lg" className="container">
        <div className="leftDiv">
          <div className="title">
            <h2>Authorised Seller Partner for Amazon</h2>
          </div>
          <div className="subtitle">
            <p>
              ESERVZ is an authorise seller partner of Amazon, the world's
              largest eCommerce platform. We are professional service provider
              who are trained and certified by Amazon which empowers sellers to
              launch, manage and grow your business on Amazon.
            </p>
          </div>
        </div>
        <div className="rightDiv">
          <img src="./images/certificate 1.png"></img>
        </div>
      </Container>
    </Certif>
  );
};

const Certif = styled.div`
  background: #fffcfc;
  padding: 74px 0px;

  .container {
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) {
      flex-direction: column;
      width: 100%;
    }

    .leftDiv {
      width: 50%;
      padding-right: 20px;

      @media (max-width: 600px) {
        width: 100%;
        align-items:center;
      }

      .title {
        font-size: 32px;
        font-weight: 600;
        line-height: 1.31;
        letter-spacing: 0.25px;
        text-align: left;
        color: #3a3b44;
        margin-bottom: 16px;

        @media (max-width: 600px) {
        text-align:center;
        margin-bottom:40px;
      }
      }

      .subtitle {
        /* font-family: Montserrat; */
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: 0.25px;
        text-align: left;
        color: #828490;


        
        @media (max-width: 600px) {
        text-align:center;
        margin-bottom:40px;
      }

      }
    }
    .rightDiv {
      width: 50%;

      @media (max-width: 600px) {
        width: 100%;
        align-items:center;
      }

      img {
        width: 100%;
      }
    }
  }
`;
