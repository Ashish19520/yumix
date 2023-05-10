import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";

export const ToolBanner = () => {
  return (
    <Tool>
      <Container maxWidth="lg" className="container">
        <div className="outter">
          <h2>Resources  that'll help scale your business</h2>
          <div className="tools">
            <div className="fba">
              <img src="./images/1 - Brisa Receiving Her Package.png"></img>
              <div className="info">
                <p className="heading">FBA Calculator</p>
                <p className="mid">
                  FBM or FBA? Choose what's right for your Amazon products.
                </p>
                <p className="link">RUN CALCULATOR</p>
              </div>
            </div>
            <div className="lq">
              <img src="./images/14 - Brisa doing Checklist.png"></img>
              <div className="info">
                <p className="heading">FBA Calculator</p>
                <p className="mid">
                  FBM or FBA? Choose what’s right for your Amazon products.
                </p>
                <p className="link">RUN CALCULATOR</p>
              </div>
            </div>
            <div className="dtc">
              <img src="./images/18 - Lucas Floats with His Laptop.png"></img>
              <div className="info">
                <p className="heading">FBA Calculator</p>
                <p className="mid">
                  FBM or FBA? Choose what’s right for your Amazon products.
                </p>
                <p className="link">RUN CALCULATOR</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Tool>
  );
};

const Tool = styled.div`
  /* background-color: aliceblue; */
  .container {
    margin: auto;

    .outter {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h2 {
        font-size: 32px;
        font-weight: 600;
        line-height: 1.31;
        letter-spacing: 0.25px;
        color: #3a3b44;
        margin-bottom: 140px;
      }

      .tools {
        display: flex;
        /* align-items: center; */
        justify-content: space-between;

        width: 100%;

        .fba {
          width: 280px;
          height: 280px;
          border-radius: 500px;
          background-color: #eff5fc;

          img {
            width: 100%;
            height: 286px;
            object-fit: contain;

            &:hover {
            }
          }

          .info {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            p {
              margin: 7px 0px;
            }

            .heading {
              font-size: 18px;
              font-weight: 600;
              line-height: 1.33;
              color: #3a3b44;
            }

            .mid {
              width: 297px;
              font-size: 16px;
              line-height: 1.5;
              letter-spacing: 0.25px;
              text-align: center;
              color: #828490;
            }

            .link {
              border-bottom: 1.4px solid #f90;
              font-size: 14px;
              font-weight: 600;
              line-height: 1.43;
              letter-spacing: 1px;
              text-align: left;
              color: #3a3b44;
            }
          }
        }

        .lq {
          width: 280px;
          height: 280px;
          border-radius: 500px;
          background-color: #e6e2ff;

          img {
            width: 100%;
            height: 258px;
            object-fit: contain;

            &:hover {
            }
          }

          .info {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 22px;

            p {
              margin: 7px 0px;
            }

            .heading {
              font-size: 18px;
              font-weight: 600;
              line-height: 1.33;
              color: #3a3b44;
            }

            .mid {
              width: 297px;
              font-size: 16px;
              line-height: 1.5;
              letter-spacing: 0.25px;
              text-align: center;
              color: #828490;
            }

            .link {
              border-bottom: 1.4px solid #f90;
              font-size: 14px;
              font-weight: 600;
              line-height: 1.43;
              letter-spacing: 1px;
              text-align: left;
              color: #3a3b44;
            }
          }
        }

        .dtc {
          width: 280px;
          height: 280px;
          border-radius: 500px;
          background-color: #ffe9ce;

          img {
            width: 100%;
            height: 276px;
            object-fit: contain;

            &:hover {
            }
          }

          .info {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-top: 4px;

            p {
              margin: 7px 0px;
            }

            .heading {
              font-size: 18px;
              font-weight: 600;
              line-height: 1.33;
              color: #3a3b44;
            }

            .mid {
              width: 297px;
              font-size: 16px;
              line-height: 1.5;
              letter-spacing: 0.25px;
              text-align: center;
              color: #828490;
            }

            .link {
              border-bottom: 1.4px solid #f90;
              font-size: 14px;
              font-weight: 600;
              line-height: 1.43;
              letter-spacing: 1px;
              text-align: left;
              color: #3a3b44;
            }
          }
        }
      }
    }
  }
`;
