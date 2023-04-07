import { Container } from '@mui/system';
import React from 'react';
import styled from "styled-components";

export default function BlogService() {
  return (
    <Banner>
        <Container maxWidth="lg" className="container">
            <div className="service">
                <h1 className='serviceHeading'>Service We Provide</h1>
                <div className="service1">
                    <div>
                        <button>Affiliate & Influencer</button>
                    </div>
                    <div>
                        <button>Amazon</button>
                    </div>
                    <div>
                        <button>Analytics</button>
                    </div>
                    <div>
                        <button>B2C</button>
                    </div>
                    <div>
                        <button>Eservz News & People</button>
                    </div>
                </div>

                <div className="service2">
                    <div>
                        <button>Marketing & Retail Media</button>
                    </div>
                    <div>
                        <button>Paid Search</button>
                    </div>
                    <div>
                        <button>Partnerships</button>
                    </div>
                    <div>
                        <button>Premium Content</button>
                    </div>
                    <div>
                        <button>Seo</button>
                    </div>
                </div>

                <div className="service3">
                    <div>
                        <button>Web & Mobile </button>
                    </div>
                </div>   
            </div>

        </Container>
    </Banner>
  )
}
const Banner = styled.div `
    .container{
        width:100%;
        .service{
            margin-top:60px;
            .serviceHeading{
                margin-left:30px;
            }
            button{
                align-items: center;
                gap: 10px;
                padding: 16px 32px;
                border-radius: 8px;
                border: solid 1px #d1d1d1;
                margin-left:30px;
                margin-top:10px;font-family: Montserrat;
                font-size: 14px;
                font-weight: 600;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.43;
                letter-spacing: 1px;
                text-align: center;
                color: #3a3b44;
              
            }
            .serviceHeading{
                font-family: Poppins;
                font-size: 32px;
                font-weight: 600;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.31;
                letter-spacing: 0.25px;
                text-align: left;
                color: #0b0720;
            }
            .service1{
                width:100%;
                display:flex;
            }
            .service2{
                display:flex;
            }
        }
        
    }
`
