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
        },
        [theme.breakpoints.down('sm')]: {
          width: '100vw',
          flexDirection:"column",
          
        },
      },
      imageTextPara: {
        width:"25%",
        padding:"10px 20px",
        [theme.breakpoints.down('xs')]: {
            width: '100%', 
          },
          [theme.breakpoints.down('sm')]: {
            width: '100%', 
          },
      },
  
      
      
}))