import { Container } from '@mui/material'
import React,{useEffect,useState} from 'react'
import useStyles from "./style"
import Footer from '../../Components/Footer';
import {ArrowBackSharp} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function NewsContent() {
    const classes=useStyles();
    const navigate=useNavigate();
    const [data, setData] = useState<{
        [key: string]: any[];
      }>({
        image: [],
        title: [],
        pubDate: [],
        link:[],
        description: [],
      });

    useEffect(()=>{
        fetch();
    },[])
    
    const fetch=async ()=>{
        const response=JSON.parse(localStorage.getItem("data") || "{}");
        setData(response);
    }
   
    // let data={ 
    //     "source": {
    //         "id": null,
    //         "name": "Lnwebworks.com"
    //     },
    //     "author": "LN Webworks",
    //     "title": "LN Webworks: How Zapier is Helping Business Owners in Automating Their Work Process",
    //     "description": "If you often feel that you have a lot to accomplish but fall short of time in your business life, you are not alone. A majority of entrepreneurs feel this way. But, thanks to Zapier, you no longer have to worry about the scarcity of time you experience. With …",
    //     "url": "https://www.lnwebworks.com/Insight/how-zapier-helps-business-owners-automate-workflows",
    //     "urlToImage": "https://www.lnwebworks.com/sites/default/files/2023-05/Zapier%20%20Work%20Process%20Automating.jpg",
    //     "publishedAt": "2023-05-15T10:37:57Z",
    //     "content": "If you often feel that you have a lot to accomplish but fall short of time in your business life, you are not alone. A majority of entrepreneurs feel this way. But, thanks to Zapier, you no longer ha…"
    // }
  return (
    <>
    <Container style={{ backgroundColor: "#FFFCFC" }}>
    <div className={`${classes.conatainer} ${classes.relative}`}>
    <ArrowBackSharp className={classes.arr} onClick={() => navigate(-1)}/>
    <div style={{position:"relative",zIndex:2}}>
            <img src={(data.image[0])?(data.image[0]):"../images/Rectangle first.png"} alt="img" width="100%" height="500px"/>
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
            <h1>{data.title[0]}</h1>
            {/* <h2>Author : {data.author}.</h2> */}
            <h4>{data.pubDate[0]?.split("T")[0]}.</h4>
            <p>{data.description[0]}</p>
            <a href={data.link[0]} target='blank'>read full article</a>
        </div>
        
    </div>
    </Container>
      <Footer/>
      </>
  
  )
}

export default NewsContent
