import {
  Box,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import React,{useState,useEffect} from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import {
  FaFacebook,
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
} from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { HashLink } from "react-router-hash-link";

import "../Style/Footer.css";

import { RxCross1 } from "react-icons/rx";
import { HiLocationMarker } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [topNavigate,setTopNavigate]=useState(true);

  const links = [
    {
      link: "Terms & Conditions",
      to: "/termsAndConditions",
    },
    {
      link: "Privacy Policy",
      to: "/privacyPolicy",
    },
    // {
    //   link: "Onboarding Process",
    //   to: "/onBoardingProcess",
    // },
    // {
    //   link: "Cookies Policy",
    //   to: "/cookies",
    // },
    {
      link: "Frequently Asked Questions",
      to: "/questions",
    },
    // {
    //   link: "Partners And Affilations",
    //   to: "/partner&affilations",
    // },
    // {
    //   link: "Payment Terms",
    //   to: "/paymentTerms",
    // },
    // {
    //   link: "Returns And Refund Policy",
    //   to: "/returnAndRefund",
    // },
    // {
    //   link: "Request Contact Form ",
    //   to: "/requestContactForm",
    // },
    // {
    //   link: "Service Delivery Policy",
    //   to: "/serviceDelivery",
    // },
  ];

  const services = [
  {
      link:"Digital marketing",
      to:"digital-marketing"
    },
    {
      link: "Frontend Development",
      to: "/frontend-development",
    },
    {
      link: "Backend Development",
      to: "/bakcend-development",
    },
    {
      link: "Mobile App Development",
      to: "/mobile-development",
    },
    {
      link: "Quality Assurance",
      to: "/quality-assurance",
    },
    {
      link: "Cloud Solutions",
      to: "/cloud-solution",
    },
      {
      link: "Custom Software Development",
      to: "/custom-development"
    }, 
    {
      link: "Artificial Intelligence(AI) Solutions",
      to: "/artificial-intelligence",
    },  
    {
      link: "UI & UX Designs",
      to: "/designs-developments",
    },  
    {
      link: "Graphic Designing",
      to: "/graphic-development",
    },  
   
  ];
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [topNavigate]);
  
 const onHomeNavigateHandlar=()=>{
  navigate('/');
  setTopNavigate(!topNavigate);
 }
 
  return (
    <Container>
        <Box
          style={{ width: "100%", backgroundColor: "white", padding: "80px 40px" }}
        >
      <Grid
        container
        sx={{
          maxWidth: "1200px",
          padding: "20px 0px",
          margin: "auto",
          borderBottom: "2px solid #E8E8E8",
        }}
      >
        <Grid style={{marginTop:"-2.5rem"}} item xs={12} sm={4} md={3} p={3}>
          <img src="../yumix/yt.png" 
          width="160px" 
          height="160px" 
          alt="logo" 
          style={{cursor:"pointer"}}
          onClick={onHomeNavigateHandlar} />

<Typography
              
                style={{
                  width:"10rem",
                  textAlign:"justify",
                  color: "#404040",
                  fontSize: "12px",
                  lineHeight: "18px",
                  fontFamily: "Montserrat",
                  cursor: "pointer",
                  marginBottom: "16px",
                }}
              >
               The future of business is digital, and at Yumix Technologies, we are here to help you build it. Our expert team is ready to partner with you to create lasting solutions that will not only transform your business but position you as a leader in your industry.
              </Typography>

                  
          

          {/* <Typography
            style={{
              color: "#404040",
              fontSize: "14px",
              lineHeight: "18px",
              fontFamily: "Montserrat",
            }}
          >
            Eservz is a leading and globally renowned e-commerce and Amazon
            specialist agency.
          </Typography> */}
          
        </Grid>
        <Grid item xs={12} sm={4} md={3} p={3}>
          <Typography
            style={{
              letterSpacing: "1px",
              color: "#404040",
              fontSize: "14px",
              lineHeight: "20px",
              fontFamily: "Montserrat-SemiBold",
              marginBottom: "16px",
            }}
          >
            Quick Link
          </Typography>
          {links.map((item) =>
            item.link != "Contact Us" ? (
              <Typography
                key={item.link}
                onClick={() => navigate(item.to)}
                style={{
                  color: "#404040",
                  fontSize: "12px",
                  lineHeight: "18px",
                  fontFamily: "Montserrat",
                  cursor: "pointer",
                  marginBottom: "16px",
                }}
              >
                {item.link}
              </Typography>
            ) : (
              <HashLink to={item.to} smooth style={{ textDecoration: "none" }}>
                <Typography
                  key={item.link}
                  style={{
                    color: "#404040",
                    fontSize: "12px",
                    lineHeight: "18px",
                    fontFamily: "Montserrat",
                    cursor: "pointer",
                    marginBottom: "16px",
                  }}
                >
                  {item.link}
                </Typography>
              </HashLink>
            )
          )}
        </Grid>
        <Grid item xs={12} sm={4} md={3} p={3}>
          <Typography
            style={{
              letterSpacing: "1px",
              color: "#404040",
              fontSize: "14px",
              lineHeight: "20px",
              fontFamily: "Montserrat-SemiBold",
              marginBottom: "16px",
            }}
          >
            Services
          </Typography>
          {services.map((item) => (
            <HashLink to={item.to} smooth style={{ textDecoration: "none" }}>
              <Typography
                key={item.link}
                style={{
                  color: "#404040",
                  fontSize: "12px",
                  lineHeight: "18px",
                  fontFamily: "Montserrat",
                  cursor: "pointer",
                  marginBottom: "16px",
                }}
              >
                {item.link}
              </Typography>
            </HashLink>
          ))}
        </Grid>
        <Grid item xs={12} sm={4} md={3} p={3}>
          <Typography
            style={{
              letterSpacing: "1px",
              color: "#404040",
              fontSize: "14px",
              lineHeight: "20px",
              fontFamily: "Montserrat-SemiBold",
              marginBottom: "16px",
            }}
          >
            Address
          </Typography>
          <Typography
            onClick={() => navigate("/")}
            style={{
              color: "#404040",
              fontSize: "12px",
              lineHeight: "18px",
              fontFamily: "Montserrat",
              cursor: "pointer",
              marginBottom: "16px",
            }}
          >
            {/* Bighatch Consulting Private Limited */}
            Yumix Technologies pvt ltd.
            <br />
            Street no. 3, Sarfabad Sec, 73, Gautam Buddha Nagar, 
            <br />
            Noida, Uttar Pradesh 201307
            <span onClick={handleOpen} style={{ marginBottom: "90px" }}>
              {/* <ImLocation2 size={16}/> */}
              <iframe
              src="https://www.google.com/maps/embed/v1/place?q=yumix+technologies+sarfabad+sector+73&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                height="150"
                style={{ border: 0, marginTop: "10px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy={"no-referrer-when-downgrade"}
              ></iframe>
            </span>
          </Typography>
          <Box style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <AiFillInstagram
              onClick={() =>
                window.open("https://www.instagram.com/yumixtechnologies/p/DCOqKX5zgIV/")
              }
              style={{ fontSize: "32px", color: "#949494", cursor: "pointer" }}
            />
            <FaFacebook
              onClick={() => window.open("https://www.facebook.com/yumixtechnologies")}
              style={{ fontSize: "28px", color: "#949494", cursor: "pointer" }}
            />
            <AiFillLinkedin
              onClick={() =>
                window.open("https://in.linkedin.com/company/yumixtechnologies")
              }
              style={{ fontSize: "30px", color: "#949494", cursor: "pointer" }}
            />
          </Box>
        </Grid>
      </Grid>
      <Box 
      className="custommmm-box">
        <Typography
          style={{
            fontSize: "14px",
            fontFamily: "Montserrat-SemiBold",
            color: "#6A6A6A",
            textAlign:"start"
          
          }}
        >
          <span style={{ color: "#6349FF" }}>Copyright 2025</span>  <AiOutlineCopyrightCircle style={{ color: "#404040" }} /> Yumix technologies Private Limited. All Rights Reserved.
        </Typography>
        <Typography   
               style={{
                 color: "#404040",
                 fontSize: "1rem",
                 lineHeight: "18px",
                 fontFamily: "Montserrat",
                 textAlign: "center",
                 cursor: "pointer",
                 display:"flex",
                 alignItems: "start",
                 marginRight:"-10%"
 
               }}
             >
              Powered by 
              <a href="https://yumixtechnologies.com/"
               className="pointer"
               target="blank"
               color="black"
               style={{textDecoration:"none",marginLeft:"-80px",marginTop:"-10px"}}>
                <img src="./yumix/yt.png"
                width="20%"
               alt="img"/>
               </a>
        </Typography>
      </Box>
     
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          <div
            className="title"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span></span>
            <button
              onClick={handleClose}
              style={{ border: "0px", background: "unset", cursor: "pointer" }}
            >
              <RxCross1 />
            </button>
          </div>
        </DialogTitle>
        <DialogContent>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230614.64567786886!2d81.81434728271336!3d25.42643128665752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39854cc6cba4ce4b%3A0xbe9ebdba200575e2!2sBIGHATCH%20CONSULTING%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1681919513995!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy={"no-referrer-when-downgrade"}
          ></iframe> */}
        </DialogContent>
      </Dialog>
    </Box>
    </Container>
  );
}
