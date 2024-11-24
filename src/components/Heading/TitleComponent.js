import logo from "../../../public/logo.png"
export default function Title1(props)
{
    return(
        <div style={{display:"flex",width:"100%", flexDirection:"column",  justifyContent:"space-between", alignItems:"start"}}>
            <img src={logo} style={{width:200,height:55}}/>
            <div style={{width:"100%", flexDirection:"row", paddingTop:"10px", display:'flex', alignItems:"start"}}>
                
            <div style={{fontSize:20,fontWeight:'bold', width:"100%",justifyContent:"center",fontFamily:'Kanit', display:"flex",marginRight:'22%'}}>
              <u> {props.title}</u>
               </div>
            </div>
           
         
        </div>
    )
}