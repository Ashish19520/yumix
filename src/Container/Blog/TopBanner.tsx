import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Margin } from "@mui/icons-material";


const typingContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };
  const typingText = {
    hidden: { opacity: 0, y: "-20px" },
    show: {
      opacity: 1,
      y: "0",
      transition: {
        ease: "easeInOut",
      },
    },
  };

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


export default function TopBanner() {
  return (
    <TopBannerWrapper className="margin-nav">
    <Grid wrap="wrap-reverse" rowGap={4} position="relative" container alignItems="center" style={{maxWidth:"1200px", margin:"auto", padding:"80px 40px", overflow:"hidden"}}>
        <Grid item xs={12} md={5}>
        <motion.div
          variants={typingContainer}
          initial="hidden"
          animate="show"
          className="title"
        >
            <Typography variant="h2" className="blog-top-title">
            {Array.from("Welcome to the ESERVZ Ecommerce Blog: Your Source for E-commerce Insights and Success").map((word, i) => (
            <motion.span key={i} variants={typingText}>
              {word}
            </motion.span>
          ))}
            </Typography>
            </motion.div>
            <motion.div variants={elements}  initial="hidden" animate="show">
            <Typography variant="h2" className="blog-top-subtitle index justify">
            Are you ready to unlock the full potential of your e-commerce venture? You're in the right place! Welcome to the ESERVZ Ecommerce Blog, your go-to resource for a wealth of knowledge, tips, and strategies to elevate your online business to new heights.
         <br/>
         At Bighatch Consulting, also known as ESERVZ, we're passionate about driving e-commerce success. With a team of dedicated experts, we've been helping businesses like yours navigate the dynamic and ever-evolving world of online commerce. Our mission is clear: to equip you with the tools and insights you need to thrive in the digital marketplace.

            </Typography>
            </motion.div>
        </Grid>
        <Grid item xs={12} md={7} sx={{textAlign:{xs:"center", md:"right"}, zIndex:1}}>
            <motion.img src='/images/Illustrations.png' style={{maxHeight:"500px", width:"90%",marginTop:"50px"}} alt="Blog Banner" variants={elements}  initial="hidden" animate="show"></motion.img>
        </Grid>
        <motion.div
          variants={elements}
          initial="hidden"
          animate="show"
          className="title"
        >
        {/* <Box style={style.blueDot}></Box> */}
        <Box sx={{...style.bluredBox, top : {xs:"34%", md:"88%"}}}>
        <img  src="./images/Round Cube2@3x.png" className="logo-fold" width="100%"></img>
          </Box>
        <img src="./images/Rock2.png" style={style.bluredRock}></img>
        <img src="./images/aboutusThread.png" style={style.thread}></img>
        </motion.div>
    </Grid>
    </TopBannerWrapper>
  )
}

const TopBannerWrapper=styled.div`
.blog-top-title{
  font-size:40px;
   font-weight:700;
   color:#0B0720; 
   font-family:Poppins-Bold;
   @media (max-width:600px){
    font-size: 16px;
   }
}

.blog-dot{
  position:absolute;
  top:-20%;
}
.blog-top-subtitle{

  margin-top:40px;
  font-size:16px;
  font-weight:400; 
  color:#696969;
   font-family:Montserrat;
  line-height:24px;

  @media (max-width:600px){
    font-size: 14px;
  }
  
}
`
const style = {
    blueDot :{
        width : "30px",
        aspectRatio : 1,
        backgroundColor : "#5956E9",
        borderRadius : "50%",
        position : "absolute",
        top : "100px",
        left : "100px"
    } as React.CSSProperties,
    bluredBox : {
        width : "7%",
        minWidth : "80px",
        position : "absolute",
        left : "0px",
       
    } as React.CSSProperties,
    bluredRock : {
        width : "15%",
        minWidth : "100px",
        position : "absolute",
        top : "40",
        right : "0px",
        zIndex : 2,
        
    } as React.CSSProperties,
    thread : {
        width : "100%",
        minWidth : "500px",
        position : "absolute",
        top : "270px",
        left : "20%",
    } as React.CSSProperties
}