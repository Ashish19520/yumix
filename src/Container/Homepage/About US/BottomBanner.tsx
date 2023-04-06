import { Container } from '@mui/system'
import React from 'react';
import styled from "styled-components";

export default function BottomBanner() {
  return (
    <div>
        <Banner>
            <Container maxWidth="lg" className="container">
                
                <div className="bannerText">
                    <div className="bannerHeading">
                        <h1>We keep the focus on driving results</h1>
                    </div>
                    <div className="service">
                        With our complete multi-channel solution, you'll have access to everything you need to succeed in today's competitive online marketplace.
                    </div>
                    <div className="bannerButton">
                        <div className="portfolio">
                            <button className="btn-our-portfolio">Our Portfolio</button>
                        </div>
                        <div className="contactButton">
                            <button className='btn-getin-touch'>Get in Touch</button>
                        </div>
                    </div>
                </div>
                <div className="bannerImage">
                    <img src='/images/business-goal.png' style={{width:"80%"}} />
                </div>
            </Container>
        </Banner>
    </div>
  )
}

const Banner = styled.div`
    .container{
        width: 100%;
        padding: 24px 16px 108px 0;
        background-color: #fffcfc;
        display:flex;
        .bannerImage{
            background-image: url('/images/Ellipse.png');
            background-repeat: no-repeat;
        }
        .bannerText {
            width:50%;
            padding-left:10px;
            .bannerHeading{
                width:100%;
            }
            .bannerButton{
                display:flex;
                padding-top:10px;
                .btn-our-portfolio {
                    margin-left:10px;
                    width: 100%;
                    align-self: stretch;
                    flex-grow: 0;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 7.6px;
                    padding: 9.1px 15.2px;
                    border-radius: 8px;
                    border: solid 0.8px #5956E9;
                }
                .btn-getin-touch {
                    margin-left:20px;
                    width: 100%;
                    align-self: stretch;
                    flex-grow: 0;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 7.6px;
                    padding: 9.1px 15.2px;
                    border-radius: 8px;
                    border: solid 0.8px #5956E9;
                    background-color: #5956E9;
                    color:white;
                }
            }
        }
    }
`
