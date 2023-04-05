import React from 'react'
import { Container } from '@mui/material';
import styled from "styled-components";
export default function TopBanner() {
  return (
    <Banner>
        <Container maxWidth="lg" className="container">
            <div className="bannerHeading">
                <h3>About Us</h3>
                <p>Eservz is a leading and globally renowned e-commerce and Amazon specialist agency that provides cutting edge, groundbreaking and truly revolutionary back office support to e-commerce sellers, business owners and vendors on multiple online channels especially Amazon.
                </p>
            </div>
            <div className="bannerImage">
                <img src="/images/about.png" />
            </div>
        </Container>
    </Banner>
  )
}
const Banner =styled.div`
    .container {
        display: flex;
    }
`