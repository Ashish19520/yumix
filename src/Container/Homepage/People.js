import { Container } from "@mui/material";
import React,{useState,useEffect} from "react";
import styled from "styled-components";
import { Card } from "../../Components/Card";
import { motion } from "framer-motion";
import { VideoSlide } from "../../Components/VideoSlide";
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import {  testimonialPlay} from "../../actions/posts"
import { useSelector } from "react-redux/es/exports"
import  Carousel from 'react-elastic-carousel'


const data = [
  {
    thumb:"../images/thumb2.png",
   src:"../videos/Video Testimonial.mp4"
  },
  {
    thumb:"../images/thumb2.png",
    src:"../videos/Video Testimonial.mp4"
  },
  {
    thumb:"../images/thumb2.png",
    src:"../videos/Video Testimonial.mp4"
  },
  {
    thumb:"../images/thumb2.png",
    src:"../videos/Video Testimonial.mp4"
  },
  {
    thumb:"../images/thumb2.png",
    src:"../videos/Video Testimonial.mp4"
  },
  {
    thumb:"../images/thumb2.png",
    src:"../videos/Video Testimonial.mp4"
  },
  {
    thumb:"../images/thumb2.png",
    src:"../videos/Video Testimonial.mp4"
  },

];

export const People = () => {
  const cardContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const response=useSelector((state)=>state?.posts?.testimonials);
  const dispatch= useDispatch();
  const [videos,setVideos]=useState();


  useEffect(()=>{
    fetch();
  },[])

  const fetch=async()=>{
    let data=await dispatch(testimonialPlay());
    setVideos(data?.data)
  }
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

  
  return (
    <Users >
      <Container maxWidth="lg" className="container">
        <div className="aboutus">
          <div className="info">
            <div className="title">Client Testimonials</div>
            <div className="subTitle">Voices About Our Services</div>
          </div>
         
          <Carousel 
           breakPoints={breakPoints} 
          itemsToScroll={1} 
          itemsToShow={2}
           isRTL={false}
            className="carous">

            {videos?.map((d,index) => (
              // <video  loop poster={d?.thumb} height="500px" width="300px">
              //   <source src={d?.src} height="500px" width="300px" type="video/mp4" />
              // </video>
              <iframe  key={index} title="iframe" width="420" height="315"
                // src="https://www.youtube.com/embed/tgbNymZ7vqY"
                src={d?.attributes.t_url}
                
                >
              </iframe>
           
            ))}
             </Carousel>


        </div>
        {/* <VideoSlide items={response}/> */}
      </Container>
    </Users>
  );
};

const Users = styled.div`
  background: #fffcfc;
  padding: 75px 0px;

  @media (max-width: 600px) {
    padding: 40px 0px;
  }

  background-image: url("./images/Testimonials Bg.png");
  background-repeat: no-repeat;
  background-position: center;

  .container {
    margin: auto;

    .aboutus {
      .info {
        text-align: left;
        @media (max-width: 600px) {
          text-align: center;
        }
        .title {
          font-family: Poppins-semiBold;
          font-size: 32px;
          text-align: center;
          font-weight: 600;
          line-height: 1.31;
          letter-spacing: 0.25px;
          color: #3a3b44;
          margin-bottom: 16px;
          @media (max-width: 600px) {
            font-size: 16px;
            text-align: center;

        }
        }
        .subTitle {
          font-family: Montserrat;
          font-size: 16px;
          line-height: 1.5;
          letter-spacing: 0.25px;
          color: #3a3b44;
          text-align: center;
          /* margin-bottom: 64px; */
          margin-bottom: 40px;
          @media (max-width: 600px) {
            font-size: 14px;
            margin-bottom: 30px;
            text-align: center;
        }
        }
      }

      .cards {
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 600px) {
          width: 100%;
          flex-direction: column;
          margin-bottom: 20px;
        }
      }
  
    }
  }
`;
