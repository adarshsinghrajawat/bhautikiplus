import CopyrightIcon from '@mui/icons-material/Copyright';
import { ServerURL } from "../services/ServerServices"
import logo from "../../../src/assets/logo.png"
export default function Footer1(props)
{
    // var socialitems=[{id:'1',icon:'f11.png'},
    //            {id:'2',icon:'f12.png'},
    //            {id:'3',icon:'f13.png'}]
               
    // var payitems=[{id:'1',icon:'logo.png'},
    //         //    {id:'2',icon:'1.png'},
    //         //    {id:'3',icon:'1.png'},
    //         //    {id:'4',icon:'1.png'},
    //         //    {id:'5',icon:'1.png'}
    //         ]
    
    // const showAllSocialItems=()=>{
    //     return socialitems.map((item)=>{
    //         return <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    //               <div style={{ borderRadius: '50%', overflow: 'hidden', width:30, height:30, marginBottom:1, backgroundColor: '#f2f2f2',margin:5  }}>
    //                 <={`${ServerURL}/images/${item.icon}`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
    //                 </div> 
    //                 </div>
    //     })
    // }
    // const showAllPayItems=()=>{
    //     return payitems.map((item)=>{
    //         return <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    //               <div style={{ width: '30px', height: '20px', marginBottom:15 ,backgroundColor: '#f2f2f2',margin:5,justifyContent:'center'}}>
    //                 <img src={`${ServerURL}/images/${item.icon}`} loading="lazy" style={{ width: '310%', height: '250%', objectFit: 'cover' }}/>
    //                 </div> 
    //                 </div>
    //     })
    // }    
    return (<div>
    <div style={{display: 'flex',flexWrap:'wrap',height:20}}>
        <div style={{ display: 'flex', alignItems: 'center' ,width:'100%',height:'50%'}}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',width:'100%'}}>
                <CopyrightIcon style={{color:'#fff'}}/>
                {/* <div style={{ borderLeft:'1px solid black', height:20, margin:10, alignItems: 'center' }}></div> */}
                <span style={{display:'flex',flexDirection:'row',justifyContent:'center',color:'#fff'}}>All Rights Reserved</span>
                <img src={logo} style={{width:'5%',marginTop:'0.5%'}} />
                </div>
        
        </div>
      
        <div style={{ borderTop:'1px solid #ececec', height:20, margin:0.1 }}></div>
        </div>
        </div>
    )
}