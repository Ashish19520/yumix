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
            head:" Digital Marketing",
            para:"We create data-driven, customized digital marketing strategies designed to increase brand visibility, engage target audiences, and drive conversions. Our comprehensive approach ensures your brand reaches its full potential in the digital space.",
            backgroundColor:"#EEEEEE"
        },
        {
            img:"../images/service2.png",
            head:"Frontend Development",
            para:"We build visually appealing, highly responsive interfaces that enhance user experience and reflect your brand’s identity. Our frontend solutions are optimized for performance across all devices, from desktops to mobile.", 
            backgroundColor:"#FFE7E3"        },
        {
            img:"../images/service3.png",
            head:" Backend Development",
            para:"Our backend development services are the backbone of your digital presence. We create secure, scalable, and high-performing systems that enable seamless functionality and data management for your applications.", 
            backgroundColor:"#DAE4FF"
        },
        {
            img:"../images/service4.png",
            head:"Mobile App Development    ",
            para:" We develop custom mobile applications that provide a seamless experience on both iOS and Android, as well as hybrid solutions. Our apps are designed with usability, performance, and functionality at their core, meeting the diverse needs of users.",
            backgroundColor:"#FFE7CA"
        },
        {
            img:"../images/service5.png",
            head:" Quality Assurance (QA)",
            para:"Quality is our priority. Our dedicated QA team rigorously tests every solution to ensure it meets the highest standards of functionality, security, and performance. With both manual and automated testing, we ensure that your applications run smoothly and reliably.",
            backgroundColor:"#EEEEEE"
        },
        {
            img:"../images/service6.png",
            head:"Cloud Solutions",
            para:"Our cloud solutions enable businesses to operate more flexibly and scale efficiently. From migration to cloud-native development, we tailor our services to fit your needs, whether you're working with AWS, Azure, or Google Cloud.",
            backgroundColor:"#FFE7CA"
           
        },
        {
            img:"../images/service7.png",
            head:" Custom Software Development",
            para:" For businesses with unique needs, our custom software development services provide fully tailored solutions that align with your business goals and processes. We bring your ideas to life with innovative, efficient, and scalable software.",
            backgroundColor:"#DAE4FF"
        },
        {
            img:"../images/service8.png",
            head:" Artificial Intelligence (AI) Solutions",
            para:" We harness the power of AI to help businesses automate processes, gain deeper insights, and provide more personalized user experiences. Our AI solutions include machine learning, predictive analytics, and natural language processing.",
            backgroundColor:"#FFE7E3" 
        },
        {
            img:"../images/service9.png",
            head:"UI/UX Design",
            para:" We design user interfaces that are not only visually appealing but also user-centric, ensuring a seamless and intuitive experience. Whether it's a website, mobile app, or enterprise platform, our UI/UX design services focus on enhancing usability, functionality, and engagement.", 
            backgroundColor:"#EEEEEE"
        },
        {
            img:"../images/service10.png",
            head:"Graphic Design",
            para:" Our graphic design services help you communicate your brand’s message with clarity and creativity. From logos and branding to marketing materials and digital content, we design visually stunning graphics that resonate with your target audience.",
            backgroundColor:"#FFE7E3" 
        },
        
        // {
        //     img:"../images/service11.png",
        //     head:"Deals, Promos & Coupons",
        //     para:"Attract and engage customers through compelling deals, promotions, and coupon campaigns.",
        //                 backgroundColor:"#DAE4FF",
        // },
        // {
        //     img:"../images/service12.png",
        //     head:"Traffic Boost and Conversion Optimization",
        //     para:"We enhance your online presence, driving traffic and optimizing conversion rates for sustained growth.",    
        //     backgroundColor:"#FFE7CA"
        // },
        // {
        //     img:"../images/service13.png",
        //     head:"Marketplace Compliance",
        //     para:"Navigate marketplace regulations seamlessly with our expert guidance, ensuring adherence to policies and guidelines.",
        //     backgroundColor:"#EEEEEE"
            
        // },
        // {
        //     img:"../images/service14.png",
        //     head:"Reviews and Ratings Management",
        //     para:"Foster a positive reputation through proactive review and rating management, building trust among potential buyers.",
        //     backgroundColor:"#FFE7E3" 
        // },
    ]
  return (
    <> 
    <h1 className='content-heading' style={{fontSize:"40px",marginTop:"70px"}}>Our Comprehensive Services:</h1>
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
       
   
    </>
  )
}

export default ComprehensiveServices
