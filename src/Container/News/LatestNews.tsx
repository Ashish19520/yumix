import { Button, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NewsCard } from "../../Components/NewsCard";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import {  fetchNews} from "../../actions/posts"
import { useSelector } from "react-redux/es/exports"

//@ts-ignore
import axios from "axios";

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
  const response=useSelector((state:any)=>state?.posts?.fetchNews?.data);
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(()=>{
    dispatch(fetchNews())
  },[]);

  console.log("+++",response);

  const [news, setNews] = useState([]);
  const res: any = [];
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

    const hiddenElements = document.querySelectorAll(".latestnews_hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

 

 

  const handlePage = (pNo: any) => {
    let res: any = [];
    for (let i = pNo * 8; i < pNo * 8 + 8; i++) {
      res.push(data[i]);
    }

    setNews(res);
  };
  return (
    <LatestNewsWrapper>
      <Container maxWidth="lg" className="container ">
        <div className="heading">Latest News</div>
        <div className="cards ">
          {response.map((d:any) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              style={{ padding: "20px 10px" }}
              className="eachCard latestnews_hidden"
            >
              <NewsCard data={d?.attributes} />
            </Grid>
          ))}
        </div>
        <div
          className="pagination"
          style={{ display: "flex", justifyContent: "end" }}
        >
          <GrPrevious />
          {pageNo.map((pNo) => (
            <Button
              onClick={() => handlePage(pNo)}
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
          <GrNext />
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

      @media (max-width: 600px) {
        font-size: 16px;
        text-align: left;
      }
    }
    .cards {
      display: flex;
      flex-wrap: wrap;

      @media (max-width: 600px) {
        flex-direction: column;
      }

      .eachCard {
        width: 25%;
        margin-bottom: 26px;
        padding: 0px;
        @media (max-width: 600px) {
          width: 100%;
          margin-bottom: 2px;
          padding-left: 0px !important;
        }
      }
    }

    .pagination {
      display: flex;
      justify-content: end;
      align-items: center;

      @media (max-width: 600px) {
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
