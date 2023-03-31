import React from 'react'
// @ts-ignore
import styled from "styled-components";
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import logo from './logo.png'


export const Navbar = () => {
    return (
        <div>

            <SocialNavbar>
                <Container maxWidth="lg" className="container">
                    <Link to="/" className="iconLink"><FaFacebookF color="#252f3e" size={16} /></Link>
                    <Link to="/" className="iconLink"><FaLinkedinIn color="#252f3e" size={16} /></Link>
                    <Link to="/" className="iconLink"><FaGoogle color="#252f3e" size={16} /></Link>
                </Container>
            </SocialNavbar>

        <Nav>
        <Container maxWidth="lg" className="container">
       <div><img src="/images/logo.png" style={{height:"68px",width:"68px"}}></img></div>
       <div>
        <ul className="insideNav">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/aboutus" >About Us</Link></li>
            <li><Link to="/ourservices">Our Services</Link></li>
            <li><Link to="/works">Works</Link></li>
            <li><Link to="/blogs">Blog</Link></li>
            <li><Link to="/news">News</Link></li>
        </ul>
       </div>
       <button className="btn">Set Meeting</button>
        </Container>
        </Nav>

        </div>
    )
}

//export default Navbar

const SocialNavbar = styled.div`
    height: 38px;
  
  background-color: #eef1f8;

    display:flex;
    justify-content: center;
    align-items: center;

  .container{
    margin:auto;
    display:flex;
    justify-content: flex-end;
    align-items: center;

    .iconLink{
        margin-right:20px;

        &:last-of-type{
    margin-right: unset;
  }
}


  }

`

const Nav=styled.div`

height:80px;
display:flex;
align-items:center;

@media (max-width:900px){
    display:none;
}

.container{
    margin:auto;
    display:flex;
    align-items:center;
    justify-content: space-between;

    .insideNav{
        display:flex;
        align-items:center;
        list-style: none;


        li{
            margin-right:40px;
            text-decoration: none;
            color:#40424c;
            &:last-of-type{
    margin-right: unset;
  }
  a{
    text-decoration:none;
    color:#40424c;
    font-size: 14px;


    &:hover{
        font-weight:700;
    }

   
  }
        }
    }

    .btn{
    display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px 24px;
  border-radius: 8px;
  background-color: #5956e9;
  border:0px;



  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  /* letter-spacing: 1px; */
  text-align: center;
  color: #fffcfc;

  &:hover{
    background-color: #34338a;
    cursor: pointer;
  }
}

}
`