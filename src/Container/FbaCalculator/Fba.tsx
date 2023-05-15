import { Container, Typography } from "@mui/material";
import React,{useEffect} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import useStyles from './styles';

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const classes = useStyles();
  return (
    <FbaContainer style={{ backgroundColor: "#FFFCFC" }}>
      <Container fixed className="container" >
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
                src="../images/8 - Lucas Dancing.png"
                className="images-tools-bounce1"
                alt="img"
              ></img>
            </div>
          </div>
        </div>


      </Container>
      <Container fixed className="container">
        <div className={classes.wrapper}>
          <div className={classes.img}>
            <img src="../images/61+lhpMw+2L 1.png" alt="img" height="200px" width="250px"></img>
          </div>


          <div className={classes.innerWrapper}>
            <div >
              <h2>Bose Quietcomfort 45</h2>
            </div>
            <div className={classes.items}>
              <div >
                <p>Product Id</p>
                <p>1245</p>
              </div>
              <div>
                <p>Price</p>
                <p>$3000</p>
              </div>
              <div>
                <p>Unit Weigth</p>
                <p>419gm</p>
              </div>
              <div>
                <p>Product Dimension</p>
                <p>19.5cm X 8386cm X 02.95 cm</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container fixed className='container'>
        <div className={classes.monitor}>
          <div className={classes.firstRow}>
            <p>Item Price</p>
            <p>Shipping Price</p>
            <p>Total Revenue</p>
            <p>Amazon Selling Fees</p>
            <p>Seller fulfillment cost</p>
            <p>-----</p>
            <p>Amazon fulfillment fees</p>
            <p>ship to Amazon</p>
            <p>Total fulfillment cost</p>
            <p>Selling proceeds</p>
            <p>Cost of product</p>
          </div>
          <div className={classes.pair}>
            <div className={classes.secondRow}>
              <h1>FBA</h1>

              <input className={classes.input} />
              <input className={classes.input} />
              <p>-</p>
              <p>-</p>
              <input className={classes.input} />
              <input className={classes.input} />
              <p>-</p>
              <p>-</p>
              <p>-</p>
              <p>-</p>
            </div>
            <div className={classes.thirdRow}>
              <h1>FBM</h1>
              <input className={classes.input} />
              <input className={classes.input} />
              <p>-</p>
              <p>-</p>
              <input className={classes.input} />
              <input className={classes.input} />
              <p>-</p>
              <p>-</p>
              <p>-</p>
              <p>-</p>
            </div>
          </div>
        </div>
      </Container>
      <Container fixed maxWidth='lg' className="container">
        <div className={classes.twoContainer}>
          <div className={classes.innerTwoContainer}>
            <h2>FBA</h2>
            <div className={classes.innerThirdContainer}>
              <div>
                <p>Net Profit</p>
                <h1>$50</h1>
              </div>
              <div>
                <p>Net Profit</p>
                <h1>$70</h1>
              </div>
            </div>
          </div>
          <div className={classes.innerTwoContainer}>
            <h2>FBM</h2>
            <div className={classes.innerThirdContainer}>
              <div>
                <p>Net Profit</p>
                <h1>$50</h1>
              </div>
              <div>
                <p>Net Profit</p>
                <h1>$70</h1>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container fixed  className="container">
        <div className={classes.fifthContainer}>
          <div className={classes.fifthHeading}>
            <h1 >FBA v/s FBM</h1>
            <p>which one is right for your bussiness? </p>
          </div>
          <div className={classes.fifthInner}>
            <div>
              <h2>FBA</h2>
              <div className={classes.fonts} >
                <p > strong management skills for shipments and customer service</p>
                <p>Offers more flexibility and control over inventory, packaging, and shipping</p>
                <p>Offers more flexibility and control over inventory, packaging, and shipping</p>
                <p> Charges fees for various services</p>
              </div>
            </div>
            <div>
              <h2>FBM</h2>
              <div className={classes.fonts}>
                <p>Provides faster delivery and wider customer base.</p>
                <p>Provides access to Prime eligibility and BuyBox advantage.</p>
                <p>Beneficial for new and high-volume sellers, large or expensive products.</p>
                <p>Doesn't charge numerous fees for various services</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container fixed className="container">
        <div className={classes.sixthContainer}>
          <div>
            <h1>Other Costs</h1>
            <p>Amazon Sellers analyze pre and post-launch revenue, investigating initial investments, cost, marketing, and other factors like projected sales to understand profit margins. Let's delve into the initial costs associated.</p>          </div>
          <div>
            <div className={classes.sixthRight}>
              <div className={classes.imageTextPara}>
                <img src="../images/User1.png" alt="img" height="61px" width="61px"></img>
                <p>Maintenance Security.</p>
              </div>
              <div className={classes.imageTextPara}>
                <img src="../images/bag-dynamic-color.png" alt="img" height="61px" width="61px"></img>
                <p>Shipping Costs</p>
              </div>
              <div className={classes.imageTextPara}>
                <img src="../images/locker-dynamic-gradient.png" alt="img" height="61px" width="61px"></img>
                <p>Storage Warehousing Costs</p>
              </div>
            </div>
            <div className={classes.sixthRight}>
              <div className={classes.imageTextPara}>
                <img src="../images/rupee-dynamic-color.png" alt="img" height="61px" width="61px"></img>
                <p>Costs of Goods</p>
              </div>
              <div className={classes.imageTextPara}>
                <img src="../images/megaphone-dynamic-color.png" alt="img" height="61px" width="61px"></img>
                <p>Market Costs products ads</p>
              </div>
              <div className={classes.imageTextPara}>
                <img src="../images/User2.png" alt="img" height="61px" width="61px"></img>
                <p>Product packing labelling cost.</p>
              </div>
            </div>
            <div className={classes.sixthRight}>
              <div className={classes.imageTextPara}>
                <img src="../images/User3.png" alt="img" height="61px" width="61px"></img>
                <p>Product sample and product cost.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container fixed>
        <div>
          <div >
            <h1>Try out other resources for your business</h1>
          </div>

          <div className={classes.innerSeventh} >
            <div className={classes.img}>
              <img src="../images/Rectangle first.png" alt="img" height="200px" width="368px"></img>
              <p> Resources</p>
              <h2> FBA Calculator</h2>
            </div>
            <div className={`${classes.img} `}>
              <img src="../images/Rectangle second.png" alt="img" height="200px" width="368px"></img>
              <p> Optimising Listing Library</p>
              <h2> FBA Calculator</h2>
            </div>
          </div>

        </div>
      </Container>
    </FbaContainer >

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
          padding-left: 20px;
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
