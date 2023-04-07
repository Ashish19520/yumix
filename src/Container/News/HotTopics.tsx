import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";

export const HotTopics = () => {
  return (
    <HotTopicsWrapper>
      <Container maxWidth="lg" className="container">
        <div className="hero-title">Hot Topics</div>
        <div className="topicContainer">
          <div className="img-box">
            <img src="./images/Image@3x.png"></img>
            <div className="img-text">
              <div className="title">
                Massa tortor nibh nulla condimentum imperdiet scelerisque...
              </div>
              <div className="subtitle">
                <p>2 Hours Ago</p>
                <p>CNN Indonesia</p>
              </div>
            </div>
          </div>
          <div className="text-box">
            <div className="title">
              Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare
              adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec
              vivamus pharetra. Velit, dui, egestas nisi, elementum mattis
              mauris, magnis. Massa tortor nibh nulla condimentum imperdiet
              scelerisque. Massa tortor nibh nulla condimentum imperdiet
              scelerisque. Massa tortor nibh nulla condimentum imperdiet
              scelerisque...<span className="read-more">read more</span>
            </div>
            <div className="subtitle"></div>
          </div>
        </div>
      </Container>
    </HotTopicsWrapper>
  );
};
const HotTopicsWrapper = styled.div`
  .container {
    margin: auto;
    padding: 90px 0px;
    .hero-title {
      font-family: Poppins-Bold;
      font-size: 36px;
      font-weight: bold;
      text-align: left;
      color: #121221;
      margin-bottom: 26px;
    }

    .topicContainer {
      display: flex;
      /* align-items: center; */

      .img-box {
        width: 60%;
        position: relative;

        img {
          width: 100%;
        }
        .img-text {
          position: absolute;
          top: 0;
          color: #f8f8f8;
          .title {
            margin-top: 150px;
            font-family: Poppins-Bold;
            font-size: 32px;
            line-height: 1.5;
            text-align: left;
            width: 80%;
            padding: 16px 25px;
          }
          .subtitle {
            display: flex;
            justify-content: start;
            font-family: Montserrat;
            font-size: 12px;
            line-height: 1.5;
            text-align: left;
            color: #f8f8f8;

            p {
              padding-left: 25px;
            }
          }
        }
      }
      .text-box {
        width: 40%;
        padding-left: 40px;

        .title {
          /* font-size: 18px;
          line-height: 1.8;
          font-family: Montserrat;
          letter-spacing: 0.25px;
          text-align: left;
          color: #444; */
        }
      }
    }
  }
`;
