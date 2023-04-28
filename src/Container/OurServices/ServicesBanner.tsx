import { Button, Container } from "@mui/material";
import React, { useEffect } from "react";
import styled from "styled-components";

export const ServicesBanner = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Entering into zone");
          entry.target.classList.add("animate__animated");
          entry.target.classList.add("animate__fadeIn");
        }
        // else {
        //   console.log("exit into zone");
        //   entry.target.classList.remove("animate__fadeIn");
        // }
      });
    });

    const hiddenElements = document.querySelectorAll(".service-fade-banner");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <ServiceBanner>
      <Container maxWidth="lg" className="container">
        <div className="box-1 service-fade-banner" id="analytics">
          <div className="img-box">
            <img src="./images/Group 38606.png"></img>
          </div>
          <div className="text-box">
            <div className="title">Analytics</div>
            <div className="subtitle">
              Our analytics strategy offering is engineered to deliver business
              impact and help you move from insight to action.
              <br />
              <br /> From forecasting and competitive analysis to data
              architecture and attribution modeling, our expertise allows you to
              gain a competitive advantage by providing a holistic view of your
              customers and business to inform continuous optimization.
            </div>
            <Button
              disableElevation
              variant="contained"
              sx={{
                ...style.buttonBorder,
                color: "white",
                backgroundColor: "#5856e9",
              }}
            >
              View More
            </Button>
            {/* <button className="btn">View More</button> */}
          </div>
        </div>
        <div className="box-2 service-fade-banner" id="customerExperience">
          <div className="text-box">
            <div className="title">Customer Experience</div>
            <div className="subtitle">
              We ​help you develop and execute your entire customer experience
              strategy with the goal of delighting users along every stage of
              their digital journey​.
              <br />
              <br /> From initial planning and journey mapping to development
              and management of all of the necessary digital assets, our
              strategists, analysts, designers, and developers can plan,
              produce, and optimize the creative components needed to make
              meaningful connections with your customers.
            </div>
            <Button
              disableElevation
              variant="contained"
              sx={{
                ...style.buttonBorder,
                color: "white",
                backgroundColor: "#5856e9",
              }}
            >
               View More
            </Button>
            {/* <button className="btn">View More</button> */}
          </div>
          <div className="img-box">
            <img src="./images/Group 38605.png"></img>
          </div>
        </div>
      </Container>
    </ServiceBanner>
  );
};

const style = {
  buttonBorder: {
    padding: { xs: "7px 24x", md: "8px 24px" },
    borderRadius: "8px",
    border: "1px solid #5856e9",
    textTransform: "none",
    fontSize: "14px",
    fontWeight: 600,
    fontFamily: "Montserrat-semiBold",
    letterSpacing: "1px",
  },
};

const ServiceBanner = styled.div`
  background: #fffcfc;
  padding: 40px 0px;

  .container {
    margin: auto;

    .box-1 {
      margin-bottom: 150px;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 600px) {
        flex-direction: column;
        margin-bottom: 100px;
      }

      .img-box {
        width: 40%;
        @media (max-width: 600px) {
          width: 100%;
        }
        img {
          width: 95%;

          @media (max-width: 600px) {
            width: 100%;
            margin-bottom: 20px;
          }
        }
      }

      .text-box {
        width: 60%;
        padding-left: 120px;

        @media (max-width: 600px) {
          width: 100%;
          padding-left: unset;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .title {
          font-family: Inter-Bold;
          font-size: 32px;
          font-weight: bold;
          line-height: 1.33;
          color: #000;
          margin-bottom: 24px;
        }
        .subtitle {
          font-family: Montserrat;
          width: 90%;
          font-size: 16px;
          line-height: 1.55;
          color: #494949;
          margin-bottom: 24px;

          @media (max-width: 600px) {
            padding: 10px 20px;
          }
        }
        .btn {
          padding: 15px 24px;
          border-radius: 8px;
          background-color: #5956e9;
          border: 0px;
          color: #fffcfc;
          font-family: Montserrat-SemiBold;
        }
      }
    }

    .box-2 {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-bottom: 40px;

      @media (max-width: 600px) {
        flex-direction: column-reverse;
      }

      .img-box {
        width: 40%;

        @media (max-width: 600px) {
          width: 100%;
        }
        img {
          width: 100%;

          @media (max-width: 600px) {
            margin-bottom: 20px;
          }
        }
      }

      .text-box {
        width: 60%;
        padding-right: 100px;

        @media (max-width: 600px) {
          width: 100%;
          padding-right: unset;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .title {
          font-family: Inter-Bold;
          font-size: 32px;
          font-weight: bold;
          line-height: 1.33;
          color: #000;
          margin-bottom: 24px;

          @media (max-width: 600px) {
            width: 100%;
            text-align: center;
          }
        }
        .subtitle {
          font-family: Montserrat;
          width: 95%;
          font-size: 16px;
          line-height: 1.55;
          color: #494949;
          margin-bottom: 24px;

          @media (max-width: 600px) {
            padding: 10px 20px;
          }
        }
        .btn {
          padding: 15px 24px;
          border-radius: 8px;
          background-color: #5956e9;
          border: 0px;
          color: #fffcfc;
          font-family: Montserrat-SemiBold;
        }
      }
    }
  }
`;
