import { Container } from '@mui/material'
import React from 'react'
import {ArrowBackSharp} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Content({data}:any) {
  const navigate=useNavigate();
  return (
    <>
   <Container>
   <ArrowBackSharp className='arr margin-nav pointer' onClick={() => navigate(-1)}/>
    <div>
        <div className='con-image-section'>
            <img src={data.img} alt="some"
             className='content-image'
             ></img>
            <img src="../images/Round Cube2@3x.png" 
            alt="some"
            className='content-cube'></img>
            <img src="../images/Rock_whywork_blue.png" 
             className='content-sphere'
            alt="some"></img>
            <img src="../images/contentLine.png" 
            className='content-line'
            alt="some"></img>
             <img src="../images/Ellipse 63.png" 
            className='content-ellipse'
            alt="some"></img>
        </div>
        <div className='content-content'>
            <div className='content-heading'>{data.heading}</div>
            <div className='content-par justify'>{data.text}</div>
             <img src="../images/Ellipse 63.png" 
            className='content-content-ellipse'
            alt="some"></img>
        </div>
       
    </div>
   </Container>
   </>
  )
}

export default Content
