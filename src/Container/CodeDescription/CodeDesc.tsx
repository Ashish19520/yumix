import React,{useEffect,useState,useRef} from 'react'
import { Container, TextField, Typography } from "@mui/material";
import styled from "styled-components";
import { motion } from "framer-motion";
import useStyles from './styles';
import  Editor  from 'react-rte';
import { Handshake } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'


function CodeDesc() {
  const navigate=useNavigate();
  const [age, setAge] = useState('');
    const classes = useStyles();
    const inputRef:any=useRef();
   
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const [editorValue, setEditorValue] = useState(Editor.createEmptyValue());
    const [copied,setCopied]=useState(false);

    const handleChange = (value: any) => {
      setEditorValue(value);
    };
  
    const getHtmlContent = (editorValue:any) => {
      return editorValue.toString('html');
    };
  
    const handleHtmlChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const htmlContent = event.target.value;
      const newEditorValue = Editor.createValueFromString(htmlContent, 'html');
      setEditorValue(newEditorValue);
    };
    // const copyHandlar=()=>{
    //   const valueToCopy = editorValue.toString('html');
    //     navigator.clipboard.writeText(valueToCopy)
    //       .then(() => {
    //        setCopied(true);
    //       })
    //       .catch((error) => {
    //         setCopied(false);
    //         console.log("error while copying",error)
    //       });
      
    // }
    const copyHandlar = () => {
      const valueToCopy = editorValue.toString("html");
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(valueToCopy)
          .then(() => {
            setCopied(true);
          })
          .catch((error) => {
            setCopied(false);
            console.log("error while copying", error);
          });
      } else {
        inputRef.current.select();
        if (document.execCommand("copy")) {
          setCopied(true);
        } else {
          setCopied(false);
        }
      }
    };
  return (
    <CodeContainer className="margin-nav" style={{ backgroundColor: "#FFFCFC",position:"relative" }}>
    <Container
     maxWidth="lg"
      className="container"
      style={{position:"relative",marginBottom:"100px" }}
      >
    <div className="hero_wrapper">
    
    <motion.img
              src="../images/Group 38594.png"
              className={classes.imageLines1}
              initial="hidden"
              animate="show"
              width="100%"
            ></motion.img>  
             {/* <motion.img
              src="../images/Ellipse 63@3x.png"
              className={classes.imageLines2}
              initial="hidden"
              animate="show"
              width="70%"
              height="70%"
            ></motion.img> */}
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
          {/* <button className="btn_FBACalculate">Turn to code</button> */}
        </div>
      </div>
      <div className={`box ${classes.index}`}>
      <motion.img
             src="../images/Ellipse 75@3x.png"
             className={classes.imageLines6}
             alt="img"
            ></motion.img>
          <img
            src="../images/04 Market Research.png"
            alt="img"
            className='hoverimg'
          ></img>
      </div>
    </div>
    
            
  </Container>
  <Container>
    <div className={classes.firstContainer}>
        <div className={classes.insideFirstContainer}>
            {/* <p>Write your product’s description here.</p> */}
            {/* <textarea className={classes.txtField}></textarea> */}
            <Editor
            className={classes.txtField}
            value={editorValue}  
            onChange={handleChange}
            // toolbarClassName={classes.toolbar}
            placeholder='Write your product description here'
           />
           

        </div>
        <div className={classes.insideFirstContainerTwo}>
            <p>Your HTML code will appear here.</p>
            <textarea
            placeholder='Your HTML code will appear here.'
            className={classes.txtField}
            value={getHtmlContent(editorValue)}
            // onChange={handleHtmlChange}
            ref={inputRef as any}
            />
            <button className={`${classes.btn1} pointer`} onClick={copyHandlar}>
              {copied?"Copied":"Copy Code"}</button>
            

        </div>
    </div>
  </Container>
  <Container className={classes.relative}>
        <div className={classes.thirdWrapper}> 
            
                <h1>Amazon Listing Policies</h1>
                <div className={classes.thirdWrapperTwo}>
                <p className={classes.txt}>
                Amazon's listing policies are guidelines that Amazon sellers must follow to create product listings on the platform, ensuring a positive customer experience and maintaining a good seller account standing.
                <motion.img
              src="../images/Ellipse 63@3x.png"
              className={classes.imageLines3}
              initial="hidden"
              animate="show"
              width="70%"
              height="70%"
            ></motion.img>
                </p> 
                    {/* <button className={classes.btn_FBACalculate}>Check Policies</button> */}
                </div>

        </div>
      </Container>
      <Container >
        <div className={classes.fourthWrapper}>
            <div className={`${classes.firstFourthWrapper} ${classes.relative}`}>
                <div className={`${classes.secondFourthWrapper} ${classes.txt2}`}>
                    Amazon's Quick Start Style Guide outlines general rules for writing product listings applicable to all products on the platform.
                </div>
                <div className={`${classes.secondFourthWrapper} ${classes.txt2}`}>
                Do not use Javascript, HTML, or any other type of code in the product listing pages. However, line breaks br tag can be used in the description.
                </div>
                <div className={`${classes.secondFourthWrapper} ${classes.txt2}`}>
                Irrespective of the product category, product titles must not exceed 200 characters, including spaces
                </div>
                <motion.img
              src="../images/Ellipse 63.png"
              className={classes.imageLines5}
              initial="hidden"
              animate="show"
            ></motion.img>
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
        {/* <motion.img
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
            ></motion.img> */}
      </Container>
      <Container>
        <div className={classes.sixthContainer}>
          <h1>FAQS</h1>
          <div>
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography id="select-font-faq"> Does the Amazon Listing Optimization tool work for all the Amazon marketplaces?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='select-font'>
          If your workplace involves selling products on Amazon, utilising listing optimization tools can be highly advantageous. They can assist you in improving your product listings, attracting more potential customers, and increasing sales. However, if your workplace does not involve selling products on Amazon or within the e-Commerce industry, these tools may not be directly applicable to your specific business needs.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography id="select-font-faq">What are the qualities of a good Amazon listing?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='select-font'>
          A good Amazon listing should have several key qualities. It should be concise and clear, providing relevant information about the product. The title should be descriptive and include keywords. High-quality images showcasing the product from different angles are essential. The listing should have accurate and detailed product descriptions, highlighting features and benefits. Including customer reviews and ratings helps build trust. Additionally, competitive pricing, well-organised bullet points, and effective use of search terms can improve visibility and attract potential buyer.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography id="select-font-faq">How to optimize Amazon Listings?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='select-font'>
          To optimise Amazon listings, focus on keyword research to include relevant terms in titles, bullet points, and descriptions. Write compelling and concise product descriptions, use high-quality images, and request customer reviews. Optimise backend search terms, leverage enhanced brand content, and monitor and adjust your listings regularly for better performance.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography id="select-font-faq">How does Amazon decide the ranking of my products?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='select-font'>
          Amazon determines the ranking of products based on various factors including relevance, sales performance, customer reviews, pricing, and availability. The algorithm takes into account the product's title, description, and keywords, as well as the seller's performance metrics. Factors like conversion rate, customer satisfaction, and fulfilment method also play a role. Continuous optimization and updates to the algorithm influence the ranking of products on Amazon's platform.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
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
            <div className={`${classes.img1} ${classes.index} pointer`}
            onClick={()=>navigate('/home/fbaCalculator')}>
              <img src="../images/Rectangle first.png" alt="img" className={classes.imges} height="200px"></img>
              <p> Resources</p>
              <h2> FBA Calculator</h2>
            </div>
            <div className={`${classes.img1} ${classes.index} pointer`}
             onClick={()=>navigate('/home/listingCalculator')}>
              <img src="../images/Rectangle second.png" alt="img" className={classes.imges} ></img>
              <p> Resources</p>
              <h2> Optimising Listing Library</h2>
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
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      @media (max-width: 600px) {
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
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
          justify-content: flex-start;
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
          position:relative;
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
