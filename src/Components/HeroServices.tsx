import React from 'react'
import { Container } from '@mui/material'
import { motion } from "framer-motion";
import { ClassNames } from '@emotion/react';

function HeroServices({data}:any) {
 
  
    const scroll = async () => {
      if (window.innerWidth >= 768) {
        window.scrollTo(0, 1300);
      } else {
        window.scrollTo(0, 2300);
      }
    }
  return (
    <>
   <Container className='relative' style={{marginTop:"150px"}} >
    <div className='heroWrappe relative'
    id="hero">
        <div className='heroLef'>
            <div className='headTex'>{data.heading}</div>
             <div className='textPar'>{data.subHeading}</div>
            <div className='btn' onClick={scroll}>Contact US</div>
        </div>
        <div className='heroRight relative'>
            <img src={data.image}
            className='imghero' 
            alt="" 
            />
            <motion.img
              src="../images/Round Cube2@3x.png"
              initial="hidden"
              animate="show"
              className='cub'
            ></motion.img>
            <motion.img
              src="../images/Cone3.png"
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
        <div className='black-heading'>{data.blackHeading}</div>
        <div className='black-para'><b className='black-para'>{data.blackSubHeading}</b></div>
    </div>
   </Container>
   <Container style={{marginTop:"120px",marginBottom:"50px"}}>
   <motion.img
              src="../images/10.png"
              initial="hidden"
              animate="show"
              width="100%"
              className='Lin'
            ></motion.img>
    <div className="strategy-wrapper relative">
        <div className='strategy-heading'><h2 className='strategy-heading'>{data.strategyHeading}</h2></div>
        <div className='strategy-conten'>
            <div className='box1'>
                <img src={data.box[0].image} alt="" />
                <div className="box-heading">{data.box[0].heading}</div>
                <div className='box-para'>{data.box[0].subHeading} </div>
            </div>
            <div className='box1'>
                <img src={data.box[1].image} alt="" />
                <div className="box-heading">{data.box[1].heading}</div>
                <div className='box-para'>{data.box[1].subHeading}</div>
            </div>
            <div className='box1 relative'>
                <img src={data.box[2].image} alt="" />
                <div className="box-heading">{data.box[2].heading}</div>
                <div className='box-para'>{data.box[2].subHeading}</div>
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

export default HeroServices;
