import { Button, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NewsCard } from "../../Components/NewsCard";
import { GrNext, GrPrevious } from "react-icons/gr";
import { getNews } from "../../api/services";
import { useNavigate } from "react-router-dom";
import NewsContent from "./NewsContent";



export const LatestNews = () => {
 const [response,setResponse] =useState<Array<{}>>([]);;
 const [pageNO, setPageNO] = useState(1);
 const navigate=useNavigate();

  useEffect(()=>{
   fetch();
   window.scrollTo(0, 1350.2857666015625);
  },[pageNO]);



  const fetch=async ()=>{
    const news=await getNews(pageNO,20);
    setResponse(news?.articles)
  }
  
  const showContent = ()=>{
    navigate('/newsContent');
  }

  

  const [pageNo,setPageNo] = useState([1, 2, 3, 4, 5]);

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

 const handleNext = () => {
  if(pageNO>20) return;
  setPageNO(pageNO+1);
 };
 const handlePrevious = () => {
  if(pageNO===1) return;
  setPageNO(pageNO-1);
 }
  const handlePage = (pNo: any) => {
    setPageNO(pNo);
  };
  return (
    <LatestNewsWrapper>
      <Container maxWidth="lg" className="container ">
        <div className="heading">Latest News</div>
        <div className="cards ">
          {response?.length>0&&response?.map((d:any) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              style={{ padding: "20px 10px" }}
              className="eachCard latestnews_hidden"
            >
              <NewsCard data={d} />
             
            </Grid>
          
          ))}
        </div>
        <div
          className="pagination"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <GrPrevious onClick={handlePrevious}/>
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
          <GrNext onClick={handleNext} />
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
