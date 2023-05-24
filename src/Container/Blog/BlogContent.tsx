import { Container } from '@mui/material';
import React,{useEffect,useState} from 'react';
import useStyles from "../News/style";
import {ArrowBackSharp} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function BlogContent() {
    const classes=useStyles();
    const navigate=useNavigate();
     const {title,blog_img,publishedAt,whole_bloc}=JSON.parse(localStorage.getItem("blogData") || "{}");
    
   
  return (
    <Container style={{ backgroundColor: "#FFFCFC" }}>
    <div className={`${classes.conatainer} ${classes.relative}`}>
    <ArrowBackSharp className={classes.arr} onClick={() => navigate(-1)}/>
    <div>
            <img src={blog_img} alt="img" width="100%" height="500px"></img>
        </div>
        <div className={classes.text}>
            <h1>{title}</h1>
            {/* <h2>Author : {data.author}.</h2> */}
            <h4>{publishedAt.split("T")[0]}.</h4>
            <p>{whole_bloc}</p>
        </div>  
    </div>
    </Container>
  )
}

export default BlogContent
