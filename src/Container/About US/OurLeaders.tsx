import { Container } from '@mui/system';
import React, { useEffect } from 'react';
import styled from "styled-components";

export default function OurLeaders() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log("Entering into zone");
              entry.target.classList.add("animate__animated");
              entry.target.classList.add("animate__fadeIn");
            } 
            // else {
            //   console.log("exit into zone");
            //   entry.target.classList.remove("animate__fadeIn");
            // }
          });
        });
    
        const hiddenElements = document.querySelectorAll(".ourLeaders_hidden");
        hiddenElements.forEach((el) => observer.observe(el));
      }, []);
  return (
    <div>
        <Banner>
            <Container  maxWidth="lg" className="container">
                <div className="leaders ourLeaders_hidden">
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
