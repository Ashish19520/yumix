import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Card } from "../../Components/Card";

const data = [
  {
    stars: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    name: "Jerome Bell",
    designation: "Marketing Coordinator",
    images: "./images/Avatar Image.png",
  },
  {
    stars: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    name: "Cody Fisher",
    designation: "President of Sales",
    images: "./images/Avatar Image.png",
  },
  {
    stars: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    name: "Robert Fox",
    designation: "Web Designer",
    images: "./images/Avatar Image.png",
  },
];

export const People = () => {
  return (
    <Users>
      <Container maxWidth="lg" className="container">
        <div className="aboutus">
          <div className="info">
            <div className="title">What people say about us</div>
            <div className="subTitle">See what people say about us</div>
          </div>
          <div className="cards">
            {data.map((d) => (
              <Card
                title={d.title}
                stars={d.stars}
                images={d.images}
                name={d.name}
                designation={d.designation}
              />
            ))}
          </div>
        </div>
      </Container>
    </Users>
  );
};

const Users = styled.div`
  background: #fffcfc;
  padding: 75px 0px;
  .container {
    margin: auto;

    .aboutus {
      .info {
        text-align: left;

        @media (max-width: 600px) {
            text-align: center;
        }
        .title {
          font-size: 32px;
          font-weight: 600;
          line-height: 1.31;
          letter-spacing: 0.25px;
          color: #3a3b44;
          margin-bottom: 16px;
        }
        .subTitle {
          font-size: 16px;
          line-height: 1.5;
          letter-spacing: 0.25px;
          color: #3a3b44;
          margin-bottom: 64px;
        }
      }

      .cards {
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 600px) {
          width: 100%;
          flex-direction: column;
          margin-bottom: 20px;
        }
      }
    }
  }
`;
