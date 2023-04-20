import { Box, Button, Grid, Typography } from "@mui/material";

export default function ContactForm() {
  return (
    <Box sx={{maxWidth:"1200px", padding:"80px 40px", margin:"auto", overflow:{xs:"hidden", md:"visible"}}}>
      <Grid container sx={{width:"100%", backgroundColor:"#232F3F", borderRadius:"42px", boxShadow:"2px 4px 10px rgba(0, 0, 0, 0.1)", backdropFilter:"blur(21px)", padding:{xs:"20px 40px", md:"50px 100px"}}}>
        <Grid item xs={12} md={8} style={{marginBottom:"30px"}}>
          <Typography style={{color:"#FFFCFC", fontSize:"32px", fontFamily:"Poppins-SemiBold"}}>Get in Touch</Typography>
          <Typography style={{margin:"20px 0px 40px 0px", color:"#D3D2F9", fontSize:"16px", fontFamily:"Montserrat", lineHeight:"24px"}}>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</Typography>
          <Box style={{display:"flex", alignItems:"stretch", gap:"20px", flexWrap:"wrap"}}>
            <input type="email" placeholder="Email" required style={{...style.input}}/>
            <input type="text" placeholder="Your Message" required style={{...style.input}}/>
            <Button disableElevation variant='contained' sx={{...style.button, color:"white", backgroundColor:"#5856e9"}}>
                Send
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <img src="./images/brisaTakingParcelRight.png" width="80%" style={{scale:"2", transform:"translate(40px, -20px)"}}/>
        </Grid>
      </Grid>
    </Box>
  )
}

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





