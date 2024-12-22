import Header from "../userinterface/Header"
import Footer1 from "../userinterface/Footer1"
import Bottom1 from "../userinterface/Bottom1"
import SubSubcategoryComponent from "../userinterface/SubSubcategoryComponent"
import { useLocation } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { postData } from "../services/ServerServices"
import { useEffect,useState } from "react"
import { getData } from "../services/ServerServices"
import AcademicOperationsTeam from "../userinterface/AcademicOperationsTeam"
import AcademicConsistencyTeam from "../userinterface/AcademicConsistencyTeam"
import ContentDevelopmentTeam from "../userinterface/ContentDevelopmentTeam"
import AccountsTeam from "../userinterface/Accounts"
import PRExecutive from "../userinterface/PR&Executive"
import InfraandSecurity from "../userinterface/InfraandSecurity"
import IitJeeteam from "../userinterface/IitJeeteam"
import NeetTeam from "../userinterface/NeetTeam"
import Transition from "../userinterface/Transition"
import DamdarTeacher from "../userinterface/DamdarTeachers"
import Programs from "../userinterface/Programs"
import Class11 from "../userinterface/Class11"
import Map from "../userinterface/Map"
import MobileNumber from "../userinterface/MobileNumber"
import NeedSpecific from "../userinterface/NeedSpecific"
export default function GoogleMap(props)


{ 
    const navigate = useNavigate();


    
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
   <NeedSpecific/>
<Map/>
<MobileNumber/>
 


        
   
    {/* <div style={{margin:10,width:'98%',display:'flex',justifyContent:'center'}}>
     <Footer1 />
    </div> */}
  

     <Bottom1 />
    
    </div>   
   )
    
}