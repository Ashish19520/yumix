import Container from "@mui/material/Container";
import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useScroll } from "framer-motion";
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
        delay:2.5,
        ease: "easeInOut",
      },
    },
  };

  const imgProduct2 = {
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
        delay: 3.5,
        ease: "easeInOut",
      },
    },
  };

  // useEffect(() => {
  //   const card = document.querySelector(".imageBox");
  //   const container = document.querySelector(".outter");
  //   const rock = document.querySelector(".rock");
  //   const subject = document.querySelector(".subject");
  //   const shopify = document.querySelector(".shopify");
  //   const certified = document.querySelector(".certified");
  //   const google = document.querySelector(".google");

  //   container?.addEventListener("mousemove", (e) => {
  //     //@ts-ignore
  //     console.log(e.pageX);
  //     //@ts-ignore
  //     let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  //     //@ts-ignore
  //     let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  //     //@ts-ignore
  //     // card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

  //     //@ts-ignore
  //     // subject.style.transform = `rotateY(${xAxis + 2}deg) rotateX(${
  //     //   yAxis + 2
  //     // }deg)`;

  //     //@ts-ignore
  //     // rock.style.transform = `rotateY(${xAxis - 5}deg) rotateX(${
  //     //   yAxis - 5
  //     // }deg)`;

  //     //@ts-ignore
  //     shopify.style.transform = `rotateY(${xAxis + 20}deg) rotateX(${
  //       yAxis + 20
  //     }deg)`;

  //     //@ts-ignore
  //     certified.style.transform = `rotateY(${xAxis}deg) rotateX(${
  //       yAxis - 5
  //     }deg)`;

  //     //@ts-ignore
  //     google.style.transform = `rotateY(${-xAxis}deg) rotateX(${
  //       yAxis + 20
  //     }deg)`;

  //     card?.addEventListener("mouseenter", (e) => {
  //       //@ts-ignore
  //       card.style.transition = `none`;
  //       //@ts-ignore
  //       rock.style.transform = "translateZ(150px)";

  //       //@ts-ignore
  //       subject.style.transform = "translateZ(75px)";

  //       //@ts-ignore
  //       shopify.style.transform = "translateZ(150px)";

  //       //@ts-ignore
  //       certified.style.transform = "translateZ(150px)";

  //       //@ts-ignore
  //       google.style.transform = "translateZ(150px)";
  //     });

  //     card?.addEventListener("mouseleave", (e) => {
  //       //@ts-ignore
  //       card.style.transition = `all 0.5s ease`;
  //       //@ts-ignore
  //       card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  //       //@ts-ignore
  //       subject.style.transform = `rotateY(0deg) rotateX(0deg)`;

  //       //@ts-ignore
  //       rock.style.transform = `rotateY(0deg) rotateX(0deg)`;

  //       //@ts-ignore
  //       shopify.style.transform = `rotateY(0deg) rotateX(0deg)`;

  //       //@ts-ignore
  //       rock.style.transform = "translateZ(0px)";

  //       //@ts-ignore
  //       subject.style.transform = "translateZ(0px)";

  //       //@ts-ignore
  //       shopify.style.transform = "translateZ(0px)";

  //       //@ts-ignore
  //       certified.style.transform = "translateZ(0px)";

  //       //@ts-ignore
  //       google.style.transform = "translateZ(0px)";
  //     });
  //   });
  // }, []);

  useEffect(() => {
    console.log("Checking##########," ,window.screen.width)
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
            ?.classList.add("animate__backInRight");
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
    <HeroLayout >
      <Container  className="container margin-nav">

        <motion.img
          src="./images/Group 38633@3x.png"
          className="bg-line-img_1"
          variants={lines}
          initial="hidden"
          animate="show"
          style={{maxWidth:"95%"}}
        ></motion.img>
        <motion.img
          src="./images/Group 38632.png"
          className="res-bg-line-img_1"
          variants={lines}
          initial="hidden"
          animate="show"
        ></motion.img>
        <motion.img
          src="./images/Group 38633.png"
          className="res-bg-line-img_2"
          variants={lines}
          initial="hidden"
          animate="show"
          width="100%"
        ></motion.img>
        

        <div className="outter">
          <div className="titleBox" style={{marginRight:"30px"}}>
            <motion.h1
              variants={typingContainer}
              initial="hidden"
              animate="show"
              
            >
              {/* {Array.from(
                "Elevate Your Ecommerce Empire"
              ).map((word, i) => (
                <motion.span key={i} variants={typingText}>
                  {word}
                </motion.span>
              ))} */}
               <motion.span  variants={typingText}>
               <span style={{color:"blue"}}>Yumix Technologies

</span><br/>Empire Building Starts Here
                </motion.span>
            </motion.h1>
            <motion.p variants={explainProduct} initial="hidden" animate="show">
              {/* With our complete multi-channel solution, you'll have access to
              everything you need to succeed in today's competitive online
              marketplace. */}
we turn ideas into scalable solutions that fuel business growth. As innovators in cutting-edge technology, we empower businesses to thrive in a fast-evolving digital world.


            </motion.p>
            <motion.img
              src="./images/FullRock2@3x.png"
              className="rock-img_1"
              variants={lines}
              initial="hidden"
              animate="show"
            ></motion.img>
            <motion.img
              src="./images/Group 38632@3x.png"
              className="bg-line-img-2"
              variants={lines}
              initial="hidden"
              animate="show"
            ></motion.img>  
          </div>
          <div className="imageBox">
            <motion.div
              className="circle"
              variants={window.screen.width<601? imgProduct2:imgProduct1}
              initial="hidden"
              animate="show"
            >
              <motion.img id="subject" onMouseEnter={()=>
              setTimeout(()=>{
                const element:any = document.getElementById("subject");
                // element.classList.add("transformed")
              },1000)
              }
              
                src="./yumix/2-removebg-preview.png"
               variants={window.screen.width<601? imgProduct2:imgProduct1}
              //  style={{width:"450px"}} 
                initial="hidden"
                animate="show"
                className="image_baisa_shop"
                // transition={{duration:3, delay:.2, ease:"easeInOut"}}
              ></motion.img>
              {/* <motion.img
               src="./images/Group 162961.png"
                
               variants={window.screen.width<601? imgProduct2:imgProduct1}
                initial="hidden"
                animate="show"
                className="rock"
              ></motion.img>
              <motion.img
              src="./images/Group 162964.png"
                
               variants={window.screen.width<601? imgProduct2:imgProduct1}
                initial="hidden"
                animate="show"
                className="shopify"
              ></motion.img>
              <motion.img 
                src="./images/Group 162959.png"
               variants={window.screen.width<601? imgProduct2:imgProduct1}
                initial="hidden"
                animate="show"
                className="amazon2"
              ></motion.img>

              <motion.img
                src="./images/Group 162962.png"
               variants={window.screen.width<601? imgProduct2:imgProduct1}
                initial="hidden"
                animate="show"
                className="shopify3"
              ></motion.img>
              
              
              <motion.img
              src="./images/Group 162963.png"
              
               variants={window.screen.width<601? imgProduct2:imgProduct1}
                initial="hidden"
                animate="show"
                className="google"
              ></motion.img>
              <motion.img
                  src="./images/Group 162960.png"
               variants={window.screen.width<601? imgProduct2:imgProduct1}
                initial="hidden"
                animate="show"
                className="certified"
                transition={{duration:5, delay:2, ease:"easeInOut"}}

              ></motion.img> */}
            </motion.div>
          </div>
        </div>
        {/* <div className="btn" style={{marginTop:"80px"}} >
          <p>Scroll to explore more</p>
          <a href="#demo">
            <div className="box">
              <span>
                <AiOutlineDown color="rgb(176, 186, 199)" />
              </span>
            </div>
          </a>
          <button>Click</button>
        </div> */}
      </Container>
    </HeroLayout>
  );
};

const HeroLayout = styled.div`
  background: #fffcfc;
  margin-top: 20px;
  position: relative;

  @media (max-width: 600px) {
    margin-top: unset;
  }

  .hid {
    display: none;
  }


  .res-bg-line-img_1{
    display: none;
    
    @media (max-width:600px){
      display: block;
      position: absolute;
      bottom: 35%;
    }



    
  }

  .res-bg-line-img_2{
    display: none;
    @media (max-width:600px){
      display: block;
      position: absolute;
      bottom: 34%;
      left: 0;
      width:"100%"
    }
   
    
  }

  .bg-line-img_1 {
    // border:1px solid red;
    position: absolute;
    width: 100%;

    bottom: -20px;
    left: 1%;
    z-index: 0;

    @media (max-width: 1100px) {
      display: none;
    }

    @media (max-width: 900px) {
      display: none;
    }
    @media (max-width: 600px) {
      display: none;
    }
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
        flex-direction: column-reverse;
        align-items: center;
      }

      .titleBox {
        margin-top: 40px;
        max-width: 700px;
        width: 60%;
        position: relative;

        @media(max-width:600px){
          padding-top: 40px;
        }

        .rock-img_1 {
          position: absolute;
          width: 10%;
          bottom: 60px;
          left: 200px;

          @media (max-width: 1100px) {
            display: none;
          }
          @media (max-width: 900px) {
            display: none;
          }
          @media (max-width: 600px) {
            display: unset;
            width: 15% !important;
            left: 0%;
            top: -10%;
          }
        }

        .bg-line-img-2 {
          position: absolute;
          width: 100%;
          bottom: -40px;
          left: 0;
          z-index: -22;

          @media (max-width: 1100px) {
            display: none;
          }
          @media (max-width: 900px) {
            display: none;
          }
          @media (max-width: 600px) {
            display: none;
          }
        }

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
            font-size: 16px;
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
            font-size: 14px;
          }
        }
      }

      .imageBox {
        margin-top: 60px;
        width: 40%;
        position: relative;

        transform-style: preserve-3d;
        transition: all 1s ease;

        @media (max-width: 600px) {
          padding: 0px 50px;
          padding-top: 15px;
          width: 100%;
        }

        .circle {
          transform-style: preserve-3d;
          transition: all 1s ease;
          aspect-ratio: 1;
          border-radius: 500px;
          background-color: #eff5fc;
          margin-left: -80px; 
          /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
          @media (max-width: 600px) {
            aspect-ratio: 1;
            /* border-radius: unset; */
            /* background-color: #fffcfc; */
            /* margin-left: unset; */
            padding-bottom: 20px;
          }
          .rock {
            transform-style: preserve-3d;
            transition: all .2s ease;
            width: 30%;
            position: absolute;
            left: 20px;
            top: -20px !important;
            @media (max-width: 900px) {
              display: none;
            }

            @media (max-width: 600px) {
              display: unset;
              width: 30%;
              right: 0%;
              /* width: 20%;
              left: -17%; 
              top: -25% !important; */

              right: 30%;
            }
          }

          .image_baisa_shop{
            transform-style: preserve-3d;
            transition: all 1.6s ease;
            height:100%;
            width:100%;

          }

          .shopify {
            transform-style: preserve-3d;
            transition: all 1.5s ease;
            width: 30%;
            position: absolute;
            right: 30px;
            top: -40px !important;

            @media (max-width: 900px) {
              display: none;
            }

            @media (max-width: 600px) {
              margin-top:20px;
              display: unset;
              top:200px;
              width: 25%;
              right: -2%;
              /* width: 20%;
              right: -10px; */
            }
          }
          .shopify3 {
            transform-style: preserve-3d;
            transition: all 1.5s ease;
            width: 30%;
            position: absolute;
            right: -50px;
            top: 50% !important;

            @media (max-width: 900px) {
              display: none;
            }

            @media (max-width: 600px) {
              display: unset;
              width: 25%;
              right: -15%;
              /* width: 20%;
              right: -10px; */
            }
          }
          .amazon2 {
            transform-style: preserve-3d;
            transition: all 1.5s ease;
            width: 30%;
            position: absolute;
            right: -50px;
            top: 17% !important;

            @media (max-width: 900px) {
              display: none;
            }

            @media (max-width: 600px) {
              display: unset;
              width: 25%;
              right: -10%;
              top:15%;
              /* width: 20%;
              right: -10px; */
            }
          }
          .google {
            transform-style: preserve-3d;
            transition: all .5s ease;
            width: 30%;
            position: absolute;
            left: -100px;
            top: 150px !important;
            @media (max-width: 900px) {
              display: none;
            }
            @media (max-width: 600px) {
              display: unset;
              left: -15%;
              top: 40% !important;
              width: 25%;
            }
          }

          .certified {
            width: 30%;
            position: absolute;
            left: -15%;
            top: 250px !important;
            transform-style: preserve-3d;
            transition: all 1s ease;
            @media (max-width: 900px) {
              display: none;
            }
            @media (max-width: 600px) {
              display: unset;
              width: 25%;
              left: -5%;
              top: unset !important;
              bottom: 0%;
            }
          }

          #subject {
            // margin-left: 55px;
            border:"1px solid red"
          }

          @media (max-width: 600px) {
            margin-left: unset;
            padding-right: 40px;
           
          }

          img {
            width: 90%;
            padding: 25px;

            @media (max-width: 600px) {
              width: 100%;
              padding: unset;
            }
          }
        }
      }
    }

    .btn {

      @media (max-width:600px) {
          display: none;
        }
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

        @media (max-width:600px) {
          display: none;
        }
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
              transform: translate(0px, 10px);
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
