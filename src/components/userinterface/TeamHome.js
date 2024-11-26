import Header from "./Header"
import Footer1 from "./Footer1"
import Bottom1 from "./Bottom1"
import SubSubcategoryComponent from "./SubSubcategoryComponent"
import { useLocation } from "react-router-dom"
import { postData } from "../services/ServerServices"
import { useEffect,useState } from "react"
import { getData } from "../services/ServerServices"
export default function TeamHome(props)


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

    return(<div style={{position:'relative'}}>
     <Header /> 
     <div style={{display:'flex',width:'99%',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
    <div style={{marginTop:30,width:'98%',display:'flex',justifyContent:'center'}}>
     <SubSubcategoryComponent/>
    </div>

        
    <div style={{ borderTop:'1px solid #ececec', height:20, margin:0.1 }}></div>
    <div style={{margin:10,width:'98%',display:'flex',justifyContent:'center'}}>
     <Footer1 />
    </div>
  

     <Bottom1 />
    
    </div>   
    </div>)
    
}