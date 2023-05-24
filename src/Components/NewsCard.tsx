import { Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const NewsCard = (props: any) => {
  
  const navigate=useNavigate();

  const openContent = ()=>{
    localStorage.setItem('data', JSON.stringify(props?.data));
    navigate('/newsContent');
  }
  return (
    <NewsCardWrapper>
      <Container maxWidth="lg" className="container">
        <div className="img-box">
          <img src={(props?.data.image[0].$.src)?(props?.data.image[0].$.src):"../images/Rectangle first.png"} 

          height="180px" width="180" alt="img"></img>
        </div>


        <div className="title">
          <p>{props?.data?.title[0]?.length>40?props.data.title[0].substring(0, 40)+"...":props?.data?.title[0]}</p>
        <p style={{color:"purple",cursor:"pointer"}} onClick={openContent}>read more...</p>
        </div>
       
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
