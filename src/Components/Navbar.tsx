import React, { useEffect, useState } from "react";
// @ts-ignore
import styled from "styled-components";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import logo from "./logo.png";
import { Grid } from "@mui/material";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    console.log("first", drawerOpen);
    // setDrawerOpen(!drawerOpen)

    console.log("check", drawerOpen);
  }, []);

  return (
    <div>
      <SocialNavbar>
        <Container maxWidth="lg" className="container">
          <Link to="/" className="iconLink">
            <FaFacebookF color="#252f3e" size={16} />
          </Link>
          <Link to="/" className="iconLink">
            <FaLinkedinIn color="#252f3e" size={16} />
          </Link>
          <Link to="/" className="iconLink">
            <FaGoogle color="#252f3e" size={16} />
          </Link>
        </Container>
      </SocialNavbar>

      <Nav drawer={drawerOpen}>
        <Container maxWidth="lg" className="container">
          <div>
            <img
              src="/images/logo.png"
              style={{ height: "68px", width: "68px" }}
            ></img>
          </div>
          <div>
            <ul className="insideNav">
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
          <button className="btn">Set Meeting</button>
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="hamburger"
          >
            <RxHamburgerMenu />
          </button>
        </Container>
        <div className="drawer">
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="hamburger"
          >
            <AiOutlineClose />
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

  /* @media (max-width:900px){
    display:none;
} */

  .container {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;

    .hamburger {
      display: none;
      @media (max-width: 900px) {
        display: block;
      }

      background: unset;
      border: 0px;
      font-size: 25px;
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
      props.drawer ? "translateX(0%)" : "translateX(-100%)"};
    transition: transform 0.5s;

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
