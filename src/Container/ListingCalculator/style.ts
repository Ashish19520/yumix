import { makeStyles } from '@material-ui/core';

export default makeStyles((theme:any) => ({
    wrapper:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        background: "#FFFCFC",
    },
    img:{
        width:"30%",
    },
    innerWrapper:{
        display: 'flex',
        flexWrap:'wrap',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap:"30px",
        alignIems:"center",
        background: "#FFFCFC",
    },
    items:{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent:"space-between",
        gap:'80px',
        background: "#FFFCFC",
    },
    twoContainer:{
        display: 'flex',
        flexWrap:'wrap',
        justifyContent:"center",
        alignItems: "center",
        gap: "120px",
        background: "#FFFCFC",
        

    },
    innerTwoContainer:{
        display: 'flex',
        flexWrap:'wrap',
        flexDirection: 'column',
        justifyContent:"center",
        alignItems: "center",
        gap:"40px",
        background: "#FFFFFF",
        padding:"30px",
        
        /* Card Shadow */
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.08)",
                bordeRadius: "12px",
    },
    innerThirdContainer:{
        display: 'flex',
        flexWrap:'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap:"30px",
       
    },
    fourthContainer:{
        display: 'flex',
        flexDirection: 'column',
        flexWrap:"wrap",
        justifyContent: 'flex-start',
    },
    innerOneFourth:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "40px",
        gap: "48px",

        // position: absolute;
        // width: 1151px;
        // height: 101px;
        // left: 64px;
        // top: 114px;

        background: "#FFFFFF",
        border: "1px solid #FFFCFC",
        /* Card Shadow */
        boxShadow:" 0px 4px 4px rgba(0, 0, 0, 0.08)",
        borderRadius: "16px",
        marginBottom: "50px",
    },
    btnFBACalculate:{
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
    fifthContainer:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px",
        gap: "64px",
        margin:"0 auto",
    },
    innerFifthContainer:{
        display:"flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        width: "956px",
        height: "125px",
    },
    innersecondFifthContainer:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "0px",
        gap:"20px"
    },
    greenGood:{
        width:"108px",
        height:"37px",
        left:"79px",
        radius:"8px",
        padding:"5px 0",
        gap:"10px",
        background:"#D9ECCC",
        textAlign:"center",  
        tex:"center",
    },
    redGood:{
        width:"108px",
        height:"37px",
        left:"79px",
        radius:"8px",
        padding:"5px 0",
        gap:"10px",
        background:"#ECCCCC",
        textAlign:"center",  
        tex:"center",
    },
    innerSeventh:{
        marginTop:"20px",
        display: "flex",
        flexDirection: "row",
        flexWrap:"wrap",
        gap:"-40px"
    },
    sixthContainer:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0px",
        gap: "0",
    },
    selectors:{
        padding:"0px",
        margin:"0px",
    }
      
}));

           