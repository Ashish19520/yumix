import React from 'react'

const Team = () => {
    const data=[{
        src:"../images/USA.png",
        head:"Account Managers",
        para:"Account Managers are the primary points of contact between the team and the brands or retailers they work with. They handle client relationships, address inquiries, provide updates, and ensure effective communication throughout the partnership."

    },
    {
        src:"../images/USA.png",
        head:"Account Managers",
        para:"Account Managers are the primary points of contact between the team and the brands or retailers they work with. They handle client relationships, address inquiries, provide updates, and ensure effective communication throughout the partnership."

    },
    {
        src:"../images/USA.png",
        head:"Account Managers",
        para:"Account Managers are the primary points of contact between the team and the brands or retailers they work with. They handle client relationships, address inquiries, provide updates, and ensure effective communication throughout the partnership."

    },
    {
        src:"../images/USA.png",
        head:"Account Managers",
        para:"Account Managers are the primary points of contact between the team and the brands or retailers they work with. They handle client relationships, address inquiries, provide updates, and ensure effective communication throughout the partnership."

    },
    {
        src:"../images/USA.png",
        head:"Account Managers",
        para:"Account Managers are the primary points of contact between the team and the brands or retailers they work with. They handle client relationships, address inquiries, provide updates, and ensure effective communication throughout the partnership."

    },
    {
        src:"../images/USA.png",
        head:"Account Managers",
        para:"Account Managers are the primary points of contact between the team and the brands or retailers they work with. They handle client relationships, address inquiries, provide updates, and ensure effective communication throughout the partnership."

    }
]
  return (
    <div className='team'>
        <div className='content-team'>
      <h1 className='fba-hero-right-heading'>Our Team</h1>
      <p className='fba-hero-right-para'>Our team consists of various experts and professionals having years of experience and who possess a deep understanding of e-commerce operations, trends, and strategies. They can provide valuable insights and guidance on overall e-commerce strategies, marketplace optimization, and industry best practices</p>
      </div>

        {data.map((item,index)=>(

        <div className="team-box" key={index}>
            <img src={item.src} height="70px" width="70px" alt="img"></img>
            <h4 className='content-heading'>{item.head}</h4>
            <p className='fba-hero-right-para'>{item.para}</p>
        </div>
        ))}
        
    </div>
  )
}

export default Team
