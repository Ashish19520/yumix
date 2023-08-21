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
    <TopBannerWrapper className="container margin-nav">
      <Grid
        wrap="wrap-reverse"
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
        <Grid item xs={12} md={5}>
          <motion.div
            variants={typingContainer}
            initial="hidden"
            animate="show"
            className="title"
          >
            <Typography variant="h2" className="about_title">
              {Array.from("About Us").map((word, i) => (
                <motion.span key={i} variants={typingText}>
                  {word}
                </motion.span>
              ))}
            </Typography>
          </motion.div>
          <motion.div variants={elements} initial="hidden" animate="show">
            <Typography
              variant="h2"
              className="about_subtitle justify"
            
            >
              Brands willing to sell online face several challenges like successful Launch on Marketplaces, Inventory Management, Order Processing and Fulfillment, Multi-channel Selling (Amazon, Walmart, eBay, Social Media Platforms, and your own website), Competitive Analysis, Account Management & Support, Marketing and PPC Advertising Management, Analytics and Reporting, Scalability and Growth. 

            </Typography>
            <Typography 
            variant="h2"
            className="about_subtitle justify"> 
            Partnering with Bighatch Consulting, commonly known as ESERVZ can help Brands & Resellers to overcome these complexities more effectively, save time and resources, improve operational efficiency, and focus on core business activities. </Typography>
          </motion.div>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          sx={{ textAlign: { xs: "center", md: "right" }, zIndex: 1 }}
        >
          <motion.img
            src="/images/Group 162930 (1).png"
            style={{ width: "90%" }}
            alt="About Banner"
            variants={elements}
            initial="hidden"
            animate="show"
          ></motion.img>
        </Grid>
        <motion.div
          variants={elements}
          initial="hidden"
          animate="show"
          className="title"
        >
          <Box sx={{ ...style.bluredBox, top: { xs: "30%", md: "75%" } }}>
            <img src="./images/Round Cube2@3x.png" className="logo-fold" width="100%"></img>
          </Box>
          <img src="./images/Rock2.png" style={style.bluredRock}   ></img>
          <img src="./images/aboutusThread.png" className="about-rock" style={style.thread}></img>
        </motion.div>
      </Grid>
    </TopBannerWrapper>
  );
}

const TopBannerWrapper = styled.div`
 .about_title {
    margin-top:-50px;
    font-size: 40px;
    font-weight: 700;
    color: #0b0720;
    font-family: "Poppins-Bold";

    @media (max-width: 600px) {
      padding-top: 40px;
      font-size: 16px;
    }
  }

  .about_subtitle {
    margin-top: 15px;
    z-indez:7;
    font-size: 16px;
    font-weight: 400;
    color: #696969;
    font-family: Montserrat;
    line-height: 24px;
    @media (max-width: 600px) {
      font-size: 14px;
    }
  }
`;
const style = {
  bluredBox: {
    width: "10%",
    minWidth: "80px",
    position: "absolute",
    left: "0px",
  } as React.CSSProperties,
  bluredRock: {
    width: "10%",
    position: "absolute",
    top: "70px",
    right: "70px",
    zIndex: 2,
  } as React.CSSProperties,
  thread: {
    width: "100%",
    minWidth: "500px",
    position: "absolute",
    top: "200px",
    left: "20%",
  } as React.CSSProperties,
};
