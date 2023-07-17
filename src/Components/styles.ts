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
        height: "150px",
        width: "20%",
        [theme.breakpoints.down('xs')]: {
            gap: '10px',
            width: '20%',
          },
          [theme.breakpoints.down('sm')]: {
            gap: '10px',
            width: '20%',   
           
          },
      },
      image:{
        height:"60%",
        width:"100%",
        [theme.breakpoints.down('xs')]: {
          width: '100%',
          height: '40%',
         
        },
        [theme.breakpoints.down('sm')]: {
          width: '100%',   
          height: '40%',
         
        },
      },
      
      feed:{
        height:"10%",
        width:"100%",
      }
}))