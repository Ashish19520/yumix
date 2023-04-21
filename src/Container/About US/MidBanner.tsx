import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

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

useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Entering into zone");
          entry.target.classList.add("animate__animated");
          entry.target.classList.add("animate__fadeIn");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".ourLeaders_hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <Grid className="ourLeaders_hidden" rowGap={4} position="relative" container alignItems="center" style={{maxWidth:"1200px", margin:"auto", padding:"80px 40px", overflow:"hidden"}}>
        <Grid item xs={12} md={6} sx={{textAlign:{xs:"center", md:"left"}}}>
            <motion.img src='/images/Business-Success.png' style={{width:"80%"}} alt="About Banner" variants={elements}  initial="hidden" animate="show"></motion.img>
        </Grid>
        <Grid item xs={12} md={6}>
        <motion.div
          variants={typingContainer}
          initial="hidden"
          animate="show"
          className="title"
        >
            <Typography variant="h2" style={{fontSize:"32px", fontWeight:"700", color:"#3A3B44", fontFamily:"Poppins-SemiBold"}}>
            {Array.from("Commitment for excellence").map((word, i) => (
            <motion.span key={i} variants={typingText}>
              {word}
            </motion.span>
          ))}
            </Typography>
            </motion.div>
            <motion.div variants={elements}  initial="hidden" animate="show">
            <Typography variant="h2" style={{marginTop:"20px",fontSize:"16px", fontWeight:"400", color:"#828490", fontFamily:"Montserrat", lineHeight:"24px"}}>
                Eservz is a leading and globally renowned e-commerce and Amazon specialist agency that provides cutting edge, groundbreaking and truly revolutionary back office support to e-commerce sellers, business owners and vendors on multiple online channels especially Amazon.
            </Typography>
            </motion.div>
        </Grid>
        <Box style={{borderRadius:"50%", width:"40px", height:"40px", backgroundColor:"#FE70A3", position:"absolute", top:"20px", left:'20px'}}></Box>
        <Box style={{borderRadius:"50%", width:"28px", height:"28px", backgroundColor:"#4A90E2", position:"absolute", top:"50px", right:'50px'}}></Box>
        <Box sx={{...style.bluredBox, bottom : {xs:"50%", md:"10%"}}}><img src="./images/Round Cube2@3x.png" width="100%"></img></Box>
    </Grid>
  )
}

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
      width : "10%",
      position : "absolute",
      bottom : "80px",
      right : "30px"
  } as React.CSSProperties
}