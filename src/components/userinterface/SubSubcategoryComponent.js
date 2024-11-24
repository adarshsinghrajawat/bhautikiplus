import { ServerURL } from "../services/ServerServices"
import dumdarteachers from "../../../src/assets/dumdarteachers.png"
import { AppBar } from "@mui/material"
import App from "../../App"
import Paper from "@mui/material/Paper"
export default function SubSubcategoryComponent(props)
{
    var items=[{id:'1',college:'B.Tech, NIT Bhopal (Gold Medalist)',post:'Director, IIT Division & HOD,Chemistry',subsubcategoryname:'Mentored AIR 31, AIR 39, AIR 110 Teaching experience of 13 Years',name:'Er. Yogesh Pathak',icon:'yogeshsir.png'},
    {id:'2',college:'B.Tech. IIT Delhi (AIR 175)',post:'HOD, Physics',subsubcategoryname:"Mentored AIR 3, AIR 18, AIR 220 Teaching experience of 10 Years",name:'Er. Deepak Bhardwaj',icon:'deepaksir.png'},
    {id:'3',college:'B.Tech. IIT Dhanbad',post:'HOD, Mathematics',subsubcategoryname:'Mentored AIR 9, AIR 59 Teaching experience of 15 Years',name:'Er. Sandeep Agrawal',icon:'sandeepsir.png'},
    {id:'4',college:'B.Tech. NIT Bhopal',post:'Founder Bhautiki Plus',subsubcategoryname:'Senior Faculty PhysicsTeaching experience of 14 years',name:'Er. Ritesh Goel',icon:'riteshsir.png'},
    {id:'4',college:'B.Tech. IIT Roorkee',subsubcategoryname:'Senior Faculty, Mathematics Teaching experience of 11 Years',name:'Er. Nimish Saraf',icon:'nimishsir.png'},
    {id:'4',college:'B.Tech. NIT Bhopal',subsubcategoryname:'Senior Faculty, Chemistry Teaching experience of 8 Years',name:'Er. Ankit Chouksey',icon:'ankitsir.png'},
    {id:'4',college:'B.Tech. NIT Bhopal',subsubcategoryname:'Senior Faculty, Physics Teaching experience of 4 Years',name:'Er. Sudhanshu Joshi',icon:'sudhanshusir.png'},
]
   
var item=[{id:'1',subsubcategoryname:'Teaching experience of 26 Years',name:'Er. Sanjeev Agnihotri' ,post:'HOD, Chemistry',icon:'sanjeevsir.png'},
    {id:'2',subsubcategoryname:"Teaching experience of 22 Years",name:'Mr. Rajeev Gupta',post:'Senior Faculty, Chemistry',icon:'rajeevsir.png'},
    {id:'3',college:'B.Tech. NIT Bhopal',subsubcategoryname:'Teaching experience of 14 years',post:'Senior Faculty Physics',name:'Er. Ritesh Goel',post:'Founder Bhautiki Plus',icon:'riteshsir.png'},
    {id:'4',college:'M.Sc. Physics ,IIT Bombay',subsubcategoryname:'Department of Physics',name:'Mr. Pawan Kumar Garg',post:'Faculty',icon:'pawansir.png'},
    {id:'4',subsubcategoryname:'Teaching experience of 27 Years',name:'Dr. Brijesh Lavania',post:'HOD, Botany',icon:'brijeshsir.png'},
    {id:'4',subsubcategoryname:'Teaching experience of 10 Years',name:'Mr. Jagraj Singh',post:'Senior Faculty ,Botany',icon:'jagrajsir.png'},
    {id:'4',subsubcategoryname:'Teaching experience of 19 Years',name:'Dr. L.B. Patel',post:'HOD, Zoology',icon:'patelsir.png'},
    {id:'4',subsubcategoryname:'Teaching experience of 8 Years',name:'Mr. Anindya Paul',post:'Senior Faculty, Zoology',icon:'anindyasir.png'},
]
    //var items=props.data
    
    const showAllItems=()=>{
        return items.map((item)=>{
            return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '2px', flexWrap: 'wrap', maxWidth: '400px' }}>
            <div>
                <img src={`${ServerURL}/images/${item.icon}`} loading="lazy" style={{ width: "100%", height: "60vh",background:'',padding:'10%' }} alt={item.subsubcategoryname} />
            </div>
            
            <div style={{ fontWeight:650,fontSize: 35, letterSpacing: 0.5, textAlign: 'center' ,color:'#1c0d5a',fontFamily:'Josefin Sans',marginTop:'8%'}}>
                        {item.name
                         }
                    </div>
                    <div style={{fontFamily:'Josefin Sans',color:'#636e72', fontSize: 18,fontWeight:600, letterSpacing: 0.5, flexDirection: 'column', textAlign: 'center', marginTop: '4%' }}>
                {item.college}           
            </div>
            <div style={{fontFamily:'Josefin Sans', fontSize: 22, letterSpacing: 0.5,fontWeight:500, flexDirection: 'column', textAlign: 'center', marginTop: '4%' }}>
                {item.post}
                
            </div>
            <div style={{fontFamily:'Josefin Sans', fontSize: 20, letterSpacing: 0.5, flexDirection: 'column', textAlign: 'center', marginTop: '10%' }}>
                {item.subsubcategoryname}
                
            </div>
            
        </div>

        })
    }

    const showAllItem=()=>{
        return item.map((item)=>{
            return <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '2px', flexWrap: 'wrap', maxWidth: '400px' }}>
            <div>
                <img src={`${ServerURL}/images/${item.icon}`} loading="lazy" style={{ width: "100%", height: "60vh",background:'',padding:'5%' }} alt={item.subsubcategoryname} />
            </div>
            
            <div style={{ fontWeight:650,fontSize: 35, letterSpacing: 0.5, textAlign: 'center' ,color:'#1c0d5a',fontFamily:'Josefin Sans',marginTop:'8%'}}>
                        {item.name
                         }
                    </div>
                    <div style={{fontFamily:'Josefin Sans',color:'#636e72', fontSize: 18,fontWeight:600, letterSpacing: 0.5, flexDirection: 'column', textAlign: 'center', marginTop: '4%' }}>
                {item.college}           
            </div>
            <div style={{fontFamily:'Josefin Sans', fontSize: 22, letterSpacing: 0.5,fontWeight:500, flexDirection: 'column', textAlign: 'center', marginTop: '4%' }}>
                {item.post}
                
            </div>
            <div style={{fontFamily:'Josefin Sans', fontSize: 20, letterSpacing: 0.5, flexDirection: 'column', textAlign: 'center', marginTop: '10%' }}>
                {item.subsubcategoryname}
                
            </div>
            
        </div>
        })
    }

    var dd=[{id:'1',ddname:'Sort',ddmenu:['']},
    {id:'2',ddname:'Category',ddmenu:['']},
    {id:'3',ddname:'Faculty Type',ddmenu:['Recommended',"What's New",'Price High to Low','Price Low to High']},
    {id:'4',ddname:'Subject',ddmenu:['Recommended',"What's New",'Price High to Low','Price Low to High']},
    {id:'5',ddname:'Practical',ddmenu:['Recommended',"What's New",'Price High to Low','Price Low to High']},
    {id:'6',ddname:'Theory',ddmenu:['Recommended',"What's New",'Price High to Low','Price Low to High']},
    {id:'7',ddname:'Topic',ddmenu:['Recommended',"What's New",'Price High to Low','Price Low to High']},
    {id:'8',ddname:'Time Slots',ddmenu:['Recommended',"What's New",'Price High to Low','Price Low to High']},
    {id:'9',ddname:'Date',ddmenu:['Recommended',"What's New",'Price High to Low','Price Low to High']}]

const showDropDowns=()=>{
    return dd.map((ddown) => (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', maxWidth: '300px', backgroundColor: '#ececec',flexWrap:'wrap',marginLeft:2,marginRight:2}}>
            <select 
                style={{ width: '200px',fontSize: '16px',color:"#666", backgroundColor: '#ececec', border: '1px solid #ccc', borderRadius: '4px', padding: '6px 10px'}}
            >
            {dd.map(() => (
                <option >{ddown.ddname}</option>
            ))}
        </select>
        </div>
    ));
};
return(

<div style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center'}}>
     <Paper style={{display:'flex',alignContent:'center',justifyContent:'center',width:'100%',height:'2.2%'}}>
<img src={dumdarteachers} style={{width:"22%"}}/>
     </Paper>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold',fontSize:30,letterSpacing:1,margin:20,fontFamily:'Merriweather',marginTop:"3%"}}>
         
          IIT-JEE Divison
        </div>  
          
        {/* <div style={{display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap',width:'100%',backgroundColor: '#ececec',padding:10,paddingLeft:120,paddingRight:70}}>
            {showDropDowns()}
            </div>    */}
        <div style={{display:'flex',flexWrap:'wrap', alignItems: 'center',margin:100, justifyContent: 'space-between',width:'100%'}}>
    {showAllItems()
    }
    </div>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold',fontSize:30,letterSpacing:1,margin:20,fontFamily:'Merriweather'}}>
          NEET Divison
        </div> 
        <div style={{display:'flex',flexWrap:'wrap', alignItems: 'center',margin:100, justifyContent: 'space-between',width:'100%'}}>
    {showAllItem()
    }
    </div>
    </div>
    )


}