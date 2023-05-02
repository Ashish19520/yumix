import { Box, Typography } from '@mui/material';
import styled from 'styled-components'
import { useEffect } from 'react';


export default function OurLeaders() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log("Entering into zone");
              entry.target.classList.add("animate__animated");
              entry.target.classList.add("animate__fadeIn");
            }
          });
        });
        const hiddenElements = document.querySelectorAll(".ourLeaders_hidden");
        hiddenElements.forEach((el) => observer.observe(el));
    }, []);

    const leaders = [
        {
            name : "Shyam Shyam",
            post : "CEO",
            image : "/images/leader1.png"
        },
        {
            name : "Shyam Shyam",
            post : "CEO",
            image : "/images/1 - Brisa Receiving Her Package (1).png"
        }
    ]

  return (
    <LeadersWrapper>
    <Box className="ourLeaders_hidden" style={{maxWidth:"1200px", margin:"auto", padding:"80px 40px", display:"flex", alignItems:"flex-end", justifyContent:'center', gap:"40px", flexWrap:"wrap"}}>
        {
            leaders.map((item) => {
                return(
                    <Box key={item.name} style={{textAlign:"center",position:'relative'}}>
                            {/* <img src="./images/Leaders Bg.png" className='img-leaders-bg'></img> */}
                        <Box style={{width:"230px", height:"230px", border:"4px solid #5856e9", backgroundColor:"#EFF5FC", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden"}}>
                            <img src={item.image} alt={item.name} style={{paddingTop:"25px"}} />
                        </Box>
                        <Typography className='leader-name'>{item.name}</Typography>
                        <Typography className="leader-desg">{item.post}</Typography>
                    </Box>
                )
            })
        }
    </Box>
    </LeadersWrapper>
  )
}

const LeadersWrapper=styled.div`

.img-leaders-bg{
    position: absolute;
    left: 0%;
    z-index: -1;
}

.leader-name{

    font-size:18px;
    font-family:Poppins-SemiBold;
    margin:10px 0px;
    color:#494949;
    @media (max-width:600px){
        font-size: 12px;

    }
}

.leader-desg{


    font-size:16px;
     font-family:Montserrat;
    @media (max-width:600px){
        font-size: 10px;
    }
}



`