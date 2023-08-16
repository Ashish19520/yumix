import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

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
    <MidBannerWrapper>
      <Grid
        className="ourLeaders_hidden"
        rowGap={4}
        position="relative"
        container
        alignItems="center"
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "80px 40px",
          overflow: "hidden",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <motion.img
            src="/images/Business-Success.png"
            style={{ width: "80%" }}
            alt="About Banner"
            variants={elements}
            initial="hidden"
            animate="show"
          ></motion.img>
        </Grid>
        <Grid item xs={12} md={6}>
          <motion.div
            variants={typingContainer}
            initial="hidden"
            animate="show"
            className="title"
          >
            <Typography variant="h2" className="mid-title">
            {/* {Array.from("Commitment for excellence").map((word, i) => ( */}
              {Array.from("Recommendations, Testimonials & Trade References").map((word, i) => (
                <motion.span key={i} variants={typingText}>
                  {word}
                </motion.span>
              ))}
            </Typography>
          </motion.div>
          <motion.div variants={elements} initial="hidden" animate="show">
            <Typography
              variant="h2"
              className="mid-sub">
              Recommendations from industry experts, brands, and retailers and Video testimonials on our website serve as powerful social proof, showcasing the positive experiences and outcomes that clients have had working with our team.
            </Typography>
            <Typography
              variant="h2"
              className="mid-sub">
             Trade references are another valuable resource that anyone can utilize to verify our track record and the quality of our services. By offering trade references on demand, we provide an opportunity for interested parties to directly reach out to previous clients and gain insights into their experiences working with our team.
            </Typography>
          </motion.div>
        </Grid>
        <Box
          style={{
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            backgroundColor: "#FE70A3",
            position: "absolute",
            top: "20px",
            left: "20px",
          }}
        ></Box>
        <Box
          style={{
            borderRadius: "50%",
            width: "28px",
            height: "28px",
            backgroundColor: "#4A90E2",
            position: "absolute",
            top: "50px",
            right: "50px",
            
          }}
        ></Box>
        <Box className="box-blur" sx={{ ...style.bluredBox, bottom: { xs: "50%", md: "10%" } }}>
          <img src="./images/Round Cube2@3x.png" width="100%"></img>
        </Box>
      </Grid>
    </MidBannerWrapper>
  );
}

const MidBannerWrapper = styled.div`
  .mid-title {
    font-size: 32px;
    font-weight: 700;
    color: #3a3b44;
    font-family: Poppins-SemiBold;

    @media (max-width: 600px) {
      font-size: 16px;
    }
  }

  .mid-sub {
    margin-top: 20px;
    font-size: 16px;
    font-weight: 400;
    color: #828490;
    font-family: "Montserrat";
    line-height: 24px;
    @media(max-width:600px){
      font-size: 14px;
    }
  }
  .box-blur{
    width: "10%",
    position: "absolute",
    top: "78%",
    right: "30px",
    zIndex:"-1",
    @media(max-width:908px){
      top: "90%",
    }
  }
`;

const style = {
  blueDot: {
    width: "30px",
    aspectRatio: 1,
    backgroundColor: "#5956E9",
    borderRadius: "50%",
    position: "absolute",
    top: "100px",
    left: "100px",
  } as React.CSSProperties,
  bluredBox: {
    width: "10%",
    position: "absolute",
    top: "78%",
    right: "30px",
    zIndex:"-1",
  } as React.CSSProperties,
};
