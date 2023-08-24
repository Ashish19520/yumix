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
  console.log(images?.[0]?.attributes?.clientImage?.data?.[0]?.attributes?.formats?.thumbnail?.url);
  
  

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: window.screen.width==600?3:4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        }
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <SliderWrapper>
      <Container className="container">
        <Slider {...settings} className="slider_main">
          {images?.data?.map((item,index) => (  
            <div className="slide_item" key={index}>
              <img src={item?.attributes?.clientImage?.data?.[0]?.attributes?.formats?.thumbnail?.url} alt="img" className="imgs"/>
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
      padding: 0px 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 200px;
        height: 200px;
        
        padding: 0px 10%;
        @media (max-width: 600px) {
          padding: unset;
          width: 100px;
          height:100px;
          gap:15px;
        }
        
      }
    }
  }
`;
