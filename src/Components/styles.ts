import { makeStyles } from '@material-ui/core';
export default makeStyles((theme) => ({
    
      sixthRight: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '50px',
        height: '152px',
        textAlign: 'center',
        marginBottom: '-20px',
        [theme.breakpoints.down('xs')]: {
          gap: '10px',
          width: '100%',
        },
        [theme.breakpoints.down('sm')]: {
          width: '100%',
          gap: '10px',
        },
      },
      imageTextPara: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: "0px 1px",
        gap: "2px",
        width: "20%",
        [theme.breakpoints.down('xs')]: {
            gap: '10px',
            width: '20%',
            height:"80%" 
          },
          [theme.breakpoints.down('sm')]: {
            gap: '10px',
            width: '20%', 
            height:"100%"  
           
          },
      },
      image:{
        height:"90px",
        width:"100%",
        [theme.breakpoints.down('xs')]: {
          width: '120%',
          height: '50% ',
         
        },
        [theme.breakpoints.down('sm')]: {
          width: '120%',
          height: '25% ',
         
        },
      },
      
      feed:{
        
      }
}))