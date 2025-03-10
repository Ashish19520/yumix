import { makeStyles } from '@material-ui/core';
import { Padding } from '@mui/icons-material';

export default makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    background: "#FFFCFC",
    [theme.breakpoints.down('xs')]: {
      display:"flex",
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft:"40px",   
      width:"100vw",


    },
    [theme.breakpoints.down('sm')]: {
      display:"flex",
      flexDirection: 'column',
      flexWrap: "wrap",
      alignItems: 'center',
      justifyContent: 'center',   
      width:"100%",


    },
  },
  img: {
    width: "30%",
    position: "relative",
    [theme.breakpoints.down('xs')]: {
      width: "100%",
    },
    [theme.breakpoints.down('sm')]: {
      width: "100%",
    },
  },
  imges:{
    height:"200px",
    width:"368px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  imageTextPara: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: "0px 1px",
    gap: "2px",
    height: "173px",
    width: "27%",
  },
  innerWrapper: { 
    position: "relative",
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: "30px",
    alignItems: "center",
    background: "#FFFCFC",
   
  },
  innerimg:{
    position:"relative",
    display: 'flex',
    flexDirection:"row",
    justifyContent: 'space-between',
  
    
},
  items: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: "space-between",
    gap: '80px',
    background: "#FFFCFC",[theme.breakpoints.down('xs')]: {
      flexDirection:"column",
    },
  },
  monitor: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: "30px",
    background: "#FFFCFC",
    position: "relative",
    [theme.breakpoints.down('xs')]: {
      width: "100%",
      gap: "5%",
    },
  },
  index:{
    zIndex:7,
  },
  
  firstRow: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: "23px 25px",
    gap: "20px",
    width:"33%",
    background: "#FFFFFF",
    zIndex:1,
    borderRadius: "16px",
    [theme.breakpoints.down('xs')]: {
      width: "40%",
    },
  },
  write:{
    fontFamily: 'Montserrat',
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "24px",
    display: "flex",
    alignItems: "start",
    height:"30px",
    textAlign: "start",
    letterSpacing: "0.25px",
    color: "black",
    [theme.breakpoints.down('sm')]: {
      fontSize: "10px",
      fontWeight: 100,
      letterSpacing: "0.5px",
      lineHeight: "10px",
    },
  },
  arrow: {
   " &:before": {
      border: "1px solid #E6E8ED"
    },
    color: theme.palette.common.white
  },
  tooltip: {
    backgroundColor: theme.palette.common.white,
    border: "1px solid #E6E8ED",
    color: "#4A4A4A",
    Padding:"10px",
    fontSize: "16px"
  },
  secondRow: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: "23px 25px",
    gap: "20px",
    width:"33%",
    background: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.08)",
    zIndex:1,
    borderRadius: "16px",
    [theme.breakpoints.down('sm')]: {
      width:"33%",
      marginBottom: "20px",
    },
    [theme.breakpoints.down('xs')]: {
      width:"30%",
      padding: "23px 5px",
    },
  },
  input: {
    width: "80%",
    height: "30px",
    display: "flex",
    alignItems: "center",
    padding: "14px, 16px, 14px, 16px",
    textAlign: 'center',
    zIndex:1,
    [theme.breakpoints.down('sm')]: {
      padding: "none",
    },
  },
  selector:{
    backgroundColor:" #F6F6FE",
    width: "20%", 
    height: "30px",
    [theme.breakpoints.down('sm')]: {
      width: "40%" ,
    },
  },
  
  inputBox:{
    width: "100%"
  },
  
  thirdRow: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "23px 25px",
    gap: "20px",
    width:"33%",
    background: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.08)",
    borderRadius: "16px",
    zIndex:1, 
    marginBottom: "0px",
    [theme.breakpoints.down('xs')]: {
      width:"30%",
      padding:"23px 5px",
      marginBottom: "20px",
    },
  },
  twoContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '120px',
    background: '#FFFCFC',
    position:"relative",
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  innerTwoContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
    background: '#FFFFFF',
    padding: '30px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.08)',
    borderRadius: '12px',
    zIndex:1,
  },
  innerThirdContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px',
    
  },
  fifthContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px',
    position:"relative",
  },
  fifthInner: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '0px',
    marginBottom: '150px',
    gap: '120px',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
      width:"100%",
    },
  },
  fifthHeading: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fonts: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    // flexWrap: 'wrap',
    gap: '24px',
    width: '332px',
    height: '180px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
      width:"290px",
      flexWrap: 'wrap',
    },
  },
  sixthContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft:"30px"
      },
  },
  sixthRight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '50px',
    width: '565px',
    height: '152px',
    textAlign: 'center',
    marginBottom: '40px',
    [theme.breakpoints.down('xs')]: {
      gap: '10px',
      width: '100%',
      maxWidth: '350px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxWidth: '350px',
      gap: '10px',
    },
  },
  innerSeventh: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '70px',
    [theme.breakpoints.down('xs')]: {
        width: '100%',
        gap:'10px'
      },
      [theme.breakpoints.down('sm')]: {
        width: '90%',
        gap:'10px'
      
      },
  },imageLines1:{
    position:"absolute",
    left:"10%",
    bottom:"-15%",
    zIndex:-1,
    width:"70%",
    [theme.breakpoints.down('xs')]: {
      display:"none",
    },
  },
  imageLines7:{
    position:"absolute",
    left:"48%",
    bottom:"15%",
    zIndex:1,
    width:"20px",
    height:"20px",
    [theme.breakpoints.down('xs')]: {
      display:"none",
    },
  },
  heroRock:{
    position:"absolute",
    top:"6%",
    left:"15%",
    width:"80px",
    height:"80px",

  },
  imageLines:{
    position: 'absolute',
    left:0,
    top:"-100px",
   zIndex:1,
  },
  imageLines2:{
    position: 'absolute',
    left:"-5%",
   zIndex:1,
  },
  heroCircle:{
    position:"absolute",
    width:"80%",
    height:"80%",
    top:"3%",
    right:"15%",
    zIndex:-1,
  },
  imageLines13:{
    position:"absolute",
    top:"0%",
    right:"10%",
    width:"20px",
    height:"20px",
    [theme.breakpoints.down('sm')]: {
      top:"40%",
      right:"-20%",
    },
    
  },
  imageLines14:{
    position:"absolute",
    bottom:"0%",
    right:"0%",
    width:"80px",
    height:"80px",
    [theme.breakpoints.down('sm')]: {
      top:"40%",
      right:"-20%",
    },
    
  },
  imageLines3:{
    position: 'absolute',
    zIndex:-1,
    width:"40%",
    height:"40%",
    left:"0",
    top:"0",   
  },
  imageLines8:{
    position: 'absolute',
    top:"-10%",
    right:"10%",
    height:"67px",
    width:"75px",
    zIndex:1,
  },
  imageLines9:{
    position: 'absolute',
    top:"15%",
    right:"20%",
    height:"34px",
    width:"34px",
   zIndex:1,
   [theme.breakpoints.down('sm')]: {
      display:"none"
   },
  },
  imageLines10:{
    position: 'absolute',
    top:"0",
    left:"20%",
    height:"28px",
    width:"28px",
   zIndex:1,
   [theme.breakpoints.down('sm')]: {
    display:"none"
 },
  },
  imageLines11:{
    position:"absolute",
    left:"-20px",
    bottom:"0",
    zIndex:-1,
    height:"300px",
    width:"100%"
  },
  imageLines4:{
    // alignSelf:"flex-start",
    position: 'absolute',
    left:"3%",
    bottom:"7%",
    zIndex:1,
   [theme.breakpoints.down('xs')]: {
    zIndex:"-1",
    bottom:"3%",
  },
  }
}));