import { Container } from '@mui/material';
import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import styled from "styled-components";

export const Counter = () => {

    const [counterOn, setCounterOn] = useState(false)
    return (
        <div>
            <Count>
                {// @ts-ignore
                    <ScrollTrigger onEnter={() => {
                        setCounterOn(true)
                        console.log("Enter")
                    }} onExit={() => {
                        setCounterOn(false)
                        console.log("Exit")
                    }}>
                        <Container maxWidth="lg" className="container">

                            <div className="countBody">

                              
                                <h1>
                                    {counterOn && <CountUp start={0} end={20} duration={2} delay={0} />}
                                    K+
                                </h1>
                                <h1>
                                    {counterOn && <CountUp start={0} end={15} duration={2} delay={0} />}
                                    K+
                                </h1>
                                <h1>
                                    {counterOn && <CountUp start={0} end={200} duration={2} delay={0} />}
                                    +
                                </h1>
                                <h1>
                                    {counterOn && <CountUp start={0} end={18} duration={2} delay={0} />}
                                    K+
                                </h1>
                            </div>
                        </Container>
                    </ScrollTrigger>
                }
            </Count>
            
        </div>
    )
}

const Count = styled.div`
/* background-color: black; */
color:#fff;
margin-top:250px;
/* margin-bottom:250px; */

.container{
    margin:auto;
    padding:40px;

    .countBody{
        display:flex;
        align-items: center;
        justify-content: center;
        h1{
           padding: 40px;
            border-right: 0.1px solid #000;
            font-size: 80px;
                font-weight: bold;
         
         letter-spacing: -0.5px;
           
            color: #000;

            &:last-of-type{
                border-right: unset;
            }
        }
    }
    
 

}


`