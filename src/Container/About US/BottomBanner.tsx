import { Button, Grid, Typography } from "@mui/material";
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
    <Grid className="ourLeaders_hidden" rowGap={4} position="relative" container alignItems="center" style={{maxWidth:"1200px", margin:"auto", padding:"80px 40px"}}>
        <Grid item xs={12} md={5}>
        <motion.div
          variants={typingContainer}
          initial="hidden"
          animate="show"
          className="title"
        >
            <Typography variant="h2" style={{fontSize:"32px", fontWeight:"700", color:"#0B0720", fontFamily:"Poppins-SemiBold"}}>
            {Array.from("We keep the focus on driving results").map((word, i) => (
            <motion.span key={i} variants={typingText}>
              {word}
            </motion.span>
          ))}
            </Typography>
            </motion.div>
            <motion.div variants={elements}  initial="hidden" animate="show">
            <Typography variant="h2" style={{marginTop:"20px",fontSize:"16px", fontWeight:"400", color:"#696969", fontFamily:"Montserrat", lineHeight:"24px"}}>
                With our complete multi-channel solution, you'll have access to everything you need to succeed in today's competitive online marketplace.
            </Typography>
            </motion.div>
            <motion.div variants={elements}  initial="hidden" animate="show" style={{gap:"30px", flexWrap:"wrap", display:"flex", alignItems:"center", marginTop:"30px"}}>
            <Button disableElevation variant='outlined' sx={{...style.button, color:"#5856e9", backgroundColor:"white"}}>
                Our Portfolio
            </Button>
            <Button disableElevation variant='contained' sx={{...style.buttonBorder, color:"white", backgroundColor:"#5856e9"}}>
                Get in Touch
            </Button>
            </motion.div>
        </Grid>
        <Grid item xs={12} md={7} sx={{textAlign:{xs:"center", md:"right"}}}>
            <motion.img src='/images/aboutusTargey.png' style={{width:"80%"}} alt="About Target" variants={elements}  initial="hidden" animate="show"></motion.img>
        </Grid>
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
      width : "105px",
      position : "absolute",
      bottom : "80px",
      left : "-20px"
  } as React.CSSProperties,
  button : {
    padding : { xs : "7px 24px", md : "16px 32px"},
    borderRadius : "8px",
    border : "1px solid #D1D1D1",
    textTransform : "none",
    fontSize : "14px",
    fontWeight : 600,
    fontFamily : "Montserrat-semiBold",
    letterSpacing : '1px'
    },
  buttonBorder : {
    padding : { xs : "7px 24x", md : "16px 32px"},
    borderRadius : "8px",
    border : "1px solid #5856e9",
    textTransform : "none",
    fontSize : "14px",
    fontWeight : 600,
    fontFamily : "Montserrat-semiBold",
    letterSpacing : '1px'
    }  
}