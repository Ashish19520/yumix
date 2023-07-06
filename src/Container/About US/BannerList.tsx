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
            There are more than 30 Million product listing on Amazon Platform. Beat your FBA competitors with our listing audit and optimization service.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{textAlign:"center", position:{xs:"absolute", md:"relative"}, top:{xs:"-20px", md:"0px"}}}>
          
          <img src="/images/Holding a pencil.png" alt="Holding Pencil" style={{width:"50%", scale:"2",marginLeft:"30px"}}/>
        </Grid>
      </Grid>
    </Box>
  )
}