import logo1 from "../../../src/assets/logo1.png"
export default function Title1(props)
{
    return(
        <div style={{display:"flex",width:"100%", flexDirection:"column",  justifyContent:"space-between", alignItems:"start"}}>
            <img src={logo1} style={{width:150,height:55}}/>
            <div style={{width:"100%", flexDirection:"row", paddingTop:"10px", display:'flex', alignItems:"start"}}>
                
            <div style={{fontSize:20,fontWeight:'bold', width:"25vh",justifyContent:"center",fontFamily:'Kanit', display:"flex",marginRight:'22%',flexDirection:'row'}}>
              <u> {props.title}</u>
               </div>
            </div>
           
         
        </div>
    )
}