import { Container } from "@mui/material";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Banner } from "../../Components/Banner";

export const OurWorks = () => {
  const data1 = {
    title: "Growing Sales for a Startup  Clothing Brand",
    subTitle:
      "While most digital marketing agencies excel at one or two channels, Eservz has deep expertise across all performance marketing services, which allows us to provide a rich digital marketing services offering.",
    btnText: "View Case Study",
    imgPath: "./images/Img1.png",
  };

  const data2 = {
    title: "Bringing Grocery store online",
    subTitle:
      "While most digital marketing agencies excel at one or two channels, Eservz has deep expertise across all performance marketing services, which allows us to provide a rich digital marketing services offering.",
    btnText: "View Case Study",
    imgPath: "./images/Img2.png",
  };

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
    <WorkWrapper>
      <Container maxWidth="lg" className="container">
        <img src="./images/Group 38636@3x.png" className="img-line-bg"></img>
        <img src="./images/Group 38637@3x.png" className="img-line-bg_2"></img>
        <img src="./images/Round Cube2@3x.png" className="img-cube_1"></img>
        <img src="./images/Ellipse 63@3x.png" className="img-dot_1"></img>
        <div className="title">Our Works</div>

        <div className="BannerCloth hidden">
          <Banner data={data1} direction={"regular"} />
        </div>
        <div className="BannerGrocery hidden">
          <Banner data={data2} direction={"reverse"} />
        </div>
      </Container>
    </WorkWrapper>
  );
};

const WorkWrapper = styled.div`
  .container {
    margin: auto;
    position: relative;
    .img-cube_1 {
      width: 30%;
      position: absolute;
      right: 0;

      @media (max-width: 900px) {
        display: none;
      }
      @media (max-width: 600px) {
        display: none;
      }
    }

    .img-line-bg {
      width: 80%;
      position: absolute;
      top: 0;
      left: 20%;

      @media (max-width: 900px) {
        display: none;
      }
      @media (max-width: 600px) {
        display: none;
      }
    }

    .img-line-bg_2 {
      width: 54%;
      position: absolute;
      top: 0%;
      left: 4%;

      @media (max-width: 900px) {
        display: none;
      }
      @media (max-width: 600px) {
        display: none;
      }
    }

    .img-dot_1 {
      position: absolute;
      width: 2%;
      top: 50%;
      right: 0%;
    }

    .title {
      font-family: Poppins-Bold;
      font-size: 120px;
      line-height: 1.5;
      letter-spacing: -0.5px;
      text-align: left;
      color: #303030;
      margin-bottom: 40px;
      margin-top: 40px;

      @media (max-width: 600px) {
        /* width:100%; */
        text-align: center;
        font-size: 80px;
        margin: 40px 20px;
      }
    }

    .BannerCloth {
      margin-bottom: 190px;

      @media (max-width: 600px) {
        margin-bottom: 100px;
      }
    }
  }
`;
