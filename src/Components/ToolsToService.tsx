import React from 'react'
import { Container, Typography } from '@mui/material'
import useStyles from './styles'
const ToolsToService = () => {
  const classes = useStyles()
  return (
    <div style={{marginBottom:"100px"}}>
      <Container fixed className='container'>
        
          <Typography
            fontSize='62px'
            textAlign='center'
            width='100%'
            fontFamily='Poppins-SemiBold'
            color='#3A3B44'
            style={{ maxWidth: '1100px', margin: 'auto' }}
            className='about-typo'
          >
            Tools we use
          </Typography>

          <div className={classes.sixthRight}>
            <div className={classes.imageTextPara}>
              <img
                src='../images/joinbrands.png'
                alt='img'
                className={classes.image}
              ></img>
              {/* <p className={classes.type}>Perpetua</p> */}
            </div>
            <div className={classes.imageTextPara}>
              <img
                src='../images/informed.png'
                alt='img'
                className={classes.image}
              ></img>
              {/* <p className={classes.type}>Shipping Costs.</p> */}
            </div>
            
            <div className={classes.imageTextPara}>
              <img
              src="../images/pixelfy.png"
                alt='img'
                className={classes.image}
              ></img>
              {/* <p className={classes.type}>Storage Costs.</p> */}
            </div>
            <div className={classes.imageTextPara}>
              <img
              src="../images/getReviews.png"
                alt='img'
                height="200px"                className={classes.image}
              ></img>
              {/* <p className={classes.type}>Storage Costs.</p> */}
            </div>
            
          </div>
          <div className={classes.sixthRight}>
            <div className={classes.imageTextPara}>
              <img
                src='../images/junglescout.png'
                alt='img'
                className={classes.image}
              ></img>
              {/* <p className={classes.type}>Costs Of Goods.</p> */}
            </div>
           
            <div className={classes.imageTextPara}>
              <img
                src='../images/perputua.png'
                alt='img'
                className={classes.image}
  
              ></img>
              {/* <p className={classes.type}>Product Packing Labelling Cost.</p> */}
            </div>
            <div className={classes.imageTextPara}>
              <img
              src='../images/helium10.png'
                
                alt='img'
                className={classes.image}
              ></img>
              {/* <p className={classes.type}>Product Sample And Product Cost.</p> */}
            </div>
            <div className={classes.imageTextPara}>
              <img
                src='../images/Rebatekey.png'
                alt='img'
                className={classes.image}
              ></img>
              {/* <p className={classes.type}>Product Sample And Product Cost.</p> */}
            </div>
          </div>
    
      </Container>
    </div>
  )
}

export default ToolsToService
