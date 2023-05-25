import { makeStyles } from '@material-ui/core';

export default makeStyles((theme:any) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        background: "#FFFCFC",
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          alignItems: 'center',
        },
      },
      heroImg:{
        zIndex:4
      },
      relative:{
        position:"relative",
      },
      imageLines1:{
        position:"absolute",
        left:"10%",
        right:"0",
        top:"60%",
        bottom:"0",
        zIndex:-1
      },
      imageLines2:{
        position:"absolute",
        left:"45%",
        right:"0",
        top:"80%",
        bottom:"0",
        zIndex:1,
        width:"20px",
        height:"20px"
      },
      index:{
        zIndex:7
      },
      imageLines3:{
        position:"absolute",
        bottom:0,
        left:"-2%",
        zIndex:2,
        height:"300px",
        width:"100%",
      },
      imageLines4:{
        position:"absolute",
        left:"-20px",
        right:"0",
        top:"0%",
        bottom:"0",
        zIndex:1,
        height:"300px",
        width:"100%"
      },
      imageLines5:{
        position:"absolute",
        right:"5%",
        top:"27%",
        zIndex:1,
        width:"40%"
      },  
      imageLines6:{
        position:"absolute",
        right:"7%",
        top:"22%",
        zIndex:1,
        width:"10%",
        height:"12%"
      },  
      imageLines7:{
        position:"absolute",
        top:"20%",
        zIndex:1,
        width:"17%",
        height:"70%"
      },  
      imageLines8:{
        position:"absolute",
        left:"-4%",
        bottom:"-10%",
        zIndex:1,
        width:"12px",
        height:"12px"
      },  
      img: {
        width: "30%",
        [theme.breakpoints.down('sm')]: {
          width: "100%",
        },
      },
      innerWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: "30px",
        alignItems: "center",
        background: "#FFFCFC",
      },
      items: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: "space-between",
        gap: '80px',
        background: "#FFFCFC",
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          alignItems: 'center',
        },
      },
      twoContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "center",
        alignItems: "center",
        gap: "120px",
        background: "#FFFCFC",
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          alignItems: 'center',
          gap: '30px',
        },
        marginBottom:"100px"
      },
      innerTwoContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        background: "#FFFFFF",
        padding: "30px",
        /* Card Shadow */
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.08)",
        borderRadius: "12px",
        [theme.breakpoints.down('sm')]: {
          padding: "20px",
        },
      },
      innerThirdContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: "30px",
      },
      fourthContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: "wrap",
        justifyContent: 'flex-start',
       
      },
     
      innerOneFourth: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "40px",
        gap: "48px",
        background: "#FFFFFF",
        zIndex:4,
        border: "1px solid #FFFCFC",
        /* Card Shadow */
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.08)",
        borderRadius: "16px",
        marginBottom: "50px",
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          padding: "20px",
        },
      },
      btnFBACalculate: {
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
      fifthContainer: {
        display: "flex",
        flexDirection: "column",
        flexWrap:"wrap",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px",
        gap: "64px",
        margin: "0 auto",
        
        [theme.breakpoints.down('sm')]: {
          gap: "30px",
          marginBottom:"250px",
        },
      },
      innerFifthContainer: {
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        width: "956px",
        height: "125px",
        [theme.breakpoints.down('sm')]: {
          width: "100%",
        },
      },
      innersecondFifthContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "0px",
        // flexWrap:'wrap',
        gap: "20px",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            flexDirection: "column-reverse",
          },
      },
      greenGood: {
        width: "108px",
        height: "37px",
        left: "79px",
        borderRadius: "8px",
        padding: "5px 0",
        gap: "10px",
        background: "#D9ECCC",
        textAlign: "center",
        text: "center",
      },
      redGood: {
        width: "108px",
        height: "37px",
        left: "79px",
        borderRadius: "8px",
        padding: "5px 0",
        gap: "10px",
        background: "#ECCCCC",
        textAlign: "center",
        text: "center",
      },
      innerSeventh: {
        marginTop: "20px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap:"40px",
      },
      sixthContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "0px",
        gap: "0",
      },
      selectors: {
       minWidth: "850px", 
       width:"100%",
       display: "flex",
       flexDirection: "column",
       flexWrap: "wrap",
       [theme.breakpoints.down('sm')]: {
       minWidth: "100vw",
      },
        
      },
    
}));

           