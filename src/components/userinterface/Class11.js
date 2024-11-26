import Header from "./Header"
import Footer1 from "./Footer1"
import Bottom1 from "./Bottom1"
import SubSubcategoryComponent from "./SubSubcategoryComponent"
import { useLocation } from "react-router-dom"
import { postData } from "../services/ServerServices"
import { useEffect,useState } from "react"
import { Divider } from "@mui/material"
import Button from "@mui/material/Button"
export default function Class11(props)
{ 
//       var location=useLocation()
//     console.log('LLOOCCAATTTION:',location)
//     const [productList,setProductList]=useState('')
//     const setPageView=async()=>{
//         var pageview=location.state.pageview
//         var products=location.state.products
        
//         if(pageview=='TwoComponent')
//         {
//           var result=await postData('user_products_maincategory',{maincategoryid:products.id})
//           console.log("RRRRESSS:",result)
//           setProductList(result.data)
//         }
// }
// useEffect(function(){
//     setPageView()
// },[])

    return(
        <div>
    <div style={{background:'#ffeaa7'}}>
       
    <div style={{display:'flex',justifyContent:'center'}}>
       
    <div style={{display:'flex', marginTop:'8%',justifyContent:'center',width:'100%'}}>
        <span style={{color:'#1c0d5a',fontFamily:'Questrial',fontWeight:600,fontSize:50}}>
        Class XI
        </span>
       </div>
    
    

    
    
       </div>
       <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{background:'#EFF7FB',display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between',margin:'5%'}}>
          
        <div style={{backgroundColor:'#fbc531', width:'fullwidth'}}>
            <div style={{margin:'10%',fontWeight:'bolder'}}>
            <span style={{fontFamily:'poppins'}}>
        2 YEAR CLASSROOM <br/> PROGRAM FOR <br/> NEET 2027 & BOARD EXAMS
        </span>
        
        </div>
        
        </div>
        <Divider orientation="vertical" flexItem />
        
        <div>
            
        <div style={{margin:'10%'}}>
            <span style={{fontFamily:'poppins'}}>
            <b>Who should join</b><br/>
            X to XI moving Students
        </span>
        </div>
        
        </div>
        <Divider orientation="vertical" flexItem />
        <div>
        <div style={{margin:'10%'}}>
            <span style={{fontFamily:'poppins'}}>
            <b>Duration:</b><br/>
            2 Year Offline Classroom Program
        </span>
        </div>
        </div>
        <Divider orientation="vertical" flexItem />
        <div>
        <div style={{margin:'10%'}}>
            <span style={{fontFamily:'poppins'}}>
            <b>Entrance Exam Date:</b><br/>
            08 Dec 2024<br/>
            <Button variant="contained" size="large" color="success">
          Register Now
        </Button>
        <br/>
       <b> NOTE – Registration for this<br/> examination will close on <br/> December 4, 2024 (Wednesday).</b>
        </span>
        </div>
        </div>
           
           </div>
       </div>
       <div>
       <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{background:'#EFF7FB',display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between',margin:'5%'}}>
          
        <div style={{backgroundColor:'#fbc531', width:'fullwidth'}}>
            <div style={{margin:'10%',fontWeight:'bolder'}}>
            <span style={{fontFamily:'poppins'}}>
            1 YEAR CLASSROOM<br/>
PROGRAM:<br/>
ACADEMICS
        </span>
        
        </div>
        
        </div>
        <Divider orientation="vertical" flexItem />
        
        <div>
            
        <div style={{margin:'10%'}}>
            <span style={{fontFamily:'poppins'}}>
            <b>Who should join</b><br/>
            X to XI moving Students
        </span>
        </div>
        
        </div>
        <Divider orientation="vertical" flexItem />
        <div>
        <div style={{margin:'10%'}}>
            <span style={{fontFamily:'poppins'}}>
            <b>Duration:</b><br/>
            1 Year Offline Classroom Program
        </span>
        </div>
        </div>
        <Divider orientation="vertical" flexItem />
        <div>
        <div style={{margin:'10%'}}>
            <span style={{fontFamily:'poppins'}}>
            <b>Entrance Exam Date:</b><br/>
            08 Dec 2024<br/>
            <Button variant="contained" size="large" color="error">
          Not Required
        </Button>
        <br/>
       <b> NOTE – Registration for this<br/> examination will close on <br/> December 4, 2024 (Wednesday).</b>
        </span>
        </div>
        </div>
           
           </div>
           </div>
       </div>
    
</div>
<div style={{background:'#c7ecee'}}>
       
       <div style={{display:'flex',justifyContent:'center'}}>
          
       <div style={{display:'flex', marginTop:'8%',justifyContent:'center',width:'100%'}}>
           <span style={{color:'#1c0d5a',fontFamily:'Questrial',fontWeight:600,fontSize:50}}>
           Class XII
           </span>
          </div>
       
       
   
       
       
          </div>
          <div style={{display:'flex',flexDirection:'row'}}>
           <div style={{background:'#EFF7FB',display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between',margin:'5%'}}>
             
           <div style={{backgroundColor:'#fbc531', width:'fullwidth'}}>
               <div style={{margin:'10%',fontWeight:'bolder'}}>
               <span style={{fontFamily:'poppins'}}>
                1 YEAR CLASSROOM<br/> PROGRAM FOR<br/>
               NEET 2026 & XII BOARD EXAMS
           </span>
           
           </div>
           
           </div>
           <Divider orientation="vertical" flexItem />
           
           <div>
               
           <div style={{margin:'10%'}}>
               <span style={{fontFamily:'poppins'}}>
               <b>Who should join</b><br/>
               X to XI moving Students
           </span>
           </div>
           
           </div>
           <Divider orientation="vertical" flexItem />
           <div>
           <div style={{margin:'10%'}}>
               <span style={{fontFamily:'poppins'}}>
               <b>Duration:</b><br/>
               1 Year Offline Classroom Program
           </span>
           </div>
           </div>
           <Divider orientation="vertical" flexItem />
           <div>
           <div style={{margin:'10%'}}>
               <span style={{fontFamily:'poppins'}}>
               <b>Entrance Exam Date:</b><br/>
               08 Dec 2024<br/>
               <Button variant="contained" size="large" color="success">
             Register Now
           </Button>
           <br/>
          <b> NOTE – Registration for this<br/> examination will close on <br/> December 4, 2024 (Wednesday).</b>
           </span>
           </div>
           </div>
              
              </div>
          </div>
          <div>
          <div style={{display:'flex',flexDirection:'row'}}>
           <div style={{background:'#EFF7FB',display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between',margin:'5%'}}>
             
           <div style={{backgroundColor:'#fbc531', width:'fullwidth'}}>
               <div style={{margin:'10%',fontWeight:'bolder'}}>
               <span style={{fontFamily:'poppins'}}>
               1 YEAR CLASSROOM<br/>
   PROGRAM:<br/>
   ACADEMICS
           </span>
           
           </div>
           
           </div>
           <Divider orientation="vertical" flexItem />
           
           <div>
               
           <div style={{margin:'10%'}}>
               <span style={{fontFamily:'poppins'}}>
               <b>Who should join</b><br/>
               X to XI moving Students
           </span>
           </div>
           
           </div>
           <Divider orientation="vertical" flexItem />
           <div>
           <div style={{margin:'10%'}}>
               <span style={{fontFamily:'poppins'}}>
               <b>Duration:</b><br/>
               1 Year Offline Classroom Program
           </span>
           </div>
           </div>
           <Divider orientation="vertical" flexItem />
           <div>
           <div style={{margin:'10%'}}>
               <span style={{fontFamily:'poppins'}}>
               <b>Entrance Exam Date:</b><br/>
               08 Dec 2024<br/>
               <Button variant="contained" size="large" color="error">
             Not Required
           </Button>
           <br/>
          <b> NOTE – Registration for this<br/> examination will close on <br/> December 4, 2024 (Wednesday).</b>
           </span>
           </div>
           </div>
              
              </div>
              </div>
          </div>
       
   </div>
   <div style={{background:'#dfe6e9'}}>
       
       <div style={{display:'flex',justifyContent:'center'}}>
          
       <div style={{display:'flex', marginTop:'8%',justifyContent:'center',width:'100%'}}>
           <span style={{color:'#1c0d5a',fontFamily:'Questrial',fontWeight:600,fontSize:50}}>
           Dropper
           </span>
          </div>
       
       
   
       
       
          </div>
          <div style={{display:'flex',flexDirection:'row'}}>
           <div style={{background:'#EFF7FB',display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between',margin:'5%'}}>
             
           <div style={{backgroundColor:'#fbc531', width:'fullwidth'}}>
               <div style={{margin:'10%',fontWeight:'bolder'}}>
               <span style={{fontFamily:'poppins'}}>
               Target IIT-JEE (Main & Advanced) <br/>2026 <br/>
(ENGLISH MEDIUM)
           </span>
           
           </div>
           
           </div>
           <Divider orientation="vertical" flexItem />
           
           <div>
               
           <div style={{margin:'10%'}}>
               <span style={{fontFamily:'poppins'}}>
               <b>Who should join</b><br/>
               XII Appearing or XII Passed Students
           </span>
           </div>
           
           </div>
           <Divider orientation="vertical" flexItem />
           <div>
           <div style={{margin:'10%'}}>
               <span style={{fontFamily:'poppins'}}>
               <b>Duration:</b><br/>
               1 Year Offline Classroom Program
           </span>
           </div>
           </div>
           <Divider orientation="vertical" flexItem />
           <div>
           <div style={{margin:'10%'}}>
               <span style={{fontFamily:'poppins'}}>
               <b>Entrance Exam Date:</b><br/>
              
               <Button variant="contained" size="large" color="success">
             Soon...
           </Button>
           
           </span>
           </div>
           </div>
              
              </div>
          </div>
          <div>
          <div style={{display:'flex',flexDirection:'row'}}>
           <div style={{background:'#EFF7FB',display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between',margin:'5%'}}>
             
           <div style={{backgroundColor:'#fbc531', width:'fullwidth'}}>
               <div style={{margin:'10%',fontWeight:'bolder'}}>
               <span style={{fontFamily:'poppins'}}>
               Target IIT-JEE (Main & Advanced) <br/>2026 <br/>
               (HINDI MEDIUM)
           </span>
           
           </div>
           
           </div>
           <Divider orientation="vertical" flexItem />
           
           <div>
               
           <div style={{margin:'10%'}}>
               <span style={{fontFamily:'poppins'}}>
               <b>Who should join</b><br/>
               XII Appearing or XII Passed Students
           </span>
           </div>
           
           </div>
           <Divider orientation="vertical" flexItem />
           <div>
           <div style={{margin:'10%'}}>
               <span style={{fontFamily:'poppins'}}>
               <b>Duration:</b><br/>
               1 Year Offline Classroom Program
           </span>
           </div>
           </div>
           <Divider orientation="vertical" flexItem />
           <div>
           <div style={{margin:'10%'}}>
               <span style={{fontFamily:'poppins'}}>
               <b>Entrance Exam Date:</b><br/>
             
               <Button variant="contained" size="large" color="error">
              Soon...
           </Button>
           
       
           </span>
           </div>
           </div>
              
              </div>
              </div>
          </div>
       
   </div>
   <div>
    <Footer1/>
    <Bottom1/>
   </div>
</div>

    )
    
}