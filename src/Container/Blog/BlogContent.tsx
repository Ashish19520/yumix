import { Container } from '@mui/material';
import React,{useEffect,useState} from 'react';
import useStyles from "../News/style";
import {ArrowBackSharp} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer';

function BlogContent() {
    const classes=useStyles();
    const navigate=useNavigate();
     const item=JSON.parse(localStorage.getItem("blogData") || "{}");
    
   
  return (
    <>
    <Container style={{ backgroundColor: "#FFFCFC" }}>
    <div className={`${classes.conatainer} ${classes.relative}`}>
    <ArrowBackSharp className={classes.arr} onClick={() => navigate(-1)}/>
    <div style={{position:"relative",zIndex:2}}>
            <img src={item?.['media:content'][1].$.url} 
            alt="img" width="100%" height="500px"></img>
            <img src="../images/Round Cube2@3x.png" 
            alt="some"
            className='blog-cube'></img>
            <img src="../images/Rock_whywork_blue.png" 
             className='blog-sphere'
            alt="some"></img>
            <img src="../images/contentLine.png" 
            className='blog-line'
            alt="some"></img>
             <img src="../images/ellipse 63.png" 
            className='content-ellipse'
            alt="some"></img>
        </div>
        <div className={classes.text}>
            <h1>{item?.title[0]}</h1>
            {/* <h2>Author : {data.author}.</h2> */}
            <h4>{item?.['atom:updated'][0].split("T")[0]}.</h4>
            <h4>{item?.['dc:creator'][0]}.</h4>
            <p>{item?.['content:encoded'][0]}.</p>
        </div>  
    </div>
    </Container>
    <Footer/>
    </>
  )
}

export default BlogContent
