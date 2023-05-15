import React,{useEffect} from 'react'
import { Container, TextField, Typography } from "@mui/material";
import styled from "styled-components";
import { motion } from "framer-motion";
import useStyles from './styles';

function CodeDesc() {
    const classes = useStyles();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <CodeContainer style={{ backgroundColor: "#FFFCFC" }}>
    <Container maxWidth="lg" className="container" >
    <div className="hero_wrapper">
      <div className="info-box_FBA">
        <div className="fba-Title">Description to Code</div>
        <div className="fba-subTitle">
        Struggling with clumsy HTML codes?
        Try Description to Code to convert your Amazon description to code
        </div>
        <div className="input-field">
          {/* <input
            type="text"
            placeholder="Enter Amazon product's ASIN Number"
          ></input> */}
          <button className="btn_FBACalculate">Turn to code</button>
        </div>
      </div>
      {/* <div className="img-box_FBA">
        <img src="../images/8 - Lucas Dancing.png" alt="img" height="480px" width="552px"></img>
      </div> */}
      <div className="box hoverimg">
        <div className="fba">
          {/* <img
                src="../images/Ellipse 75@3x.png"
                className="images-tools-bounce1"
                alt="img"
                height="447px"
                width="44px"
              ></img> */}
          <img
            src="../images/04 Market Research.png"
            className="images-tools-bounce1"
            alt="img"
          ></img>
        </div>
      </div>
    </div>
  </Container>
  <Container>
    <div className={classes.firstContainer}>
        <div className={classes.insideFirstContainer}>
            <p>Write your product’s description here.</p>
            <textarea className={classes.txtField}></textarea>

        </div>
        <div className={classes.insideFirstContainerTwo}>
            <p>Your HTML code will appear here.</p>
            <button className={classes.btn1}>copy code</button>
            

        </div>
    </div>
  </Container>
  <Container>
        <div className={classes.thirdWrapper}> 
            
                <h1>Amazon Listing Policies</h1>
                <div className={classes.thirdWrapperTwo}>
                <p className={classes.txt}>
                Amazon's listing policies are guidelines that Amazon sellers must follow to create product listings on the platform, ensuring a positive customer experience and maintaining a good seller account standing.
                </p> 
                    <button className={classes.btn_FBACalculate}>Check Policies button</button>
                </div>

        </div>
      </Container>
      <Container>
        <div className={classes.fourthWrapper}>
            <div className={classes.firstFourthWrapper}>
                <div className={`${classes.secondFourthWrapper} ${classes.txt2}`}>
                    Amazon's Quick Start Style Guide outlines general rules for writing product listings applicable to all products on the platform.
                </div>
                <div className={`${classes.secondFourthWrapper} ${classes.txt2}`}>
                Do not use Javascript, HTML, or any other type of code in the product listing pages. However, line breaks br tag can be used in the description.
                </div>
                <div className={`${classes.secondFourthWrapper} ${classes.txt2}`}>
                Irrespective of the product category, product titles must not exceed 200 characters, including spaces
                </div>
            </div>
            <div className={classes.firstFourthWrapper}>
            <div className={`${classes.secondFourthWrapper} ${classes.txt2}`}>
                Product titles, descriptions, and bullet points must be written neatly and concisely to help customers understand the product
                </div>
                <div className={`${classes.secondFourthWrapper} ${classes.txt2}`}>
                The images used to accompany the products must follow Amazon image standards. These can be found in Product Image Requirements set by Amazon
                </div>
                <div className={`${classes.secondFourthWrapper} ${classes.txt2}`}>
                A previous listing cannot be used for a new product, regardless of material, size, features, colour, or product name modifications. Every new version must have a new product listing page.
                </div>
            </div>
            <div className={classes.firstFourthWrapper}>
            <div className={`${classes.secondFourthWrapper} ${classes.txt2}`}>
            All products must be correctly categorized
                </div>
                <div className={`${classes.secondFourthWrapper} ${classes.txt2}`}>
                Advertising, watermarks on media, logos, reviews/testimonials, spoilers, and requests for the same are prohibited on Amazon product listings for books, music, video, or DVDs.
                </div>
                <div className={`${classes.secondFourthWrapper} ${classes.txt2}`}>
                Advertising, watermarks on media, logos, reviews/testimonials, spoilers, and requests for the same are prohibited on Amazon product listings for books, music, video, or DVDs.
                </div>
            </div>
        </div>
      </Container>
  <Container>
        <div>
          <div >
            <h1>Try out other resources for your business</h1>
          </div>

          <div className={classes.innerSeventh} >
            <div className={classes.img1}>
              <img src="../images/Rectangle first.png" alt="img" height="200px" width="368px"></img>
              <p> Resources</p>
              <h2> FBA Calculator</h2>
            </div>
            <div className={`${classes.img1} `}>
              <img src="../images/Rectangle second.png" alt="img" height="200px" width="368px"></img>
              <p> Optimising Listing Library</p>
              <h2> FBA Calculator</h2>
            </div>
          </div>
        </div>
      </Container>
  </CodeContainer>
  )
}

export default CodeDesc;
const CodeContainer = styled.div`
  .container {
    margin: auto;
    padding-top: 80px;
    .hero_wrapper {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      @media (max-width: 600px) {
        flex-direction: column-reverse;
        justify-content: center;
      }

      .info-box_FBA {
        @media (max-width: 600px) {
          width: 100%;
        }
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
