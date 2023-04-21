import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { motion as m} from "framer-motion";

function WhyUs() {

  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated");
          entry.target.classList.add("animate__fadeIn");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".bannerList_hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  const points = [
    {
      title : "Save Time",
      para : "Skip the Learning Curve. Eservz has the established best practices to help you quickly achieve your eCommerce and Amazon goals.",
      image : "/images/work1.png"
    },
    {
      title : "Save Money",
      para : "No need to create a new department or hire additional staff. When you work with us, you get a new E‑Commerce division.",
      image : "/images/work2.png"
    },
    {
      title : "Make Money",
      para : "We have worked with 100s of partners. We know what to do, what to analyze & how to focus on getting you a Return on Investment",
      image : "/images/work3.png"
    },
    {
      title : "Be Secure",
      para : "We value the security of our partners & take your confidentiality very seriously. We are insured for any breaches of data, so you can rest at ease.",
      image : "/images/work4.png"
    }
  ]

  return (
    <Box style={{background: "#fffcfc"}}>
    <Box className="bannerList_hidden" style={{maxWidth:"1200px", margin:"auto", padding:"120px 40px"}}>
      <Grid container alignItems="center">
        <Grid position="relative" item xs={12} md={6} style={{display:"flex", alignItems:"center", justifyContent:'center'}}>
          <Box style={{width:"80%", aspectRatio:1, borderRadius:"50%", backgroundColor:"#F1F6FF"}}></Box>
          <Box style={{width:"80%",position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)" }}>
          <m.img 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }} 
            src={points[selectedIndex].image}
            alt={points[selectedIndex].title} 
            width="100%" 
          />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          {
            points.map((item, index) => {
              return(
                <Box key={item.title} style={{display:'flex', gap:"15px"}}>
                  <Box style={{display:'flex', flexDirection:'column', alignItems:"center"}}>
                    <Box style={{width:"20px", height:'20px', borderRadius:"50%", border:`6px solid ${ selectedIndex>=index ? "#5856e9" : "#D1D1D1"}`,cursor:"pointer"}} onClick={()=>setSelectedIndex(index)}/>
                    <Box style={{width:"2px", height:'150px', backgroundColor: selectedIndex>index ? "#5856e9" : "#D1D1D1", display: index===points.length-1 ? "none" : "block" }}/>
                  </Box>
                  <Box style={{height:index===points.length-1 ? "auto" : "150px", width:"100%", position:"relative", top:"-10px"}}>
                    <Typography fontSize="24px" fontFamily="Poppins-Medium" color={selectedIndex===index ? "#5856e9" :"#3A3B44"} style={{cursor:"pointer"}} onClick={()=>setSelectedIndex(index)}>{item.title}</Typography>
                    <Typography fontSize="14px" fontFamily="Montserrat" color="#828490" style={{cursor:"pointer"}} onClick={()=>setSelectedIndex(index)}>{item.para}</Typography>
                  </Box>
                </Box>
              )
            })
          }
        </Grid>
      </Grid>
    </Box>
    </Box>
  )
}

export default WhyUs