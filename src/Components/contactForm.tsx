import { Box, Button, Grid, Typography,TextField, useMediaQuery,Alert,AlertTitle } from "@mui/material";
import { useForm, ValidationError } from '@formspree/react';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { postForm } from "../actions/posts";
import { useSelector } from "react-redux/es/exports";


const typingContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};
const typingText = {
  hidden: { opacity: 0, y: "-20px" },
  show: {
    opacity: 1,
    y: "0",
    transition: {
      ease: "easeInOut",
    },
  },
};

export default function ContactForm() {

  const [state, handleSubmit] = useForm("mbjeqgpr");
  const [showAlert, setShowAlert] = useState(false);
  const [formData,setFormData]=useState({
    email:"",
    message:"",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  


  const dispatch: Dispatch<any> = useDispatch();

  const changeHandalar=(e:any)=>{
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value})
}

  useEffect(() => {
   
  }, [setShowAlert]);

  const onSubmit = async(e:any)=>{

    e.preventDefault();
    setIsSubmitting(true);
    let data:any = await dispatch(postForm(formData));
    setIsSubmitting(false);
    if(data?.message==="Success"){
      setShowAlert(true);
      
    }
    setFormData({
      email:"",
      message:"",
    });
  }
  let flag=false;
  if (state.succeeded) {
    return (
      <Box sx={{maxWidth:"1200px", padding:"80px 40px", margin:"auto", overflow:{xs:"hidden", md:"visible"}}}>
      <Grid container sx={{width:"100%", backgroundColor:"#232F3F", borderRadius:"42px", boxShadow:"2px 4px 10px rgba(0, 0, 0, 0.1)", backdropFilter:"blur(21px)", padding:{xs:"20px 40px", md:"50px 100px"}}}>
        <FormWrapper>
        <Grid item xs={12} md={8} style={{display:"flex",justifyContent:"center",alignItems:"center", }}>
        <motion.div
          variants={typingContainer}
          initial="hidden"
          animate="show"
          className="title"
        >
          <Typography style={{color:"#FFFCFC", fontSize:"42px", fontFamily:"Poppins-SemiBold"}} >
          {Array.from(" Will get back to you soon").map((word, i) => (
            <motion.span key={i} variants={typingText}>
              {word}
            </motion.span>
          ))}
            </Typography>
            </motion.div>
        </Grid>
        <Grid item xs={12} md={4}>
        
        <img className="img-sub_aboutus" src="../images/brisaTakingParcelRight.png" width="80%" style={{scale:"1.7"}}/>
       
      </Grid>
      </FormWrapper>
      </Grid>
    </Box>
    )

}




  if(state?.errors){
    if(state?.errors[0]?.code=="TYPE_EMAIL"){
     flag=true;
    }
  }

  if(showAlert){
    setTimeout(()=>{
      setShowAlert(false)
    },2000)
  }

  return (
    <Box sx={{maxWidth:"1200px", padding:"80px 10px", margin:"auto", overflow:{xs:"hidden", md:"visible"}}} id="contactForm">
      
      
      <Grid container sx={{width:"100%", backgroundColor:"#232F3F", borderRadius:"42px", boxShadow:"2px 4px 10px rgba(0, 0, 0, 0.1)", backdropFilter:"blur(21px)", padding:{xs:"20px 40px", md:"50px 100px"}}}>
      {showAlert && (
               <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              Your form has been submitted successfully!
              </Alert>
          )}

     <FormWrapper>
        <Grid item xs={12} md={8} style={{marginBottom:"30px"}}>
          <Typography  className="form-title">Get in Touch </Typography>
          <Typography  className="form-subTitle">Drop us a message to explore possibilities in selling on Marketplaces</Typography>
          <form onSubmit={onSubmit}>
          <Box style={{display:"flex", alignItems:"stretch", gap:"20px", flexWrap:"wrap"}}>
            <input
             type="email" 
             placeholder="Email*" 
             value={formData.email}
             required style={{...style.input}}
              name="email"
              onChange={changeHandalar}/>


            <input
             type="text"
              placeholder="Your Message*"
               style={{...style.input}}
               name="message"
               value={formData.message} 
               onChange={changeHandalar}
               required
               />


            <Button type="submit" 
            disabled={isSubmitting} 
            disableElevation variant='contained'
            style={{ backgroundColor:"#5856e9",color:"white"}}
            sx={{...style.button, color:"white", backgroundColor:"#5856e9"}}>
            {isSubmitting ? 'Submitting' : 'Send'}
            </Button>
            {flag &&  <Typography style={{color:"#D3D2F9", fontSize:"16px", fontFamily:"Montserrat", lineHeight:"24px"}}>Please Enter Email Again</Typography>}
           
          </Box>
            </form>
        </Grid>
        <Grid item xs={12} md={4}>
        
          <img className="img-sub_aboutus" src="../images/brisaTakingParcelRight.png" width="80%" style={{scale:"1.7"}}/>
         
        </Grid>
        </FormWrapper>
      </Grid> 
    </Box>
  )
}


const FormWrapper=styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width:600px){
    flex-direction:column-reverse;
    
  }

  .form-title{
    color:#FFFCFC; 
    font-size:32px;
    font-family:"Poppins-SemiBold";

    @media(max-width:600px){
      
      font-size: 16px;
    }
  }

  .form-subTitle{
    margin:20px 0px 40px 0px;
     color:#D3D2F9;
     font-size:16px;
     font-family:"Montserrat";
    line-height:"24px";

    @media(max-width:600px){
      font-size: 14px;
    }
  }

  .img-sub_aboutus{
    margin-left: 90px;

    @media (max-width:600px){
      margin-left: unset;
      width:50%;
      margin-top: -90px;
      margin-bottom: 40px;
      margin-left: 20%;

    }
  }
  
`

 const ImgWrapper=styled.div`
//   .img-wrapper{

//     @media(max-width:600px){
//       position: relative;
//     }

//     img{
//       @media(max-width:600px){
//         padding-top: 50px;
//         width: 50%;
//         position: absolute;
//         background-color: aqua;
//         transform:none !important;
//         right: 0%;
//         top: 0%;
//       }
//     }
//   }
`
const style={
  input : {
    padding:"14px 16px",
    backgroundColor : "white",
    borderRadius : "8px",
    border : "1px solid #E0E0E0",
    fontSize : "14px",
    fontWeight : 600,
    fontFamily : "Montserrat-semiBold",
    flex:"1 0 auto"
  } as React.CSSProperties,
  button : {
    borderRadius : "8px",
    textTransform : "none",
    fontSize : "14px",
    fontWeight : 600,
    fontFamily : "Montserrat-semiBold",
  }
}

const imgStyle={
  scale:"1.7",
   transform:"translate(44px, 4px)",
   
}




