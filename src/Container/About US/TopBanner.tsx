import React from 'react'
import { Container } from '@mui/material';
import styled from "styled-components";
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
    <Banner>
        <Container maxWidth="lg" className="container">
        <motion.div
          variants={typingContainer}
          initial="hidden"
          animate="show"
          className="bannerHeading"
        >
             <h1>
             {Array.from("About Us").map((word, i) => (
            <motion.span key={i} variants={typingText}>
              {word}
            </motion.span>
          ))}
             </h1>
                <motion.p className="about-details" variants={elements}  initial="hidden" animate="show">Eservz is a leading and globally renowned e-commerce and Amazon specialist agency that provides cutting edge, groundbreaking and truly revolutionary back office support to e-commerce sellers, business owners and vendors on multiple online channels especially Amazon.
                </motion.p>
        </motion.div>
            <motion.div className="bannerImage" variants={elements}  initial="hidden" animate="show">
                <img src="/images/about.png"  style={{ width:"80%", float:"right"}}/>
            </motion.div>
        </Container>
    </Banner>
  )
}
const Banner =styled.div`
    .container {
        margin-top:20px;
        padding-top: 20px;
        display: flex;
        .bannerHeading{
            width:50%;
            margin-top:40px;
            padding-top:40px;
            .about-details{
                width:80%;
            }
        }
        .bannerImage{

        }
    }

`