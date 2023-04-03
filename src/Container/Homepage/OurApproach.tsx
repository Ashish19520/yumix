import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";

export const OurApproach = () => {
  return (
    <MidBanner>
      <Container maxWidth="lg" className="container">
        <div className="banner">
          <h2>Our Approach</h2>
          <div className="icons">
            <div className="singleicon">
              <img src="./images/A1.png"></img>
              <p>Schedule a Meeting</p>
            </div>

            <div className="singleicon">
              <img src="./images/A2.png"></img>
              <p>Onboarding Process</p>
            </div>

            <div className="singleicon">
              <img src="./images/A3.png"></img>
              <p>Hire your amazon expert</p>
            </div>

            <div className="singleicon">
              <img src="./images/A4.png"></img>
              <p>Manage your business</p>
            </div>

            <div className="singleicon">
              <img src="./images/A5.png"></img>
              <p>Focus on strategies and growth</p>
            </div>
          </div>
        </div>
      </Container>
    </MidBanner>
  );
};

const MidBanner = styled.div`
  background: #fffcfc;
  padding: 40px 0px 56px 0px;

  .container {
    margin: auto;

    .banner {
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        font-size: 32px;
        font-weight: 600;
        line-height: 1.31;
        letter-spacing: 0.25px;
        color: #3a3b44;
        margin-bottom: 45px;
      }

      .icons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        @media (max-width: 900px) {
        
        flex-wrap:wrap;
        align-items:center;
        justify-content:center;
        }
        
        @media (max-width: 600px) {
        flex-direction:column;
        width:100%;
        }

        .singleicon {
          padding: 0px 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-right: 10px;

          &:last-of-type {
            margin-right: unset;
          }

          img {
            margin-bottom: 20px;
            /* width:100%; */
          }

          p {
            font-size: 16px;
            max-width: 80%;
            line-height: 1.5;
            letter-spacing: 0.25px;
            text-align: center;
            color: #383838;
          }
        }
      }
    }
  }
`;
