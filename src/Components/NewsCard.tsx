import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NewsCard = (props: any) => {
  console.log(props.data);
  return (
    <NewsCardWrapper>
      <Container maxWidth="lg" className="container">
        <div className="img-box">
          <img src={props.data.imgsrc}></img>
        </div>
        <Link to={""}>
        <div className="title">{props.data.newsTitle}</div>
        </Link>
        <div className="subtitle">
          <p>{props.data.time}</p>
          <p>{props.data.source}</p>
        </div>
      </Container>
    </NewsCardWrapper>
  );
};

const NewsCardWrapper = styled.div`


  .container {
    margin: auto;
    .img-box {
      img {
        width:80%;
        object-fit: contain;
        border-radius: 8px;
        background-color: #c4c4c4;
      }
    }
    a{
        text-decoration: none;
      }
    .title {
      font-family: Poppins-semiBold;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.33;
      text-align: left;
      color: #121221;
      margin-bottom: 20px;
      @media (max-width: 600px) {
              font-size: 15px;
          }
     
    }
    .subtitle {
      display: flex;
      justify-content: start;

      font-family: Montserrat;
      font-size: 14px;
      line-height: 1.29;
      letter-spacing: 0.1px;
      text-align: left;
      color: #949494;

      @media (max-width: 600px) {
              display: none;

          }

      p {
        &:last-of-type{
            padding-left: 25px;
        }
      }
    }
  }
`;
