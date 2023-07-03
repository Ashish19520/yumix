import { Container } from "@mui/material";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Banner } from "../../Components/Banner";
import { motion } from "framer-motion";

export const OurWorks = () => {
  const data1 = {
    title: "Growing Sales For A Startup  Clothing Brand",
    subTitle:
      "While most digital marketing agencies excel at one or two channels, Eservz has deep expertise across all performance marketing services, which allows us to provide a rich digital marketing services offering.",
    btnText: "View Case Study",
    imgPath: "../images/Img1.png",
    add:"/works/work1"
  };

  const data2 = {
    title: "Bringing Grocery Store Online",
    subTitle:
      "While most digital marketing agencies excel at one or two channels, Eservz has deep expertise across all performance marketing services, which allows us to provide a rich digital marketing services offering.",
    btnText: "View Case Study",
    imgPath: "../images/Img2.png",
    add:"/works/work2"
  };

  const typingContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
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

  const elements = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.4,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Entering into zone");
          entry.target.classList.add("animate__animated");
          entry.target.classList.add("animate__fadeIn");
        }
        // else {
        //   console.log("exit into zone");
        //   entry.target.classList.remove("animate__fadeIn");
        // }
      });
    });

    const hiddenElements = document.querySelectorAll(".bannerhidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <WorkWrapper>
      <Container maxWidth="lg" className="container">
        <motion.img src="./images/Group 38636@3x.png" variants={elements}  initial="hidden" animate="show" className="img-line-bg"></motion.img>
        <motion.img src="./images/Group 38637@3x.png" variants={elements}  initial="hidden" animate="show" className="img-line-bg_2"></motion.img>
        <motion.img src="./images/Round Cube2@3x.png" variants={elements}  initial="hidden" animate="show" className="img-cube_1"></motion.img>
        <motion.img src="./images/Ellipse 63@3x.png" variants={elements}  initial="hidden" animate="show" className="img-dot_1"></motion.img>
        <motion.div
          variants={typingContainer}
          initial="hidden"
          animate="show"
          className="title"
        >
          {Array.from("Portfolio").map((word, i) => (
            <motion.span key={i} variants={typingText}>
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.div variants={elements}  initial="hidden" animate="show" className="BannerCloth bannerhidden">
          <Banner data={data1} direction={"regular"} />
        </motion.div>
        <div className="BannerGrocery bannerhidden">
          <Banner data={data2} direction={"reverse"} />
        </div>
      </Container>
    </WorkWrapper>
  );
};

const WorkWrapper = styled.div`
  .container {
    margin: auto;
    position: relative;
    .img-cube_1 {
      width: 20%;
      position: absolute;
      right: 10%;
      top: 6%;

      @media (max-width: 900px) {
        display: none;
      }
      @media (max-width: 600px) {
        display: block;
        top: 5%;
      }
    }

    .img-line-bg {
      width: 80%;
      position: absolute;
      top: 0;
      left: 20%;

      @media (max-width: 900px) {
        display: none;
      }
      @media (max-width: 600px) {
        display: block;
        top: unset;
        bottom: 0%;
        left: 0%;
      }
    }

    .img-line-bg_2 {
      width: 54%;
      position: absolute;
      top: 0%;
      left: 4%;
      z-index: 0;

      @media (max-width: 900px) {
        display: none;
      }
      @media (max-width: 600px) {
        display: block;
        left: 23%;
        top: 1%;
      }
    }

    .img-dot_1 {
      position: absolute;
      width: 2%;
      top: 50%;
      right: 0%;
    }

    .title {
      font-family: Poppins-Bold;
      font-size: 120px;
      line-height: 1.5;
      letter-spacing: -0.5px;
      text-align: left;
      color: #303030;
      margin-bottom: 40px;
      margin-top: 40px;
      position: relative;
      z-index: 1 !important;

      @media (max-width: 600px) {
        /* width:100%; */
        text-align: center;
        font-size: 48px;
        margin: 40px 20px;
      }
    }

    .BannerCloth {
      margin-bottom: 190px;

      @media (max-width: 600px) {
        margin-bottom: 100px;
      }
    }
  }
`;
