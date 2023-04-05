import Container from "@mui/material/Container";
import React from "react";
import styled from "styled-components";

export const Hero = () => {
  return (
    <HeroLayout>
      <Container maxWidth="lg" className="container">
        <div className="outter">
          <div className="titleBox">
            <h1>
              The complete multi-channel solution for Brands and Retailers
            </h1>
            <p>
              With our complete multi-channel solution, you'll have access to
              everything you need to succeed in today's competitive online
              marketplace.
            </p>
          </div>
          <div className="imageBox">
            <img src="./images/illustration 1.png"></img>
          </div>
        </div>
        <div className="btn">
          <p>Scroll to explore more</p>
          {/* <button>Click</button> */}
        </div>
      </Container>
    </HeroLayout>
  );
};

const HeroLayout = styled.div`
  background: #fffcfc;


  .container {
    background-image: url("./images/Hero component.png");
    background-repeat: no-repeat;
    background-position: 0% 75%;

    @media (max-width: 1100px) {
      background-image: unset;
    }

   

    .outter {
      display: flex;

      @media (max-width: 600px) {
            flex-direction:column;
            align-items:center;
          }

      .titleBox {
        max-width: 700px;
        width: 70%;

        @media (max-width: 600px) { 
            width:100%;
          }

        h1 {
          font-size: 40px;
          font-weight: bold;
          text-align: left;
          color: #3a3b44;
          margin-top: 80px;
          margin-bottom: 20px;

          @media (max-width: 600px) {
            text-align:center;
          }
        }

        p {
          max-width: 80%;
          font-size: 20px;
          font-weight: 500;
          line-height: 1.5;
          text-align: left;
          color: #828490;

          @media (max-width: 600px) {
            text-align:center;
            max-width: 100%;
          }
        }
      }

      .imageBox {
        margin-top: 20px;
        width: 40%;
        img {
          width: 100%;

          /* @media (max-width: 900px) {
            display: none;
          } */
          /* @media (max-width: 600) {
            display: none;
          } */
          /* height: 534px;
            object-fit: cover; */
        }
      }
    }

    .btn {
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        font-size: 16px;
        letter-spacing: 0.44px;
        color: #b0bac7;
      }
    }
  }
`;
