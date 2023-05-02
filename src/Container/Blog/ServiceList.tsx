import { Box, Grid, Typography,Button } from "@mui/material";
import { useEffect } from "react";
import styled from "styled-components";
import { GrNext, GrPrevious } from "react-icons/gr";


export default function ServiceList() {
  const blogs = [
    {
      name: "How To Gear Forward in 2023",
      type: "Tips",
      image: "./images/Image@3x.png",
    },
    {
      name: "Digital commerce is changing rapidly",
      type: "Blog",
      image: "./images/Img1.png",
    },
    {
      name: "How to deal with SVB collapse",
      type: "Blog",
      image: "./images/Image@3x.png",
    },
    {
      name: "Inspiration to build your online store",
      type: "Inspiration",
      image: "./images/Img1.png",
    },
    {
      name: "How To Gear Forward in 2023",
      type: "Tips",
      image: "./images/Image@3x.png",
    },
    {
      name: "Digital commerce is changing rapidly",
      type: "Blog",
      image: "./images/Img1.png",
    },
    {
      name: "How to deal with SVB collapse",
      type: "Blog",
      image: "./images/Image@3x.png",
    },
    {
      name: "Inspiration to build your online store",
      type: "Inspiration",
      image: "./images/Img1.png",
    },
    {
      name: "How To Gear Forward in 2023",
      type: "Tips",
      image: "./images/Image@3x.png",
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
                <Typography className="item-type">{item.type}</Typography>
                <Typography
                  style={{
                    fontSize: "16px",
                    fontFamily: "Montserrat-SemiBold",
                    color: "#40424C",
                  }}
                >
                  {item.name}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </div>

      <div
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
      </div>
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
