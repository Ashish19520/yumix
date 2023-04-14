import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

export const Card = (props: any) => {
  return (
    <Crd>
      <div className="stars">
        <AiFillStar color="#f19e38" size={20} />
        <AiFillStar color="#f19e38d1" size={20} />
        <AiFillStar color="#f19e387b" size={20} />
        <AiFillStar color="#f19e384b" size={20} />
        <AiFillStar color="#f19e382f" size={20} />
      </div>
      <div className="info">{props.title}</div>
      <div className="userInfo">
        <div className="left">
          <img src={props.images}></img>
        </div>
        <div className="right">
          <div className="title">{props.name}</div>
          <div className="subTitle">{props.designation}</div>
        </div>
      </div>
    </Crd>
  );
};

const Crd = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 21.6px;
  /* tochange */
  margin: 0 14.4px 0 0;
  padding: 28.8px;
  box-shadow: 0 3.6px 7.2px 0 rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 3.6px 7.2px 0 rgba(0, 0, 0, 0.15);
  }
  background-color: #fff;

  .stars {
  }

  .info {
    font-family: Montserrat;
    align-self: stretch;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: 0.1px;
    text-align: left;
    color: #3a3b44;

    @media (max-width: 600px) {
      font-size: 12px;
    }
  }

  .userInfo {
    display: flex;

    .right {
      display: flex;
      flex-direction: column;
      padding-left: 10px;

      .title {
        font-family: Poppins-semiBold;
        font-size: 14px;
        font-weight: 600;
        line-height: 1.5;
        text-align: left;
        color: #3a3b44;

        @media (max-width: 600px) {
          font-size: 12px;
        }
      }

      .subTitle {
        font-family: Montserrat;
        font-size: 12px;
        line-height: 1.5;
        text-align: left;
        color: #3a3b44;

        @media (max-width: 600px) {
          font-size: 10px;
        }
      }
    }
  }
`;
