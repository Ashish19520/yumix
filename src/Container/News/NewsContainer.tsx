import { Container } from "@mui/material";
import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const typingContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
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
      delay: 0.3,
      ease: "easeInOut",
    },
  },
};

export const NewsContainer = () => {
  useEffect(() => {
    const card = document.querySelector(".img-box");
    const container = document.querySelector(".news-wrapper");
    const rock = document.querySelector(".rock");
    const cone = document.querySelector(".cone");
    const cube = document.querySelector(".cube");
    const dot = document.querySelector(".dot");
    const dotTwo = document.querySelector(".dottwo");

    container?.addEventListener("mousemove", (e) => {
      //@ts-ignore
      let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
      //@ts-ignore
      let yAxis = (window.innerHeight / 2 - e.pageY) / 50;

      //@ts-ignore
      // rock.style.transform = `rotateY(${xAxis - 5}deg) rotateX(${
      //   yAxis - 5
      // }deg)`;

      // //@ts-ignore
      // cone.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

      //@ts-ignore
      cube.style.transform = `translate(${xAxis}% , ${yAxis}%)`;

      //@ts-ignore
      dot.style.transform = `translate(${xAxis + 10}% , ${yAxis + 10}%)`;

      //@ts-ignore
      dotTwo.style.transform = `translate(${xAxis + 10}% , ${yAxis + 10}%)`;

      card?.addEventListener("mouseenter", (e) => {
        //@ts-ignore
        card.style.transition = `none`;
        //@ts-ignore
        // rock.style.transform = "translateZ(150px)";

        // //@ts-ignore
        // cone.style.transform = "translateZ(150px)";

        //@ts-ignore
        cube.style.transform = "translateZ(150px)";

        //@ts-ignore
        dot.style.transform = "translateZ(150px)";

        //@ts-ignore
        dotTwo.style.transform = "translateZ(150px)";
      });

      card?.addEventListener("mouseleave", (e) => {
        //@ts-ignore
        card.style.transition = `all 0.5s ease`;
        //@ts-ignore
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;

        //@ts-ignore
        // rock.style.transform = `rotateY(0deg) rotateX(0deg)`;

        // //@ts-ignore
        // cone.style.transform = `rotateY(0deg) rotateX(0deg)`;

        //@ts-ignore
        cube.style.transform = `rotateY(0deg) rotateX(0deg)`;

        //@ts-ignore
        // rock.style.transform = "translateZ(0px)";

        // //@ts-ignore
        // cone.style.transform = "translateZ(0px)";

        //@ts-ignore
        cube.style.transform = "translateZ(0px)";

        //@ts-ignore
        dot.style.transform = "translateZ(0px)";

        //@ts-ignore
        dotTwo.style.transform = "translateZ(0px)";
      });
    });
  }, []);

  return (
    <NewsWrapper>
      <Container maxWidth="lg" className="container">
        <div className="news-wrapper">
          <div className="text-box">
            <motion.div
              variants={typingContainer}
              initial="hidden"
              animate="show"
              className="title"
            >
              {Array.from("Welcome to the ESERVZ e-Commerce News Hub: Stay Informed, Stay Ahead").map((word, i) => (
                <motion.span key={i} variants={typingText}>
                  {word}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              className="subtitle"
              variants={elements}
              initial="hidden"
              animate="show"
            >
             Greetings, e-Commerce enthusiasts and business visionaries! We're thrilled to introduce you to the ESERVZ e-Commerce News Hub – your central source for staying updated on the latest happenings, trends, and breakthroughs in the world of online commerce.

            </motion.div>
            <br/>
            <motion.div
              className="subtitle"
              variants={elements}
              initial="hidden"
              animate="show"
            >
At Bighatch Consulting, also known as ESERVZ, we understand that the e-Commerce landscape is dynamic and ever-evolving. As a forward-thinking agency, we're committed to keeping you well-informed and equipped with the knowledge you need to make strategic decisions for your e-Commerce journey.

            </motion.div>
            <motion.img
              src="./images/Round Cube2@3x.png"
              className="cube"
              variants={elements}
              initial="hidden"
              animate="show"
            ></motion.img>
          </div>
          <motion.div
            className="img-box"
            variants={elements}
            initial="hidden"
            animate="show"
          >
            <img src="./images/Illustration (1).png" className="subject"></img>
            <img src="./images/Cone3@3x.png" className="cone"></img>
            <img src="./images/newRock2@3x.png" className="rock"></img>
            <img src="./images/Ellipse 62@3x.png" className="dot"></img>
            <img src="./images/Ellipse 62@3x.png" className="dottwo"></img>
          </motion.div>
        </div>
      </Container>
    </NewsWrapper>
  );
};

const NewsWrapper = styled.div`
  background: #fffcfc;
  .container {
    margin: auto;
    padding: 40px 0px;

    .news-wrapper {
      display: flex;
      align-items: center;

      @media (max-width: 600px) {
        flex-direction: column-reverse;
        justify-content: center;
      }

      .text-box {
        width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;

        @media (max-width: 600px) {
          width: 100%;
        }

        .title {
          font-family: Poppins-Bold;
          font-size: 30px;
          font-weight: bold;
          line-height: 1.25;
          letter-spacing: 0.25px;
          text-align: left;
          color: #0b0720;
          margin-bottom: 24px;

          @media (max-width: 600px) {
            text-align: left;
            font-size: 16px;
          }
        }
        .subtitle {
          width: 100%;
          font-family: Montserrat;
          font-size: 16px;
          line-height: 1.5;
          letter-spacing: 0.25px;
          text-align: left;
          color: #696969;
          @media (max-width: 600px) {
            width: 100%;
            text-align: left;
            font-size: 14px;
            margin-bottom: 40px;
          }
        }
        .cube {
          width: 20%;
          position: absolute;
          left: -10%;
          bottom: -100%;
          z-index: 0;
          @media (max-width: 600px) {
            display: block;
            bottom: -40%;
          }
        }
      }

      .img-box {
        width: 70%;
        padding-left: 50px;
        position: relative;
       margin-right: -130px;
        @media (max-width: 600px) {
          margin-right:0;
          width: 100%;
          padding-left: unset;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 600px) {
          margin-right:0;
        }
        @media (max-width: 950px) {
          margin-right:0;
        }
       
        
        .subject {
          width: 75%;
          @media (max-width: 600px) {
            width: 60%;
          }
        }
        .cone {
          width: 8%;
          height: 15%;
          position: absolute;
          left: 80px;
          bottom: 70px;
          @media (max-width: 600px) {
            display: block;
            bottom: 0%;
            left: 20%;
          }
        }
        .rock {
          width: 20%;
          position: absolute;
          right: 40px;
          top: -20px;
          @media (max-width: 600px) {
            display: block;
            width: 25%;
            right: 10%;
          }
        }

        .dot {
          width: 3%;
          position: absolute;
          left: 0;
          bottom: 150px;
          @media (max-width: 600px) {
            display: block;
            bottom: -10%;
            left: -4%;
          }
        }

        .dottwo {
          width: 3%;
          position: absolute;
          top: 0;
          left: -500px;
          @media (max-width: 600px) {
            display: none;
          }
        }

        .line {
          width: 180%;
          position: absolute;
          top: 35px;
          right: -90px;
          z-index: -1;
          @media (max-width: 600px) {
            display: block;
            width: 100%;
            left: 0%;
            top: unset;
            bottom: 0%;
          }
        }
      }
    }
  }
`;
