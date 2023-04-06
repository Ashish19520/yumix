import { Container } from '@mui/system';
import React from 'react';
import styled from "styled-components";

export default function TopBanner() {
  return (
    <div>
        <Banner>
            <Container maxWidth="lg" className="container">
                <div className="bannerText">
                    <div className="bannerHeading">
                        <h1>Blogs</h1>
                    </div>
                    <div className="bannerDetails">
                        <p className='bannerTextDetails'>Eservz is a leading and globally renowned e-commerce and Amazon specialist agency that provides cutting edge, groundbreaking and truly revolutionary back office support to e-commerce sellers, business owners and vendors on multiple online channels especially Amazon.
                        </p>
                    </div>
                </div>
                <div className="bannerImage">
                    <img src='/images/Illustration.png' style={{width:"80%",float:"right"}} />
                </div>
            </Container>
        </Banner>
    </div>
  )
}

const Banner = styled.div`
 .container{
    display:flex;
    .bannerText{
        width:40%;
        margin-top:120px;
        padding-top:80px;
        .bannerTextDetails{
            font-family: Montserrat;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.5;
            letter-spacing: 0.25px;
            color: #696969;
        }
    }
    .bannerImage{
        width:50%;
        margin-top:80px;
    }
 }
`