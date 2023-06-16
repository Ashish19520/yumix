import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  firstContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "0px",
    gap: "24px",
    marginBottom: "70px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  
  imageLines1:{
    position:"absolute",
    left:"10%",
    right:"0",
    top:"30%",
    bottom:"0",
    zIndex:1,
    [theme.breakpoints.down("sm")]: {
     display: "none",
    },
  },
  imageLines6:{
    position:"absolute",
    right:"5%",
    top:"5%",
    zIndex:-1,
    width:"90%",
  },
  index:{
    zIndex:7
  },
  toolbar: {
    display: "none",/* Hide the toolbar */
    height:"100%",
  },
  relative:{
    position:"relative",
  },
  imageLines2:{
    position:"absolute",
    left:"45%",
    right:"0",
    top:"70%",
    bottom:"0",
    zIndex:1,
    width:"20px",
    height:"20px",
    
  },
  imageLines3:{
    position:"absolute",
    right:"17%",
    top:"20%",
    bottom:"0",
    zIndex:1,
    width:"20px",
    height:"20px",
    [theme.breakpoints.down("sm")]: {
      display:"none",
    },
  },
  imageLines4:{
    position:"absolute",
    left:"-20px",
    right:"0",
    top:"0%",
    bottom:"0",
    zIndex:1,
    height:"300px",
    width:"100%",
    [theme.breakpoints.down("sm")]: {
      display:"none",
    },
  },
  imageLines5:{
    position:"absolute",
    left:"31%",
    bottom:"-9%",
    zIndex:1,
    width:"12px",
    height:"12px",
    [theme.breakpoints.down("sm")]: {
      display:"none",
    },
  },
  insideFirstContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "32px 24px",
    gap: "24px",
    width: "564.5px",
    height: "400px",
    background: "#FFFFFF",
    /* Card Shadow */
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.08)",
    borderRadius: "16px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  insideFirstContainerTwo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "32px 24px",
    gap: "24px",
    width: "564.5px",
    height: "400px",
    background: "#FFFFFF",
    /* Card Shadow */
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.08)",
    borderRadius: "16px",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  btn1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px 24px",
    gap: "8px",
    background: "#FFFCFC",
    border: "1px solid #5956E9",
    borderRadius: "8px",
    color: "#5956E9",
    position: "absolute",
    width: "134px",
    height: "48px",
    left: "383.5px",
    bottom: "20px",
    [theme.breakpoints.down("sm")]: {
      left: "auto",
      right: "50%",
      transform: "translateX(50%)",
    },
  },
  txtField: {
    padding: "10px",
    width: "500px",
    height: "300px",
    border: "none",
    outline:"none",
    fontFamily: "Poppins",
    fontSize: "16px",
    lineHeight: "18px",
    letterSpacing: "0.001em",
    overflow: "auto",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  innerSeventh: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "70px",
    [theme.breakpoints.down("sm")]: {  
        flexWrap: "wrap",
        flexDirection: "column",
       
      },
  },
  img1: {
    width: "30%",
  },
  btn_FBACalculate: {
    
    background: "#5956e9",
    color: "#e0e0e0",
    borderRadius: "10px",
    padding: "10px 25px",
    fontFamily: "Poppins",
    fontSize: "12px",
    lineHeight: "18px",
    letterSpacing: "0.001em",
    textAlign: "center",
  },
  thirdWrapper: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    gap: "30px",
    marginBottom: "90px",
  },
  thirdWrapperTwo: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 0px",
    [theme.breakpoints.down("sm")]: {  
        flexWrap: "wrap",
        gap:"120px",
        flexDirection: "column",
       
      },
  },
  txt: {
    width: "662px",
    height: "72px",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight: "24px",
    letterSpacing: "0.25px",
    color: "#40424C",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  fourthWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    flexWrap: "wrap",
    padding: "0px",
    gap: "24px",
  },
  firstFourthWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "0px",
    gap: "24px",
    width: "90%px",
    // height: "200px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flexDirection: "column",
    },
  },
  secondFourthWrapper: {
    width: "368px",
    height: "200px",
    background: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.08)",
    borderRadius: "24px",
    [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    
  },
  txt2: {
    textAlign: "center",
    verticalAlign: "center",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontSize: "18px",
    lineHeight: "24px",
    letterSpacing: "0.25px",
    color: "#40424C",
    paddingTop: "30px",
  },
  sixthContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    padding: "0px",
    gap: "0",
    width: "100%",
    marginTop:"50px", 
    [theme.breakpoints.down('sm')]: {
      width: "80%",
    },
  },
  selectors: {
   minWidth: "1150px", 
   width:"100%",
   display: "flex",
   flexDirection: "column",
   flexWrap: "wrap",
   [theme.breakpoints.down('sm')]: {
   minWidth: "100vw",
  },
    
  },
  overf:{
    overflow:"scroll",
  }
}));
