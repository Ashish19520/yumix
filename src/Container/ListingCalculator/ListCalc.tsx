import React,{useEffect,useState} from 'react'
import { Container, Typography, Input, Button, Switch,Select,Box } from "@mui/material";
import styled from "styled-components";
import { motion } from "framer-motion";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';
import useStyles from './style';
import zIndex from '@mui/material/styles/zIndex';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchProductDetails,fetchProductPriceDetails,fetchProductProgramDetails,fetchProductFeesDetails } from "../../actions/posts";
import { useSelector } from "react-redux/es/exports"

function ListCalc() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [image, setImage] = useState<string>('/images/work1.png')
  const [toggleFunction,setToggleFunction] = useState<boolean>(true)

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
    
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const points = [
    {
      para : "Keywords impact listing visibility.",
      image : "/images/work1.png"
    },
    {
      para : "Search position affects discoverability.",
      image : "/images/work2.png"
    },
    {
      para : "Discoverability ensures visibility to potential buyer",
      image : "/images/work3.png"
    },
    {
      para : "Unfound listing is ineffective",
      image : "/images/work4.png"
    }
  ]
  const points2 = [
    {
      para : "Overview of the product and its specifications",
      image : "/images/work1.png"
    },
    {
      para : "In-depth view of product features and applications.",
      image : "/images/work2.png"
    },
    {
      para : "Emphasise brand and its unique story",
      image : "/images/work3.png"
    },
    {
      para : "Add images to give depth to your listing",
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

  const dispatch: Dispatch<any> = useDispatch();
  const [value,setValue]=useState();
  const [country,setCountry]=useState("US");
  const [loader, setLoader] = useState(false);
  const[pDetails,setpDetails]=useState<any>(null); 
  const[prDetails,setprDetails]=useState<any>(null); 
  const[prgDetails,setprgDetails]=useState<any>(null); 
  const[pfeeDetails,setpfeeDetails]=useState<any>(null); 


  const changeHandlar=(e:any)=>{
    setValue(e.target.value)
  }
  const countryHandlar=(e:any)=>{
   e.target.checked?setCountry("IN"):setCountry("US")
  }
  useEffect(() => {
    window.scrollTo(0, 700);
  }, [loader]);

  const fetch=async()=>{
    setLoader(true);
    const productDetails:any=await dispatch(fetchProductDetails(value,country));
    setpDetails(productDetails);
    const priceDetails:any=await dispatch(fetchProductPriceDetails(value,country));
    setprDetails(priceDetails);
    
    const programDetails:any=await dispatch(fetchProductProgramDetails(value,country));
    setprgDetails(programDetails);

    let data={
      countryCode:productDetails?.data?.countryCode,
      itemInfo: {
        asin: productDetails?.data?.searchKey,
        glProductGroupName: productDetails?.data?.otherProducts?.products[0]?.gl,
        packageLength:productDetails?.data?.otherProducts?.products[0]?.length,
        packageWidth: productDetails?.data?.otherProducts?.products[0]?.width,
        packageHeight:productDetails?.data?.otherProducts?.products[0]?.height,
        dimensionUnit: productDetails?.data?.otherProducts?.products[0]?.dimensionUnit,
        packageWeight: productDetails?.data?.otherProducts?.products[0]?.weight,
        weightUnit: productDetails?.data?.otherProducts?.products[0]?.weightUnit,
        afnPriceStr: priceDetails?.data?.price?.amount,
        mfnPriceStr: priceDetails?.data?.price?.amount,
        mfnShippingPriceStr:priceDetails?.data?.shipping?.amount,
        currency:country==="US"?"USD":"INR" ,
        isNewDefined: false,
      },
      programIdList:[
        "MFN",
        "Core"]
    }
    const productFees:any=await dispatch(fetchProductFeesDetails(data,country));
    setpfeeDetails(productFees);
    setLoader(false); 
    
  }
  return (
    <ListContainer style={{ backgroundColor: "#FFFCFC" }}>
      {loader && (
                <div className="mainPreloaderMain">
                    <div className="mainPreloader">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            )}
      <Container maxWidth="lg" className="container" >
        <div className="hero_wrapper"  >
          <div className="info-box_FBA" >
            <div className="fba-Title">Optimise Listing Visibilty</div>
            <div className="fba-subTitle">
              Increase your Amazon sales and conversions with a perfectly optimised listing alongside on page factors.
             
            </div>
            US product<Switch  
            onChange={countryHandlar} />Indian Product
            <div className="input-field">
              <input
                type="text"
                placeholder="Enter Amazon product's ASIN Number"
                value={value}
                onChange={changeHandlar}
              ></input>
              <button 
              // disabled={!value}
               onClick={fetch} 
              className= {`btn_FBACalculate ${classes.index}`}>
                Optimising Visibilty</button>
            </div>
            
           </div>
           <div className={`${classes.heroImg} box`} >
           <motion.img
              src="../images/Rock2@3x.png"
              className={classes.imageLines6}
              initial="hidden"
              animate="show"
              width="70%"
              height="70%"
            ></motion.img>
        <motion.img
              src="../images/Ellipse.png"
              className={classes.imageLines5}
              initial="hidden"
              animate="show"
              width="70%"
              height="70%"
            ></motion.img>
            <img
            className={`${classes.heroImg} hoverimg`}
            src="../images/Saly-10.png"
             alt="img"
              height="517px" 
              width="517px">
              </img>


          </div>
          
        </div>
        
        
        <motion.img
              src="../images/Group 38639.png"
              className={classes.imageLines1}
              initial="hidden"
              animate="show"
              width="70%"
              height="70%"
            ></motion.img>
             <motion.img
              src="../images/Ellipse 63@3x.png"
              className={classes.imageLines2}
              initial="hidden"
              animate="show"
              width="70%"
              height="70%"
            ></motion.img>
      </Container>
      <Container maxWidth='lg' className="container">
        <div className={classes.wrapper}>
          <div className={`${classes.relative} ${classes.index}`}>
          <img src=
            {pDetails&&pDetails?.data?.otherProducts?.products[0]?.imageUrl?
              pDetails?.data?.otherProducts?.products[0]?.imageUrl:
              "../images/61+lhpMw+2L 1.png"}
              alt="img"
             height="100px" 
             width="100px"></img>
            {/* <motion.img
              src="../images/Ellipse.png"
              className={classes.imageLines7}
              initial="hidden"
              animate="show"
            ></motion.img> */}
          </div>


          <div className={classes.innerWrapper}>
            <div className={classes.innerimg}>
            <h2> {pDetails&&pDetails?.data?.otherProducts?.products[0]?.title?
              pDetails?.data?.otherProducts?.products[0]?.title:
              "Your product is going to list here"}</h2>
              <motion.img
              src="../images/Ellipse 64.png"
              className={classes.imageLines13}
              initial="hidden"
              animate="show"
            ></motion.img>
            </div>
            <div className={classes.items}>
              <div className={classes.box}>
                <p>customerReviewsCount</p>
                <p> {pDetails&&pDetails?.data?.otherProducts?.products[0]?.customerReviewsCount?
              pDetails?.data?.otherProducts?.products[0]?.customerReviewsCount:
              "-"}</p>
              </div>
              <div className={classes.box}>
              <p>Product Id</p>
                <p>{pDetails&&pDetails?.data?.otherProducts?.products[0]?.asin?
              pDetails?.data?.otherProducts?.products[0]?.asin:
              "-"}</p>
              </div>
              <div className={classes.box}>
              <p>Price</p>
                <p>{country==="US"?"$":"₹"}{prDetails&&prDetails?.data?.price?.amount?
              prDetails?.data?.price?.amount:
              "0"}</p>
              </div>
              <div className={classes.box}>
              <p>Ratings</p>
                <p>{pDetails&&pDetails?.data?.otherProducts?.products[0]?.customerReviewsRating
?
              pDetails?.data?.otherProducts?.products[0]?.customerReviewsRating
              :
              "-"}</p>
              </div>
            </div>
          </div>
        </div>
        
      </Container>
      <Container maxWidth='lg' className="container">
        <div className={`${classes.twoContainer} `}>
          <div className={`${classes.innerTwoContainer} ${classes.index}`}>

            <div className={`${classes.innerThirdContainer}`}>
              <div>
                <p>Desirability</p>
              </div>
              <div>
              <img src="../images/Oval.png" alt="" height="72px" width="72px"/>
              </div>
            </div>
          </div>
          <div className={`${classes.innerTwoContainer} ${classes.index}`}>
            <div className={classes.innerThirdContainer}>
              <div>
                <p>Discoverability</p>
              </div>
              <div>
              <img src="../images/Oval.png" alt="" height="72px" width="72px"/>
              </div>
            </div>
          </div>
        </div>
        <motion.img
              src="../images/Ellipse 63.png"
              className={classes.imageLines8}
              initial="hidden"
              animate="show"
            ></motion.img>
      </Container>
       
      <Container className={classes.relative}>
        <div className={classes.fourthContainer}>
        <div style={{zIndex:"5"}}>
            <h1 >Analysis</h1>  
          </div>
          <div className={classes.innerOneFourth}>
            <p>4 possible error(s) analyzed.</p>
            <div className="input-field">
              <button className={classes.btnFBACalculate}>View all Errors</button>
            </div>
          </div>
        </div>
         <motion.img
              src="../images/Frame 54 (1).png"
              className={classes.imageLines3}
              initial="hidden"
              animate="show"
              width="70%"
              height="70%"
            ></motion.img>
      </Container>
      <Container>
        <div className={classes.fifthContainer}>
          <div className={classes.innerFifthContainer} >
            <div className={classes.innersecondFifthContainer}>
              <h4>Title</h4>
              <div className={classes.greenGood}>Good</div>
            </div>
            <div className={classes.innersecondFifthContainer}  >
              <p>Title is possibly the most important part of the product listing. Ensure the title is readable, is relevant to your product and is keyword rich. Most of your main keywords go here.</p>
              <img src="../images/Oval.png" alt="" height="72px" width="72px"/>
            </div>
          </div>
        </div>

        <div className={classes.fifthContainer}>
          <div className={classes.innerFifthContainer} >
            <div className={classes.innersecondFifthContainer}>
              <h4>Description</h4>
              <div className={classes.greenGood}>Good</div>
            </div>
            <div className={classes.innersecondFifthContainer}  >
              <p>Title is possibly the most important part of the product listing. Ensure the title is readable, is relevant to your product and is keyword rich. Most of your main keywords go here.</p>
              <img src="../images/Oval.png" alt="" height="72px" width="72px"/>
            </div>
          </div>
        </div>

        <div className={classes.fifthContainer}>
          <div className={classes.innerFifthContainer} >
            <div className={classes.innersecondFifthContainer}>
              <h4>Image Count</h4>
              <div className={classes.greenGood}>Good</div>
            </div>
            <div className={classes.innersecondFifthContainer}  >
              <p>Title is possibly the most important part of the product listing. Ensure the title is readable, is relevant to your product and is keyword rich. Most of your main keywords go here.</p>
              <img src="../images/Oval.png" alt="" height="72px" width="72px"/>
            </div>
          </div>
        </div>

        <div className={classes.fifthContainer}>
          <div className={classes.innerFifthContainer} >
            <div className={classes.innersecondFifthContainer}>
              <h4>Ratings</h4>
              <div className={classes.redGood}>Bad</div>
            </div>
            <div className={classes.innersecondFifthContainer}  >
              <p>Title is possibly the most important part of the product listing. Ensure the title is readable, is relevant to your product and is keyword rich. Most of your main keywords go here.</p>
              <img src="../images/Frame 1000003793.png" alt="" height="72px" width="72px"/>
            </div>
          </div>
        </div>

        <div className={classes.fifthContainer}>
          <div className={classes.innerFifthContainer} >
            <div className={classes.innersecondFifthContainer}>
              <h4>Reviews</h4>
              <div className={classes.greenGood}>Good</div>
            </div>
            <div className={classes.innersecondFifthContainer}  >
              <p>Title is possibly the most important part of the product listing. Ensure the title is readable, is relevant to your product and is keyword rich. Most of your main keywords go here.</p>
              <img src="../images/Oval.png" alt="" height="72px" width="72px"/>
            </div>
          </div>
        </div>
      </Container>
      <Container fixed  className="container">
        <div className={`${classes.fifthContainer} ${classes.relative}`}>
        <motion.img
              src="../images/newRock2@3x.png"
              className={classes.imageLines11}
              initial="hidden"
              animate="show"
              width="100px"
              height="100px"
            ></motion.img>
            
            <motion.img
              src="../images/rock_branchwork_yellow_Cube.png"
              className={classes.imageLines12}
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
          
            <div className={classes.fifthMainHeading}>Why you need to optimize your listing</div>
            <p style={{textAlign:"center",width:"80%"}}>Listing optimization boosts success and enhances buying experience. It increases visibility, builds trust, differentiates, improves conversions, and adapts to market changes.</p>
          </div>
          <div className={classes.fifthInner}>
            <div>
              <h2  style={{marginBottom:"40px"}}>Discoverability - The Listing Visibility</h2>
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
            <h2 style={{marginBottom:"40px"}}>Desirability - On Page Factors</h2>
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
          </div>
        </div>
      </Container>
      
      <Container>
        <div className={classes.sixthContainer}>
          <h1>FAQS</h1>
          <div>
          <FormControl variant="standard" className={classes.selectors}>
        <InputLabel  id="demo-simple-select-standard-label">Does the Amazon Listing Optimization tool work for all the Amazon marketplaces?</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
     
          </div>
          <div>
          <FormControl variant="standard" className={classes.selectors}>
        <InputLabel  id="demo-simple-select-standard-label">What are the qualities of a good Amazon listing?</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
     
          </div>
          <div>
          <FormControl variant="standard" className={classes.selectors}>
        <InputLabel  id="demo-simple-select-standard-label">How to optimize Amazon Listings?</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
     
          </div>
          <div>
          <FormControl variant="standard"  className={classes.selectors}>
        <InputLabel  id="demo-simple-select-standard-label">How does Amazon decide the ranking of my products?</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
     
          </div>
        </div>
      </Container>
      <Container className={classes.relative} style={{marginTop:"50px"}}>
      <motion.img
              src="../images/Frame 56.png"
              className={classes.imageLines4}
              initial="hidden"
              animate="show"
              width="100%"
            ></motion.img>
        <div>
          <div >
            <h3>Try out other resources for your business</h3>
          </div>

          <div className={classes.innerSeventh} >
            <div className={`${classes.img} ${classes.index}`}>
              <img src="../images/Rectangle first.png" alt="img" height="200px" width="369px"></img>
              <p> Resources</p>
              <h2> FBA Calculator</h2>
            </div>
            <div className={`${classes.img} ${classes.index}`}>
              <img src="../images/Rectangle second.png" alt="img" height="200px" width="369px"></img>
              <p> Optimising Listing Library</p>
              <h2> FBA Calculator</h2>
            </div>
          </div>

        </div>
      </Container>
    </ListContainer>
  )
}
const ListContainer = styled.div`
  .container {
    margin: auto;
    padding-top: 80px;
    position :relative;
    .hero_wrapper {
      display: flex;
      align-items:center ;
      justify-content: space-evenly;
      @media (max-width: 600px) {
        flex-direction: column;
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
          styleName: Body M 16;
          font-family: Montserrat;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0.25px;
          padding-bottom: 24px;
        }
        .input-field {
          display: flex;
          gap:15px;
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
          flex-direction: column; 
          gap:15px;
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
          cursor: "pointer";
        }
        }
      }.box{
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


export default ListCalc
