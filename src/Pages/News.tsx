import React from 'react'
import { NewsContainer } from '../Container/News/NewsContainer'
import { HotTopics } from '../Container/News/HotTopics'
import styled from 'styled-components'
import { LatestNews } from '../Container/News/LatestNews'
import ContactForm from '../Components/contactForm'
import Footer from '../Components/Footer'
import { Container } from '@mui/material'

export const News = () => {
  return (
    <div className="container margin-nav">
        <NewsWrapper>
        <Container maxWidth="lg" className="container">
        <NewsContainer />
        <HotTopics />   
        <LatestNews />
        </Container>
        <ContactForm />
        <Footer />
        </NewsWrapper>
    </div>
  )
}

const NewsWrapper=styled.div`
     background: #fffcfc;;
     .container{
      margin: auto;
     }
`