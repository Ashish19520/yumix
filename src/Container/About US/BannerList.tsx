import { Box, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';

export default function BannerList() {

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
    <Box className="bannerList_hidden" style={{maxWidth:"1200px", margin:"auto", padding:"80px 40px"}}>
      <Grid position="relative" container alignItems="center" style={{borderRadius:"40px", backgroundColor:"#EFF5FC", padding:"40px 60px"}}>
        <Grid item xs={12} md={8} sx={{paddingTop:{xs:"140px", md:"0px"}}}>
          <Typography fontSize="32px" fontFamily="Poppins-Medium" color="#3A3B44">
            List ∙ <span style={{color:'#828490'}}>Advertise ∙ Grow</span>
          </Typography>
          <Typography fontSize="16px" fontFamily="Montserrat" color="#828490" style={{marginTop:"15px"}}>
            There are more than 30 Million product listing on Amazon Platform. Beat your FBA competitors with our listing audit and optimization service.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{textAlign:"center", position:{xs:"absolute", md:"relative"}, top:{xs:"-20px", md:"0px"}}}>
          <img src="/images/Holding a pencil.png" alt="Holding Pencil" style={{width:"150px", scale:"2",marginLeft:"30px"}}/>
        </Grid>
      </Grid>
    </Box>
  )
}