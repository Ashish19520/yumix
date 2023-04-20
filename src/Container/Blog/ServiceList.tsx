import { Box, Grid, Typography } from "@mui/material";
import {useEffect} from "react";

export default function ServiceList() {

    const blogs = [
        {
            name : "How To Gear Forward in 2023",
            type : "Tips",
            image : "./images/Image@3x.png"
        },
        {
            name : "Digital commerce is changing rapidly",
            type : "Blog",
            image : "./images/Img1.png"
        },
        {
            name : "How to deal with SVB collapse",
            type : "Blog",
            image : "./images/Image@3x.png"
        },
        {
            name : "Inspiration to build your online store",
            type : "Inspiration",
            image : "./images/Img1.png"
        },
        {
            name : "How To Gear Forward in 2023",
            type : "Tips",
            image : "./images/Image@3x.png"
        },
        {
            name : "Digital commerce is changing rapidly",
            type : "Blog",
            image : "./images/Img1.png"
        },
        {
            name : "How to deal with SVB collapse",
            type : "Blog",
            image : "./images/Image@3x.png"
        },
        {
            name : "Inspiration to build your online store",
            type : "Inspiration",
            image : "./images/Img1.png"
        },
        {
            name : "How To Gear Forward in 2023",
            type : "Tips",
            image : "./images/Image@3x.png"
        }
    ]

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log("Entering into zone");
              entry.target.classList.add("animate__animated");
              entry.target.classList.add("animate__fadeIn");
            }
            // else {
            //   console.log("exit into zone");
            //   entry.target.classList.remove("animate__fadeIn");
            // }
          });
        });
    
        const hiddenElements = document.querySelectorAll(".services-list-imgs");
        hiddenElements.forEach((el) => observer.observe(el));
      }, []);
  return (
    <div className="services-list-imgs">
    <Grid container style={{maxWidth:"1200px", padding:"80px 20px", margin:"auto"}}>
        {
            blogs.map((item) => {
                return(
                    <Grid item xs={12} sm={6} md={4} key={item.name} style={{padding:"20px 10px"}}>
                        <Box style={{backgroundImage:`url(${item.image})`, width:"100%", backgroundSize:"cover", backgroundPosition:"center", borderRadius:"12px", height:"200px"}}/>
                        <Typography style={{fontSize:"14px", fontFamily:"Montserrat-Medium", color:"#40424C", marginTop:"20px"}}>{item.type}</Typography>
                        <Typography style={{fontSize:"16px", fontFamily:"Montserrat-SemiBold", color:"#40424C"}}>{item.name}</Typography>
                    </Grid>
                )
            })
        }
    </Grid>
    </div>
  )
}