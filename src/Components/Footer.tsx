import {
  Box,
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
      link: "Home",
      to: "/",
    },
    {
      link: "About Us",
      to: "/aboutus",
    },
    {
      link: "Portfolio",
      to: "/works",
    },
    {
      link: "Contact Us",
      to: "/#contactForm",
    },
    {
      link: "Terms & Conditions",
      to: "/",
    },
    {
      link: "Privacy Policy",
      to: "/",
    },
  ];

  const services = [
    {
      link: "Digital Media",
      to: "/ourservices#digitalMedia",
    },
    {
      link: "Analytics",
      to: "/ourservices#analytics",
    },
    {
      link: "Customer Experience",
      to: "/ourservices#customerExperience",
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
        <Grid item xs={12} sm={4} md={3} p={3}>
          <img src="../images/logo.png" 
          width="160px" 
          height="160px" 
          alt="logo" 
          style={{cursor:"pointer"}}
          onClick={onHomeNavigateHandlar} />

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
            Bighatch Consulting Private Limited
            <br />
            88/1, H.K.D.Compound, G.T. Road,Mahespur, Lahartara, Varanasi,
            <br />
            Uttar Pradesh, 221001, India
            <span onClick={handleOpen} style={{ marginBottom: "90px" }}>
              {/* <ImLocation2 size={16}/> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230614.64567786886!2d82.959499!3d25.311592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sin!4v1681919513995!5m2!1sen!2sin"
                width="100%"
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
                window.open("https://www.instagram.com/eservz_amz/")
              }
              style={{ fontSize: "32px", color: "#949494", cursor: "pointer" }}
            />
            <FaFacebook
              onClick={() => window.open("https://www.facebook.com/ESERVZ")}
              style={{ fontSize: "28px", color: "#949494", cursor: "pointer" }}
            />
            <AiFillLinkedin
              onClick={() =>
                window.open("https://www.linkedin.com/company/eservz")
              }
              style={{ fontSize: "30px", color: "#949494", cursor: "pointer" }}
            />
          </Box>
        </Grid>
      </Grid>
      <Box
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AiOutlineCopyrightCircle style={{ color: "#404040" }} />
        <Typography
          style={{
            fontSize: "14px",
            fontFamily: "Montserrat-SemiBold",
            color: "#6A6A6A",
          }}
        >
          <span style={{ color: "#6349FF" }}>Eservz 2023</span> all right
          reserved
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
  );
}
