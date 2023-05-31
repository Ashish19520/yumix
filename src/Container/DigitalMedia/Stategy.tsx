import React from 'react'
import { Container } from '@mui/material'
import { motion } from "framer-motion";
import "./styles.css";

function Stategy() {
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
               <div className='textCircle'> Our experienced team can manage all aspects of your Amazon business, eliminating the need to hire multiple consulting agencies. We provide a range of services, including account setup and management, attractive product descriptions, review and rating management, listing strategies, FBA and Self-Fulfillment, and reimbursement claims. We are committed to the long-term growth of your business, whether you sell through Amazon Seller Central or Vendor Central.</div>
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

export default Stategy
