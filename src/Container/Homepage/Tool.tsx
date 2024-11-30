import { Container } from "@mui/material";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
  const navigate=useNavigate();

const onClickHandlar=()=>{
  navigate("/home/fbaCalculator")
}
const onClickListingHandlar=()=>{
  navigate("/home/listingCalculator")
}

const onClickCodeDescriptionHandlar=()=>{
  navigate("/home/descriptionToCode")
}
  return (
    <div>
      <ToolDiv>
        <Container maxWidth="lg" className="container">
          <div className="outter">
            <img src="./images/FullRock2@3x.png" className="fRock-img-1"></img>
            <h2 className="title" style={{marginLeft:"8rem"}}>  How We Drive Your Growth
            </h2>
            <div className="tool">
              {/* <img src="./images/Group 38634@3x.png" className="img-bg-2"></img> */}
              <img src="./images/Group 38635@3x.png" className="img-bg-1"></img>
              <div className="box hoverimg">
                <div className="fba">
                  <img
                    src="./yumix/11.png"
                    className="images-tools-bounce1"
                  ></img>
                </div>
                <div className="info">
                  <div className="infoTitle">Discovery & Consultation </div>
                  <div className="subTitle">
                  We begin by understanding your business, challenges, and goals. This phase sets the foundation for all the solutions we propose.
                  </div>
                  {/* <div className="link" onClick={onClickHandlar}>RUN CALCULATOR</div> */}
                </div>
              </div>

              <div className="box hoverimg">
                <div className="lq">
                  <img
                    src="./yumix/12.png"
                    className="images-tools-bounce2"
                  ></img>
                </div>
                <div className="info">
                  <div className="infoTitle">Solution Design & Development</div>
                  <div className="subTitle">
                  we design tailored solutions that are both innovative and practical, leveraging the latest technologies.                  </div>
                  {/* <div className="link" onClick={onClickListingHandlar}>CHECK LISTING QUALITY</div> */}
                </div>
              </div>
              <div className="box hoverimg">
                <div className="dtc">
                  <img
                    src="./yumix/14.png"
                    className="images-tools-bounce3"
                  ></img>
                </div>
                <div className="info">
                  <div className="infoTitle"> Implementation & Testing</div>
                  <div className="subTitle">
                  We implement your solutions, ensuring they are thoroughly tested and optimized for performance, security, and scalability.                  </div>
                  {/* <div className="link" onClick={onClickCodeDescriptionHandlar}>CONVERT NOW</div> */}
                </div>
                
              </div>
              <div className="box hoverimg">
                <div className="dtc">
                  <img
                    src="./yumix/15.png"
                    className="images-tools-bounce3"
                  ></img>
                </div>
                <div className="info">
                  <div className="infoTitle"> Launch & Support </div>
                  <div className="subTitle">
                  Once your solution is deployed, we provide ongoing support, monitoring, and updates to ensure continued success and growth.
                 </div>
                  {/* <div className="link" onClick={onClickCodeDescriptionHandlar}>CONVERT NOW</div> */}
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
        .fba {
          img {
            transition: all 0.2s ease-in-out !important;

            &:hover {
              transform: scale(1.1) rotate(3deg) !important;
            }
          }
        }
      }
    }

    .outter {
      display: flex;
      flex-direction: column;
     
      position: relative;

      .fRock-img-1 {
        position: absolute;
        width: 10%;
        left: 0%;
        top: -40px;

        @media(max-width:600px){
          width: 15%;
          top: -5%;
        }

        
      }

      .title {
        text-align: center !important;
        max-width: 40%;
        font-size: 32px;
        font-weight: 600;
        line-height: 1.31;
        letter-spacing: 0.25px;
        color: #3a3b44;
        margin-bottom: 50px;

        @media (max-width: 900px) {
          font-size: 25px;
          max-width: 90%;
        }
        @media (max-width: 600px) {
          font-size: 16px;
          max-width: 90%;
        }
      }
      .tool {
        display: flex;
        gap:1rem;

        justify-content: space-between;
        align-items: flex-start;
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

        .hoverimg {
          &:hover {
            .fba {
              transition: all 0.2s ease-in-out !important;
              img {
                transform: scale(1.1) rotate(3deg) !important;
              }
            }

            .lq {
              transition: all 0.2s ease-in-out !important;
              img {
                transform: scale(1.1) rotate(-3deg) !important;
              }
            }

            .dtc {
              transition: all 0.2s ease-in-out !important;
              img {
                transform: scale(1.1) rotate(3deg) !important;
              }
            }
          }
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
              width: 100%;
              transition: all 0.2s ease-in-out !important;

              &:hover {
                transform: scale(1.1) rotate(3deg) !important;
              }
              @media (max-width: 600px) {
                width: 80%;
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
              width: 90%;

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
          justify-content: flex-start;

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
            font-size: 16px;
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
            font-size: 14px;
            line-height: 1.5;
            letter-spacing: 0.25px;
            text-align: left;
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
