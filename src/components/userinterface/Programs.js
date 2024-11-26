import Header from "./Header"
import Footer1 from "./Footer1"
import Bottom1 from "./Bottom1"
import SubSubcategoryComponent from "./SubSubcategoryComponent"
import { useLocation } from "react-router-dom"
import { postData } from "../services/ServerServices"
import { useEffect,useState } from "react"
import Class11 from "./Class11"
export default function Programs(props)
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

    return(<div>
        <Header/>
    <div style={{display:'flex',justifyContent:'center',background:'#EFF7FB'}}>
       
       <div>
       <div style={{display:'flex', marginTop:'8%',justifyContent:'center',width:'100%'}}>
        <span style={{color:'#1c0d5a',fontFamily:'Questrial',fontWeight:600,fontSize:50}}>
        There are many reasons to Join Bhautiki Plus offline programs 
        </span>
       </div>
       <div style={{fontWeight:400,marginTop:'5%',lineHeight:2}}>
       <div style={{  display: 'flex',justifyContent: 'space-between',gap: '20px',maxwidth: '800px',marginBottom:'2%'}}>
        <ul style={{ flex: 1, padding:0,fontFamily:'poppins',fontSize:19}}>
            <li>Director himself is teaching and is available at the centre itself</li>
            <li>Interactive Classes with both involvement and Subject-Depth</li>
            <li>Highly Qualified Teachers with both Experience and Energy</li>
            <li>One month Refund Policy</li>
        </ul>
        <ul style={{ flex: 1, padding:0,fontFamily:'poppins',fontSize:19}}>
            <li>Fixed Teachers for the entire session</li>
            <li>Dedicated Mentors to support holistic growth</li>
            <li>360 degree Learning and Management System</li>
            <li>Best Infrastructure with state-of-the-art facilities</li>
        </ul>
    </div>
    

    
    </div>
        </div>
        
       </div>
       <div style={{display:'flex', marginTop:'2%',marginBottom:'5%',justifyContent:'center',width:'100%'}}>
        <span style={{color:'#1c0d5a',fontFamily:'Questrial',fontWeight:600,fontSize:40}}>
        Check our offline programs for IIT-JEE:
        </span>
       </div>
       <div>
        <Class11/>
       </div>
      
    
</div>


    )
    
}