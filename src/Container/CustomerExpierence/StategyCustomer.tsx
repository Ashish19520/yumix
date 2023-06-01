import React from 'react'
import { Container } from '@mui/material'
import { motion } from "framer-motion";
import "./styles.css";

function StategyCustomer() {
  return (
    
        <Container className='relative'>
            
             <motion.img
              src="../images/Ellipse 65@3x.png"
              className='pinkCircle'
              initial="hidden"
              animate="show"
            ></motion.img>
             <motion.img
              src="../images/circle_blue_m.png"
              initial="hidden"
              className='blueCircle'
              animate="show"
            ></motion.img>
             <motion.img
              src="../images/Ellipse 64@3x.png"
              initial="hidden"
              animate="show"
              className='orangeCircle'
            ></motion.img>
            <div className='wrapper'>
                <div className='ft'>Strategy</div>
                <div className='fx'>
               <div className='textCircle'>Our team assists you in creating and implementing a comprehensive customer experience strategy, aiming to provide users with delightful interactions throughout their digital journey. Starting from the initial planning phase and mapping out the customer journey, we handle the development and management of all essential digital assets. Our strategists, analysts, designers, and developers work collaboratively to plan, produce, and optimize the creative elements necessary to establish meaningful connections with your customers.</div>
               <img
               alt="img"
              src="../images/Round Cube2@3x.png"
              className='cube'
              
            ></img>
                </div>
                
            </div>
        </Container>
      
  )
}

export default StategyCustomer
