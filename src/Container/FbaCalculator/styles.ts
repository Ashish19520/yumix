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
    monitor:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap:"30px",
        // marginLeft:"200px",
        // marginRight:"100px",
        background: "#FFFCFC",
    
    },
    pair:{
        display: "flex",
       flexWrap:"wrap",
       gap:"50px"
    },
    firstRow:{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0px",
        gap: "20px",
        marginTop:"95px"
    },
    secondRow:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "23px 33px",
        gap: "20px",

        width: "368px",
        height: "565px",

        background: "#FFFFFF",
/* Card Shadow */

        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.08)",
        borderRadius: "16px",
    },
    input:{
        width:"282px",
        height:"36px",
        left:"16px",
        radius:"4px",
        padding:"14px, 16px, 14px, 16px",
        gap:"10px",
    },
    
    thirdRow:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "23px 33px",
        gap: "20px",

        width: "368px",
        height: "565px",

        background: "#FFFFFF",
/* Card Shadow */

        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.08)",
        borderRadius: "16px",
        marginBottom:"0px"
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
    fifthContainer:{
        display: 'flex',
        flexWrap:'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap:"30px",
    },
    fifthInner:{
        width:"850px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "0px",
        marginBottom:"150px",
        gap: "120px",
    },
    fifthHeading:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    fonts:{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0px",
        gap: "24px",
        width: "332px",
        height: "180px",
    },
    sixthContainer:{
        display: "flex",
        justifyContent: "center",
        gap:"15px",
    },
    sixthRight:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "0px",
        gap: "40px",
        width: "565px",
        height: "152px",
    },
    innerSeventh:{
        marginTop:"20px",
        display: "flex",
        flexDirection: "row",
        flexWrap:"wrap",
        gap:"-40px"
    },
   
}));