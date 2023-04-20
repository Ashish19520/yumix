import { Box, Button, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect } from 'react';
import styled from "styled-components";

export default function BlogService() {

    const services = [
        "Affiliate & Influencer",
        "Amazon",
        "Analytics",
        "B2C",
        "Eservz News & People",
        "Marketing & Retail Media",
        "Paid Search",
        "Partnerships",
        "Premium Content",
        "SEO",
        "Web & Mobile Development"
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
    
        const hiddenElements = document.querySelectorAll(".services-btn");
        hiddenElements.forEach((el) => observer.observe(el));
      }, []);

  return (
    <div className='services-btn'>
    <Box style={{maxWidth:"1200px", padding:"80px 40px", margin:"auto"}}>
        <Typography style={{fontWeight:600, fontFamily:"Poppins-semiBold", fontSize:"32px"}}>
            Services We Provide
        </Typography>
        <Box style={{display:"flex", flexWrap:"wrap", alignItems:"center", marginTop:"40px", gap:"25px"}}>
            {
                services.map((item,index) => {
                    return(
                        <Button key={item} variant='outlined' sx={{...style.button, color:"#3A3B44", display : { xs:index>3 ? "none" : "block", sm:index>5 ? "none" : "block", md:"block" }}}>{item}</Button>
                    )
                })
            }
        </Box>
        <Button disableElevation variant='contained' sx={{...style.button, color:"white", backgroundColor:"#5856e9", display:{xs:"block", sm:"block", md:"none"}, marginTop:"30px"}}>
            View All
        </Button>
    </Box>
    </div>
  )

}

const style = {
    button : {
        padding : { xs : "7px 16px", md : "16px 21px"},
        borderRadius : "8px",
        border : "1px solid #D1D1D1",
        textTransform : "none",
        fontSize : "14px",
        fontWeight : 600,
        fontFamily : "Montserrat-semiBold",
    }
}