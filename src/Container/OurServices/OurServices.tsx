import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const OurServices = () => {
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
          <motion.img variants={lines}  initial="hidden" animate="show" src="./images/Group 38625@3x.png" className="img-line_bg"></motion.img>
          <motion.img variants={lines}  initial="hidden" animate="show" src="./images/Vector 13@3x.png" className="img-line_bg_2"></motion.img>
          <motion.img variants={lines}  initial="hidden" animate="show" src="./images/Round Cube2@3x.png" className="img-cube_1"></motion.img>
          <motion.img variants={lines}  initial="hidden" animate="show" src="./images/FullRock1@3x.png" className="img-rock_1"></motion.img>
          <motion.h1 variants={typingContainer} initial="hidden" animate="show">
            {Array.from("Our Services").map((word, i) => (
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
            ESERVZ is a full cycle Amazon Business Management Agency. If you run
            your business on Amazon Vendor Central or Amazon Seller Central, or
            went for Amazon FBA or Amazon MFN we have everything to rock your
            business.
          </motion.div>
          <motion.div
            variants={imgProduct1}
            initial="hidden"
            animate="show"
            className="img-block"
          >
            <img
              src="./images/IllustrationService.png"
              className="subject-img"
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
    /* background-image: url("./images/Hero Bg.png");
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

      .img-cube_1 {
        width: 15%;
        right: 6%;
        top: 20%;
        position: absolute;
      }

      .img-rock_1 {
        position: absolute;
        width: 10%;
        left: 5%;
        bottom: 20%;
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
          display: none;
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
          display: none;
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
          font-size: 35px;
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
          font-size: 16px;
        }
      }
    }
    .img-block {
      display: flex;
      justify-content: center;

      .subject-img {
        width: 100%;
        z-index: 2;
      }
      @media (max-width: 600px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 80%;
        }
      }
    }
  }
`;
