import { Container } from '@mui/material'
import { fontSize } from '@mui/system'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { fetchNews1 } from '../../actions/posts'
import { useSelector } from 'react-redux/es/exports'

export const HotTopics = () => {
  
  const [data, setData] =useState<any>(null)

  const dispatch: Dispatch<any> = useDispatch()

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated')
          entry.target.classList.add('animate__fadeIn')
        }
        // else {
        //   console.log("exit into zone");
        //   entry.target.classList.remove("animate__fadeIn");
        // }
      })
    })

    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach(el => observer.observe(el))
  }, [])

  useEffect(() => {
    fetch()
  }, [])

  const fetch = async () => {
    const dat: any = await dispatch(fetchNews1())
    let random = Math.floor(Math.random() * 10 + 1)
    setData(dat?.feedItems[random])
  }
  return (
    <HotTopicsWrapper>
      <Container maxWidth='lg' className='container hidden'>
        <img src='./images/Ellipse 63@3x.png' className='img-dot_1'></img>
        <img src='./images/Ellipse 65@3x.png' className='img-dot_2'></img>
        <div className='hero-title'>Hot Topics</div>
        <div className='topicContainer'>
          <div className='img-box'>
            <img
              src={
                (data?.["media:content"]?.[0]?.["$"]?.url) ||
                "../images/Rectangle first.png"
              }
              alt='img'
              width='100%'
              height='500px'
            ></img>
            <div className='img-text'>
              <div className='title'>{data?.title?.[0]}</div>
              <div className='subtitle'>
                <p>{data?.pubDate[0]?.split('T')[0]}.</p>
                {/* <p>{data?.author}</p> */}
              </div>
            </div>
          </div>
          <div className='text-box'>
            <div className='title'>
              {/* {<span style={{fontFamily:"Poppins-semiBold",fontSize:"32px"}}>{newsString.split(" ")[0]}</span>}
              {<span className="text-span" style={{}}>{restOfString}</span>} */}
              <span
                style={{ fontFamily: 'Poppins-semiBold', fontSize: '32px' }}
              >
                {data?.description[0]?.split(' ')[0]}
              </span>

              <span
                style={{
                  fontFamily: 'Montserrat',
                  paddingLeft: '8px',
                  fontSize: '14px'
                }}
              >
                {data?.description[0]?.split(' ').slice(1).join(' ')}
              </span>
              {/* <br></br>
              <span className="read-more" style={{fontFamily:"Montserrat-SemiBold", marginTop:"40px", fontSize:"14px"}}>read more</span> */}
            </div>
            <div className='subtitle'></div>
          </div>
        </div>
      </Container>
    </HotTopicsWrapper>
   
  )
}
const HotTopicsWrapper = styled.div`
  .container {
    margin: auto;
    padding: 90px 0px;
    position: relative;

    .img-dot_1 {
      position: absolute;
      width: 2%;
      top: 10%;
      right: 0%;
    }

    .img-dot_2 {
      position: absolute;
      width: 4%;
      left: -4%;
      top: 45%;
    }
    .hero-title {
      font-family: Poppins-Bold;
      font-size: 36px;
      font-weight: bold;
      text-align: left;
      color: #121221;
      margin-bottom: 26px;
      @media (max-width: 600px) {
        text-align: center;
        font-size: 16px;
        text-align: left;
      }
    }

    .topicContainer {
      display: flex;
      /* align-items: center; */

      @media (max-width: 600px) {
        flex-direction: column;
      }

      .img-box {
        width: 60%;
        position: relative;

        @media (max-width: 600px) {
          width: 100%;
        }

        img {
          width: 100%;
        }
        .img-text {
          position: absolute;
          top: 0;
          color: #f8f8f8;
          .title {
            margin-top: 150px;
            font-family: Poppins-Bold;
            font-size: 32px;
            line-height: 1.5;
            text-align: left;
            width: 80%;
            padding: 16px 25px;

            @media (max-width: 900px) {
              margin-top: 120px;
              font-size: 15px;
            }
            @media (max-width: 600px) {
              margin-bottom: 10%;
              font-size: 12px;
            }
            @media (max-width: 375px) {
              font-size: 10px;
              margin-top: 20%;
            }
          }
          .subtitle {
            display: flex;
            justify-content: start;
            font-family: Montserrat;
            font-size: 12px;
            line-height: 1.5;
            text-align: left;
            color: #f8f8f8;

            p {
              padding-left: 25px;
            }
            @media (max-width: 600px) {
              margin-top: -10%;
            }
            @media (max-width: 300px) {
              font-size: 8px;
              margin-top: -70%;
            }
          }
        }
      }
      .text-box {
        max-width: 40%;
        padding-left: 40px;

        @media (max-width: 600px) {
          max-width: 100%;
          margin-top: 20px;
          padding-left: unset;
          font-size: 14px;
        }

        .title {
          /* font-size: 18px;
          line-height: 1.8;
          font-family: Montserrat;
          letter-spacing: 0.25px;
          text-align: left;
          color: #444; */
          .text-span {
            background-color: aqua;
            padding-right: 40px;
          }
        }
      } 
    }
  }
`
