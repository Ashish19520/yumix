import Container from '@mui/material/Container';
import React from 'react'
import styled from "styled-components";


export const Hero = () => {
  return (
    <HeroLayout>
         <Container maxWidth="lg" className="container">
        <div className="titleBox">
        <h1>
        The complete multi-channel 
solution for Brands and Retailers
        </h1>
        <p>With our complete multi-channel solution, you'll have access to everything you need to succeed in today's competitive online marketplace.</p>
        </div>
         </Container>
    </HeroLayout>
  )
}

const HeroLayout=styled.div`
    
    background:#fffcfc

;

.container{
    display:flex;
    align-items:center;

    .titleBox{
        max-width:668px;

        h1{
            font-family: Poppins;
  font-size: 40px;
  font-weight: bold;
 
  color: #0b0720;
        }

        p{
            width: 90%;
        }
    }
}
`