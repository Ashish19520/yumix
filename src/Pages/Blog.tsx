import { Box } from '@mui/material';
import ContactForm from '../Components/contactForm';
import Footer from '../Components/Footer';
import BlogService from '../Container/Blog/BlogService';
import ServiceList from '../Container/Blog/ServiceList';
import TopBanner from '../Container/Blog/TopBanner';
import AboutBottomBanner from '../Container/About US/AboutBottomBanner';
import Expect from '../Container/Blog/Expect';
export default function Blog() {

  const data={
    heading:"Join Us on this Journey",
    para:"The ESERVZ e-Commerce Blog is more than just a collection of articles; it's a community of e-Commerce enthusiasts, entrepreneurs, and business owners dedicated to achieving e-Commerce excellence. We invite you to explore our blog, engage with our content, and join the conversation.",
    para2:" Your e-Commerce success is our top priority, and we're excited to embark on this journey with you. Let's transform your vision into a thriving online business. Stay tuned for regular updates, valuable insights, and a wealth of resources that will propel your  venture forward.",
    para3:"If you're ready to dive in, start exploring our latest blog posts now. Have questions or topics you'd like us to cover? We'd love to hear from you. Contact us at contact@eservz.com and let us know how we can best support your e-Commerce aspirations."
  }

  const services = [
    {name:"Affiliate & Influencer",
    add:"/digitalMedia/affilateAdvertising"
  },
    {name:"Amazon",
    add:"/digitalMedia/amazon"
  },
    {name:"Analytics",
   add:"/analytics/customerExpierenceAnalytics"
  },
    {
      name:"Email-Marketing",
    add:"/digitalMedia/emailMarketing"
  },

    {
      name:"Social Media Management",
    add:"/digitalMedia/socialMediaManagement"
  },

    {
      name:"Marketing & Retail Media",
    add:"/analytics/marketMeasurement"
    },
    {
      name:"Paid Search",
    add:"/digitalMedia/paidSearch"
    },
    {
      name:"Platform Enablement",
    add:"/analytics/platformEnablement"
    },
    {
      name:"Premium Content",
    add:"/customerExpierence/contactMarketing"
    },
    
    {
    name:"SEO",
     add:"/digitalMedia/seoMarketing"
    },
    {
      name:"Web & Mobile Development",
      add:"/customerExpierence/mobileWebDev"
  }];

  const data2=[{
    src:"../images/Group 162943.png",
    head:"Expert Insights",
    para:"Our blog is your gateway to the latest industry trends, best practices, and expert insights. We'll dive deep into topics ranging from marketplace management and digital marketing to website optimization and customer experience."
},
{
  src:"../images/Group 162942.png",
    head:"Actionable Tips",
    para:"We believe in providing actionable advice that you can implement immediately. Our blog posts are designed to empower you with practical strategies that deliver real results."


},
{
  src:"../images/five.png",
    
    head:"Guidance for Growth",
    para:"Whether you're just starting your e-Commerce journey or looking to take your established business to the next level, our blog will offer guidance that aligns with your goals."    },
{
    src:"../images/Group 162944.png",
    head:"Success Stories",
    para:"Learn from the successes of others. Our blog will feature inspiring case studies and success stories that showcase how businesses have transformed their e-Commerce operations with our guidance.."
},



]
  return (
    <Box className="container margin-nav" style={{backgroundColor:"#FFFCFC"}}>
        <TopBanner />
        < Expect data={data2}/>
        {/* <BlogService data={services} /> */}
        <AboutBottomBanner data={data}/>
        <ServiceList />
        <ContactForm />
        <Footer/>
    </Box>
  )
}
