import React,{useEffect} from 'react'
import { Container, Typography, Input, Button, Select } from "@mui/material";
import styled from "styled-components";
import { motion } from "framer-motion";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';
import useStyles from './style';

function ListCalc() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
    
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ListContainer style={{ backgroundColor: "#FFFCFC" }}>
      <Container maxWidth="lg" className="container" >
        <div className="hero_wrapper">
          <div className="info-box_FBA">
            <div className="fba-Title">Optimise Listing Visibilty</div>
            <div className="fba-subTitle">
              Increase your Amazon sales and conversions with a perfectly optimised listing alongside on page factors.
            </div>
            <div className="input-field">
              <input
                type="text"
                placeholder="Enter Amazon product's ASIN Number"
              ></input>
              <button className="btn_FBACalculate">Optimising Visibilty</button>
            </div>
          </div>
          <div className={classes.heroImg} >
            <img
            className={classes.heroImg}
            src="../images/Saly-10.png"
             alt="img"
              height="517px" 
              width="517px"></img>

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
              <div className={classes.greenGood}>Bad</div>
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
              <div className={classes.redGood}>Good</div>
            </div>
            <div className={classes.innersecondFifthContainer}  >
              <p>Title is possibly the most important part of the product listing. Ensure the title is readable, is relevant to your product and is keyword rich. Most of your main keywords go here.</p>
              <img src="../images/Oval.png" alt="" height="72px" width="72px"/>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className={classes.sixthContainer}>
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
      <Container className={classes.relative}>
      <motion.img
              src="../images/Frame 56.png"
              className={classes.imageLines4}
              initial="hidden"
              animate="show"
              width="100%"
            ></motion.img>
        <div>
          <div >
            <h1>Try out other resources for your business</h1>
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
            letter-spacing: 0.001em;
            text-align: center;
          }
        }
      }
    }
  }
`;

export default ListCalc
