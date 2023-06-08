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

const data = [
  {
    stars: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    name: "Jerome Bell",
    designation: "Marketing Coordinator",
    images: "./images/Avatar Image.png",
  },
  {
    stars: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    name: "Cody Fisher",
    designation: "President of Sales",
    images: "./images/Avatar Image.png",
  },
  {
    stars: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    name: "Robert Fox",
    designation: "Web Designer",
    images: "./images/Avatar Image.png",
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
  const response=useSelector((state:any)=>state?.posts?.testimonials);
  const dispatch: Dispatch<any> = useDispatch();


  useEffect(()=>{
    dispatch(testimonialPlay())
  },[])
  console.log("--------",response)
  return (
    <Users>
      <Container maxWidth="lg" className="container">
        <div className="aboutus">
          <div className="info">
            <div className="title">What people say about us</div>
            <div className="subTitle">See what people say about us</div>
          </div>
          <motion.div className="cards">
            {/* {data.map((d) => (
              <motion.div
                initial={{ opacity: 0, scale: 0, x: 100 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition= {{duration: 0.6}}
                // viewport={{once:true}}
              >
                <Card
                  title={d.title}
                  stars={d.stars}
                  images={d.images}
                  name={d.name}
                  designation={d.designation}
                />
              </motion.div>
            ))} */}

            <VideoSlide />

          </motion.div>
        </div>
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
            text-align: left;

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
            text-align: left;
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
