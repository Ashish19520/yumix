import React, { useEffect, useState } from "react";
// @ts-ignore
import styled from "styled-components";
import Container from "@mui/material/Container";
import { Link,useNavigate } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import logo from "./logo.png";
import { Grid } from "@mui/material";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import Calender from "./Calender";

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openCalender, setOpenCalender] = useState(false);
  const navigate=useNavigate();

  useEffect(() => {
    console.log("first", drawerOpen);
    // setDrawerOpen(!drawerOpen)

    console.log("check", drawerOpen);
  }, []);


  const navAnimation = {
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 2.3,
        ease: "easeInOut",
      },
    },
  };
  const navText = {
    hidden: {
      opacity: 0,
      y: "-10px",
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="outter_div_nav">
      <SocialNavbar>
        <Container maxWidth="lg" className="container">
          <Link
            to="https://www.facebook.com/ESERVZ"
            className="iconLink"
            target="_blank"
          >
            <FaFacebookF color="#252f3e" size={16} />
          </Link>
          <Link
            to="https://www.linkedin.com/company/eservz"
            className="iconLink"
            target="_blank"
          >
            <FaLinkedinIn color="#252f3e" size={16} />
          </Link>
          <Link
            to="https://www.instagram.com/eservz_amz/"
            className="iconLink"
            target="_blank"
          >
            <AiFillInstagram color="#252f3e" size={16} />
          </Link>
        </Container>
      </SocialNavbar>

      <Nav drawer={drawerOpen}>
        <Container maxWidth="lg" className="container">
          <motion.div
            className="insideNavbar"
            variants={navAnimation}
            initial="hidden"
            animate="show"
            style={{ alignItems: "center" }}
          >
            
            <motion.img
              onClick={()=>{navigate('/')}}
              src="/images/logo.png"
              style={{ height: "68px", width: "68px",cursor: "pointer" }}
              variants={navText}
              className="logo-img"
            ></motion.img>
          </motion.div>
          <div>
            <motion.ul
              className="insideNav"
              variants={navAnimation}
              initial="hidden"
              animate="show"
            >
              <motion.li variants={navText}>
                <Link to="/" >Home</Link>
              </motion.li>
              <motion.li variants={navText}>
                <Link to="/aboutus">About Us</Link>
              </motion.li>
              <motion.li variants={navText}>
                <Link to="/ourservices">Our Services</Link>
              </motion.li>
              <motion.li variants={navText}>
                <Link to="/works">Works</Link>
              </motion.li>
              <motion.li variants={navText}>
                <Link to="/blogs">Blog</Link>
              </motion.li>
              <motion.li variants={navText}>
                <Link to="/news">News</Link>
                <Calender
                  open={openCalender}
                  setClose={() => setOpenCalender(false)}
                />
              </motion.li>
            </motion.ul>
          </div>
          <motion.div variants={navAnimation} initial="hidden" animate="show">
            <motion.button
              className="btn"
              variants={navText}
              onClick={() => setOpenCalender(true)}
            >
              <span id="calender">Set Meeting</span>
            </motion.button>
          </motion.div>
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="hamburger"
          >
            <RxHamburgerMenu
              color="#5956E9"
              
              size={35}
            />
          </button>
        </Container>
        <div className="drawer">
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="hamburger"
          >
            <AiOutlineClose color="#5956E9" style={{padding:"unset"}} />
          </button>
          <div className="navbar">
            <ul
              className="insideNav"
              onClick={() => {
                setDrawerOpen(!drawerOpen);
              }}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/ourservices">Our Services</Link>
              </li>
              <li>
                <Link to="/works">Works</Link>
              </li>
              <li>
                <Link to="/blogs">Blog</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
            </ul>
          </div>
        </div>
      </Nav>
    </div>
  );
};

//export default Navbar

const SocialNavbar = styled.div`
  height: 38px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 999;
  background-color: #eef1f8;
  .container {
    margin: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .iconLink {
      margin-right: 20px;

      &:last-of-type {
        margin-right: unset;
      }
    }
  }
`;

type NavProps = {
  drawer?: boolean;
};

const Nav = styled(Grid)<NavProps>`
  height: 80px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  /* @media (max-width:900px){
    display:none;
} */

  .container {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;

    .insideNavbar {
      .logo-img {
        padding: 11px;
        z-index: 99;
        position: relative;
        @media (max-width: 600px) {
         
        }
      }
    }

    .hamburger {
      display: none;
      @media (max-width: 900px) {
        display: block;
      }

      background: unset;
      border: 0px;
      font-size: 25px;
      font-weight: 800;
      cursor: pointer;
    }

    .insideNav {
      display: flex;
      align-items: center;
      list-style: none;
      font-family: Montserrat;

      @media (max-width: 900px) {
        display: none;
      }

      li {
        margin-right: 40px;
        text-decoration: none;
        color: #40424c;
        &:last-of-type {
          margin-right: unset;
        }
        a {
          text-decoration: none;
          color: #40424c;
          font-size: 14px;
          &:hover {
            font-weight: 700;
          }
          &:focus {
            font-weight: 700;
            color: purple;
            text-decoration:underline;

          }
        }
       
      }

      
    }

    .btn {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 8px;
      padding: 8px 24px;
      border-radius: 8px;
      background-color: #5956e9;
      border: 0px;

      font-family: Montserrat;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.43;
      /* letter-spacing: 1px; */
      text-align: center;
      color: #fffcfc;

      &:hover {
        background-color: #34338a;
        cursor: pointer;
      }

      @media (max-width: 900px) {
        display: none;
      }
    }
  }

  .drawer {
    position: fixed;
    background: #fffcfc;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 29px 0px;
    width: 100%;
    height: 100vh;
    top: 0px;
    transform: ${(props: NavProps) =>
      props.drawer ? "translateX(0%)" : "translateX(100%)"};
    transition: transform 0.5s;
    z-index: 99;

    .hamburger {
      display: none;
      @media (max-width: 900px) {
        display: block;
      }
      margin-top: 50px;
      margin-left: auto;
      background: unset;
      border: 0px;
      font-size: 25px;
      cursor: pointer;
      padding: 10px;
    }

    .navbar {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 80px;
      .insideNav {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        a {
          font-family: Montserrat;
          color: rgb(48, 48, 48);
        }
      }
    }
  }
`;
