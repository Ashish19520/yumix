import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroSectionAnalytics = () => {
  const typingContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };
  const typingText = {
    hidden: { opacity: 0, y: "-20px" },
    show: {
      opacity: 1,
      y: "0",
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const explainProduct = {
    hidden: { opacity: 0, y: "-20px" },
    show: {
      opacity: 1,
      y: "0",
      transition: {
        delay: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const imgProduct1 = {
    hidden: {
      opacity: 0,
      y: "200px",
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const lines = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <ServicesWrapper>
      <Container maxWidth="lg" className="container">
        <div className="hero">
          <motion.img variants={lines}  initial="hidden" animate="show" src="../images/Group 38625@3x.png" className="img-line_bg"></motion.img>
          {/* <motion.img variants={lines}  initial="hidden" animate="show" src="../images/Vector 13@3x.png" className="img-line_bg_2"></motion.img> */}
          <motion.img variants={lines}  initial="hidden" animate="show" src="../images/Round Cube2@3x.png" className="img-cube_1"></motion.img>
          <motion.img variants={lines}  initial="hidden" animate="show" src="../images/FullRock1@3x.png" className="img-rock_1"></motion.img>
          <div className="text-wrapper">
          <motion.h1 variants={typingContainer} initial="hidden" animate="show">
            {Array.from("Analytics").map((word, i) => (
              <motion.span key={i} variants={typingText}>
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.div
            variants={explainProduct}
            initial="hidden"
            animate="show"
            className="subTitle"
          >
          Connecting data to decisions

          </motion.div>
          </div>
          <motion.div
            variants={imgProduct1}
            initial="hidden"
            animate="show"
            className="img-block"
          >
            <img
              src="../images/15 - Lucas with Jetpack.png"
              className="subject-img"
            ></img>
            <img
              src="../images/Ellipse 75@3x.png"
              className="bg-img"
            ></img>
          </motion.div>
        </div>
        
      </Container>
    </ServicesWrapper>
  );
};

const ServicesWrapper = styled.div`
  background: #fffcfc;
  .container {
    margin: auto;
    padding: 10px 0px;
    /* background-image: url("../images/Hero Bg.png");
    background-repeat: no-repeat;
    background-position: 30% 80%;

    @media (max-width: 1100px) {
      background-image: unset;
    } */

    .hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;

      @media(max-width:600px){
        flex-direction: column-reverse;
      }

      .img-cube_1 {
        width: 15%;
        right: 6%;
        top: 20%;
        position: absolute;

        @media(max-width:600px){
          top: 2%;
          right: 4%;
        }
      }

      .img-rock_1 {
        position: absolute;
        width: 10%;
        left: 5%;
        bottom: 25%;
        z-index: 0;
      }

      .img-line_bg {
        position: absolute;
        width: 100%;
        top: 4%;
        z-index: 1;
        @media (max-width: 900px) {
          display: none;
        }
        @media (max-width: 600px) {
          display: block;
          top: 4%;
        }
      }

      .img-line_bg_2 {
        position: absolute;
        width: 100%;
        top: 15%;
        z-index: 1;

        @media (max-width: 900px) {
          display: none;
        }
        @media (max-width: 600px) {
          display: block;
          top: 8%;
        }
      }

      .text-wrapper{
        padding-left: 20px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media(max-width:600px){
          align-items: start;
          margin-top: 40px;
        }
      }

      h1 {
        font-family: Poppins-bold;
        font-size: 40px;
        font-weight: bold;
        line-height: 1.25;
        letter-spacing: 0.25px;
        color: #0b0720;
        margin-bottom: 16px;
        margin-top: 30px;

        @media (max-width: 600px) {
          font-size: 16px;
        }
      }
      .subTitle {
        font-family: "Montserrat";
        width: 65%;
        text-align: center;
        font-size: 18px;
        line-height: 1.33;
        letter-spacing: 0.25px;
        color: #696969;
        margin-bottom: 10px;

        @media (max-width: 600px) {
          font-size: 14px;
          width: 100%;
          text-align: left;
        }
      }
    }
    
    .img-block {
      display: flex;
      justify-content: center;
      position: relative;

      .subject-img {
        width: 100%;
        z-index: 2;
      }
      @media (max-width: 600px) {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 40px;
        img {
          width: 80%;
        }
      }
    }
    .bg-img{
        position: absolute;
        width:100%;
        
    }
  }
`;
