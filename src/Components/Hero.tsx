import Container from "@mui/material/Container";
import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AiOutlineDown } from "react-icons/ai";

export const Hero = () => {
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
        delay: 2.2,
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
        delay: 2.5,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    const card = document.querySelector(".imageBox");
    const container = document.querySelector(".outter");
    const rock = document.querySelector(".rock");
    const subject = document.querySelector(".subject");
    const shopify = document.querySelector(".shopify");
    const certified = document.querySelector(".certified");
    const google = document.querySelector(".google");

    container?.addEventListener("mousemove", (e) => {
      //@ts-ignore
      console.log(e.pageX);
      //@ts-ignore
      let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      //@ts-ignore
      let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      //@ts-ignore
      // card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

      //@ts-ignore
      // subject.style.transform = `rotateY(${xAxis + 2}deg) rotateX(${
      //   yAxis + 2
      // }deg)`;

      //@ts-ignore
      // rock.style.transform = `rotateY(${xAxis - 5}deg) rotateX(${
      //   yAxis - 5
      // }deg)`;

      //@ts-ignore
      shopify.style.transform = `rotateY(${xAxis + 20}deg) rotateX(${
        yAxis + 20
      }deg)`;

      //@ts-ignore
      certified.style.transform = `rotateY(${xAxis}deg) rotateX(${
        yAxis - 5
      }deg)`;

      //@ts-ignore
      google.style.transform = `rotateY(${-xAxis}deg) rotateX(${
        yAxis + 20
      }deg)`;

      card?.addEventListener("mouseenter", (e) => {
        //@ts-ignore
        card.style.transition = `none`;
        //@ts-ignore
        rock.style.transform = "translateZ(150px)";

        //@ts-ignore
        subject.style.transform = "translateZ(75px)";

        //@ts-ignore
        shopify.style.transform = "translateZ(150px)";

        //@ts-ignore
        certified.style.transform = "translateZ(150px)";

        //@ts-ignore
        google.style.transform = "translateZ(150px)";
      });

      card?.addEventListener("mouseleave", (e) => {
        //@ts-ignore
        card.style.transition = `all 0.5s ease`;
        //@ts-ignore
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;

        //@ts-ignore
        subject.style.transform = `rotateY(0deg) rotateX(0deg)`;

        //@ts-ignore
        rock.style.transform = `rotateY(0deg) rotateX(0deg)`;

        //@ts-ignore
        shopify.style.transform = `rotateY(0deg) rotateX(0deg)`;

        //@ts-ignore
        rock.style.transform = "translateZ(0px)";

        //@ts-ignore
        subject.style.transform = "translateZ(0px)";

        //@ts-ignore
        shopify.style.transform = "translateZ(0px)";

        //@ts-ignore
        certified.style.transform = "translateZ(0px)";

        //@ts-ignore
        google.style.transform = "translateZ(0px)";
      });
    });
  }, []);

  useEffect(() => {
    
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Enterin into zone");
            // entry.target.classList.add("show");

            document
              .querySelector(".imageBox")
              ?.classList.add("animate__animated");
            document
              .querySelector(".imageBox")
              ?.classList.add("animate__bounceInUp");
            document
              .querySelector(".imageBox")
              ?.classList.add("animate__delay-3s");
          } else {
            console.log("exit into zone");
            // entry.target.classList.remove("show");

            document
              .querySelector(".icons-zoom")
              ?.classList.remove("animate__bounceInUp");
          }
        });
      });

      const hiddenElements = document.querySelectorAll(".outter");
      hiddenElements.forEach((el) => observer.observe(el));
   
  }, []);

  return (
    <HeroLayout>
      <Container maxWidth="lg" className="container">
        <div className="outter">
          <div className="titleBox">
            <motion.h1
              variants={typingContainer}
              initial="hidden"
              animate="show"
            >
              {Array.from(
                "The complete multi-channel solution for Brands and Retailers"
              ).map((word, i) => (
                <motion.span key={i} variants={typingText}>
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p variants={explainProduct} initial="hidden" animate="show">
              With our complete multi-channel solution, you'll have access to
              everything you need to succeed in today's competitive online
              marketplace.
            </motion.p>
          </div>
          <div className="imageBox">
            <motion.div
              className="circle"
              variants={imgProduct1}
              initial="hidden"
              animate="show"
            >
              <motion.img
                src="./images/3 - Brisa Shops Online@3x.png"
                variants={imgProduct1}
                initial="hidden"
                animate="show"
                className="subject"
              ></motion.img>
              <motion.img
                src="./images/Rock2@3x.png"
                variants={imgProduct1}
                initial="hidden"
                animate="show"
                className="rock"
              ></motion.img>
              <motion.img
                src="./images/partner-shopify@3x.png"
                variants={imgProduct1}
                initial="hidden"
                animate="show"
                className="shopify"
              ></motion.img>
              <motion.img
                src="./images/google-partner@3x.png"
                variants={imgProduct1}
                initial="hidden"
                animate="show"
                className="google"
              ></motion.img>
              <motion.img
                src="./images/partner-certified@3x.png"
                variants={imgProduct1}
                initial="hidden"
                animate="show"
                className="certified"
              ></motion.img>
            </motion.div>
          </div>
        </div>
        <div className="btn">
          <p>Scroll to explore more</p>
          <a href="#demo">
            <div className="box">
              <span>
                <AiOutlineDown color="rgb(176, 186, 199)" />
              </span>
            </div>
          </a>
          {/* <button>Click</button> */}
        </div>
      </Container>
    </HeroLayout>
  );
};

const HeroLayout = styled.div`
  background: #fffcfc;
  margin-top: 20px;

  @media (max-width: 600px) {
    margin-top: unset;
  }
  .container {
    /* background-image: url("./images/Hero component.png");
    background-repeat: no-repeat;
    background-position: 0% 75%; */
    perspective: 1000px;

    @media (max-width: 1100px) {
      background-image: unset;
    }

    .outter {
      display: flex;

      @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
      }

      .titleBox {
        max-width: 700px;
        width: 60%;

        @media (max-width: 600px) {
          width: 100%;
        }

        h1 {
          font-family: Poppins-Bold;
          font-size: 40px;
          /* font-weight: bold; */
          text-align: left;
          color: #3a3b44;
          margin-top: 80px;
          margin-bottom: 20px;

          @media (max-width: 600px) {
            text-align: center;
            margin-top: 40px;
            font-size: 30px;
          }
        }

        p {
          font-family: Montserrat-Medium;
          max-width: 80%;
          font-size: 20px;
          font-weight: 500;
          line-height: 1.5;
          text-align: left;
          color: #828490;

          @media (max-width: 600px) {
            text-align: center;
            max-width: 100%;
            font-size: 17px;
          }
        }
      }

      .imageBox {
        margin-top: 20px;
        width: 40%;
        position: relative;

        transform-style: preserve-3d;
        transition: all 0.5s ease;

        @media (max-width: 600px) {
          padding: 0px 50px;
          width: 100%;
        }

        .circle {
          aspect-ratio: 1;
          border-radius: 500px;
          background-color: #eff5fc;
          /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
          @media (max-width: 600px) {
            aspect-ratio: unset;
            border-radius: unset;
            background-color: #fffcfc;
          }
          .rock {
            width: 30%;
            position: absolute;
            left: 0;
            top: -40px !important;

            @media (max-width: 600px) {
              display: none;
            }
          }

          .shopify {
            width: 38%;
            position: absolute;
            right: -50px;
            top: 120px !important;

            @media (max-width: 600px) {
              display: none;
            }
          }

          .google {
            width: 38%;
            position: absolute;
            left: -120px;
            top: 170px !important;
            @media (max-width: 600px) {
              display: none;
            }
          }

          .certified {
            width: 38%;
            position: absolute;
            left: 0;
            top: 350px !important;
            @media (max-width: 600px) {
              display: none;
            }
          }

          img {
            width: 90%;
            padding: 25px;

            @media (max-width: 600px) {
              width: 100%;
              padding: unse;
            }
          }
        }
      }
    }

    .btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: -20px;

      p {
        font-size: 16px;
        letter-spacing: 0.44px;
        color: #b0bac7;

        @media (max-width: 600px) {
          z-index: 200;
        }
      }

      a {
        text-decoration: none;
        .box {
          span {
            display: block;
            border-right: 2px solid #fff;
            border-bottom: 2px solid #fff;
            /* transform: rotate(45deg); */
            margin: -14px;
            animation: animate 2s infinite;

            &:nth-child(2) {
              animation-delay: -0.2s;
            }

            &:nth-child(3) {
              animation-delay: -0.4s;
            }
          }

          @keyframes animate {
            0% {
              opacity: 0;
            }
            50% {
              opacity: 1;
              transform: translate(10px, 10px);
            }
            100% {
              opacity: 0;
            }
          }
        }
      }
    }
  }
`;
