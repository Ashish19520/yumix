import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Slide } from "../../Components/Slide";

export const HomepageScroll = () => {
  return (
    <Scroll>
      <Container maxWidth="lg" className="container">
        <h1 className="title">Brands / Companies we have worked with</h1>
        {
          //@ts-ignore
          <Slide className="slide"/>
        }
      </Container>
    </Scroll>
  );
};

const Scroll = styled.div`
  background-color: #fffcfc;
  .container {
    margin: auto;
    padding-bottom: 20px;
    padding-top: 60px;
    

    h1 {
      font-family: Poppins-Bold;
      font-size: 32px;
      /* font-weight: bold; */
      color: #3a3b44;
      margin-top: 40px;
      margin-bottom: 10px;
      text-align: center;
      @media (max-width: 600px) {
        text-align: center;
        font-size: 25px;
      }
    }

    .slide {
      margin-bottom: 40px;
      @media (max-width: 600px) {
        padding: 0 10px;
      }
    }
  }
`;
