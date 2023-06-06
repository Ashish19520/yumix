import { Container, Typography,Box } from "@mui/material";
import React,{useEffect,useState} from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import useStyles from './styles';

export const Fba = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [image, setImage] = useState<string>('/images/work1.png')
  const [toggleFunction,setToggleFunction] = useState<boolean>(true)
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
  const points = [
    {
      para : "Requires strong management skills for shipments and customer service.",
      image : "/images/work1.png"
    },
    {
      para : "Offers more flexibility and control over inventory, packaging, and shipping.",
      image : "/images/work2.png"
    },
    {
      para : "Suitable for products with lower profit margins.",
      image : "/images/work3.png"
    },
    {
      para : "Charges fees for various services.",
      image : "/images/work4.png"
    }
  ]
  const points2 = [
    {
      para : "Provides faster delivery and wider customer base.",
      image : "/images/work1.png"
    },
    {
      para : "Provides access to Prime eligibility and BuyBox advantage.",
      image : "/images/work2.png"
    },
    {
      para : "Beneficial for new and high-volume sellers, large or expensive products.",
      image : "/images/work3.png"
    },
    {
      para : "Doesn’t charge numerous fees for various services.",
      image : "/images/work4.png"
    }
  ]
  function showElistratorOnSomeInterval(){

    if(selectedIndex ===0 || selectedIndex <=3){

      setTimeout(()=>{
        setSelectedIndex(1)
        setImage("/images/work2.png")
      },2000)
  
  
      setTimeout(()=>{
        setSelectedIndex(2)
        setImage("/images/work3.png")
      },4000)
  
  
      setTimeout(()=>{
        setSelectedIndex(3)
        setImage("/images/work4.png")
      },6000)

      setTimeout(()=>{
        setSelectedIndex(0)
        setImage("/images/work1.png")
      },8000)

    }
  }

  if(selectedIndex === 0){
    showElistratorOnSomeInterval()
  }
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated");
          entry.target.classList.add("animate__fadeIn");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".bannerList_hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);
  return (
    <FbaContainer style={{ backgroundColor: "#FFFCFC",width:"100vw"}}>
      <Container  className="container" >
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
          <div className="box " style={{zIndex:"1"}}>
            <motion.img
              src="../images/Rock2@3x.png"
              className={classes.heroRock}
              initial="hidden"
              animate="show"
            ></motion.img>
        <motion.img
              src="../images/Ellipse 75@3x.png"
              className={classes.heroCircle}
              initial="hidden"
              animate="show"
            ></motion.img>
              <img
                src="../images/8 - Lucas Dancing.png"
                className="hoverimg"
                alt="img"
              ></img>
          </div>
        </div>
       
        <motion.img
              src="../images/Group 38594.png"
              className={classes.imageLines1}
              initial="hidden"
              animate="show"
              width="100%"
            ></motion.img>  
             <motion.img
              src="../images/Ellipse 63@3x.png"
              className={classes.imageLines7}
              initial="hidden"
              animate="show"
            ></motion.img>
      </Container>
      <Container fixed className="container">
        <div className={classes.wrapper}>
          <div className={`${classes.img} ${classes.index}`}>
            <img src="../images/61+lhpMw+2L 1.png" alt="img" height="200px" width="250px"></img>
            <motion.img
              src="../images/Ellipse 75@3x.png"
              className={classes.imageLines3}
            ></motion.img>
          </div>
          

          <div className={classes.innerWrapper}>
          {/* <motion.img
              src="../images/Ellipse 64.png"
              className={classes.imageLines13}
              initial="hidden"
              animate="show"
            ></motion.img> */}
            
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
          {/* <motion.img
              // src="../images/FullRock1@3x.png"
              className={classes.imageLines14}
              initial="hidden"
              animate="show"
            ></motion.img> */}
        </div>
      </Container>
      <Container className='container'>
        <div className={classes.monitor}>
        
        {/* <motion.img
              src="../images/Group 38632@3x.png"
              className={classes.imageLines}
              initial="hidden"
              animate="show"
              width="80%"
            ></motion.img>  */}
          <div className={classes.firstRow}>
            <div className={classes.write}>Item Price</div>
            <div className={classes.write}>Shipping Price</div>
            <div className={classes.write}>Total Revenue</div>
            <div className={classes.write}>Amazon Selling Fees</div>
            <div className={classes.write}>Seller fulfillment cost</div>
            <div className={classes.write}>-----</div>
            <div className={classes.write}>Amazon fulfillment fees</div>
            <div className={classes.write}>ship to Amazon</div>
            <div className={classes.write}>Total fulfillment cost</div>
            <div className={classes.write}>Selling proceeds</div>
            <div className={classes.write}>Cost of product</div>
          </div>
          
            <div className={classes.secondRow}>
              <h1>FBA</h1>
              <input className={classes.input} />
              <input className={classes.input} />
              <input className={classes.input} />
              <input className={classes.input} />
              <input className={classes.input} />
              <input className={classes.input} />
              <input className={classes.input} />
              <input className={classes.input} />
              <input className={classes.input} />
              <input className={classes.input} />
            </div>
            <div className={classes.thirdRow}>
              <h1>FBM</h1>
              <input className={classes.input} />
              <input className={classes.input} />
              <input className={classes.input} />
              <input className={classes.input} />
              <input className={classes.input} />
              <input className={classes.input} />
              <input className={classes.input} />
              <input className={classes.input} />
              <input className={classes.input} />
              <input className={classes.input} />
            </div>
        </div>
      </Container>
      <Container fixed maxWidth='lg' className="container">
        <div className={classes.twoContainer}>
        <motion.img
              src="../images/Line.png"
              className={classes.imageLines2}
              initial="hidden"
              animate="show"
              width="100%"
            ></motion.img>
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
       
        <motion.img
              src="../images/newRock2@3x.png"
              className={classes.imageLines4}
              initial="hidden"
              animate="show"
              width="100px"
              height="100px"
            ></motion.img>
            
            <motion.img
              src="../images/rock_branchwork_yellow_Cube.png"
              className={classes.imageLines8}
              initial="hidden"
              animate="show"
            ></motion.img>
            <motion.img
              src="../images/Ellipse 64@3x.png"
              className={classes.imageLines9}
              initial="hidden"
              animate="show"
            ></motion.img>
             <motion.img
              src="../images/Ellipse 62@3x.png"
              className={classes.imageLines10}
              initial="hidden"
              animate="show"
      
            ></motion.img>
          <div className={classes.fifthHeading}>
            <h1 >FBA v/s FBM</h1>
            <p>which one is right for your bussiness? </p>
          </div>
          <div className={classes.fifthInner}>
            <div>
              <h2 style={{marginBottom:"40px"}}>FBA</h2>
              {
            points.map((item, index) => {
              return(
                <Box onMouseEnter={() => setImage(points[index]?.image)} onMouseLeave={() => setImage(points[selectedIndex]?.image)} key={item?.para} style={{display:'flex', gap:"15px"}}>
                  <Box style={{display:'flex', flexDirection:'column', alignItems:"center"}}>
                    <Box style={{width:"20px", height:'20px', borderRadius:"50%", border:`6px solid ${ selectedIndex>=index ? "#5856e9" : "#D1D1D1"}`,cursor:"pointer"}} onClick={()=>{setImage(points[index].image);setSelectedIndex(index);}}/>
                    <Box style={{width:"2px", height:'50px', backgroundColor: selectedIndex>index ? "#5856e9" : "#D1D1D1", display: index===points.length-1 ? "none" : "block" }}/>
                  </Box>
                  <Box style={{height:index===points.length-1 ? "auto" : "50px", width:"100%", position:"relative", top:"-10px"}}>
                    <FontWrapper>
                    <Typography fontSize="14px" fontFamily="Montserrat" color="#828490" style={{cursor:"pointer"}} className="whyus-para" onClick={()=>{setImage(points[index]?.image);setSelectedIndex(index);}}>{item?.para}</Typography>
                    </FontWrapper>
                  
                    </Box>
                </Box>
              )
            })
          }
            </div>
            <div>
              <h2 style={{marginBottom:"40px"}}>FBM</h2>
              {
            points2.map((item, index) => {
              return(
                <Box onMouseEnter={() => setImage(points[index]?.image)} onMouseLeave={() => setImage(points[selectedIndex]?.image)} key={item?.para} style={{display:'flex', gap:"15px"}}>
                  <Box style={{display:'flex', flexDirection:'column', alignItems:"center"}}>
                    <Box style={{width:"20px", height:'20px', borderRadius:"50%", border:`6px solid ${ selectedIndex>=index ? "#5856e9" : "#D1D1D1"}`,cursor:"pointer"}} onClick={()=>{setImage(points[index].image);setSelectedIndex(index);}}/>
                    <Box style={{width:"2px", height:'50px', backgroundColor: selectedIndex>index ? "#5856e9" : "#D1D1D1", display: index===points.length-1 ? "none" : "block" }}/>
                  </Box>
                  <Box style={{height:index===points.length-1 ? "auto" : "50px", width:"100%", position:"relative", top:"-10px"}}>
                    <FontWrapper>
                    <Typography fontSize="14px" fontFamily="Montserrat" color="#828490" style={{cursor:"pointer"}} className="whyus-para" onClick={()=>{setImage(points[index]?.image);setSelectedIndex(index);}}>{item?.para}</Typography>
                    </FontWrapper>
                  
                    </Box>
                </Box>
              )
            })
          }
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
      <Container className="container">
      
        <div>
          <div >
            <h1>Try out other resources for your business</h1>
          </div>

          <div className={classes.innerSeventh} >
            <div className={`${classes.img} ${classes.index}`}>
              <img src="../images/Rectangle first.png" alt="img" height="200px" width="368px"></img>
              <p> Resources</p>
              <h2> FBA Calculator</h2>
            </div>
            <div className={`${classes.img} ${classes.index}`}>
              <img src="../images/Rectangle second.png" alt="img" height="200px" width="368px"></img>
              <p> Optimising Listing Library</p>
              <h2> FBA Calculator</h2>
            </div>
          </div>

        </div>
        <motion.img
              src="../images/Frame 56.png"
              className={classes.imageLines11}
              initial="hidden"
              animate="show"
              width="100%"
            ></motion.img>
      </Container>
    </FbaContainer >

  );
};

const FbaContainer = styled.div`
  .container {
    z-index:1;  
    margin: auto;
    position: relative;
    padding-top: 80px;
    .hero_wrapper {
      display: flex;
      gap:"10px";
      position: relative;
      align-items: center;
      justify-content: space-between;
      z-indes:1;
      position: relative;
      @media (max-width: 600px) {
        flex-direction: column;
        justify-content: center;
      }

      .info-box_FBA {
        z-index:1;
        @media (max-width: 600px) {
          width: 100%;
        }
        z-index:1;
        width: 50%;
        .fba-Title {
          //styleName: Display P 40;
          font-family: Poppins-Bold;
          font-size: 40px;
          font-weight: 700;
          line-height: 50px;  
          z-index:1;
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
          z-index:1;
        }
        .input-field {
          display: flex;
          justify-content: space-between;
          gap:20px;
          @media (max-width: 600px) {
            flex-direction: column;
            gap:20px;
          }

          z-index:1;
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
      .box{
        width:50%;
        position: relative;
        @media (max-width: 600px) {
          width: 100%;
          justify-content: center;
        }
      }
      .hoverimg{
        width: 100%;
      }
    
      
    }
  }
`;
const FontWrapper=styled.div`
  
  .whyus-title{
    @media (max-width:600px){
      font-size: 14px;
      margin:"100px"
    }
  }

  .whyus-para{
    @media(max-width:600px){
      font-size: 11px;
    }
  }`;
