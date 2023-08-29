import React from 'react'

const Team = ({data,content}:any) => {
    
  return (
    <div>
    <div className='content-team'>
      <h1 className='fba-hero-right-heading'>{content?.heading}</h1>
      <p className='fba-hero-right-para'>{content?.para}</p>
      <p className='fba-hero-right-para'>{content?.para2}</p>
      </div>
    <div className='team'>
        

        {data.map((item:any,index:number)=>(

        <div className="team-box" key={index}>
            <img src={item.src} height="70px" width="70px" alt="img"></img>
            <h4 className='content-heading'>{item.head}</h4>
            <p className='team-content-para justify'>{item.para}</p>
        </div>
        ))}
        
    </div>
    </div>
  )
}

export default Team
