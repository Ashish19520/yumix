import { Box, Grid, Typography,Button } from "@mui/material";
import { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export default function AnalyticsMap() {
  const navigate=useNavigate();
  const blogs = [
    {
      name: "Customer Experience Analytics",
      type: "Achieve improved conversion rates, seamless customer interactions, and enhanced UX with our bespoke testing methodologies and advanced...",
      image: "../images/Image8.png",
      open:"view more",
      add:"/analytics/customerExpierenceAnalytics",
    },
    {
      name: "Advanced Analytics",
      type: "Gain comprehensive understanding to optimize your marketing budget with our integrated analytics methodology, allowing you to make...",
      image: "../images/unsplash_eveI7MOcSmw.png",
      open:"view more",
      add:"/analytics/advancedAnalytics",
    },
    {
      name: "Platform Enablement",
      type: "Crafting and deploying a tailored assortment of tools and technologies to address your distinct data, measurement, and business requirements.",
      image: "../images/unsplash_H4ClLKv3pqw.png",
      open:"view more",
      add:"/analytics/platformEnablement"
    },
   
    {
      name: "Marketing Measurement",
      type: "Make fast, informed decisions to drive your business forward with a detailed digital marketing measurement framework that eliminates data...",
      image: "../images/unsplash_s8HyIEe7lF0.png",
      open:"view more",
      add:"/analytics/marketMeasurement"
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
    <ServiceListWrapper>
      <div className="services-list-imgs">
        <Grid
          container
          style={{ maxWidth: "1200px", padding: "80px 20px", margin: "auto" }}
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
                <Typography className="item-type hov" onClick={()=>navigate(`${item.add}`)}>{item.open}</Typography>
                
              </Grid>
            );
          })}
        </Grid>
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
  .hov{
    cursor: pointer;
    color:purple;
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
`;
