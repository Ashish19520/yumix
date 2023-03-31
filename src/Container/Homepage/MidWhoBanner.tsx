import { Container } from '@mui/material';
import React from 'react'
import styled from "styled-components";

export const MidWhoBanner = () => {
    return (
        <Banner>
            <Container maxWidth="lg" className="container">
                <div className='first'><img src="./images/Ecommerce_10.png"></img></div>
                <div className='second'>
                    <h2>Who's Eservz?</h2>
                    <p>Eservz is a leading and globally renowned e-commerce and Amazon specialist agency that provides cutting edge, groundbreaking and truly revolutionary back office support to e-commerce sellers, business owners and vendors on multiple online channels especially Amazon.</p>
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
        .second{
            display:flex;
            flex-direction: column;
            justify-content: center;
            width: 50%;

            h2{
                font-size: 32px;
                font-weight: 600;
                line-height: 1.31;
                letter-spacing: 0.25px;
                text-align: left;
                color: #3a3b44;
                margin-bottom: 16px;
            }
            p{
                font-size: 16px;
                line-height: 1.5;
                letter-spacing: 0.25px;
                text-align: left;
                color: #828490;
            }
        }
    }
`