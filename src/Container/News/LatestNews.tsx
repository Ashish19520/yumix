import { Container } from "@mui/material";
import React, { useEffect } from "react";
import styled from "styled-components";
import { NewsCard } from "../../Components/NewsCard";

const data = [
  {
    newsTitle: "Random news title yo show dummy",
    imgsrc: "./images/Rectangle 6@3x.png",
    time: "1 Hour Ago",
    source: "CNN Indonesia",
  },
  {
    newsTitle: "Random news title yo show dummy",
    imgsrc: "./images/Rectangle 6@3x.png",
    time: "1 Hour Ago",
    source: "CNN Indonesia",
  },
  {
    newsTitle: "Random news title yo show dummy",
    imgsrc: "./images/Rectangle 6@3x.png",
    time: "1 Hour Ago",
    source: "CNN Indonesia",
  },
  {
    newsTitle: "Random news title yo show dummy",
    imgsrc: "./images/Rectangle 6@3x.png",
    time: "1 Hour Ago",
    source: "CNN Indonesia",
  },
  {
    newsTitle: "Random news title yo show dummy",
    imgsrc: "./images/Rectangle 6@3x.png",
    time: "1 Hour Ago",
    source: "CNN Indonesia",
  },
  {
    newsTitle: "Random news title yo show dummy",
    imgsrc: "./images/Rectangle 6@3x.png",
    time: "1 Hour Ago",
    source: "CNN Indonesia",
  },
  {
    newsTitle: "Random news title yo show dummy",
    imgsrc: "./images/Rectangle 6@3x.png",
    time: "1 Hour Ago",
    source: "CNN Indonesia",
  },
  {
    newsTitle: "Random news title yo show dummy",
    imgsrc: "./images/Rectangle 6@3x.png",
    time: "1 Hour Ago",
    source: "CNN Indonesia",
  },
];

export const LatestNews = () => {

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

    const hiddenElements = document.querySelectorAll(".latestnews_hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);
  return (
    <LatestNewsWrapper>
      <Container maxWidth="lg" className="container ">
        <div className="heading">Latest News</div>
        <div className="cards ">
          {data.map((d) => (
            <div className="eachCard latestnews_hidden">
              <NewsCard data={d} />
            </div>
          ))}
        </div>
      </Container>
    </LatestNewsWrapper>
  );
};

const LatestNewsWrapper = styled.div`
      padding: 90px 0px;
  .container {
    margin: auto;
    padding: 0px 0px;
    .heading {
      font-family: Poppins-semiBold;
      font-size: 32px;
      font-weight: 600;
      line-height: 1.31;
      letter-spacing: 0.25px;
      text-align: left;
      color: #121221;
      margin-bottom: 20px;
    }
    .cards {
      display: flex;
      flex-wrap: wrap;

      .eachCard {
        width: 25%;
        margin-bottom: 26px;
        padding:10px;
      }
    }
  }
`;
