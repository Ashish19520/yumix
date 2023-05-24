import { Box, Grid, Typography,Button ,Pagination} from "@mui/material";
import { useEffect,useState } from "react";
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchBlogs } from "../../actions/posts";
import { useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";


export default function ServiceList() {
  const [pageNO, setPageNO] = useState(1);
  const response=useSelector((state:any)=>state?.posts?.fetchBlogs?.response?.data);
  const navigate=useNavigate();
  
  const dispatch: Dispatch<any> = useDispatch();
  
  useEffect(()=>{
    dispatch(fetchBlogs());
  },[]);

  const handlePage = (e:any,no:any) => {
    setPageNO(no);
  };
  const itemsPerPage = 6;
  const totalPages = Math.ceil(response?.length / itemsPerPage);
  const startIndex = (pageNO - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = response?.slice(startIndex, endIndex);
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

  const showDetails=(item:any,index:any)=>{
    localStorage.setItem('blogData', JSON.stringify(response[index]));
    navigate(`/blogs/${index}`);
    }
  return (
    <ServiceListWrapper>
      <div className="services-list-imgs">
        <Grid
          container
          style={{ maxWidth: "1200px", padding: "80px 20px", margin: "auto" }}
        >
          {currentItems?.map((item:any,index:any) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={item.id}
                style={{ padding: "20px 10px" }}
              >
                <Box
                  style={{
                    backgroundImage: `url(${item?.['media:content'][1].$.url
                    })`,
                    width: "100%",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "12px",
                    height: "200px",
                  }}
                />
                <Typography className="item-type" 
              style={{cursor:"pointer"}}
                onClick={()=>showDetails(item.id,index)}>{item.title[0]}</Typography>
                <Typography
                  style={{
                    fontSize: "16px",
                    fontFamily: "Montserrat-SemiBold",
                    color: "#40424C",
                  }}
                >
                 
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </div>

      <div
        className="pagination"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Pagination count={totalPages}
          onChange={(event, pageNumber) => handlePage(event, pageNumber)}
          color="primary" />
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
