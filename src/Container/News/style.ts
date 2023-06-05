import { makeStyles } from '@material-ui/core';
import { Widgets } from '@mui/icons-material';

export default makeStyles((theme) => ({
    conatainer:{
        marginTop:"100px",
        display: 'flex',
        justifyContent: 'center',
        alignContent:"center",
        flexWrap:"wrap",  
      
    },
    relative:{
        position: "relative",
    },
    arr:{
        position:"absolute",
        left:"2%",
        cursor:"pointer",
        top:"-4%",
    },
    text:{ 
    marginTop:"70px",
    width:"85%",  
    textAlign: "justify",
    },
}));