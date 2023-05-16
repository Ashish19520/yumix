import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NewsCard = (props: any) => {
  return (
    <NewsCardWrapper>
      <Container maxWidth="lg" className="container">
        <div className="img-box">
          <img src={(props?.data.urlToImage)?(props?.data?.urlToImage):"../images/Rectangle first.png"} 

          height="180px" width="180" alt="img"></img>
        </div>
        <Link to={""}>

        <div className="title">{props?.data?.title?.length>40?props.data.title.substring(0, 40)+"...":props?.data?.title}<Link to="">read more</Link></div>
        </Link>
        {/* <div className="subtitle">
          <p>{props?.data?.publishedAt}</p>
          <p>{props?.data?.source?.name}</p>
        </div> */}
      </Container>
    </NewsCardWrapper>
  );
};

const NewsCardWrapper = styled.div`


  .container {
    margin: auto;
    .img-box {
      img {
        width:100%;
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
      line-height: 1.33;
      text-align: left;
      color: #121221;
      margin-bottom: 20px;
      @media (max-width: 600px) {
              font-size: 12px;
              margin-bottom: 10px;
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
