import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// import styles from './styles';

export const Fba = () => {
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
  // const classes=styles();
  return (
    <FbaContainer>
      <Container maxWidth="lg" className="container">
        <div className="hero_wrapper">
          <div className="info-box_FBA">
            <div className="fba-Title">FBA Calculator</div>
            <div className="fba-subTitle">
              Check the profit a product can earn using fulfillment-by-Amazon
              (FBA)
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="Enter Amazon product's ASIN Number"
              ></input>
              <button className="btn_FBACalculate">Calculate</button>
            </div>
          </div>
          <div className="img-box_FBA">
          <img src="../images/certificate 1.png" alt="img" height="400px" width="509px"></img>
          </div>
        </div>
        {/* <div>
        <motion.div
            className="img-box"
            variants={elements}
            initial="hidden"
            animate="show"
          >
            <img src="../images/Illustration (1).png" className="subject"></img>
            <img src="./images/Cone3@3x.png" className="cone"></img>
            <img src="../images/newRock2@3x.png" className="rock"></img>
            <img src="../images/Ellipse 62@3x.png" className="dot"></img>
            <img src="../images/Ellipse 62@3x.png" className="dottwo"></img>
            <img src="../images/Group 38623@3x.png" className="line"></img>
          </motion.div>
        </div> */}
      </Container>
      <Container maxWidth='lg' className="container">
        <div >
          <div >
            <img src="../images/certificate 1.png" alt="img" height="400px" width="509px"></img>
          </div>


          <div >
            <div >
              <h4>Bose Quietcomfort 45</h4>
            </div>
            <div>
              <div>
                <p>pid</p>
                <p>1245</p>
              </div>
            </div>
        </div>

  

        </div>

       
      </Container>
    </FbaContainer>
  );
};

const FbaContainer = styled.div`
  .container {
    margin: auto;
    padding-top: 80px;
    .hero_wrapper {
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      .info-box_FBA {
        width: 50%;
        .fba-Title {
          //styleName: Display P 40;
          font-family: Poppins-Bold;
          font-size: 40px;
          font-weight: 700;
          line-height: 50px;
          letter-spacing: 0.25px;
          padding-bottom: 24px;
        }

        .fba-subTitle {
          //styleName: Body M 16;
          font-family: Montserrat;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0.25px;
          padding-bottom: 24px;
        }
        .input-field {
          display: flex;
          justify-content: space-between;
          input {
           
            background: #e0e0e0;
            width: 70%;
            border: none;
            padding: 20px;
            border-radius: 10px;
            &::placeholder {
              color: #828282;
            }
            &:focus {
              outline: none;
            }
          }

          
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
            width: 60%;
          }
        }
        .cone {
          width: 15%;
          position: absolute;
          left: 80px;
          bottom: 50px;
          @media (max-width: 600px) {
            display: block;
            bottom: 0%;
            left: 20%;
          }
        }
        .rock {
          width: 30%;
          position: absolute;
          right: 80px;
          top: 0;
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
          .btn_FBACalculate {
            background-color: #5956e9;
            color: #e0e0e0;
            border: 0px;
            border-radius: 10px;
            padding: 10px 25px;
            font-family: Poppins;
            font-size: 12px;
            font-weight: 500;
            line-height: 18px;
            letter-spacing: 0.01em;
            text-align: center;
            margin-right:50px;
          }
        }
      }
    }
  }
`;
