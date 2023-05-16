import { Container } from '@mui/material'
import React,{useEffect,useState} from 'react'
import useStyles from "./style"

function NewsContent() {
    const classes=useStyles();
    const [data,setData]=useState({
        urlToImage:"",
        title:"",
        publishedAt:"",
        author:"",
        description:"",
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
    <Container style={{ backgroundColor: "#FFFCFC" }}>
    <div className={classes.conatainer}>
    <div>
            <img src={data.urlToImage} alt="img" width="100%" height="500px"></img>
        </div>
        <div className={classes.text}>
            <h1>{data.title}</h1>
            <h2>Author : {data.author}.</h2>
            <h4>{data.publishedAt.split("T")[0]}.</h4>
            <p>{data.description}</p>
        </div>
        
    </div>
    </Container>
  )
}

export default NewsContent
