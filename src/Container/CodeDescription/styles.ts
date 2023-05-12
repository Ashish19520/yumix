import { makeStyles } from '@material-ui/core';


export default makeStyles((theme:any) => ({
    firstContainer:{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        padding: "0px",
        gap: "24px",

        // position: "absolute",
        // width: "1153px",
        // height: "400px",
        // left: "64px",
        // top: "54px",
        marginBottom: "70px",
    },
    insideFirstContainer:{
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
    },
    insideFirstContainerTwo:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "32px 24px",
        gap: "24px",
        width: "564.5px",
        height: "400px",
        background:" #FFFFFF",
        /* Card Shadow */
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.08)",
        borderRadius: "16px",
        position:"relative"
    },

    btn1:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "8px 24px",
        gap: "8px",
        background: "#FFFCFC",
        border: "1px solid #5956E9",
        borderRadius: "8px",
        color:"#5956E9",

        position: "absolute",
        width: "134px",
        height: "48px",
        left: "383.5px",
        bottom: "20px",
    },
    txtField:{
        padding:"10px",
        width: "500px",
        height: "300px",
        border: "0",
        fontFamily:"Poppins",
        fontSize:"16px",
        lineHeight:"18px",
        letterSpacing:"0.001em",
        textAlign:"center",    
    },
    innerSeventh:{
        marginTop:"20px",
        display: "flex",
        flexDirection: "row",
        flexWrap:"wrap",
        gap:"70px"
    }, 
    img1:{
        width:"30%",
    },
    btn_FBACalculate:{
        background:"#5956e9",
        color:"#e0e0e0",
        borderRadius:"10px",
        padding: "10px 25px",
        fontFamily:"Poppins",
        fontSize:"12px",
        lineHeight:"18px",
        letterSpacing:"0.001em",
        textAlign:"center",    
    },
    thirdWrapper:{
        display: "flex",
        flexDirection: "column",
        flexWrap:"wrap",
        gap:"30px",
        marginBottom:"90px"
    },
    thirdWrapperTwo:{
        display: "flex",
        flexDirection: "row",
        flexWrap:"wrap",
        justifyContent: "space-between",
        alignItems: "center",   
        padding: "12px 0px",
       
    },
    txt:{
        width: "662px",
        height: "72px",
        fontFamily: 'Montserrat',
        fontStyle: "normal",
        fontSize: "18px",
        lineHeight: "24px",
        letterSpacing: "0.25px",
        color: "#40424C",
    },
    fourthWrapper:{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0px",
        gap: "24px",
    },
    firstFourthWrapper:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px",
        gap: "24px",
        width: "1152px",
        height: "200px",
    },
    secondFourthWrapper:{
        width: "368px",
        height: "200px",
        background: "#FFFFFF",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.08)",
        borderRadius: "24px",
    },
    txt2:{
        textAlign: "center",
        verticalAlign: "center",
        fontFamily: 'Montserrat',
        fontStyle: "normal",
        fontSize: "18px",
        lineHeight: "24px",
        letterSpacing: "0.25px",
        color: "#40424C",
        paddingTop:"30px",
    }
    
}))