import { Container } from '@mui/material'
import React from 'react'

export const Privacy=() =>{
    const items=[
        "We may collect various types of information, including but not limited to.",
        "Personal Information: Name, email address, phone number, and other contact details.",
        "Billing Information: Billing address",
        "Service Usage Data: Information about how you interact with our website and services."   
    ];
    const informationUse=["We use your information for the following purposes",
"To provide and improve our services.",
"To process payments and manage billing.",
"To communicate with you about our services, updates, and promotions.",
"To respond to your inquiries and provide customer support.",
"To analyse usage patterns and enhance our website's functionality."]
    
  return (
   <Container style={{marginTop:"100px"}}>
    <div 
    // className='privacy-header'
    >
    <h1 >Privacy Policy</h1>
    </div>
    <div>
        <h5 className='justify m1'>Last Updated: 08/01/2023</h5>
        <p  className='justify m2'>
        At Bighatch Consulting, also known as ESERVZ, we are committed to safeguarding your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you engage with our website and services. By using our website and providing us with your information, you consent to the practices described in this Privacy Policy.
            </p>
    </div>
    <div>
        <h3 className='justify m1'>Information We Collect</h3>
        <ol style={{listStyle:"disc"}}>

        {items?.map((data)=>(
            <li className='ml'>{data}</li>
        ))}
        </ol>
    </div>

    <div>
        <h3 className='justify m1'>How We Use Your Information?</h3>
        <ol style={{listStyle:"disc"}}>

        {informationUse?.map((data)=>(
            <li className='ml'>{data}</li>
        ))}
        </ol>
    </div>

    <div>
        <h3 className='justify m1'>Data Security</h3>
        <p  className='justify '>
        We take measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no data transmission over the internet or electronic storage method is completely secure.</p>
    </div>
    <div>
        <h3 className='justify m1'>Sharing of Information:</h3>
        <p  className='justify '>
        We do not sell, trade, or rent your personal information to third parties. However, we may share your data with trusted service providers who assist us in operating our website, conducting our business, and servicing you.
    </p>
        </div>  
        <div>
        <h3 className='justify m1'>Cookies and Tracking Technologies:</h3>
        <p  className='justify '>
        Our website may use cookies and similar technologies to enhance your experience. You can manage your cookie preferences through your browser settings.
    </p>
        </div>  
        <div>
        <h3 className='justify m1'> Third-Party Links:</h3>
        <p  className='justify '>
        Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review their privacy policies before providing any information.
    </p>
        </div>  
        <div>
        <h3 className='justify m1'>Your Choices:</h3>
        <p  className='justify '>
        You can choose not to provide certain information or opt out of receiving promotional communications. However, certain services may be limited as a result.
    </p>
        </div>  
        <div>
        <h3 className='justify m1'>Access and Update:</h3>
        <p  className='justify '>
        You have the right to access, correct, or delete your personal information. If you have any questions or wish to make changes, please contact us at [contact email].
    </p>
        </div>   <div>
        <h3 className='justify m1'>Children's Privacy:</h3>
        <p  className='justify '>
        Our website and services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children.
    </p>
        </div>   <div>
        <h3 className='justify m1'>Changes to this Privacy Policy:</h3>
        <p  className='justify m1'>
        We may update this Privacy Policy periodically to reflect changes to our practices or for legal reasons. We will notify you of any significant changes by posting a prominent notice on our website.
    </p>
    <p  className='justify m1 '>
    By using our website and services, you agree to the terms outlined in this Privacy Policy. If you have any questions or concerns about our privacy practices, please contact us at contact@eservz.com.
    </p>
    <p className="juatify m1">
    Thank you for choosing Bighatch Consulting, also known as ESERVZ, as your trusted partner.
    </p>
        </div>  
   </Container>
 
  )
}


