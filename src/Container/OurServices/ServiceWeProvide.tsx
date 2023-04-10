import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";

export const ServiceWeProvide = () => {
  return (
    <div id="digitalMedia">
      <ServiceWeProvideWrapper>
        <Container maxWidth="lg" className="container">
          <div className="title-box">
            <div className="title">Services We Provide</div>
            <div className="subtitle">
              Here are the services offered by Eservz
            </div>
            <div className="content-box">
              <div className="text-box">
                <div className="title">Digital Media</div>
                <div className="subtitle">
                  While most digital marketing agencies excel at one or two
                  channels, Eservz has deep expertise across all performance
                  marketing services, which allows us to provide a rich digital
                  marketing services offering.
                </div>
                <button className="btn">View More</button>
              </div>
              <div className="img-box">
                <img src="./images/Group 38607.png"></img>
              </div>
            </div>
          </div>
        </Container>
      </ServiceWeProvideWrapper>
    </div>
  );
};

const ServiceWeProvideWrapper = styled.div`
  background: #fffcfc;
  padding: 40px 0px;
  .container {
    margin: auto;
    background-image: url("./images/Sec 1 bg.png");
    background-repeat: no-repeat;
    background-position: 0% 55%;

    @media (max-width: 1100px) {
      background-image: unset;
    }

    .title-box {
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        font-family: Poppins-semiBold;
        font-size: 32px;
        font-weight: 600;
        line-height: 1.31;
        letter-spacing: 0.25px;
        color: #0b0720;
        margin-bottom: 16px;
      }
      .subtitle {
        font-family: Montserrat;
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: 0.25px;
        color: #5e5e5e;
        margin-bottom: 20px;

        @media (max-width: 600px) {
          padding-bottom: 20px;
        }
      }
    }

    .content-box {
      display: flex;
      align-items: center;

      @media (max-width: 600px) {
        flex-direction: column-reverse;
        justify-content: center;
      }

      .text-box {
        width: 60%;

        @media (max-width: 600px) {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .title {
          font-size: 32px;
          font-weight: bold;
          line-height: 1.33;
          text-align: left;
          color: #000;
          margin-bottom: 24px;
        }

        .subtitle {
          font-family: "Montserrat";
          font-size: 16px;
          line-height: 1.55;
          color: #494949;
          width: 85%;
          margin-bottom: 24px;
        }
        .btn {
          padding: 15px 24px;
          border-radius: 8px;
          background-color: #5956e9;
          border: 0px;
          font-family: Montserrat;

          color: #fffcfc;
          @media (max-width: 600px) {
            margin-bottom: 20px;
          }
        }
      }
      .img-box {
        width: 40%;

        img {
          width: 90%;
        }
      }
    }
  }
`;
