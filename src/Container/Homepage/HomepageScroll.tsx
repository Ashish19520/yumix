import { Container } from '@mui/material';
import React from 'react'
import styled from "styled-components";
import { Slide } from '../../Components/Slide';


export const HomepageScroll = () => {
  return (
    <Scroll>
      <Container maxWidth="lg" className="container">
        <h1 className='title'>
          Brands / Companies we have worked with
        </h1>
        {//@ts-ignore
        <Slide className="slider"/>
}
      </Container>
    </Scroll>
  )
}

const Scroll = styled.div`
    background-color: aliceblue;
    .container{
      margin:auto;
      display:flex;
      flex-direction: column;
      align-items:center;

      h1{
        font-family: Poppins;
        font-size: 32px;
        font-weight: bold;
        color: #3a3b44;
      }

      .slider{
        margin-bottom: 40px;
      }

    }
`

