import { Container } from "@mui/material";
import React, { useEffect } from "react";
import styled from "styled-components";

export const OurApproach = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Enterin into zone");
          // entry.target.classList.add("show");

          document
            .querySelector(".icons-zoom")
            ?.classList.add("animate__animated");
          document
            .querySelector(".icons-zoom")
            ?.classList.add("animate__backInLeft");
          // document.querySelector(".icons-zoom")?.classList.add("animate__delay-1s");
        } else {
          console.log("exit into zone");
          // entry.target.classList.remove("show");

          document
            .querySelector(".icons-zoom")
            ?.classList.remove("animate__backInLeft");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".banner");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <MidBanner>
      <Container maxWidth="lg" className="container">
        <div className="banner">
          <h2>Our Approach</h2>
          <div className="icons-zoom">
            <div className="icons">
              <div  className="singleicon">
                <img className="ig" id="stl1" src="./images/A1.png"></img>
                <p>Schedule a Meeting</p>
              </div>

              <div className="singleicon">
                <img className="ig" src="./images/A2.png"></img>
                <p>Onboarding Process</p>
              </div>

              <div className="singleicon">
                <img className="ig" src="./images/A3.png"></img>
                <p>Hire your amazon expert</p>
              </div>

              <div className="singleicon">
                <img className="ig" src="./images/A4.png"></img>
                <p>Manage your business</p>
              </div>

              <div className="singleicon">
                <img className="ig" src="./images/A5.png"></img>
                <p className="para">Focus on strategies and growth</p>
              </div>
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

  @media (max-width: 600px) {
    padding: 40px 0px 0px 0px;
  }

  .container {
    margin: auto;

    /* .hidden {
      opacity: 0;
      filter: blur(5px);
      transform: translateX(-100%);
      transition: all;
    } */

    @media (prefers-reduced-motion) {
      .hidden {
        transition: none;
      }
    }
    .show {
      opacity: 1;
      filter: blur(0);
      transform: translateX(0%);
      transition: all 3s;
    }

    .banner {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;

      h2 {
        font-family: Poppins-semiBold;
        font-size: 32px;
        font-weight: 600;
        line-height: 1.31;
        letter-spacing: 0.25px;
        color: #3a3b44;
        margin-bottom: 45px;

        @media (max-width: 600px) {
          font-size: 16px;
          text-align: left !important;
          
        }
      }

      .icons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
  

        @media (max-width: 900px) {
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 600px) {
          flex-direction: column;
          width: 100%;
        }
        #stl1{
          width:180px;
          @media (max-width: 600px) {
           
            width: 220px;
          }
        }
        .singleicon {
          padding: 0px 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
          transition: all 0.2s ease-in-out;
          height:"190px";
          

          @media (max-width: 600px) {
            flex-direction: row;
            padding-bottom: 40px;
            height:"150px";
            width:"180px";

            &:nth-child(2) {
              transition-delay: 400ms;
              flex-direction: row-reverse;
            }
            &:nth-child(3) {
              transition-delay: 800ms;
            }
            &:nth-child(4) {
              transition-delay: 200ms;
              flex-direction: row-reverse;
            }
            &:nth-child(5) {
              transition-delay: 500ms;
            }

           
          }

          &:nth-child(2) {
            transition-delay: 400ms;
          }
          &:nth-child(3) {
            transition-delay: 800ms;
          }
          &:nth-child(4) {
            transition-delay: 200ms;
          }
          &:nth-child(5) {
            transition-delay: 500ms;
          }

          &:last-of-type {
            margin-right: unset;
          }

          &:hover {
            transform: scale(1.1);
          }

          img {
            width: 150px;
            height: 150px;
            margin-bottom: 20px;
            @media (max-width:600px){
              padding: 0px 20px;
              width: 185px;
              height:150px;
            }
            /* width:100%; */
          }

          ig{
            // width: 151px;
            // height: 118px;
          }

          p {
            font-family: Montserrat;
            font-size: 16px;
            max-width: 65%;
            line-height: 1.5;
            letter-spacing: 0.25px;
            text-align: center;
            color: #383838;

            @media (max-width: 600px) {
              font-size: 16px;
              margin-bottom: 20px;
              padding: 0px 20px;
            }
          }

          .para {
            width: 60%;
          }
        }
      }
    }
  }
`;
