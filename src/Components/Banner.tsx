import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";

export const Banner = (props: any) => {
  return (
    <BannerWrapper direction={props.direction}>
      <div className={`clothing-Banner`}>
        <div className="cb-left-box">
          <div className="title">{props.data.title}</div>
          <p className="subTitle">{props.data.subTitle}</p>
          <button className="btn">{props.data.btnText}</button>
        </div>
        <div className="cb-right-box">
          <img src={props.data.imgPath}></img>
        </div>
      </div>
    </BannerWrapper>
  );
};

type WrapperProps = {
  direction?: string;
};

const BannerWrapper = styled(Grid)<WrapperProps>`
 

  .clothing-Banner {
    display: flex;
    flex-direction: ${(props: WrapperProps) =>
      props.direction === "regular" ? "row" : "row-reverse"};
    align-items: center;
    justify-content: center;

    @media (max-width:600px){
        flex-direction:column-reverse;

}

    .cb-left-box {
      width: 45%;

      @media (max-width:600px){
      width:100%;
      text-align:center;
      padding: ${(props: WrapperProps) =>
      props.direction === "regular" ? "0px" : "0px"};
      
}
    

    padding: ${(props: WrapperProps) =>
      props.direction === "regular" ? "0px 30px 0px 0px" : "0px 0px 0px 80px"};
      .title {
        font-size: 32px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.31;
        letter-spacing: 0.25px;
        text-align: left;
        color: #3a3b44;
        margin-bottom:24px;

        @media (max-width:600px){
      width:100%;
      text-align:center;
      
}

      }
      .subTitle {
        font-size: 16px;
        line-height: 1.5;
        letter-spacing: 0.25px;
        text-align: left;
        color: #828490;
        margin-bottom:24px;
        
        @media (max-width:600px){
      width:100%;
      text-align:center;
      
}
        
      }
      .btn {
        padding: 12px 24px;
        border-radius: 8px;
        background-color: #5956e9;
        border: 0px;
        color: #fffcfc;
      }
    }

    .cb-right-box {
      width: 55%;
      img {
        width: 100%;
      }
    }
  }
`;
