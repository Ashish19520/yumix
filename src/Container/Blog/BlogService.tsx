import { Box, Button, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
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

  return (
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