import React from 'react'
// @ts-ignore
import styled from "styled-components";
import Container from '@mui/material/Container';
import { Link } from '@mui/material';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";


export const Navbar = () => {
    return (
        <div>

            <SocialNavbar>
                <Container maxWidth="lg" className="container">
                    <Link href="/" className="iconLink"><FaFacebookF color="#252f3e" size={16} /></Link>
                    <Link href="/" className="iconLink"><FaLinkedinIn color="#252f3e" size={16} /></Link>
                    <Link href="/" className="iconLink"><FaGoogle color="#252f3e" size={16} /></Link>
                </Container>
            </SocialNavbar>

        <Nav>
        <Container maxWidth="lg" className="container">
       <div>Logo</div>
       <div>
        <ul className="insideNav">
            <li><Link  href={"/home"}>Home</Link></li>
            <li><Link href="/aboutus" >About Us</Link></li>
            <li><Link href="/ourservices">Our Services</Link></li>
            <li><Link href="/works">Works</Link></li>
            <li><Link href="/blogs">Blog</Link></li>
            <li><Link href="/news">News</Link></li>
        </ul>
       </div>
       <div>C</div>
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
        font-weight:700
    }
  }
        }
    }

}
`