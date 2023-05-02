// import { Container } from '@mui/system';
// import React from 'react'

//  const VideoSlide = () => {
//   return (
//     <Container />
//   )
// }

// export default VideoSlide;
import React from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

//@ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Container } from "@mui/material";
//@ts-ignore
import { DefaultPlayer as Video } from "react-html5video";

const PrevArrow: any = ({ onClick }: any) => (
  <div
    className="prev-arrow"
    onClick={() => {
      onClick();
    }}
  >
    <FaChevronLeft />
  </div>
);

const NextArrow: any = ({ onClick }: any) => (
  <div
    className="next-arrow"
    onClick={() => {
      onClick();
    }}
  >
    <FaChevronRight />
  </div>
);

export const VideoSlide = () => {
  //@ts-ignore
  console.log();
  const data = [
    {
      id: "1",
      src: "./videos/Video Testimonial.mp4",
      thumb: "./images/thumb2.png",
    },
    {
      id: "2",
      src: "./videos/WhatsApp Video 2023-04-29 at 7.32.14 AM.mp4",
      thumb: "./images/thumb4.png",
    },
  ];

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // responsive: [
    //   {
    //     breakpoint: 900,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       dots: false,
    //     }
    //   },
    // ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <SliderWrapper>
      <Container className="container">
        <Slider {...settings} className="slider_main">
          {data.map((d) => (
            <div className="slide_item">
              <Video autoplay loop poster={d.thumb} className="vid-slide">
                <source src={d.src} type="video/webm" />
              </Video>
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

      @media(max-width:1100px){
        display: none;
      }

      .prev-arrow {
        font-size: larger;
        position: absolute;
        bottom: 50%;
        left: 0%;
        cursor: pointer;
        z-index: 1;

        @media (max-width: 1100px) {
          display: none;
        }
        @media (max-width: 600px) {
          display: block;
          left: 0;
          bottom: 22px;
        }
      }
      .next-arrow {
        font-size: larger;
        position: absolute;
        bottom: 50%;
        right: 0%;
        cursor: pointer;
        @media (max-width: 1100px) {
          display: none;
        }
        @media (max-width: 600px) {
          display: block;
          bottom: 22px;
          right: -5%;
        }
      }
    }

    /* .slide_item {
      padding: 0px 20px;
      display: flex;
      align-items: center;
      justify-content: center;

      .vid-slide {
        width: 80%;
        align-items: center;

        @media(max-width:600px){
            width: 100%;
        }
      } */
      

    .slick-slide > div {
      display: grid;
      place-items: center;
      width: 55%;
      margin-top: 50px;
      margin: auto;
      /* height: 500px; */
      padding: 0px;
      @media (max-width: 1100px) {
        display: unset;
        place-items: unset;
        width: unset;
        margin-top: unset;
        margin: unset;
        /* height: 500px; */
        padding: unset;
      }
    }

    .vid-slide {
      @media (max-width: 600px) {
        width: 20%;
      }
    }

    .rh5v-Volume_icon {
      height: 29px;
      width: 29px;
    }

    img {
      width: 100%;
      padding: 0px 10%;
      @media (max-width: 600px) {
        padding: unset;
        width: 150%;
      }
    }
  }
`;
