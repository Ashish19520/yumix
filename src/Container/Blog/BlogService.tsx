import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export default function BlogService() {
  const navigate=useNavigate();
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
      name:"Email-marketing",
    add:"/digitalMedia/emailMarketing"
  },

    {
      name:"Socila media management",
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
      name:"Web & Mobile Developmen",
      add:"/customerExpierence/mobileWebDev"
  }];

  const [flag, setFlag] = useState(true);
  

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

    const hiddenElements = document.querySelectorAll(".services-btn");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <BlogServiceWrapper>
      <div className="services-btn">
        <Box
          style={{ maxWidth: "1200px", padding: "80px 40px", margin: "auto" }}
        >
          <Typography
           
            className="bs-title"
          >
            Services We Provide
          </Typography>
          <Box
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              marginTop: "40px",
              gap: "25px",
            }}
          >
            {services.map((item, index) => {
              return (
                <Button
                  key={item.name}
                  variant="outlined"
                  onClick={()=>navigate(`${item.add}`)}
                  sx={{
                    ...style.button,
                    color: "#3A3B44",
                    display: {
                      xs: index > 3 && flag ? "none" : "block",
                      sm: index > 5 && flag ? "none" : "block",
                      md: "block",
                    },
                  }}
                >
                  {item.name}
                </Button>
              );
            })}
          </Box>
          <Button
            disableElevation
            variant="contained"
            sx={{
              ...style.button,
              color: "white",
              backgroundColor: "#5856e9",
              display: {
                xs: flag ? "block" : "none",
                sm: flag ? "block" : "none",
                md: "none",
              },
              marginTop: "30px",
            }}
            onClick={() => setFlag(false)}
          >
            View All
          </Button>
        </Box>
      </div>
    </BlogServiceWrapper>
  );
}

const BlogServiceWrapper = styled.div`
  .bs-title {
    font-weight: 600;
    font-family: Poppins-semiBold;
    font-size: 32px;

    @media (max-width:600px){
        font-size: 16px;
    }
  }
`;

const style = {
  button: {
    padding: { xs: "7px 16px", md: "16px 21px" },
    borderRadius: "8px",
    border: "1px solid #D1D1D1",
    textTransform: "none",
    fontSize: "14px",
    fontWeight: 600,
    fontFamily: "Montserrat-semiBold",
  },
};
