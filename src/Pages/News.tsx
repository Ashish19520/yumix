import React from 'react'
import { NewsContainer } from '../Container/News/NewsContainer'
import { HotTopics } from '../Container/News/HotTopics'
import styled from 'styled-components'
import { LatestNews } from '../Container/News/LatestNews'
import ContactForm from '../Components/contactForm'
import Footer from '../Components/Footer'
import { Container } from '@mui/material'
import Expect from '../Container/Blog/Expect'
import AboutBottomBanner from '../Container/About US/AboutBottomBanner'
import StayConnected from '../Container/News/StayConnected'

export const News = () => {

  const data2=[{
    src:"../images/Group 162943.png",
    head:"Industry Insights",
    para:"Our news hub is your window into the e-commerce industry's inner workings. From emerging tech and consumer behavior shifts to legislative updates and market trends, we'll provide you with insights that matter."
  },
{
    src:"../images/five.png",
    head:"Thought Leadership",
    para:"Our team of e-commerce experts will share their perspectives and expertise on a wide range of topics. Brace yourself for thought-provoking articles that challenge conventions and inspire strategic thinking."

},
{
    src:"../images/Group 162942.png",
    head:"Company Announcements",
    para:"Stay up-to-date with all things ESERVZ. We'll share exciting company news, partnerships, achievements, and milestones that contribute to our continuous growth and expertise.",
},
    {
    src:"../images/Group 162944.png",
    head:"Client Success Stories",
    para:"Our team of e-commerce experts will share their perspectives and expertise on a wide range of topics. Brace yourself for thought-provoking articles that challenge conventions and inspire strategic thinking."},]

    const data={
      heading:"Join the Conversation",
      para:"Join the Conversation: We invite you to explore our news hub, engage with our articles, and join the conversation. Your insights, comments, and feedback enrich the dialogue and contribute to a vibrant community of e-commerce aficionados..",
      para2:" As we embark on this journey together, we encourage you to bookmark the ESERVZ Ecommerce News Hub and make it your go-to destination for all things e-commerce. The future of online commerce awaits, and we're here to guide you through every twist and turn.",
      para3:""
    }
  return (
    <div className="container margin-nav">
        <NewsWrapper>
        <Container maxWidth="lg" className="container">
        <NewsContainer />
        <Expect data={data2}/>
        {/* <HotTopics />    */}
        <StayConnected/>
        <AboutBottomBanner data={data}/>
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