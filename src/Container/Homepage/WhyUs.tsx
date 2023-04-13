import { Container } from "@mui/material";
import React,{useEffect} from "react";
import styled from "styled-components";



export const WhyUs = () => {


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          
          setTimeout(() => {
            entry.target.classList.add("highlight");
            entry.target.classList.add("show");        
          }, 1500);
        } else {
          entry.target.classList.remove("highlight");
        }
      });
    });

    const observerPara = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          
          setTimeout(() => {
            entry.target.classList.add("highlight");
            entry.target.classList.add("show");
            
          }, 1500);
        } else {
          entry.target.classList.remove("highlight");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".one");
    hiddenElements.forEach((el) => observer.observe(el));

    const hiddenElementstwo = document.querySelectorAll(".two");
    hiddenElementstwo.forEach((el) => observer.observe(el));

    const hiddenElementsthree = document.querySelectorAll(".three");
    hiddenElementsthree.forEach((el) => observer.observe(el));

    const hiddenElementsfour = document.querySelectorAll(".four");
    hiddenElementsfour.forEach((el) => observer.observe(el));

  
  }, []);
  


  return (
    <WhyUsWrapper>
      <Container maxWidth="lg" className="container">
        <div className="Title">Why brands work with us?</div>
        <div className="wrapper">
          <div className="left-box">
            <img src="./images/Ellipse 75@3x.png" className="circle"></img>
            <img src="./images/11 - Lucas Floating.png" className="imgSubject"></img>
          </div>
          <div className="right-box">
            <div className="scroll-Effect">
              <div className="title one">Save Time</div>
              <div className="subTitle">
                Skip the Learning Curve. Eservz has the established best
                practices to help you quickly achieve your eCommerce and Amazon
                goals.
              </div>

              <div className="title two">Save Money</div>
              <div className="subTitle">
                No need to create a new department or hire additional staff.
                When you work with us, you get a new E-Commerce division.
              </div>

              <div className="title three">Make Money</div>
              <div className="subTitle">
                We have worked with 100s of partners. We know what to do, what
                to analyze & how to focus on getting you a Return on Investment
              </div>

              <div className="title four">Be Secure</div>
              <div className="subTitle">
                We value the security of our partners & take your
                confidentiality very seriously. We are insured for any breaches
                of data, so you can rest at ease.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </WhyUsWrapper>
  );
};

const WhyUsWrapper = styled.div`
  background: #fffcfc;
  padding: 60px 0px;
  .container {
    margin: auto;

    .Title {
      font-size: 32px;
      font-weight: 600;
      line-height: 1.31;
      letter-spacing: 0.25px;
      text-align: left;
      color: #000;
      margin-bottom: 154px;

      @media (max-width: 600px) {
        text-align: center;
      }
    }

    .wrapper {
      display: flex;

      .left-box {
        width: 40%;
        .imgSubject {
          width: 100%;
          padding-left: 20px;
          position: relative;
        }
        .circle{
          width: 35%;
          padding-left: 20px;
          position: absolute;
        }

        @media (max-width: 600px) {
          display: none;
        }
      }

      .right-box {
        width: 60%;
        padding-left: 150px;

        @media (max-width: 600px) {
          width: 100%;
        }

        .highlight{
          color: #5956e9 !important;

          
        }

        .title {
          
          margin-top: 44px;
          margin-bottom: 8px;
          font-size: 24px;
          font-weight: 500;
          line-height: 1.33;
          letter-spacing: normal;
          text-align: left;
          color: #3a3b44;


          &:first-of-type {
            margin-top: unset;
          }
        }
        .subTitle {
          font-family: Montserrat;
          max-width: 70%;
          font-size: 14px;
          line-height: 1.29;
          letter-spacing: 0.1px;
          text-align: left;
          color: #828490;
        }
      }
    }
  }
`;
