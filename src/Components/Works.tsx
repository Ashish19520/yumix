
import { Container } from "@mui/material";
import React, { useState,useEffect } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import styled from "styled-components";

const Works = () => {
    const [counterOn, setCounterOn] = useState(false);
  return (
    <div>
      <Count>
        {
          // @ts-ignore
          <ScrollTrigger
            onEnter={() => {
              setCounterOn(true);
              console.log("Enter");
            }}
            onExit={() => {
              setCounterOn(false);
              console.log("Exit");
            }}
          >
            <Container maxWidth="xl" className="container">
              <div className="countBody">
                <img src="./images/Ellipse 65@3x.png" className="img-dot1"></img>
               
                <div className="outter">
                <img src="./images/google.png" height="60px" className="img-dot2"></img>
                </div>
                <div className="outter">
                <img src="./images/shopify.png" height="90px" className="img-dot2"></img>
                  {/* <p>shopify</p> */}
                  
                </div>
                <div className="outter">
                <img src="./images/bigcommerce.png"  height="90px" className="img-dot2"></img>
                  {/* <p>big commerce</p> */}
                </div>
                <div className="outter">
                <img src="./images/fieo.png"  height="90px" className="img-dot2"></img>
                  {/* <p>big commerce</p> */}
                </div>
                <div className="outter">
                <img src="./images/walmart connect.png"  height="90px" className="img-dot2"></img>
                  {/* <p>big commerce</p> */}
                </div>
                
                <div className="outter">
                <img src="./images/download.png"  height="90px" className="img-dot2"></img>
                  {/* <p>big commerce</p> */}
                </div>
                <div className="outter">
                  <img src="./images/amazon.png" className="img-dot2" height="90px"></img>
                </div>
              </div>
            </Container>
          </ScrollTrigger>
        }
      </Count>
    </div>
  )
}

export default Works
const Count = styled.div`
  
  color: #fff;
  /* margin-top:250px; */
  /* margin-bottom:250px; */

  padding: 40px 0px;



  .container {
    margin: auto;

    .countBody {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      .img-dot1{
        position: absolute;
        width: 3%;
        left: -25px;
        top: -35px;
      }

      .img-dot2{
        width:80%;
        // height:120px;
        align-items: center;
      }


      @media (max-width: 420px) {
        flex-wrap: wrap;
      }

      /* @media (max-width: 901px) {
          border-right: unset;
          padding:0px 100px;
        } */

      @media (max-width: 600px) {
        flex-direction: row;
        width: 100%;
      }

      .outter {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding: 20px 40px;
        height: 150px;
        border-right: 0.1px solid rgba(0, 0, 0, 0.3);
        &:last-of-type {
          border-right: unset;
        }
        @media (max-width: 1115px) {
          border-right: unset;
        }
        @media (max-width: 900px) {
          padding: 20px 20px;
        }
        

        h2 {
          font-family: Poppins-Bold;
          font-size: 80px;
          font-weight: 700;
          color: #000;
          letter-spacing: -0.5px;

          @media (max-width: 600px) {
            font-size: 24px;
          }
          @media (max-width: 900px) {
            text-align: center;
          }
        }

        p {
          color: #000;
          font-size: 18px;
          line-height: 1.33;
          letter-spacing: 0.25px;
          text-align: center;
          color: #828490;

          @media (max-width: 600px) {
            font-size: 8px;
            /* padding-bottom: 20px;

            &:last-of-type{
              padding-bottom: unset;
            } */
          }
        }
      }
    }
  }
`;
