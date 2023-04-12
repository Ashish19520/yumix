import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";

export const Tool = () => {
  return (
    <div>
      <ToolDiv>
        <Container maxWidth="lg" className="container">
          <div className="outter">
            <div className="title">
              Resources that'll help scale your business
            </div>
            <div className="tool">
              <div className="box">
                <div className="fba">
                  <img src="./images/1 - Brisa Receiving Her Package.png"></img>
                </div>
                <div className="info">
                  <div className="infoTitle">FBA Calculator</div>
                  <div className="subTitle">
                    FBM or FBA? Choose what’s right for your Amazon products.
                  </div>
                  <div className="link">RUN CALCULATOR</div>
                </div>
              </div>

              <div className="box">
                <div className="lq">
                  <img src="./images/14 - Brisa doing Checklist.png"></img>
                </div>
                <div className="info">
                  <div className="infoTitle">Listing Quality</div>
                  <div className="subTitle">
                    Increase your Amazon sales with optimised listing.
                  </div>
                  <div className="link">RUN CALCULATOR</div>
                </div>
              </div>
              <div className="box">
                <div className="dtc">
                  <img src="./images/18 - Lucas Floats with His Laptop.png"></img>
                </div>
                <div className="info">
                  <div className="infoTitle">Description to Code</div>
                  <div className="subTitle">
                    Convert descriptions to code with zero HTML knowledge.
                  </div>
                  <div className="link">RUN CALCULATOR</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </ToolDiv>
    </div>
  );
};

const ToolDiv = styled.div`
  background: #fffcfc;
  padding: 90px 0px;

  .container {
    margin: auto;

    .outter {
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        font-size: 32px;
        font-weight: 600;
        line-height: 1.31;
        letter-spacing: 0.25px;
        color: #3a3b44;
        margin-bottom: 50px;

        @media (max-width: 600px) {
          text-align: center;
        }
      }
      .tool {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        @media (max-width: 600px) {
          flex-wrap: wrap;
          flex-direction: column;
        }

        .box {
          width: 30%;

          @media (max-width: 600px) {
            width: 50%;
            margin-bottom: 50px;
          }

          .fba {
            aspect-ratio: 1;
            border-radius: 500px;
            background-color: #eff5fc;
            img {
              width: 75%;
              transition: all 0.2s ease-in-out;

              &:hover {
                transform: scale(1.1) rotate(3deg);
              }
            }
          }
          .lq {
            aspect-ratio: 1;
            border-radius: 500px;
            background-color: #ffe9ce;

            img {
              width: 100%;
              transition: all 0.2s ease-in-out;

              &:hover {
                transform: scale(1.1) rotate(-3deg);
              }
            }
          }
          .dtc {
            aspect-ratio: 1;
            border-radius: 500px;
            background-color: #e6e2ff;
            img {
              width: 100%;

              transition: all 0.2s ease-in-out;

              &:hover {
                transform: scale(1.1) rotate(3deg);
              }
            }
          }
        }

        .info {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .infoTitle {
            font-size: 18px;
            font-weight: 600;
            line-height: 1.33;
            color: #3a3b44;
            margin: 8px 0px;
          }
          .subTitle {
            font-family: Montserrat;
            font-size: 16px;
            line-height: 1.5;
            letter-spacing: 0.25px;
            text-align: center;
            color: #828490;
            margin: 8px 0px;
          }
          .link {
            font-size: 14px;
            font-weight: 600;
            line-height: 1.43;
            letter-spacing: 1px;
            text-align: left;
            color: #3a3b44;
            border-bottom: 1px solid #f90;
            margin: 8px 0px;
            cursor: pointer;

            &:hover {
              border-bottom: 1.5px solid #b16a00;
            }
          }
        }
      }
    }
  }
`;
