
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
               
                <div className="outter">
                <img src="./images/FIEO Logo 1.png"  className="img-dot2"></img>
                </div>
                <div className="outter">
                <img src="./images/amazon_ads_logo 1.png"  className="img-dot2"></img>
                  {/* <p>shopify</p> */}
                  
                </div>
                <div className="outter">
                <img src="./images/WCM_Logo_V4 1.png"   className="img-dot2"></img>
                  {/* <p>big commerce</p> */}
                </div>
                <div className="outter">
                <img src="./images/perpetua-logo-indigo-black 1.png"   className="img-dot2"></img>
                  {/* <p>big commerce</p> */}
                </div>
              </div>
            </Container>
            <Container maxWidth="xl" className="container" style={{marginTop:"40px"}}>
              <div className="countBody">
                <img src="./images/Ellipse 65@3x.png" className="img-dot1"></img>
               
               
                <div className="outter">
                <img src="./images/shopify 1.png"  className="img-dot3"></img>
                  {/* <p>big commerce</p> */}
                </div>
                
                <div className="outter">
                <img src="./images/bigcommerce 1.png"   className="img-dot3"></img>
                  {/* <p>big commerce</p> */}
                </div>
                <div className="outter">
                  <img src="./images/google partners 1.png" className="img-dot3"></img>
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
      gap:0.5rem;
      width:70vw;
      margin:0 auto;
     
      @media (max-width: 600px) {
        flex-direction: column;
        width: 100%;
        gap:2rem;
      }

      .img-dot1{
        position: absolute;
        width: 3%;
        left: -150px;
        top: -75px;

      }

      .img-dot2{
        width:80%;
        height:30%;
        // height:120px;
        align-items: center;
        @media (max-width: 600px) {
          width:60%;
        height:35%;
        }
      }
      .img-dot3{
        width:60%;
        height:35%;
        // height:120px;
        align-items: center;
        @media (max-width: 600px) 
          width: 40%;
          height:30%;
          gap:2rem;
        }
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
        width:20%;
        @media (max-width: 600px) {
          flex-direction: column;
          width: 100%;
          gap:2rem;
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
