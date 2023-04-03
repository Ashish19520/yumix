import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";

export const WhyUs = () => {
  return (
    <WhyUsWrapper>
      <Container maxWidth="lg" className="container">
        <div className="Title">Why brands work with us?</div>
        <div className="wrapper">
          <div className="left-box">
            <img src="./images/11 - Lucas Floating.png"></img>
          </div>
          <div className="right-box">
            <div className="scroll-Effect">
              <div className="title">Save Time</div>
              <div className="subTitle">
                Skip the Learning Curve. Eservz has the established best
                practices to help you quickly achieve your eCommerce and Amazon
                goals.
              </div>

              <div className="title">Save Money</div>
              <div className="subTitle">
                No need to create a new department or hire additional staff.
                When you work with us, you get a new E-Commerce division.
              </div>

              <div className="title">Make Money</div>
              <div className="subTitle">
                We have worked with 100s of partners. We know what to do, what
                to analyze & how to focus on getting you a Return on Investment
              </div>

              <div className="title">Be Secure</div>
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
    }

    .wrapper {
      display: flex;

      .left-box {
        width: 40%;
      }

      .right-box {
        width: 60%;
        padding-left: 150px;

        .title {
            margin-top:44px;
            margin-bottom:8px;
          font-size: 24px;
          font-weight: 500;
          line-height: 1.33;
          letter-spacing: normal;
          text-align: left;
          color: #3a3b44;


          &:first-of-type{
        margin-top:unset;
          }
        }
        .subTitle {
            max-width:70%;
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
