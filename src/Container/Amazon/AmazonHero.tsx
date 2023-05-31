import React from 'react'
import { Container } from '@mui/material'
import { motion } from "framer-motion";

function AmazonHero() {
  return (
    <>
   <Container className='relative' >
    <div className='heroWrappe relative'
    id="hero">
        <div className='heroLef'>
            <div className='headTex'>Amazon Ads Services</div>
             <div className='textPar'>Maximize customer engagement on Amazon with our proven approach, from awareness to purchase, for optimal growth and profit.
</div>
            <div className='btn'>Contact us</div>
        </div>
        <div className='heroRight relative'>
            <img src="../images/Background.png" alt="" className='imghero'  />
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
        <div className='black-heading'>Unlock Your Amazon Potential with Our Digital Marketing Services</div>
        <div className='black-para'>Supercharge your Amazon advertising budget with our expert team. We know every dollar counts, so we use our data-driven approach to ensure maximum return on your media spend. As recognized leaders in the Amazon agency directory, we unleash the power of Amazon's advertising tools to create</div>
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
        <div className='strategy-heading'><h2>Our Amazon Ads Strategy</h2></div>
        <div className='strategy-conten'>
            <div className='box1'>
                <img src="../images/five.png" alt="" />
                <div className="box-heading">Profitable Growth</div>
                <div className='box-para'>Fuel your growth with our tailored approach. From data analysis to strategic promotions, we assist you in reaching profitability targets. </div>
            </div>
            <div className='box1'>
                <img src="../images/second.png" alt="" />
                <div className="box-heading">Customer-Centric Campaigns</div>
                <div className='box-para'>Boost impact with customer-centric campaigns. We optimize offerings, amplify brand voice, and ensure cost-effective results.</div>
            </div>
            <div className='box1 relative'>
                <img src="../images/four.png" alt="" />
                <div className="box-heading">Cross-Channel Integration</div>
                <div className='box-para'>Boost eCommerce sales through cross-channel integration. Align Amazon performance with other channels for maximum impact.</div>
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

export default AmazonHero
