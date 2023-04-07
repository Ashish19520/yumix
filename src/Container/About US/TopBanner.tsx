import React from 'react'
import { Container } from '@mui/material';
import styled from "styled-components";
export default function TopBanner() {
  return (
    <Banner>
        <Container maxWidth="lg" className="container">
            <div className="bannerHeading">
                <h1>About Us</h1>
                <p className="about-details">Eservz is a leading and globally renowned e-commerce and Amazon specialist agency that provides cutting edge, groundbreaking and truly revolutionary back office support to e-commerce sellers, business owners and vendors on multiple online channels especially Amazon.
                </p>
            </div>
            <div className="bannerImage">
                <img src="/images/about.png"  style={{ width:"80%", float:"right"}}/>
            </div>
        </Container>
    </Banner>
  )
}
const Banner =styled.div`
    .container {
        margin-top:20px;
        padding-top: 20px;
        display: flex;
        .bannerHeading{
            width:50%;
            margin-top:40px;
            padding-top:40px;
            .about-details{
                width:80%;
            }
        }
        .bannerImage{

        }
    }

`