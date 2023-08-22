import { type } from 'os';
import React from 'react'

const AboutBottomBanner = ({data}:any) => {
  return (
    <div className='content-content' style={{width:"80vw",margin:"0 auto",textAlign:"center"}}> 
      <h1 className='strategy-heading' >{data?.heading}</h1>
      <p className='select-font'> {data?.para}</p>
      <p className='select-font'> {data?.para2}</p>
      <p className='select-font'> {data?.para3}</p>
    </div>
  )
}

export default AboutBottomBanner
