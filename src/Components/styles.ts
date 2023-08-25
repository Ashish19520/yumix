import { makeStyles } from '@material-ui/core';
export default makeStyles((theme) => ({
    
      sixthRight: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '70vw',
        margin:"0 auto",
        flexWrap: 'wrap',
        marginTop: '50px',
        [theme.breakpoints.down('xs')]: {
          width:"100vw",
          flexDirection:"column",
          justifyContent: 'center',
          alignItems: 'center',
        },
        [theme.breakpoints.down('sm')]: {
          width: '100vw',
          flexDirection:"column",
          justifyContent: 'center',
          alignItems: 'center',
          
        },
      },
      imageTextPara: {
        width:"25%",
        padding:"10px 20px",
        [theme.breakpoints.down('xs')]: {
            width: '100%', 
            justifyContent: 'center',
            alignItems: 'center',
            padding:"10px 90px",

          },
          [theme.breakpoints.down('sm')]: {
            width: '100%', 
            justifyContent: 'center',
          alignItems: 'center',
          padding:"10px 90px",
          },
      },
  
      
}))
