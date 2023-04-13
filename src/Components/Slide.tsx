import React from "react";
import SwiftSlider from "react-swift-slider";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { FaChevronLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

//@ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

export const Slide = () => {
  const data = [
    {
      id: "1",
      src: "https://media.mfbproject.co.za/repos/2017_alfa-romeo_stelvio_leaked_02.jpg",
    },
    {
      id: "2",
      src: "https://media.mfbproject.co.za/repos/2017_alfa_romeo_stelvioquadrifoglio_official_09.jpg",
    },
    {
      id: "3",
      src: "https://media.mfbproject.co.za/repos/2018-alfa-romeo-stelvio-quadrifoglio-specs-photos-speed-2.jpg",
    },
    {
      id: "4",
      src: "https://media.mfbproject.co.za/repos/alfa-romeo-giulia-quadrifoglio-2017-us-wallpapers-and-hd-images-13.jpg",
    },
    {
      id: "5",
      src: "https://media.mfbproject.co.za/repos/ARWP_Infra_Desk_1920_1080_Quad.png",
    },
  ];

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
      <h2> Multiple items </h2>
      <Slider {...settings}>
        {[1, 2, 3, 4, 5, 6].map((d) => (
          <>
            <img src="./images/dummy1.png"></img>
          </>
        ))}
      </Slider>
    </div>
  );
};
