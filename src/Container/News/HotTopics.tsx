import { Container } from "@mui/material";
import React,{useEffect}from "react";
import styled from "styled-components";

export const HotTopics = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Entering into zone");
          entry.target.classList.add("animate__animated");
          entry.target.classList.add("animate__fadeIn");
        } 
        // else {
        //   console.log("exit into zone");
        //   entry.target.classList.remove("animate__fadeIn");
        // }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <HotTopicsWrapper>
      <Container maxWidth="lg" className="container hidden">
        <img src="./images/Ellipse 63@3x.png" className="img-dot_1"></img>
        <img src="./images/Ellipse 65@3x.png" className="img-dot_2"></img>
        <div className="hero-title">Hot Topics</div>
        <div className="topicContainer">
          <div className="img-box">
            <img src="./images/Image@3x.png"></img>
            <div className="img-text">
              <div className="title">
                Massa tortor nibh nulla condimentum imperdiet scelerisque...
              </div>
              <div className="subtitle">
                <p>2 Hours Ago</p>
                <p>CNN Indonesia</p>
              </div>
            </div>
          </div>
          <div className="text-box">
            <div className="title">
              Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare
              adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec
              vivamus pharetra. Velit, dui, egestas nisi, elementum mattis
              mauris, magnis. Massa tortor nibh nulla condimentum imperdiet
              scelerisque. Massa tortor nibh nulla condimentum imperdiet
              scelerisque. Massa tortor nibh nulla condimentum imperdiet
              scelerisque...<span className="read-more">read more</span>
            </div>
            <div className="subtitle"></div>
          </div>
        </div>
      </Container>
    </HotTopicsWrapper>
  );
};
const HotTopicsWrapper = styled.div`
  .container {
    margin: auto;
    padding: 90px 0px;
    position: relative;

    .img-dot_1{
      position: absolute;
      width: 2%;
      top: 10%;
      right: 0%;
    }

    .img-dot_2{
      position: absolute;
      width: 4%;
      left: -4%;
      top:45%;
    }
    .hero-title {
      font-family: Poppins-Bold;
      font-size: 36px;
      font-weight: bold;
      text-align: left;
      color: #121221;
      margin-bottom: 26px;
      @media (max-width: 600px) {
        text-align: center;
      }
    }

    .topicContainer {
      display: flex;
      /* align-items: center; */

      @media (max-width: 600px) {
        flex-direction: column;
      }

      .img-box {
        width: 60%;
        position: relative;

        @media (max-width: 600px) {
          width: 100%;
        }

        img {
          width: 100%;
        }
        .img-text {
          position: absolute;
          top: 0;
          color: #f8f8f8;
          .title {
            margin-top: 150px;
            font-family: Poppins-Bold;
            font-size: 32px;
            line-height: 1.5;
            text-align: left;
            width: 80%;
            padding: 16px 25px;

            @media (max-width: 900px) {
              margin-top: 120px;
              font-size: 15px;
            }
            @media (max-width: 600px) {
              margin-top: 150px;
              font-size: 19px;
            }
          }
          .subtitle {
            display: flex;
            justify-content: start;
            font-family: Montserrat;
            font-size: 12px;
            line-height: 1.5;
            text-align: left;
            color: #f8f8f8;

            p {
              padding-left: 25px;
            }
          }
        }
      }
      .text-box {
        width: 40%;
        padding-left: 40px;

        @media (max-width: 600px) {
          width: 100%;
          margin-top: 20px;
        }

        .title {
          /* font-size: 18px;
          line-height: 1.8;
          font-family: Montserrat;
          letter-spacing: 0.25px;
          text-align: left;
          color: #444; */
        }
      }
    }
  }
`;
