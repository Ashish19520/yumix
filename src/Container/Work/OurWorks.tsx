import { Container ,Pagination,Grid,Box,Typography} from "@mui/material";
import React, { useEffect,useState} from "react";
import styled from "styled-components";
import { Banner } from "../../Components/Banner";
import { motion } from "framer-motion";
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchWorks,fetchCategories } from "../../actions/posts";
import { useSelector } from "react-redux/es/exports"
import { useNavigate } from "react-router-dom";
import BlogService from "../Blog/BlogService";
import PortfolioServices from "./PortfolioServices";

export const OurWorks = () => {
  const [pageNO, setPageNO] = useState(()=>{
    const storedValue = localStorage.getItem('workCounter');
    return storedValue ? parseInt(storedValue) : 1;
   });

  const handlePage = (e:any,no:any) => {
    window.scrollTo(0, 150.2857666015625);
    localStorage.setItem('workCounter',no);
    setPageNO(no);
  };

  const navigate=useNavigate();
  const dispatch: Dispatch<any> = useDispatch()
  const [data, setData] =useState<any>(null)
  const [category, setCategory] =useState<any>(null)
  const [filter, setFilter] = useState<any>({
    first:false,
    second:false,
    firstValue:"",
    secondValue:""
  })
  const {first,second,firstValue,secondValue}=filter;
  
  useEffect(() => {
    fetch()
  }, [filter])
  
    
  
const fetch = async () => {
  const dat: any = await dispatch(fetchWorks(first,second,firstValue,secondValue));
  const res: any = await dispatch(fetchCategories())
  setData(dat.data);
  setCategory(res.data);
}


const itemsPerPage = 9;
  const totalPages = Math.ceil(data?.length / itemsPerPage);
  const startIndex = (pageNO - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data?.slice(startIndex, endIndex);
  

  const typingContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };
  const typingText = {
    hidden: { opacity: 0, y: "-20px" },
    show: {
      opacity: 1,
      y: "0",
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const elements = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.4,
        ease: "easeInOut",
      },
    },
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {

          entry.target.classList.add("animate__animated");
          entry.target.classList.add("animate__fadeIn");
        }
        // else {
        //   console.log("exit into zone");
        //   entry.target.classList.remove("animate__fadeIn");
        // }
      });
    });

    const hiddenElements = document.querySelectorAll(".bannerhidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <WorkWrapper>
      <Container maxWidth="lg" className="container">
        <motion.img src="./images/Group 38636@3x.png" variants={elements}  initial="hidden" animate="show" className="img-line-bg"></motion.img>
        <motion.img src="./images/Group 38637@3x.png" variants={elements}  initial="hidden" animate="show" className="img-line-bg_2"></motion.img>
        <motion.img src="./images/Round Cube2@3x.png" variants={elements}  initial="hidden" animate="show" className="img-cube_1"></motion.img>
        <motion.img src="./images/Ellipse 63@3x.png" variants={elements}  initial="hidden" animate="show" className="img-dot_1"></motion.img>
        <motion.div
          variants={typingContainer}
          initial="hidden"
          animate="show"
          className="title"
        >
          {Array.from("Our Portfolio").map((word, i) => (
            <motion.span key={i} variants={typingText}>
              {word}
            </motion.span>
          ))}
        </motion.div>

        <PortfolioServices data={category} setFilter={setFilter} filter={filter}/>


        <div className="services-list-imgs">
        <Grid
          container
          style={{ maxWidth: "1200px", padding: "80px 20px", margin: "auto" }}
        >

          {currentItems?.length?currentItems&&currentItems?.map((item:any,index:number) => {
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
                    backgroundImage: `url(${item?.attributes?.imgPath})`,
                    width: "100%",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "12px",
                    height: "200px",
                  }}
                />
                <Typography className="item-type" 
                style={{cursor:"pointer"}}
                onClick={()=>navigate(`/works/${item?.id}`)}
                >
                  {item?.attributes?.title.substring(0, 44)}
                  </Typography>
                  <Typography className="item-type"
                  style={{fontWeight:"700"}}>
          
                  {item?.attributes?.Category.toUpperCase()}  
                  </Typography>
                
              </Grid>
            );
          }):<div style={{margin:"0 auto"}}>
          <h1>Sorry,no items match to your search</h1>
        </div>
        }
        </Grid>
      </div>
        {/* {currentItems&&currentItems?.map((arr:any, i:number) =>(
           <div>
           {i % 2 === 0 ? ( // Check if the index is even
             <motion.div variants={elements} initial="hidden" animate="show" className="BannerCloth bannerhidden index">
               <Banner data={arr.attributes} id={arr.id} direction={"regular"} />
             </motion.div>
           ) : ( // If the index is odd
             <div className="BannerGrocery bannerhidden">
               <Banner data={arr.attributes} id={arr.id} direction={"reverse"} />
             </div>
           )}
         </div>
        ))} */}

               <div
        className="pagination"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Pagination
         count={totalPages}
         defaultPage={pageNO}
          onChange={(event, pageNumber) => handlePage(event, pageNumber)}
          color="primary" />
      </div>
      </Container>
  
    </WorkWrapper>
  );
};

const WorkWrapper = styled.div`
  .container {
    margin: auto;
    position: relative;
    .img-cube_1 {
      width: 20%;
      position: absolute;
      right: 10%;
      top: 1%;
      z-index:1;

      @media (max-width: 900px) {
        display: none;
      }
      @media (max-width: 600px) {
        display: block;
        top: 5%;
      }
    }

    .img-line-bg {
      width: 80%;
      position: absolute;
      top: 0;
      left: 20%;

      @media (max-width: 900px) {
        display: none;
      }
      @media (max-width: 600px) {
        display: block;
        top: unset;
        bottom: 0%;
        left: 0%;
      }
    }

    .img-line-bg_2 {
      width: 54%;
      position: absolute;
      top: 0%;
      left: 4%;
      z-index: 0;

      @media (max-width: 900px) {
        display: none;
      }
      @media (max-width: 600px) {
        display: block;
        left: 23%;
        top: 1%;
      }
    }

    .img-dot_1 {
      position: absolute;
      width: 2%;
      top: 50%;
      right: 0%;
    }

    .title {
      font-family: Poppins-Bold;
      font-size: 120px;
      line-height: 1.5;
      letter-spacing: -0.5px;
      text-align: left;
      color: #303030;
      margin-bottom: 40px;
      margin-top: 40px;
      position: relative;
      z-index: 1 !important;

      @media (max-width: 600px) {
        /* width:100%; */
        text-align: center;
        font-size: 48px;
        margin: 40px 20px;
      }
    }

    .BannerCloth {
      margin-bottom: 50px;

      @media (max-width: 600px) {
        margin-bottom: 100px;
      }
    }
    .BannerGrocery {
      margin-bottom: 50px;

      @media (max-width: 600px) {
        margin-bottom: 100px;
      }
    }
  }
`;
