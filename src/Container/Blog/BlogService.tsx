import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import styled from "styled-components";


export default function BlogService() {
  const services = [
    "Affiliate & Influencer",
    "Amazon",
    "Analytics",
    "B2C",
    "Eservz News & People",
    "Marketing & Retail Media",
    "Paid Search",
    "Partnerships",
    "Premium Content",
    "SEO",
    "Web & Mobile Development",
  ];

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
                  key={item}
                  variant="outlined"
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
                  {item}
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
