import React from 'react'
import Content from '../../Components/Content'
import ContactForm from '../../Components/contactForm'
import Footer from '../../Components/Footer'

function OurWorks1() {
 const data={
  img:"../images/Img1.png",
  heading:"Growing Sales for a Startup Clothing Brand",
  text:"While most digital marketing agencies excel at one or two channels, Eservz has deep expertise across all performance marketing services, which allows us to provide a rich digital marketing services offering."
  }
  return (
    <div>
      <Content data={data}/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default OurWorks1
