import { Box, Grid, Typography,Button } from "@mui/material";
import { useEffect } from "react";
import styled from "styled-components";
import { GrNext, GrPrevious } from "react-icons/gr";
import {Link,useNavigate} from "react-router-dom";


export default function DigitalMap() {
  const navigate=useNavigate();
  const blogs = [
    {
      name: "Paid Search Marketing Services",
      type: "Maximize results and your budget with a unique, granular approach to delivering the most relevant experience to your customers.",
      image: "../images/laptop.png",
      open:"view more",
      add:"/digitalMedia/paidSearch"
    },
    {
      name: "Amazon Ads Services",
      type: "Enhance customer interaction on Amazon to exponentially increase your sales, spanning from creating awareness to driving purchases.",
      image: "../images/Background.png",
      open:"view more",
      add:"/digitalMedia/amazon"
    },
    {
      name: "Marketplace Listing Services",
      type: "Shape the journey of potential customers across the marketplace to elevate your chances of success and boost your revenue. ",
      image: "../images/Image.png",
      open:"view more",
      add:"/digitalMedia/marketPlace"
    },
    {
      name: "SEO Marketing Services",
      type: "Drive brand discovery, enhance website engagement, and optimize conversions with our comprehensive cross-functional approach...",
      image: "../images/image3.png",
      open:"view more",
      add:"/digitalMedia/seoMarketing"
    },
    {
      name: "Affiliate Advertising",
      type: "Set performance-based guidelines with advertising affiliates to pay for results that directly impact your bottom line.",
      image: "../images/Image2.png",
      open:"view more",
      add:"/digitalMedia/affilateAdvertising"
    },
    {
      name: "Social Media Management",
      type: "Grow your brand on the largest digital marketing stage with our audience-first approach, capturing attention and driving conversions across top...",
      image: "../images/Image4.png",
      open:"view more",
      add:"/digitalMedia/socialMediaManagement"
    },
    {
      name: "Email Marketing",
      type: "Foster brand engagement and optimize ROI by delivering tailored messages at the most opportune moments.",
      image: "../images/Image5.png",
      open:"view more",
      add:"/digitalMedia/emailMarketing"
    },
    {
      name: " Automated Advertising",
      type: "Engage customers at every stage of the funnel with personalized automated advertising strategies, reaching them wherever they are.",
      image: "../images/Image6.png",
      open:"view more",
      add:"/digitalMedia/automatedAdvertising"
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
                <Typography 
                className="item-type hov" 
                  onClick={()=>navigate(`${item.add}`)}
                >{item.open}</Typography>
                
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
