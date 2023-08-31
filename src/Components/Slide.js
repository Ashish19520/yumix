import React,{useEffect,useState} from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

//@ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Container } from "@mui/material";
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import {  clients} from "../actions/posts"
import { useSelector } from "react-redux/es/exports"
import { baseUrl } from "../api/api";

const PrevArrow = ({ onClick }) => (
  <div
    className="prev-arrow"
    onClick={() => {
      onClick();
    }}
  >
    <FaChevronLeft />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="next-arrow"
    onClick={() => {
      onClick();
    }}
  >
    <FaChevronRight />
  </div>
);

export const Slide = () => {
  const response=useSelector((state)=>state?.posts);
  const dispatch = useDispatch();
  const [images,setImages]=useState();
  
  useEffect(()=>{
    fetch();
  },[]);

  const fetch=async()=>{
    let data= await dispatch(clients());
    setImages(data?.data);
  }

  

  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  return (
    <SliderWrapper>
      <Container className="container">
        <Slider {...settings} className="slider_main">
        {/* {images?.[0]?.attributes?.clientImage?.data?.map((item,index) => (   */}
          {images?.map((item,index) => (  
            <div className="slide_item" key={index}>
              {/* {          console.log(item?.attributes?.clientImage?.data[0]?.attributes?.formats?.thumbnail?.url)} */}
              {/* {          console.log(item?.attributes?.url)} */}
              <img 
              src={baseUrl+item?.attributes?.clientImage?.data[0]?.attributes?.formats?.thumbnail?.url} 
              // src={baseUrl+item?.attributes?.url} 
              alt="img" className="imgs"/>
            </div>
          ))}
        </Slider>
      </Container>
    </SliderWrapper>
  );
};

const SliderWrapper = styled.div`
  .container {

    margin: auto;
    .slider_main {
      margin-left: -5px;
      margin-right: -5px;
      position: relative;

      .prev-arrow {
        font-size: larger;
        position: absolute;
        bottom: 80px;
        left: -40px;
        cursor: pointer;
        z-index: 1;

        @media (max-width: 1100px) {
          display: none;
        }
        @media (max-width: 600px) {
          display: block;
          left: 0;
          bottom: 30px;
        }
      }
      .next-arrow {
        font-size: larger;
        position: absolute;
        bottom: 80px;
        right: 0;
        cursor: pointer;
        @media (max-width: 1100px) {
          display: none;
        }
        @media (max-width: 600px) {
          display: block;
          right: -5%;
          bottom: 30px;
        }
      }
    }

    .slide_item {
      display: flex;
      justify-content: flex-end;
      align-items: flex-center;
      height:auto;
  
      img {
        align-self: baseline;
       width: 100%;
       height: auto;
      padding: 0px 10%;
        @media (max-width: 600px) {
          padding: unset;
          width: 100%;
          height:auto;
          gap:15px;
        }
        
      }
    }
  }
`;
