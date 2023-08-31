import React from 'react'
import { Container } from '@mui/material'

const Cookies = () => {
    const items=[
        "Essential Cookies: These cookies are necessary for the functioning of our website and enable you to navigate and use its features.",
        "Analytics and Performance Cookies: These cookies collect information about how visitors use our website, helping us understand user behaviour and improve site performance.",
        "Functionality Cookies: These cookies remember your preferences and choices to enhance your browsing experience.",
        "Advertising and Targeting Cookies: These cookies are used to deliver relevant advertisements and track the effectiveness of advertising campaigns.",   
        "Third-Party Cookies: We may also allow third parties to place cookies on your device through our website to provide us with analytics and insights or to deliver targeted advertisements."
    ];
    
  return (
    <Container style={{marginTop:"100px"}}>
    <div 
    // className='privacy-header'
    >
    <h1 >Cookies Policy</h1>
    </div>
    <div>
        <h5 className='justify m1'>Last Updated: 08/01/2023</h5>
        <p  className='justify m2'>
        This Cookies Policy ("Policy") explains how Bighatch Consulting, also known as ESERVZ (referred to as "we," "us," or "our"), uses cookies and similar tracking technologies on our website. By using our website, you consent to the use of cookies as described in this Policy. If you do not agree with our use of cookies, please adjust your browser settings accordingly or refrain from using our website.

                        </p>
    </div>

    <div>
        <h3 className='justify m1'>What are Cookies?</h3>
        <p  className='justify '>
        Cookies are small text files that are stored on your device (computer, tablet, smartphone) when you visit a website. They help enhance your browsing experience by remembering your preferences, improving site functionality, and providing analytics data.
        </p>
    </div>

    <div>
        <h3 className='justify m1'>Types of Cookies We Use: </h3>
        <p  className='justify '>
        We use the following types of cookies on our website:
        </p>
        <ol style={{listStyle:"disc"}}>

        {items?.map((data)=>(
            <li className='ml'>{data}</li>
        ))}
        </ol>
    </div>

    <div>
        <h3 className='justify m1'>Your Cookie Choices:</h3>
        <p  className='justify '>
        You can control and manage cookies through your browser settings. Most browsers allow you to refuse or accept cookies, delete cookies, and be notified when cookies are placed on your device. Keep in mind that blocking or deleting cookies may affect your experience on our website.

            </p>
    </div>

   
    <div>
        <h3 className='justify m1'>Privacy and Data Protection: </h3>
        <p  className='justify '>
        The information collected through cookies may include personal data. We treat this data in accordance with our Privacy Policy. For more information about how we collect, use, and protect your personal data, please refer to our Privacy Policy.
    </p>
        </div>  
        <div>
        <h3 className='justify m1'>Changes to this Policy:</h3>
        <p  className='justify '>
         We may update this Cookies Policy to reflect changes in our practices or for legal reasons. Any updates will be posted on this page with a revised "Last Updated" date.
    </p>
    <p  className='justify m1'>
    By using our website, you agree to the use of cookies as outlined in this Cookies Policy. If you have any questions or concerns about our use of cookies, please contact us at contact@eservz.com
    </p>
    <p  className='justify m1 '>
    Thank you for choosing Bighatch Consulting, also known as ESERVZ, for your e-Commerce needs.    </p>
        </div>  
          
   </Container>
  )
}

export default Cookies