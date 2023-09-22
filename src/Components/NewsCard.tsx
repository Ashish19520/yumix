import { Container } from "@mui/material";
import React,{ useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ReactHtmlParser from 'react-html-parser';
import axios from 'axios';

export const NewsCard = (props: any) => {
  
  const navigate=useNavigate();
  // const [mainImage, setMainImage] = useState('');

  const openContent = ()=>{
    localStorage.setItem('data', JSON.stringify(props?.data));
    localStorage.setItem('counter', props?.page);
    navigate('/newsContent');
  }
  // useEffect(() => {
  //   const fetchMainImage = async () => {
  //     try {
  //       let headers = {
  //         "Content-Type": "application/json",
  //         "Accept": "application/json",
  //         "Accept-Encoding": "gzip, deflate, br",
  //         "User-Agent": "PostmanRuntime/7.32.2",
  //         "x-amzn-RateLimit-Limit": "1"

  //     };
  //       const response = await axios.get(`https://cors-anywhere.herokuapp.com/${props?.data?.link}`,{
  //         headers: headers
  //       });
  //       const htmlContent = response.data;
  //       const parsedHTML = ReactHtmlParser(htmlContent);
  //       const imageElements:any = parsedHTML.filter((element:any) => element.type === 'tag' && element?.name === 'img');

  //       if (imageElements.length > 0) {
  //         const mainImageUrl = imageElements[0].attribs.src;
  //         setMainImage(mainImageUrl);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchMainImage();
  // }, []);
  console.log("---",props)
  return (
    <NewsCardWrapper>
      {/* <Container maxWidth="lg" className="container">
      <div className="img-box">
  <img
    src={
      (props?.data?.["media:content"]?.[0]?.["$"]?.url) ||
      "../images/Rectangle first.png"
    }
    alt="someimg"
    height="180px"
    width="180px"
  />
</div>


        <div className="title">
          <p>{props?.data?.title[0]?.length>40?props?.data?.title[0].substring(0, 40)+"":props?.data?.title[0]}</p>
        <p style={{color:"purple",cursor:"pointer"}} onClick={openContent}>Read more...</p>
        </div>
      
      </Container> */}
      <Container maxWidth="lg" className="container">
      <div className="img-box">
  <img
    src={
      (props?.data?.image) ||
      "../images/Rectangle first.png"
    }
    alt="someimg"
    height="180px"
    width="180px"
  />
</div>


        <div className="title">
          <p>{props?.data?.title[0]?.length>40?props?.data?.title[0].substring(0, 40)+"":props?.data?.title[0]}</p>
        <p style={{color:"purple",cursor:"pointer"}} onClick={openContent}>Read more...</p>
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
