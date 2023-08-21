import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { HashLink } from "react-router-hash-link";
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
  const navigate = useNavigate();

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
    <BottomBannerWrapper>
      <Grid
        className="ourLeaders_hidden"
        rowGap={4}
        position="relative"
        container
        alignItems="center"
        style={{ maxWidth: "1200px", margin: "auto", padding: "80px 40px" }}
      >
        <Grid item xs={12} md={5}>
          <motion.div
            variants={typingContainer}
            initial="hidden"
            animate="show"
            className="title"
          >
            <Typography variant="h2" className="btmbanner-title">
            {/* {Array.from("We keep the focus on driving results").map( */}
              {/* {Array.from("We're Dedicated to Achieving Results That Propel Your Ecommerce Success").map(
                (word, i) => (
                  <motion.span key={i} variants={typingText}>
                    {word}
                  </motion.span>
                )
              )} */}
              Recommendations, Testimonials & Trade References
            </Typography>
          </motion.div>
          <motion.div variants={elements} initial="hidden" animate="show">
            <Typography
              variant="h2"
              
              className="btmbanner-subtitle"
            >
              {/* With our complete multi-channel solution, you'll have access to
              everything you need to succeed in today's competitive online
              marketplace. */}
Recommendations from industry experts, brands, and retailers and Video testimonials on our website serve as powerful social proof, showcasing the positive experiences and outcomes that clients have had working with our team.
<br/>
Trade references are another valuable resource that anyone can utilize to verify our track record and the quality of our services. By offering trade references on demand, we provide an opportunity for interested parties to directly reach out to previous clients and gain insights into their experiences working with our team.
            </Typography>
          </motion.div>
          <motion.div
            variants={elements}
            initial="hidden"
            animate="show"
            style={{
              gap: "30px",
              flexWrap: "wrap",
              display: "flex",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <Button
              disableElevation
              variant="outlined"
              className="about-button"
              sx={{
                ...style.button,
                color: "#5856e9",
                backgroundColor: "white",
              }}
              onClick={() => navigate("/works")}
            >
                Our Portfolio  
            </Button>
            <HashLink to={"/aboutus#contactForm"} smooth>
              <Button
                disableElevation
                className="about-button"
                variant="contained"
                sx={{
                  ...style.buttonBorder,
                  color: "white",
                  backgroundColor: "#5856e9",
                }}
              >
                Get in Touch 
              </Button>
            </HashLink>
          </motion.div>
        </Grid>
        <Grid
          item
          xs={12}
          md={7}
          sx={{ textAlign: { xs: "center", md: "right" } }}
        >
          <motion.img
            src="/images/aboutusTargey.png"
            style={{ width: "80%" }}
            alt="About Target"
            variants={elements}
            initial="hidden"
            animate="show"
          ></motion.img>
        </Grid>
      </Grid>
    </BottomBannerWrapper>
  );
}

const BottomBannerWrapper = styled.div`
  .btmbanner-title {
    font-size: 32px;
    font-weight: 700;
    color: #0b0720;
    font-family: Poppins-SemiBold;

    @media (max-width: 600px) {
      font-size: 16px;
    }
  }

  .btmbanner-subtitle {
    margin-top: 20px;
    font-size: 16px;
    font-weight: 400;
    color: #696969;
    font-family: Montserrat;
    line-height: 24px;

    @media (max-width:600px){
      font-size: 14px;
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
    width: "105px",
    position: "absolute",
    bottom: "80px",
    left: "-20px",
  } as React.CSSProperties,
  button: {
    padding: { xs: "7px 24px", md: "10px 32px" },
    borderRadius: "8px",
    border: "1px solid #D1D1D1",
    textTransform: "none",
    fontSize: "14px",
    fontWeight: 600,
    fontFamily: "Montserrat-semiBold",
    letterSpacing: "1px",
  },
  buttonBorder: {
    padding: { xs: "7px 24x", md: "10px 32px" },
    borderRadius: "8px",
    border: "1px solid #5856e9",
    textTransform: "none",
    fontSize: "14px",
    fontWeight: 600,
    fontFamily: "Montserrat-semiBold",
    letterSpacing: "1px",
  },
};
