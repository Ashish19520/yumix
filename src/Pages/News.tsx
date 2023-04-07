import React from 'react'
import { NewsContainer } from '../Container/News/NewsContainer'
import { HotTopics } from '../Container/News/HotTopics'
import styled from 'styled-components'
import { LatestNews } from '../Container/News/LatestNews'
import ContactForm from '../Components/contactForm'
import Footer from '../Components/Footer'

export const News = () => {
  return (
    <div>
        <NewsWrapper>
        <NewsContainer />
        <HotTopics />   
        <LatestNews />
        <ContactForm />
        <Footer />
        </NewsWrapper>
    </div>
  )
}

const NewsWrapper=styled.div`
     background: #fffcfc;;
`