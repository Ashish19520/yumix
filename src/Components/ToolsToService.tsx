import React from 'react'
import { Container, Typography } from '@mui/material'
import useStyles from './styles'
const ToolsToService = () => {
  const classes = useStyles()
  const data=[
    {img:"../images/one1.png"},
    {img:"../images/two2.png"},
    {img:"../images/three3.png"},
    {img:"../images/four4.png"},
    {img:"../images/five5.png"},
    {img:"../images/six6.png"},
    {img:"../images/seven7.png"},
    {img:"../images/eight8.png"},
  ]
  return (
    <div style={{marginBottom:"100px"}}>
      <Container fixed className='container'>
        
          <Typography
            fontSize='40px'
            textAlign='center'
            width='100%'
            fontFamily='Poppins-SemiBold'
            color='#3A3B44'
            style={{ maxWidth: '1100px', margin: 'auto' }}
            className='about-typo'
          >
           Utilized Tools and Softwares
          </Typography>

          <div className={classes.sixthRight}>
            {data.map((item,index)=>(
              <div className={classes.imageTextPara}  key={index}>
                <img src={item.img} alt="item" width="157px" height="44px"></img>

              </div>
            ))}
            
          </div>
         
    
      </Container>
    </div>
  )
}

export default ToolsToService
