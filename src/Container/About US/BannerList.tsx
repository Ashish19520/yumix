import { Box, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export default function BannerList() {
  const[listColor,setlistColor] = useState("#3A3B44");
  const[advertiseColor,setadvertiseColor] = useState("#828490");
  const[growColor,setGrowColor] = useState("#828490");


  const handleColorFunction=()=>{
    setTimeout(()=>{
      setlistColor("#828490");
      setadvertiseColor("#3A3B44");
      setGrowColor("#828490");
    },2000)

    setTimeout(()=>{
      setlistColor("#828490");
      setadvertiseColor("#828490");
      setGrowColor("#3A3B44");
    },4000)

    setTimeout(()=>{
      setlistColor("#3A3B44");
      setadvertiseColor("#828490");
      setGrowColor("#828490");
      // setIsCycleComplete(true);
    },6000)

  }

  useEffect(()=>{
    handleColorFunction()
  },[]);

  if(listColor === "#828490" && growColor ==="#3A3B44" ){
    setTimeout(()=>{
      handleColorFunction();
    },2000)
   
  }


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated");
          entry.target.classList.add("animate__fadeIn");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".bannerList_hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);


  

  return (
    <Box className="bannerList_hidden" style={{maxWidth:"1200px", margin:"auto", padding:"80px 20px"}}>
      <Grid position="relative" container alignItems="center" style={{borderRadius:"40px", backgroundColor:"#EFF5FC", padding:"40px 60px"}}>
        <Grid item xs={12} md={8} sx={{paddingTop:{xs:"140px", md:"0px",}}}>
          <div style={{display:"flex",gap:10,flexWrap:"wrap"}} >

          <Typography fontSize="32px" fontFamily="Poppins-Medium" style={{color:`${listColor}`}} >
            List
          </Typography>

          <Typography fontSize="32px" fontFamily="Poppins-Medium" color="#828490" style={{color:`${advertiseColor}`}} >
          ∙ Advertise 
          </Typography>

          <Typography fontSize="32px" fontFamily="Poppins-Medium" color="#3A3B44" style={{color:`${growColor}`}} >
          ∙ Grow
          </Typography>

          </div>
          {/* <Typography fontSize="32px" fontFamily="Poppins-Medium" color="#3A3B44">
            List ∙ <span style={{color:'#828490'}}>Advertise ∙ Grow</span>
          </Typography> */}
          <Typography fontSize="16px" fontFamily="Montserrat" color="#828490" style={{marginTop:"15px"}}>
          Our tagline, <b>"List, Advertise & Grow"</b> encapsulates our core approach. 
          </Typography>
          <Typography fontSize="16px" fontFamily="Montserrat" color="#828490" style={{marginTop:"15px"}}>
          <b>"List"</b> signifies our expertise in curating and presenting products on online platforms.  
          </Typography>
          <Typography fontSize="16px" fontFamily="Montserrat" color="#828490" style={{marginTop:"15px"}}>
          <b>"Advertisement"</b> reflects our ability to market these products strategically.
          </Typography>
          <Typography fontSize="16px" fontFamily="Montserrat" color="#828490" style={{marginTop:"15px"}}>
          
           <b>"Grow"</b> underscores our commitment to expanding the brand's reach, customer engagement, and overall success in the digital marketplace.
          </Typography>
          <Typography fontSize="16px" fontFamily="Montserrat" color="#828490" style={{marginTop:"15px"}}>
          We are <b>Bighatch Consulting</b>, also recognized as <b>ESERVZ</b>. Established in 2018 (officially registered in 2020), our team comprises experienced e-commerce specialists. Our mission is to offer expert assistance to brands and retailers with an online presence. Operating across the United States of America, United Kingdom, Canada, Australia, India, and various other markets, we serve as comprehensive multichannel eCommerce service providers.

          </Typography>
        </Grid>
        
        <Grid item  xs={12} md={4} sx={{textAlign:"center", position:{xs:"absolute", md:"relative"}, top:{xs:"-20px", md:"0px"}}}>
          
          {/* <img className="hold-pencil" src="/images/Holding a pencil.png" alt="Holding Pencil"  /> */}
          <img className="hold-pencil" src="/images/15 - Lucas with Jetpack.png" alt="Holding Pencil"  />
        </Grid>
      </Grid>
    </Box>
  )
}