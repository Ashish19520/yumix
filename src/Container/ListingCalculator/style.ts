import { makeStyles } from '@material-ui/core';

export default makeStyles((theme:any) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        gap:"20%",
        justifyContent: "flex-start",
        background: "#FFFCFC",
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap:"15px"
        },
      },
      heroImg:{
        zIndex:4
      },
      relative:{
        position:"relative",
      },
      box:{
        [theme.breakpoints.down('sm')]: {
         width:"100%"
         },
      },
      imageLines1:{
        position:"absolute",
        left:"10%",
        right:"0",
        top:"50%",
        bottom:"0",
        zIndex:1,
        [theme.breakpoints.down('sm')]: {
         display:"none"
        },
      },
      imageLines2:{
        position:"absolute",
        left:"45%",
        right:"0",
        top:"80%",
        bottom:"0",
        zIndex:1,
        width:"20px",
        height:"20px",
        
      },
      index:{
        zIndex:7
      },
      imageLines3:{
        position:"absolute",
        bottom:0,
        left:"-2%",
        zIndex:2,
        height:"250px",
        width:"100%",
      },
      imageTextPara: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: "0px 1px",
        gap: "8px",
        height: "173px",
        width: "120px",
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
      fifthMainHeading:{
        fontfamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "32px",
        lineHeight: "44px",
        textAlign: "center",
        letterSpacing: "0.25px",
        color: "#3A3B44",
        [theme.breakpoints.down('sm')]: {
          fontSize: "16px",
          fontWeight: 700,
        },
      },
      imageLines11:{
        // alignSelf:"flex-start",
        position: 'absolute',
        left:"3%",
        bottom:"8%",
        zIndex:1,
       [theme.breakpoints.down('sm')]: {
        left:"70%",
        top:"50%"
      },

    },
      imageLines12:{
        position: 'absolute',
        top:"-10%",
        right:"10%",
        height:"67px",
        width:"75px",
       zIndex:1,
       [theme.breakpoints.down('sm')]: {
        display:"none",
      },
      },
      imageLines9:{
        position: 'absolute',
        top:"40%",
        right:"15%",
        height:"14px",
        width:"14px",
       zIndex:1,
       [theme.breakpoints.down('sm')]: {
        left:"5%",
      },
      },
      imageLines10:{
        position: 'absolute',
        top:"-10%",
        left:"20%",
        height:"26px",
        width:"26px",
       zIndex:1,
       [theme.breakpoints.down('sm')]: {
        top:"-5%",
      },
      
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
      imageLines4:{
        position:"absolute",
        left:"-20px",
        right:"0",
        top:"10%",
        bottom:"0",
        zIndex:1,
        height:"300px",
        width:"100%",
        
        [theme.breakpoints.down('sm')]: {
          display:"none",
        },
        
      },
      imageLines5:{
        position:"absolute",
        right:"3%",
        top:"-5%",
        zIndex:-1,
        width:"95%",
        height:"100%",
        [theme.breakpoints.down('sm')]: {
          width:"100%",
          height:"75%",
          left:"2%",
        top:"20%",
        },
      },  
      imageLines6:{
        position:"absolute",
        right:"-4%",
        top:"10%",
        zIndex:1,
        width:"15%",
        height:"15%",
        [theme.breakpoints.down('sm')]: {
          right:"2%",
        top:"20%",
        },
      },  
      imageLines7:{
        position:"absolute",
        top:"0",
        left:"0%",
        zIndex:-1,
        width:"80%",
        height:"100%"
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
        position: "relative",
        [theme.breakpoints.down('xs')]: {
          width: "100%",
        },
        [theme.breakpoints.down('sm')]: {
          width: "80%",
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
      innerimg:{
          display: 'flex',
          flexDirection:"row",
          justifyContent: 'space-between',
          position:"relative"
          
      },
      imageLines13:{
        position:"absolute",
        top:"-90%",
        right:"10%",
        width:"20px",
        height:"20px",
        [theme.breakpoints.down('sm')]: {
          top:"40%",
          right:"0%",
        },
        
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
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
          width:"100%",
          padding:"20px 100px"

        },
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
        width: "100%",
        display: "flex",
        flexDirection: "column",
        flexWrap:"wrap",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px",
        gap: "10px",
        margin: "0 auto",
        
        [theme.breakpoints.down('sm')]: {
          gap: "30px",
          marginBottom:"10px",
        },
      },
      innerFifthContainer: {
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        width: "956px",
        height: "125px",
        gap:"5px",
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
      },
      greenGood: {
        width: "108px",
        height: "37px",
        left: "79px",
        borderRadius: "8px",
        padding: "5px 0",
        gap: "10px",
        background: "#BEEB9E",
        color: "#603900",
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
        background: "#FFD18C",
        color:"#603900",
        textAlign: "center",
        text: "center",
      },
      wid:{
        width:"130px",
      },
      innerSeventh: {
        marginTop: "20px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap:"40px",
      },
      sixthContainer: {
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        padding: "0px",
        gap: "0",
        width: "100%",
        [theme.breakpoints.down('sm')]: {
          width: "100vw",
        },
      },
      selectors: {
       minWidth: "850px", 
       width:"100%",
       display: "flex",
       flexDirection: "column",
       flexWrap: "wrap",
       [theme.breakpoints.down('sm')]: {
       minWidth: "80vw",
      },
        
      },
    
}));

           