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
                {Array.from("News").map((word, i) => (
                  <motion.span key={i} variants={typingText}>
                    {word}
                  </motion.span>
                ))}
              
              </motion.div>
            
            <motion.div className="subtitle" variants={elements}  initial="hidden" animate="show">
              World's Best News for insights from experts about solutions and
              progress in E-Commerce development.
            </motion.div>
            <motion.img src="./images/Round Cube2@3x.png" className="cube" variants={elements}  initial="hidden" animate="show"></motion.img>
          </div>
          <motion.div className="img-box" variants={elements}  initial="hidden" animate="show">
            <img src="./images/Illustration (1).png" className="subject"></img>
            <img src="./images/Cone3@3x.png" className="cone"></img>
            <img src="./images/newRock2@3x.png" className="rock"></img>
            <img src="./images/Ellipse 62@3x.png" className="dot"></img>
            <img src="./images/Ellipse 62@3x.png" className="dottwo"></img>
            <img src="./images/Group 38623@3x.png" className="line"></img>
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
        flex-direction: column;
        justify-content: center;
      }

      .text-box {
        width: 50%;
        display: flex;
        flex-direction: column;

        @media (max-width: 600px) {
          width: 100%;
        }

        .title {
          font-family: Poppins-Bold;
          font-size: 40px;
          font-weight: bold;
          line-height: 1.25;
          letter-spacing: 0.25px;
          text-align: left;
          color: #0b0720;
          margin-bottom: 24px;

          @media (max-width: 600px) {
            text-align: center;
          }
        }
        .subtitle {
          width: 80%;
          font-family: Montserrat;
          font-size: 16px;
          line-height: 1.5;
          letter-spacing: 0.25px;
          text-align: left;
          color: #696969;
          @media (max-width: 600px) {
            width: 100%;
            text-align: center;
            margin-bottom: 40px;
          }
        }
        .cube {
          width: 10%;
          position: absolute;
          left: 40px;
          bottom: 50px;
          z-index: 0;
          @media (max-width: 600px) {
            display: none;
          }
        }
      }

      .img-box {
        width: 50%;
        padding-left: 50px;

        position: relative;

        @media (max-width: 600px) {
          width: 100%;
          padding-left: unset;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .subject {
          width: 75%;
          @media (max-width: 600px) {
            width: 50%;
          }
        }
        .cone {
          width: 15%;
          position: absolute;
          left: 80px;
          bottom: 50px;
          @media (max-width: 600px) {
            display: none;
          }
        }
        .rock {
          width: 30%;
          position: absolute;
          right: 80px;
          top: 0;
          @media (max-width: 600px) {
            display: none;
          }
        }

        .dot {
          width: 3%;
          position: absolute;
          left: 0;
          bottom: 150px;
          @media (max-width: 600px) {
            display: none;
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
            display: none;
          }
        }
      }
    }
  }
`;
