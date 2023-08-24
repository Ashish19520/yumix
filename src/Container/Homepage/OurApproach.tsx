import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Container, Tooltip, Button } from '@mui/material'
import useStyles from '../FbaCalculator/styles'

export const OurApproach = () => {
  const classes = useStyles()
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Enterin into zone')
          // entry.target.classList.add("show");

          document
            .querySelector('.icons-zoom')
            ?.classList.add('animate__animated')
          document
            .querySelector('.icons-zoom')
            ?.classList.add('animate__backInLeft')
          // document.querySelector(".icons-zoom")?.classList.add("animate__delay-1s");
        } else {
          console.log('exit into zone')
          // entry.target.classList.remove("show");

          document
            .querySelector('.icons-zoom')
            ?.classList.remove('animate__backInLeft')
        }
      })
    })

    const hiddenElements = document.querySelectorAll('.banner')
    hiddenElements.forEach(el => observer.observe(el))
  }, [])

  return (
    <MidBanner>
      <Container maxWidth='lg' className='container'>
        <div className='banner'>
          <h2>Our Approach</h2>
          <div className='icons-zoom'>
            <div className='icons'>
              <div className='singleicon'>
                <img className='ig' id='stl1' src='./images/A2.png'></img>
                <p className='para'>Marketplace Mastery</p>
                <Tooltip
                  title='Unlock the full potential of Amazon and Walmart with our proven expertise. We navigate the intricacies of these platforms, positioning your products for maximum visibility and sales growth.'
                  enterTouchDelay={0}
                  classes={{ arrow: classes.arrow, tooltip: classes.tooltip }}
                  arrow
                >
                  <Button>
                     <img
                      className='icon-info'
                      alt='info'
                      src='./images/roundInfo.png'
                    ></img> 
                  </Button>
                </Tooltip>
              </div>

              <div className='singleicon'>
                <img
                  className='ig'
                  id='stl1'
                  src='./images/A3.png'
                  width='100%'
                ></img>
                <p className='para'>Strategic Product Positioning</p>
                <Tooltip
                  title=' We strategically position your products to stand out in the crowded marketplace, ensuring they catch the eyes of your target audience and outshine the competition.'
                  enterTouchDelay={0}
                  classes={{ arrow: classes.arrow, tooltip: classes.tooltip }}
                  arrow
                >
                  <Button>
                    <img
                      className='icon-info'
                      alt='info'
                      src='./images/roundInfo.png'
                    ></img>
                  </Button>
                </Tooltip>
              </div>

              <div className='singleicon'>
                <img className='ig' id='stl1' src='./images/A1.png' height="10px"></img>
                <p className='para'>Conversion-focused Optimization</p>
                <Tooltip
                  title=' Our team specializes in optimizing product listings to drive conversions. From compelling product descriptions to high-quality images, we create listings that turn browsers into buyers.'
                  enterTouchDelay={0}
                  classes={{ arrow: classes.arrow, tooltip: classes.tooltip }}
                  arrow
                >
                  <Button>
                    <img
                      className='icon-info'
                      alt='info'
                      src='./images/roundInfo.png'
                    ></img>
                  </Button>
                </Tooltip>
              </div>

              <div className='singleicon'>
                <img className='ig' id='stl1' src='./images/A9.png'></img>
                <p className='para'>Data-Driven Insights</p>
                <Tooltip
                  title="Harness the power of data to make informed decisions. We analyse key metrics and consumer behaviour to refine strategies, enhancing your brand's performance on Amazon and Walmart."
                  enterTouchDelay={0}
                  classes={{ arrow: classes.arrow, tooltip: classes.tooltip }}
                  arrow
                >
                  <Button>
                    <img
                      className='icon-info'
                      alt='info'
                      src='./images/roundInfo.png'
                    ></img>
                  </Button>
                </Tooltip>
              </div>

              <div className='singleicon'>
                <img className='ig' id='stl1' src='./images/A10.png'></img>
                <p className='para'>Sustainable Success</p>
                <Tooltip
                  title="We're not just about short-term gains. Our agency focuses on building a sustainable, long-term ecommerce success story for your brand, adapting to trends and evolving marketplace dynamics."
                  enterTouchDelay={0}
                  classes={{ arrow: classes.arrow, tooltip: classes.tooltip }}
                  arrow
                >
                  <Button>
                    <img
                      className='icon-info'
                      alt='info'
                      src='./images/roundInfo.png'
                    ></img>
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </MidBanner>
  )
}

const MidBanner = styled.div`
  background: #fffcfc;
  padding: 10px;

  @media (max-width: 600px) {
    padding: 40px 0px 0px 0px;
  }
  @media (max-width: 350px) {
    padding: 40px 0px 0px 0px;
  }

  .container {
    margin: auto;

    /* .hidden {
      opacity: 0;
      filter: blur(5px);
      transform: translateX(-100%);
      transition: all;
    } */

    @media (prefers-reduced-motion) {
      .hidden {
        transition: none;
      }
    }
    .show {
      opacity: 1;
      filter: blur(0);
      transform: translateX(0%);
      transition: all 3s;
    }

    .banner {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;

      h2 {
        font-family: Poppins-semiBold;
        font-size: 32px;
        font-weight: 600;
        line-height: 1.31;
        letter-spacing: 0.25px;
        color: #3a3b44;
        margin-bottom: 45px;

        @media (max-width: 600px) {
          font-size: 16px;
          text-align: left !important;
        }
      }

      .icons {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 90vw;

        @media (max-width: 900px) {
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 600px) {
          flex-direction: column;
          width: 100vw;
        }
        @media (max-width: 350px) {
          flex-direction: column;
          width: 100vw;
        }
        #stl1 {
          width: 170px;
          @media (max-width: 600px) {
            width: 220px;
          }
          @media (max-width: 350px) {
            width: 150px;
          }
        }
        .singleicon {
          padding: 0px 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
          transition: all 0.2s ease-in-out;
          height: '190px';

          @media (max-width: 600px) {
            flex-direction: row;
            padding-bottom: 40px;
            height: '150px';
            width: '180px';

            &:nth-child(2) {
              transition-delay: 400ms;
              flex-direction: row-reverse;
            }
            &:nth-child(3) {
              transition-delay: 800ms;
            }
            &:nth-child(4) {
              transition-delay: 200ms;
              flex-direction: row-reverse;
            }
            &:nth-child(5) {
              transition-delay: 500ms;
            }
          }

          &:nth-child(2) {
            transition-delay: 400ms;
          }
          &:nth-child(3) {
            transition-delay: 800ms;
          }
          &:nth-child(4) {
            transition-delay: 200ms;
          }
          &:nth-child(5) {
            transition-delay: 500ms;
          }

          &:last-of-type {
            margin-right: unset;
          }

          &:hover {
            transform: scale(1.1);
          }

          img {
            width: 150px;
            height: 150px;
            margin-bottom: 20px;
            @media (max-width: 600px) {
              padding: 0px 20px;
              width: 185px;
              height: 150px;
            }
            /* width:100%; */
          }

          ig {
            // width: 151px;
            // height: 118px;
          }
          .para {
            color: #383838;
            text-align: center;
            font-family: Montserrat;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 24px; /* 150% */
            letter-spacing: 0.25px;
          }
          .icon-info {
            width: 24px;
            height: 24px;
            flex-shrink: 0;
            cursor: pointer;
            z-index:77;
          }

          p {
            font-family: Montserrat;
            font-size: 16px;
            max-width: 65%;
            line-height: 1.5;
            letter-spacing: 0.25px;
            text-align: center;
            color: #383838;

            @media (max-width: 600px) {
              font-size: 16px;
              margin-bottom: 20px;
              padding: 0px 20px;
            }
          }

          .para {
            width: 60%;
          }
        }
      }
    }
  }
`
