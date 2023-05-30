import React from 'react'
import { Container } from '@mui/material'
import { motion } from "framer-motion";
import "./styles.css"
function PaidHero() {
  return (
    <>
   <Container >
    <div className='heroWrapper relative'>
        <div className='heroLeft'>
            <div className='headText'>Paid Search (PPC) Marketing Services</div>
             <div className='textPara'>Maximize results and your budget with a unique, granular approach to delivering the most relevant experience to your customers.</div>
            <div className='btn'>Contact us</div>
        </div>
        <div className='heroRight relative'>
            <img src="../images/laptop.png" alt="" width="80%" height="60%" />
            <motion.img
              src="../images/Round Cube2@3x.png"
              initial="hidden"
              animate="show"
              className='cube'
            ></motion.img>
            <motion.img
              src="../images/spec 1.png"
              initial="hidden"
              animate="show"
              className='cone'
            ></motion.img>
        </div>
        <motion.img
              src="../images/Group 38590.png"
              initial="hidden"
              animate="show"
              className='line1'
            ></motion.img>
    </div>
   </Container> 
   <Container style={{marginTop:"150px"}}>
    <div className="black-Section">
        <div className='black-heading'>Capture and Convert Demand Through Paid Search, with a PPC Agency</div>
        <div className='black-para'>Eservz started with paid search and has spent more than a decade using a successful strategy to obtain high returns and conversions. Our PPC services target customers at every stage of their journey by optimizing budget allocation and delivering personalized experiences based on data. Our customized approach uses different delivery methods to maximize your budget.</div>
    </div>
   </Container>
   <Container style={{marginTop:"120px"}}>
    <div className="strategy-wrapper relative">
        <div className='strategy-heading'><h2>Our Paid Search Strategy</h2></div>
        <div className='strategy-content'>
            <div className='box'>
                <img src="../images/first.png" alt="" />
                <div className="box-heading">Granularity</div>
                <div className='box-para'>Find and activate on opportunities with the greatest impact potential through a highly granular, intent-driven account structure. </div>
            </div>
            <div className='box'>
                <img src="../images/second.png" alt="" />
                <div className="box-heading">Team + Technology</div>
                <div className='box-para'>Scale your program and achieve superior results with our blended, people-powered approach to automation.</div>
            </div>
            <div className='box relative'>
                <img src="../images/Group 38597.png" alt="" />
                <div className="box-heading">Closed-Loop Strategies</div>
                <div className='box-para'>Drive ROI, not just conversions, by tying offline data to online keyword performance.</div>
                <motion.img
              src="../images/Ellipse 63.png"
              initial="hidden"
              animate="show"
              className='sphere'
            ></motion.img>
            </div>
        </div>
    </div>
   
   </Container>
   
  </>
  )
}

export default PaidHero
