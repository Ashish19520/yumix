import { Box } from '@mui/material';
import ContactForm from '../Components/contactForm';
import Footer from '../Components/Footer';
import BlogService from '../Container/Blog/BlogService';
import ServiceList from '../Container/Blog/ServiceList';
import TopBanner from '../Container/Blog/TopBanner';
export default function Blog() {
  return (
    <Box className="container margin-nav" style={{backgroundColor:"#FFFCFC"}}>
        <TopBanner />
        <BlogService />
        <ServiceList />
        <ContactForm />
        <Footer/>
    </Box>
  )
}
