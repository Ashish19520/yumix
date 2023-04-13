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
    imgPath:"./images/Img1.png"
  };

  const data2 = {
    title: "Bringing Grocery store online",
    subTitle:
      "While most digital marketing agencies excel at one or two channels, Eservz has deep expertise across all performance marketing services, which allows us to provide a rich digital marketing services offering.",
    btnText: "View Case Study",
    imgPath:"./images/Img2.png"
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
        <div className="title">Our Works</div>
        <div className="BannerCloth hidden">
        <Banner data={data1} direction={"regular"}/>
        </div>
        <div className="BannerGrocery hidden">
        <Banner data={data2} direction={"reverse"}/>
        </div>
      </Container>
    </WorkWrapper>
  );
};

const WorkWrapper = styled.div`
  .container {
    margin: auto;

    .title {
      font-size: 120px;
      font-weight: bold;
      line-height: 1.5;
      letter-spacing: -0.5px;
      text-align: left;
      color: #303030;
      margin-bottom:40px;
      margin-top:40px;

      @media (max-width:600px){
      /* width:100%; */
      text-align:center;
      font-size: 80px;
      margin:40px 20px;
      
}
  
    }

    .BannerCloth{
        margin-bottom:190px;

        @media (max-width:600px){
            margin-bottom:100px;
        }
    }

  }
`;
