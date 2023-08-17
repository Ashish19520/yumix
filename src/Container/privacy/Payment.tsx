import React from 'react'
import { Container } from '@mui/material'

const Payment = () => {
  return (
    <Container style={{marginTop:"100px"}}>
    <div 
    // className='privacy-header'
    >
    <h1 >Payment Terms & Options</h1>
    </div>
    <div>
        <p  className='justify m2'>
        At Bighatch Consulting, also known as ESERVZ, an advance payment is required prior to the initiation of services. This advance payment secures your project's spot in our queue and enables us to allocate necessary resources to deliver exceptional results.
            </p>
            <p  className='justify m2'>
            we strive to offer you convenient and secure payment methods for our services. Below, you'll find the accepted payment options to facilitate your transactions:
            </p>
    </div>
   

    <div>
        <h3 className='justify m1'>Bank Wire Transfer</h3>
        <p  className='justify '>
         For clients who prefer traditional bank transfers, we provide our bank account details for seamless payment processing. Please ensure to include your invoice number and relevant details for accurate identification.
        </p>
    </div>
    <div>
        <h3 className='justify m1'> Payoneer:</h3>
        <p  className='justify '>
        Payoneer offers a reliable and global payment solution. You can transfer funds directly to our Payoneer account, making the payment process efficient and accessible.
    </p>
        </div>  
        <div>
        <h3 className='justify m1'>PayPal: </h3>
        <p  className='justify '>
        PayPal provides a widely recognized and secure online payment method. You can conveniently remit payments through your PayPal account, ensuring ease and peace of mind   
         </p>
         <p  className='justify m1 '>
         Please select the payment option that aligns with your preference and requirements. Should you have any questions or need assistance with the payment process, our dedicated team is here to help. Feel free to reach out to us at contact@eservz.com for any inquiries.
    </p>
    <p  className='justify m1'>
    Thank you for choosing Bighatch Consulting, also known as ESERVZ, for your e-commerce needs. We look forward to a successful collaboration.
    </p>
        </div>  
       
          
        
   </Container>
  )
}

export default Payment