import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
export const NewsContainer = () => {
  return (
    <NewsWrapper>
      <Container maxWidth="lg" className="container">
        <div className="news-wrapper">
          <div className="text-box">
            <div className="title">News</div>
            <div className="subtitle">
              World's Best News for insights from experts about solutions and
              progress in E-Commerce development.
            </div>
          </div>
          <div className="img-box">
            <img src="./images/Illustration (1).png"></img>
          </div>
        </div>
      </Container>
    </NewsWrapper>
  );
};

const NewsWrapper = styled.div`
  background: #fffcfc;
  .container {
    margin: auto;
    padding:40px 0px;

    .news-wrapper {
      display: flex;
      align-items: center;

      .text-box {
        width:50%;
        display: flex;
        flex-direction: column;

        .title {
          font-family: Poppins-Bold;
          font-size: 40px;
          font-weight: bold;
          line-height: 1.25;
          letter-spacing: 0.25px;
          text-align: left;
          color: #0b0720;
          margin-bottom:24px;
        }
        .subtitle {
          width:80%;
          font-family: Montserrat;
          font-size: 16px;
          line-height: 1.5;
          letter-spacing: 0.25px;
          text-align: left;
          color: #696969;
        }
      }

      .img-box{
        width:50%;
        padding-left:50px;
     

        img{
          width:75%;
        }

      }
    }
  }
`;
