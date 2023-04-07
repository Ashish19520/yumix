import { Container } from '@mui/system';
import React from 'react';
import styled from "styled-components";

export default function ServiceList() {
  return (
    <Banner>
        <Container maxWidth="lg" className="container">
            <div className="serviceList1">
                <div>
                    <img src='/images/Rectangle 1223.png' style={{width:"80%"}} />
                    <p className='tips'>Tips</p>
                    <h1 className='headingTips'>How TO Gear Forward in 2023</h1>
                </div>
                <div>
                    <img src='/images/Rectangle 1223.png' style={{width:"80%"}} />
                    <p className='tips'>Tips</p>
                    <h1 className='headingTips'>How TO Gear Forward in 2023</h1>
                </div>
                <div>
                    <img src='/images/Rectangle 1223.png' style={{width:"80%"}} />
                    <p className='tips'>Tips</p>
                    <h1 className='headingTips'>How TO Gear Forward in 2023</h1>
                </div>
            </div>
            <div className="serviceList2">
                <div>
                    <img src='/images/Rectangle 1223.png' style={{width:"80%"}} />
                    <p className='tips'>Tips</p>
                    <h1 className='headingTips'>How TO Gear Forward in 2023</h1>
                </div>
                <div>
                    <img src='/images/Rectangle 1223.png' style={{width:"80%"}} />
                    <p className='tips'>Tips</p>
                    <h1 className='headingTips'>How TO Gear Forward in 2023</h1>
                </div>
                <div>
                    <img src='/images/Rectangle 1223.png' style={{width:"80%"}} />
                    <p className='tips'>Tips</p>
                    <h1 className='headingTips'>How TO Gear Forward in 2023</h1>
                </div>
            </div>
            <div className="serviceList3">
                <div>
                    <img src='/images/Rectangle 1223.png' style={{width:"80%"}} />
                    <p className='tips'>Tips</p>
                    <h1 className='headingTips'>How TO Gear Forward in 2023</h1>
                </div>
                <div>
                    <img src='/images/Rectangle 1223.png' style={{width:"80%"}} />
                    <p className='tips'>Tips</p>
                    <h1 className='headingTips'>How TO Gear Forward in 2023</h1>
                </div>
                <div>
                    <img src='/images/Rectangle 1223.png' style={{width:"80%"}} />
                    <p className='tips'>Tips</p>
                    <h1 className='headingTips'>How TO Gear Forward in 2023</h1>
                </div>
            </div>
        </Container>
    </Banner>
  )
}

const Banner=styled.div`
    .container{
        width:100%;
        .serviceList1{
            margin-top:120px;
            margin-left:30px;
            display:flex;
            .tips{
                font-family: Montserrat;
                font-size: 10px;
                font-weight: 600;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.43;
                letter-spacing: 0.1px;
                text-align: left;
                color: #40424c;
            }
            .headingTips{
                font-family: Montserrat;
                font-size: 14px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.22;
                letter-spacing: 0.25px;
                text-align: left;
                color: #40424c;
                margin-top:5px
            }
        }
        .serviceList2{
            margin-top:20px;
            display:flex;
            margin-left:30px;
            .tips{
                font-family: Montserrat;
                font-size: 10px;
                font-weight: 600;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.43;
                letter-spacing: 0.1px;
                text-align: left;
                color: #40424c;
            }
            .headingTips{
                font-family: Montserrat;
                font-size: 14px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.22;
                letter-spacing: 0.25px;
                text-align: left;
                color: #40424c;
                margin-top:5px
            }
        }.serviceList3{
            margin-top:20px;
            display:flex;
            margin-left:30px;
            .tips{
                font-family: Montserrat;
                font-size: 10px;
                font-weight: 600;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.43;
                letter-spacing: 0.1px;
                text-align: left;
                color: #40424c;
            }
            .headingTips{
                font-family: Montserrat;
                font-size: 14px;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.22;
                letter-spacing: 0.25px;
                text-align: left;
                color: #40424c;
                margin-top:5px
            }
        }
    }
`
