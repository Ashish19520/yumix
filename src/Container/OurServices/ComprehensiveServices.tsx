import React from 'react'


const ComprehensiveServices = () => {

    const clickHandlar=()=>{
        
            if (window.innerWidth >= 768) {
              window.scrollTo(0, 4700);
            } else {
              window.scrollTo(0, 9700);
            }
          
    }
    const data=[
        {
            img:"../images/service1.png",
            head:"Seller Onboarding",
            para:"Kickstart your ecommerce journey hassle-free with our expert guidance, ensuring a smooth entry onto various marketplaces",
            backgroundColor:"#EEEEEE"
        },
        {
            img:"../images/service2.png",
            head:"Brand Registry and Approval",
            para:"Secure your brand's identity and build trust among customers through efficient brand registration and approval processes.", 
            backgroundColor:"#FFE7E3"        },
        {
            img:"../images/service3.png",
            head:"Category Approval",
            para:"We navigate complex category approvals, expanding your reach across diverse product segments.", 
            backgroundColor:"#DAE4FF"
        },
        {
            img:"../images/service4.png",
            head:"Product Listings",
            para:"Our meticulous approach to product listings guarantees that your offerings stand out, driving engagement and conversions.",
            backgroundColor:"#FFE7CA"
        },
        {
            img:"../images/service5.png",
            head:"Product Page Optimization",
            para:"Elevate your product pages with compelling visuals, persuasive descriptions, and valuable information to maximize customer interest.",
            backgroundColor:"#EEEEEE"
        },
        {
            img:"../images/service6.png",
            head:"A+ Content Creation",
            para:"Captivate your audience with enhanced content, showcasing your brand's uniqueness and fostering customer loyalty.",
            backgroundColor:"#FFE7CA"
           
        },
        {
            img:"../images/service7.png",
            head:"Brand Store",
            para:"Establish a captivating online storefront that resonates with your brand's essence, guiding customers through an immersive shopping experience.",
            backgroundColor:"#DAE4FF"
        },
        {
            img:"../images/service8.png",
            head:"Inventory Planning and Management",
            para:"Stay ahead of demand with our strategic inventory planning, restocking, and reconciliation services.",
            backgroundColor:"#FFE7E3" 
        },
        {
            img:"../images/service9.png",
            head:"Fulfilment Expertise (FBA & WFS)",
            para:"Effortlessly manage order fulfilment, whether through Amazon's FBA or Walmart's WFS, ensuring timely deliveries and customer satisfaction.", 
            backgroundColor:"#EEEEEE"
        },
        {
            img:"../images/service10.png",
            head:"PPC Ads Management",
            para:"Drive targeted traffic and amplify sales with our data-driven Pay-Per-Click (PPC) advertising strategies.",
            backgroundColor:"#FFE7E3" 
        },
        
        {
            img:"../images/service11.png",
            head:"Deals, Promos & Coupons",
            para:"Attract and engage customers through compelling deals, promotions, and coupon campaigns.",
                        backgroundColor:"#DAE4FF",
        },
        {
            img:"../images/service12.png",
            head:"Traffic Boost and Conversion Optimization",
            para:"We enhance your online presence, driving traffic and optimizing conversion rates for sustained growth.",    
            backgroundColor:"#FFE7CA"
        },
        {
            img:"../images/service13.png",
            head:"Marketplace Compliance",
            para:"Navigate marketplace regulations seamlessly with our expert guidance, ensuring adherence to policies and guidelines.",
            backgroundColor:"#EEEEEE"
            
        },
        {
            img:"../images/service14.png",
            head:"Reviews and Ratings Management",
            para:"Foster a positive reputation through proactive review and rating management, building trust among potential buyers.",
            backgroundColor:"#FFE7E3" 
        },
    ]
  return (
    <> 
    <h1 className='content-heading' style={{fontSize:"40px",marginTop:"70px"}}>Our Comprehensive Services:</h1>
    <div className='comprehensive-service'>
       {data.map((item,index)=>(
       <div className='comprehensive-service'>
       {data.map((item,index)=>(
       <div className='xyz' onClick={clickHandlar}>
       <div className="comprehensive-Content"  key={index}>
       <div className='inner-div' style={{backgroundColor:item.backgroundColor,height:"90%",  borderRadius: "15px", paddingTop: "50px"}}> </div>
          <img src={item.img} className='img-blog' alt="img"/>
       </div>
        <div className='comprehensive-text'>
           <div className='comprehensive-text-wrapper'>
           <h4>{item.head}</h4>
            <p className='.about-content-display'>{item.para}</p>
           </div>
        </div>
        </div>
       ))}
    </div>
       
       ))}
    </div>
    </>
  )
}

export default ComprehensiveServices
