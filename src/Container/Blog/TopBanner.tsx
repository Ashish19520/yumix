import { Box, Grid, Typography } from "@mui/material";
import React from "react";
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
  return (
    <>
    <Grid rowGap={4} position="relative" container alignItems="center" style={{maxWidth:"1200px", margin:"auto", padding:"80px 40px"}}>
        <Grid item xs={12} md={5}>
        <motion.div
          variants={typingContainer}
          initial="hidden"
          animate="show"
          className="title"
        >
            <Typography variant="h2" style={{fontSize:"40px", fontWeight:"700", color:"#0B0720", fontFamily:"Poppins-Bold"}}>
            {Array.from("Blogs").map((word, i) => (
            <motion.span key={i} variants={typingText}>
              {word}
            </motion.span>
          ))}
            </Typography>
            </motion.div>
            <motion.div variants={elements}  initial="hidden" animate="show">
            <Typography variant="h2" style={{marginTop:"40px",fontSize:"16px", fontWeight:"400", color:"#696969", fontFamily:"Montserrat", lineHeight:"24px"}}>
                Eservz is a leading and globally renowned e-commerce and Amazon specialist agency that provides cutting edge, groundbreaking and truly revolutionary back office support to e-commerce sellers, business owners and vendors on multiple online channels especially Amazon.
            </Typography>
            </motion.div>
        </Grid>
        <Grid item xs={12} md={7} sx={{textAlign:{xs:"center", md:"right"}}}>
            <motion.img src='/images/Illustrations.png' style={{maxHeight:"500px", width:"90%"}} alt="Blog Banner" variants={elements}  initial="hidden" animate="show"></motion.img>
        </Grid>
        {/* <Box style={style.blueDot}></Box>
        <img src="./images/Round Cube2@3x.png" style={style.bluredBox}></img> */}
    </Grid>
    </>
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
        width : "105px",
        position : "absolute",
        bottom : "80px",
        left : "-20px"
    } as React.CSSProperties
}