import { Container } from "@mui/material";
import React, { useEffect } from "react";
import styled from "styled-components";

export const Tool = () => {
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         console.log("Entering into zone");
  //         // entry.target.classList.add("animate__animated");
  //         // entry.target.classList.add("animate__backInDown")

  //         document
  //           .querySelector(".images-tools-bounce1")
  //           ?.classList.add("animate__animated");

  //         document
  //           .querySelector(".images-tools-bounce1")
  //           ?.classList.add("animate__bounceIn");
  //         // document.querySelector(".images-tools-bounce1")?.classList.add("animate__delay-1s");

  //         document
  //           .querySelector(".images-tools-bounce2")
  //           ?.classList.add("animate__animated");
  //         document
  //           .querySelector(".images-tools-bounce2")
  //           ?.classList.add("animate__bounceIn");
  //         // document.querySelector(".images-tools-bounce2")?.classList.add("animate__delay-1s");

  //         document
  //           .querySelector(".images-tools-bounce3")
  //           ?.classList.add("animate__animated");
  //         document
  //           .querySelector(".images-tools-bounce3")
  //           ?.classList.add("animate__bounceIn");
  //         // document.querySelector(".images-tools-bounce3")?.classList.add("animate__delay-1s");
  //       }
  //       // else {
  //       //   console.log("exit into zone");
  //       //   document
  //       //     .querySelector(".images-tools-bounce1")
  //       //     ?.classList.remove("animate__bounceIn");

  //       //     document
  //       //     .querySelector(".images-tools-bounce2")
  //       //     ?.classList.remove("animate__bounceIn");

  //       //     document
  //       //     .querySelector(".images-tools-bounce3")
  //       //     ?.classList.remove("animate__bounceIn");
  //       // }
  //     });
  //   });

  //   const hiddenElements = document.querySelectorAll(".outter");
  //   hiddenElements.forEach((el) => observer.observe(el));
  // }, []);

  return (
    <div>
      <ToolDiv>
        <Container maxWidth="lg" className="container">
          <div className="outter">
            <img src="./images/FullRock2@3x.png" className="fRock-img-1"></img>
            <div className="title">
              Resources that'll help scale your business
            </div>
            <div className="tool">
              {/* <img src="./images/Group 38634@3x.png" className="img-bg-2"></img> */}
              <img src="./images/Group 38635@3x.png" className="img-bg-1"></img>
              <div className="box hoverimg">
                <div className="fba">
                  <img
                    src="./images/1 - Brisa Receiving Her Package.png"
                    className="images-tools-bounce1"
                  ></img>
                </div>
                <div className="info">
                  <div className="infoTitle">FBA Calculator</div>
                  <div className="subTitle">
                    FBM or FBA? Choose what’s right for your Amazon products.
                  </div>
                  <div className="link">RUN CALCULATOR</div>
                </div>
              </div>

              <div className="box hoverimg">
                <div className="lq">
                  <img
                    src="./images/14 - Brisa doing Checklist.png"
                    className="images-tools-bounce2"
                  ></img>
                </div>
                <div className="info">
                  <div className="infoTitle">Listing Quality</div>
                  <div className="subTitle">
                    Increase your Amazon sales with optimised listing.
                  </div>
                  <div className="link">RUN CALCULATOR</div>
                </div>
              </div>
              <div className="box hoverimg">
                <div className="dtc">
                  <img
                    src="./images/18 - Lucas Floats with His Laptop.png"
                    className="images-tools-bounce3"
                  ></img>
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

  @media (max-width: 600px) {
    padding: 40px 0px;
  }

  .container {
    margin: auto;

    .hoverimg {
      &:hover {
        img {
          transition: all 0.2s ease-in-out !important;

          &:hover {
            transform: scale(1.1) rotate(3deg) !important;
          }
        }
      }
    }

    .outter {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;

      .fRock-img-1 {
        position: absolute;
        width: 10%;
        left: 0%;
        top: -40px;
      }

      .title {
        font-size: 32px;
        font-weight: 600;
        line-height: 1.31;
        letter-spacing: 0.25px;
        color: #3a3b44;
        margin-bottom: 50px;

        @media (max-width: 600px) {
          text-align: center;
          font-size: 25px;
        }
      }
      .tool {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        position: relative;

        .img-bg-2 {
          position: absolute;
          width: 80%;
          z-index: 0;
        }

        .img-bg-1 {
          width: 30%;
          position: absolute;
          z-index: 0;
          right: -8%;
          top: -51.5%;
          @media (max-width: 1100px) {
            display: none;
          }
          @media (max-width: 900px) {
            display: none;
          }
          @media (max-width: 600px) {
            display: none;
          }
        }

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
              transition: all 0.2s ease-in-out !important;

              &:hover {
                transform: scale(1.1) rotate(3deg) !important;
              }
            }
          }
          .lq {
            aspect-ratio: 1;
            border-radius: 500px;
            background-color: #ffe9ce;

            img {
              width: 100%;
              transition: all 0.2s ease-in-out !important;

              &:hover {
                transform: scale(1.1) rotate(-3deg) !important;
              }
            }
          }
          .dtc {
            aspect-ratio: 1;
            border-radius: 500px;
            background-color: #e6e2ff;
            img {
              width: 100%;

              transition: all 0.2s ease-in-out !important;

              &:hover {
                transform: scale(1.1) rotate(3deg) !important;
              }
            }
          }
        }

        .info {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          &:hover ~ .box {
            img {
              transition: all 0.2s ease-in-out !important;

              &:hover {
                transform: scale(1.1) rotate(-3deg) !important;
              }
            }
          }
          .infoTitle {
            font-family: Poppins-semiBold;
            font-size: 18px;
            font-weight: 600;
            line-height: 1.33;
            color: #3a3b44;
            margin: 8px 0px;

            @media (max-width: 600px) {
              font-size: 16px;
              text-align: center;
            }
          }
          .subTitle {
            font-family: Montserrat;
            font-size: 16px;
            line-height: 1.5;
            letter-spacing: 0.25px;
            text-align: center;
            color: #828490;
            margin: 8px 0px;
            @media (max-width: 600px) {
              font-size: 12px;
              text-align: center;
            }
          }
          .link {
            font-family: Montserrat-SemiBold;
            font-size: 14px;
            font-weight: 600;
            line-height: 1.43;
            letter-spacing: 1px;
            text-align: left;
            color: #3a3b44;
            border-bottom: 1px solid #f90;
            margin: 8px 0px;
            cursor: pointer;

            @media (max-width: 600px) {
              font-size: 10px;
              text-align: center;
              margin: 2px 0px;
            }

            &:hover {
              border-bottom: 1.5px solid #b16a00;
            }
          }
        }
      }
    }
  }
`;
