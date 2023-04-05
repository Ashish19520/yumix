import React from 'react'
import { Container } from '@mui/material';
import styled from "styled-components";
export default function MidBanner() {
  return (
        <Banner>
            <Container maxWidth="lg" className="container">
                <div className='bannerImage'>
                    <img src='/images/Business-Success.png' style={{width:"50%"}}/>
                </div>
                <div className="text">
                    <h3  className='text-heading'>Commitment for excellence</h3>
                    <p className='about-service'>
                        Eservz is a leading and globally renowned e-commerce and Amazon specialist agency that provides cutting edge, groundbreaking and truly revolutionary back office support to e-commerce sellers, business owners and vendors on multiple online channels especially Amazon.
                    </p>
                </div>
            </Container>
    </Banner>
  )
}

const Banner = styled.div`
    /* background-color: cadetblue; */
    .container{
        margin:auto;
        display: flex;
        .first{
            width: 50%;
            img{
                width: 100%;
                height: 372px;
                object-fit: contain;
            }
        }
        .bannerImage{
            width: 50%;
            text-align: center;
        }
        .text  {
            width: 40%;
            padding-top: 30px;

            h3{
                padding-top:10px;
                flex-grow: 0;
                font-family: Poppins;
                font-size: 20px;
                font-weight: 600;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.31;
                letter-spacing: 0.25px;
                text-align: left;
                color: #3a3b44;
            }
            .about-service{
                height: 124px;
                align-self: stretch;
                flex-grow: 0;
                font-family: Montserrat;
                font-size: 16px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.5;
                letter-spacing: 0.25px;
                text-align: left;
                color: #828490;
            }
        }
    }
`
