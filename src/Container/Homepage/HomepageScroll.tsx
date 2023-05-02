import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Slide } from "../../Components/Slide";

export const HomepageScroll = () => {
  return (
    <Scroll>
      <Container maxWidth="lg" className="container">
        <h2 className="title">Brands / Companies we have worked with</h2>
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

    /* @media(max-width:600px){
      padding-top: 40px;
    }
     */

    h2 {
      font-family: Poppins-Bold;
      font-size: 32px;
      /* font-weight: bold; */
      color: #3a3b44;
      margin-top: 40px;
      margin-bottom: 10px;
      text-align: center;
      @media (max-width: 600px) {
        text-align: center;
        font-size: 16px;
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
