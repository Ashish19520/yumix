import { Box, Grid, Typography,Button, Container } from "@mui/material";
import { useEffect } from "react";
import styled from "styled-components";
import { GrNext, GrPrevious } from "react-icons/gr";
import { motion } from "framer-motion";


export default function PaidMap() {
  const blogs = [
    {
      name: "Lacoste",
      type: "Boosting Search Revenue with Hyper-Local Strategies.",
      image: "../images/lacoste.png",
      open:"541% improvement on ROl"
    },
    { 
      name: "Crosley",
      type: "Reaching Qualified B2B Opportunities with offline data integration.",
      image: "../images/cla.png",
      open:"10x improvement in Conversion to Opportunity Rate"
    },
  ];

  const pageNo = [1, 2, 3, 4, 5];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Entering into zone");
          entry.target.classList.add("animate__animated");
          entry.target.classList.add("animate__fadeIn");
        }
        // else {
        //   console.log("exit into zone");
        //   entry.target.classList.remove("animate__fadeIn");
        // }
      });
    });

    const hiddenElements = document.querySelectorAll(".services-list-imgs");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);
  return (
   
    <Container style={{marginTop:"100px",position:"relative"}}>
      
    <ServiceListWrapper>
      <div className="dot-wrapper">
      <div className="heading">Our Results</div>
      <motion.img
              src="../images/Ellipse 63.png"
              className="sphere-half"
              id="dot"
              initial="hidden"
              animate="show"
            ></motion.img>
      </div>
    

      <div className="services-list-imgs">
      
        <Grid
          container
          style={{ maxWidth: "1200px", padding: "20px", margin: "auto" }}
         
        >
          
         
          {blogs.map((item) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={item.name}
                style={{ padding: "20px 10px" }}
              >
                <Box
                  style={{
                    backgroundImage: `url(${item.image})`,
                    width: "100%",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "12px",
                    height: "200px",
                    marginBottom:"10px"
                  }}
                />
                <Typography
                  style={{
                    fontSize: "16px",
                    fontFamily: "Montserrat-SemiBold",
                    color: "#40424C",
                  }}
                >
                  {item.name}
                </Typography>
                <Typography className="item-type">{item.type}</Typography>
                <Typography className="item-type">{item.open}</Typography>
                
              </Grid> 
            );
          })}
         
        </Grid>
        <motion.img
              src="../images/Round Cube2.png"
              initial="hidden"
              animate="show"
              className="half-cube"
            ></motion.img>
      </div>

      {/* <div
        className="pagination"
        style={{ display: "flex", justifyContent: "end" }}
      >
        <GrPrevious style={{marginTop:"10px"}}/>
        {pageNo.map((pNo) => (
          <Button
            onClick={() => {}}
            variant="text"
            sx={{
              color: "#7b7b7b",
              ":focus": {
                color: "#000000",
              },
            }}
          >
            {pNo}
          </Button>
        ))}
        <GrNext style={{marginTop:"10px"}} className="nxt-btn"/>
      </div> */}
    </ServiceListWrapper>
    </Container>
    
  );
}

const ServiceListWrapper = styled.div`
  .item-type {
    font-size: 14px;
    font-family: Montserrat-Medium;
    color: #40424c;
    margin-top: 20px;

    @media (max-width: 600px) {
      font-size: 11.79px;
    }
  }
 
  .sphere-half{
    width:15px;
    height:15px;
  }
  .dot-wrapper{
    display:flex;
    justify-content: flex-start;
  }
  #dot{
    align-self: center;
    margin:0 auto;
  }
  .half-cube{
    position: absolute;
    left:-7%;
  }
  .item-name {
    font-size: 16px;
    font-family: Montserrat-SemiBold;
    color: #40424c;
  }

  .nxt-btn{
    margin-top: 15px;

    @media(max-width:600px){
        margin-right: 5%;
    }
  }
  .heading{
font-style: normal;
font-weight: 800;
font-size: 36.8759px;
line-height: 110%;
margin-left:40px;
/* identical to box height, or 41px */
color: #2F2F2F;
  }
`;
