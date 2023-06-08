import { Container } from '@mui/material'
import React from 'react'
import { motion } from "framer-motion";

function FBA2() {
  return (
   <Container>
    <div className='fba-hero-main'>
    <div className='fba-hero-left'>
        <div className='fba-hero-right-heading'>FBA Calculator</div>
        <div className='fba-hero-right-para'>Calculate the profit a product can earn using fulfillment-by-Amazon (FBA)</div>
        <div className='fba-hero-right-inner'>
            <input className='input-field'
            placeholder='Enter Amazon product’s ASIN Number'></input>
            <button className='btn_FBACalculate '>Calculate</button>
        </div>
        <div>Eg: B0721GGGS9, B07H7JFCVH</div>
    </div>
    <div className='fba-hero-right'>
    <img src="../images/8 - Lucas Dancing.png" alt="img"></img>
    <motion.img
              src="../images/Rock2@3x.png"
              initial="hidden"
              animate="show"
              className=' fba-hero-right-back-rock'
            ></motion.img>
        <motion.img
              src="../images/Ellipse 75@3x.png"
              initial="hidden"
              animate="show"
              className=' fba-hero-right-back-ellipse'
            ></motion.img>
        </div>
        {/* <motion.img
              src="../images/Group 38594.png"
              initial="hidden"
              animate="show"
              width="100%"
            ></motion.img>  
             <motion.img
              src="../images/Ellipse 63@3x.png"
              initial="hidden"
              animate="show"
            ></motion.img> */}
    </div>
   </Container>
  )
}

export default FBA2
