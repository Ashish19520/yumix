import { Box, Grid, Typography } from '@mui/material';
import React from 'react'
import { AiFillInstagram, AiFillLinkedin, AiOutlineCopyrightCircle } from 'react-icons/ai';
import { FaFacebook, FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
export default function Footer() {

    const links = [
        {
            link : "Home",
            to : "/"
        },
        {
            link : "About Us",
            to : "/aboutus"
        },
        {
            link : "Portfolio",
            to : "/works"
        },
        {
            link : "Contact Us",
            to : "/"
        },
        {
            link : "Terms & Conditions",
            to : "/"
        },
        {
            link : "Privacy Policy",
            to : "/"
        }
    ]

    const services = [
        {
            link : "Account Set Up & Management",
            to : "/"
        },
        {
            link : "Inventory Planning & Management",
            to : "/"
        },
        {
            link : "Pricing Strategy & Management",
            to : "/"
        },
        {
            link : "Keywords Analysis",
            to : "/"
        },
        
    ]

    const navigate = useNavigate()

  return (
    <Box style={{width:"100%", backgroundColor:"white", padding:"80px 40px"}}>
        <Grid container sx={{maxWidth:"1200px", padding:"20px 0px" , margin:"auto", borderBottom:"2px solid #E8E8E8"}}>
            <Grid item xs={12} sm={4} md={3} p={3}>
                <img src="./images/logo.png" width="80px" alt="logo" />
                <Typography style={{color:"#404040", fontSize:"14px", lineHeight:"18px", fontFamily:"Montserrat"}}>Eservz is a leading and globally renowned e-commerce and Amazon specialist agency.</Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={3} p={3}>
                <Typography style={{letterSpacing:"1px", color:"#404040", fontSize:"14px", lineHeight:"20px", fontFamily:"Montserrat-SemiBold", marginBottom:"16px"}}>
                    Quick Link
                </Typography>
                {
                    links.map((item)=>
                    <Typography key={item.link} onClick={()=>navigate(item.to)} style={{color:"#404040", fontSize:"12px", lineHeight:"18px", fontFamily:"Montserrat", cursor:"pointer", marginBottom:"16px"}}>
                        {item.link}
                    </Typography>)
                }
            </Grid>
            <Grid item xs={12} sm={4} md={3} p={3}>
                <Typography style={{letterSpacing:"1px", color:"#404040", fontSize:"14px", lineHeight:"20px", fontFamily:"Montserrat-SemiBold", marginBottom:"16px"}}>
                    Services
                </Typography>
                {
                    services.map((item)=>
                    <Typography key={item.link} onClick={()=>navigate(item.to)} style={{color:"#404040", fontSize:"12px", lineHeight:"18px", fontFamily:"Montserrat", cursor:"pointer", marginBottom:"16px"}}>
                        {item.link}
                    </Typography>)
                }
            </Grid>
            <Grid item xs={12} sm={4} md={3} p={3}>
                <Typography style={{letterSpacing:"1px", color:"#404040", fontSize:"14px", lineHeight:"20px", fontFamily:"Montserrat-SemiBold", marginBottom:"16px"}}>
                    Address
                </Typography>
                <Typography onClick={()=>navigate("/")} style={{color:"#404040", fontSize:"12px", lineHeight:"18px", fontFamily:"Montserrat", cursor:"pointer", marginBottom:"16px"}}>
                Bighatch Consulting Private Limited<br/>88/1, H.K.D.Compound, G.T. Road,Mahespur, Lahartara, Varanasi,<br/>Uttar Pradesh, 221001, India
                </Typography>
                <Box style={{display:"flex", alignItems:"center", gap:"10px"}}>
                    <AiFillInstagram onClick={()=>window.open("https://www.linkedin.com/company/eservz")} style={{fontSize:"32px", color:'#949494', cursor:"pointer"}}/>
                    <FaFacebook onClick={()=>window.open("https://www.facebook.com/ESERVZ")} style={{fontSize:"28px", color:'#949494', cursor:"pointer"}}/>
                    <AiFillLinkedin onClick={()=>window.open("https://www.linkedin.com/company/eservz")} style={{fontSize:"30px", color:'#949494', cursor:"pointer"}}/>   
                </Box>
            </Grid>
        </Grid>
        <Box style={{width:'100%', textAlign:"center", marginTop:"20px", display:"flex", alignItems:'center', justifyContent:'center'}}>
            <AiOutlineCopyrightCircle style={{color:"#404040"}} />
            <Typography style={{fontSize:"14px", fontFamily:"Montserrat-SemiBold", color:"#6A6A6A"}}>
                <span style={{color:"#6349FF"}}>Eservz 2023</span> all right reserved
            </Typography>
        </Box>
    </Box>
  )
}