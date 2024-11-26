import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles(() => ({
    mainContainer:{
        
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        background:'#dfe6e9',
        height:'100vh',
        width:'100vw',
    
    },
    
    box:{
        padding:20,
        margin:10,
        background:'#fff',
        width:800,
        borderRadius:10
    },
     headingBox:
     {display:'flex', 
      marginTop:'8%',
      justifyContent:'center',
      width:'100%'

     },

     headingStyle:
     {
        color:'#1c0d5a',
        fontFamily:'Questrial',
        fontWeight:600,
        fontSize:50

     },

  
    rowStyle:{
        display:'flex',
        flexDirection:'row',
        
    }

  }));





