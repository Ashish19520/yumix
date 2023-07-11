import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export default function PortfolioServices({data,filter,setFilter}:any) {
  const navigate=useNavigate();

  const [flag, setFlag] = useState(true);
  const [num, setNum]= useState<boolean|number>(false);
  const [selectedButton, setSelectedButton] = useState<any>(null);
  const [selectedBottomButton, setSelectedBottomButton] = useState<any>(null);


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
   

    const hiddenElements = document.querySelectorAll(".services-btn");
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  const handleButtonClick = (index:any,val:string) => {
    setSelectedButton(index);
    setNum(index);
    setFilter({
          ...filter,
          first: true,
          firstValue:val
    });
      
  };
  useEffect(()=>{

  },[filter]);

  const handleButtonClickBottom = (index:any,val:string) => {
    setSelectedBottomButton(index);
    setFilter({
        ...filter,
        second: true,
        secondValue:val
  });
  };


  const allHandlar=()=>{
    setSelectedButton(null);
    setSelectedBottomButton(null);
    setNum(false);
    setFilter({
        ...filter,
        first: false,
        second:false,
        firstValue:"",
        secondValue:""

      });
  }

  return (
    <BlogServiceWrapper>
      <div className="services-btn">
        <Box
          style={{ maxWidth: "1200px", padding: "20px", margin: "auto" }}
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
              marginTop: "20px",
              gap: "25px",
            }}
          >
            <Button
                  
                  variant="outlined"
                  onClick={allHandlar}
                  sx={{
                    ...style.button,
                    color: "#3A3B44",
                    
                  }}
                  style={{
                    backgroundColor: num === false ? "#1976d2" : '',
                    color:num === false ? "white" : '',
                  }}
                >
                All
                
                </Button>
            {data?.map((item:any, index:number) => {
              return (
                <Button
                  key={item?.attributes?.name}
                  variant="outlined"
                  onClick={() => handleButtonClick(index,item?.attributes?.name)}
                  style={{
                    backgroundColor: selectedButton === index ? "#1976d2" : '',
                    color:selectedButton === index ? "white" : '',
                  }}
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
                  {item?.attributes?.name.charAt(0).toUpperCase() + item?.attributes?.name.slice(1)}
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
        <Box
          style={{ maxWidth: "1200px", padding: "20px", margin: "auto" }}
        >
          <Box
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "25px",
            }}
          >
          {typeof num==="number"?data?.[typeof num==="number"?num:""]?.attributes?.sub_category?.data.map((item:any, index:number) => {
              return (
                <Button
                  key={item?.attributes?.name}
                  variant="outlined"
                  onClick={() => handleButtonClickBottom(index,item?.attributes?.name)}
                  style={{
                    backgroundColor: selectedBottomButton === index ? "#1976d2" : '',
                    color:selectedBottomButton === index ? "white" : '',
                  }}
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
                  {item?.attributes?.name.charAt(0).toUpperCase() + item?.attributes?.name.slice(1)}
                </Button>
              );
            }):null
        }
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
