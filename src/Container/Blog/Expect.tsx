import React from 'react'

const Expect = ({data}:any) => {
   
  return (
    <div style={{textAlign:"center"}}>
         <h1 style={{fontWeight:700}}>What to expect</h1>

         <div className='team' >
        {data.map((item:any,index:number)=>(

        <div className="team-box-expert" key={index}>
            <img src={item.src} height="70px" width="70px" alt="img"></img>
            <h4 className='content-heading justify' style={{color:"#6854FC"}}>{item.head}</h4>
            <p className='fba-hero-right-para justify'>{item.para}</p>
        </div>
        ))}
        
    </div>
    </div>
  )
}

export default Expect
