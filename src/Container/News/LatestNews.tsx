import { Button, Container, Grid ,Pagination} from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NewsCard } from "../../Components/NewsCard";
import { getNews } from "../../api/services";
import { useNavigate } from "react-router-dom";
import NewsContent from "./NewsContent";
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchNews } from "../../actions/posts";
import { useSelector } from "react-redux/es/exports";



export const LatestNews = () => {
//  const [response,setResponse] =useState<Array<{}>>([]);;
 const [pageNO, setPageNO] = useState(1);
 const navigate=useNavigate();
 const response=useSelector((state:any)=>state?.posts?.fetchNews?.feedItems);
 const dispatch: Dispatch<any> = useDispatch();
 console.log("+++++++",response);

  useEffect(()=>{
  //  fetch();
   dispatch(fetchNews());
   let random = Math.floor((Math.random() * 16) + 1);
   localStorage.setItem('hotTopic', JSON.stringify(response[random||4]));
   window.scrollTo(0, 1350.2857666015625);
  },[pageNO]);



  // const fetch=async ()=>{
  //   let date=new Date();
  //   let currentDate=JSON.stringify(date).split("T")[0]
  //   const news=await getNews(pageNO,16,currentDate);
  //   setResponse(news?.articles);
  //   let random = Math.floor((Math.random() * 16) + 1);
  //   localStorage.setItem('hotTopic', JSON.stringify(news.articles[random||4]));
  // }
  
 
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

 
 
  const handlePage = (e:any,no:any) => {
    setPageNO(no);
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
         
          {/* <Pagination count={6}
          onChange={(event, pageNumber) => handlePage(event, pageNumber)}
          color="primary" /> */}

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
