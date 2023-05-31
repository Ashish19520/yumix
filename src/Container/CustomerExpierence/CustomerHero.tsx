import React from 'react'
import { Container } from '@mui/material'
import { motion } from "framer-motion";

function CustomerHero() {
  return (
    <>
   <Container className='relative'>
    <div className='heroWrappe relative'>
        <div className='heroLef'>
            <div className='headTex'>Customer Experience Analytics</div>
             <div className='textPar'>Navigate complex customer interactions, improve UX, and increase conversion with our custom-designed testing methodologies and advanced statistics.</div>
            <div className='btn'>Contact us</div>
        </div>
        <div className='heroRight relative'>
            <img 
            src="../images/Rectangle 8.png" 
            className='imghero'
            alt=""  />
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
    
    <div className="black-Sectio">
        <div className='black-heading'>Leverage Client Data to Create Remarkable Experiences</div>
        <div className='black-para'>Our approach to customer analytics and improving digital performance is rooted in the understanding that UX (user experience) is a key building block of a brand’s relationship with its customers. Using behavioral analysis, A/B testing, and onsite personalization, data guides the process every step of the way in our marketing analytics agency services. Our customer analytics services help brands leverage customer analytics to create an online experience that is relevant and valuable, while creating a connection that drives greater loyalty, engagement, and conversions.</div>
    </div>
   </Container>
   <Container style={{marginTop:"120px"}}>
   <motion.img
              src="../images/10.png"
              initial="hidden"
              animate="show"
              width="100%"
              className='Lin'
            ></motion.img>
    <div className="strategy-wrapper relative">
        <div className='strategy-heading'><h2>Strategy</h2></div>
        <div className='strategy-conten'>
            <div className='box1 '>
                <img src="../images/Group 38596.png" alt="" />
                <div className="box-heading">Strengthen Performance</div>
                <div className='box-para'>Improve customer experience, increase engagement, and optimize conversions through testing, implementation and measurement.</div>
            </div>
            <div className='box1 '>
                <img src="../images/USA.png" alt="" />
                <div className="box-heading">Focus on the Experience</div>
                <div className='box-para'>Understand the “why” behind your user’s behavior and uncover customer personas to improve content strategy.</div>
            </div>
            <div className='box1 relative index'>
                <img src="../images/USA (1).png" alt="" />
                <div className="box-heading">Data-backed Insights</div>
                <div className='box-para'>Make confident, informed decisions backed by rigorous testing, and get statistically-validated results afterward.</div>
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

export default CustomerHero
