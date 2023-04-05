import { Container } from "@mui/material";
import React from "react";
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

  return (
    <WorkWrapper>
      <Container maxWidth="lg" className="container">
        <div className="title">Our Works</div>
        <div className="BannerCloth">
        <Banner data={data1} direction={"regular"}/>
        </div>
        <div className="BannerGrocery">
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
