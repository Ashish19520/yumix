import { Box } from '@mui/material';
import ContactForm from '../Components/contactForm';
import Footer from '../Components/Footer';
import BlogService from '../Container/Blog/BlogService';
import ServiceList from '../Container/Blog/ServiceList';
import TopBanner from '../Container/Blog/TopBanner';
export default function Blog() {
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
  return (
    <Box className="container margin-nav" style={{backgroundColor:"#FFFCFC"}}>
        <TopBanner />
        <BlogService data={services} />
        <ServiceList />
        <ContactForm />
        <Footer/>
    </Box>
  )
}
