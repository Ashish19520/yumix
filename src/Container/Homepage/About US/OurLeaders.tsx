import { Container } from '@mui/system';
import React from 'react';
import styled from "styled-components";

export default function OurLeaders() {
  return (
    <div>
        <Banner>
            <Container  maxWidth="lg" className="container">
                <div className="leaders">
                    <div className="leadersHeading">
                        <h1>Our Leaders</h1>
                    </div>
                    <div className="leaderImage">
                        <div className="leaderImage1">
                            <img src='/images/dummy1.png'  style={{height:"168px",width:"168px",borderRadius:"50%"}}/>
                            <h5> Shyam  shyam</h5>
                            <p>CEO</p>
                        </div>
                        <div className="leaderImage2">
                            <img src='/images/dummy1.png'  style={{height:"168px",width:"168px",borderRadius:"50%"}}/>
                            <h5> Shyam  shyam</h5>
                            <p>CEO</p>
                        </div>
                    </div>
                </div>
            </Container>
        </Banner>
        
    </div>
  )
}
const Banner = styled.div`
    .leaders {
        width:100%;
        text-align: center;
        .leaderImage {
            display:flex;
            margin-top:20px;
            justify-content:center;
            .leaderImage2{
                margin-left:40px
            }
        }
    }
`
