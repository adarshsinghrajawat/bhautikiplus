import { ServerURL } from "../services/ServerServices";
import {Grid} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
export default function Bottom1(props)
{
  var bottomitems=[{id:'1',headingname:'HELP & INFORMATION',subheadingname:[<a  style={{ textDecoration: 'none',color: '#767676',display:'flex'}} href="https://www.google.com/maps/dir//Bhautiki+Plus+Edutech+Pvt.+Ltd,+Pramodam+Tower,+near+Bank+of+India,+Phool+Bagh,+Lashkar,+Gwalior,+Madhya+Pradesh+474002/@26.2120011,78.0891571,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3976c69d86021179:0x13f672cc2c004e06!2m2!1d78.1715586!2d26.2120246?entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D"><LocationOnIcon/><span style={{marginLeft:'5%'}}>How to reach Bhautiki Plus</span></a>,<span style={{ display:'flex',}}><CallIcon/><span style={{marginLeft:'5%'}}>+91 9109189492</span></span>,<span style={{display:'flex'}}><EmailIcon/><span style={{marginLeft:'5%'}}>info@bhautikiplus.com</span></span>]},
  {id:'2',headingname:'ABOUT Bhautiki Plus',subheadingname:["About us","Careers at Bhautiki Plus","Coorporate responsibility","Investors' site"]},
  {id:'3',headingname:'MORE FROM US',subheadingname:["Administration","Awards and Honours","Departments","Students","Help Improve the Bhautiki Plus Website"]},]
    var socialitems=[{id:'1',icon:'f11.png'},
      {id:'2',icon:'f12.png'},
      {id:'3',icon:'f13.png'}]

    var countryitems=[{id:'1',icon:'c1.png'},
    {id:'2',icon:'c2.png'},
    {id:'3',icon:'c3.png'},
    {id:'4',icon:'c4.png'},
    {id:'5',icon:'c5.png'},
    {id:'6',icon:'c6.png'},
    {id:'7',icon:'c7.png'},
    {id:'8',icon:'c8.png'},
    {id:'9',icon:'c9.png'},
    {id:'10',icon:'c10.png'}]

    const showAllSocialItems=()=>{
      return socialitems.map((item)=>{
          return <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:75}}>
                <div style={{ borderRadius: '50%', overflow: 'hidden', width:30, height:30, marginBottom:1, backgroundColor: '#f2f2f2',margin:5  }}>
                  <img src={`${ServerURL}/images/${item.icon}`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                  </div> 
                  </div>
      })
  }

    const showAllBottomItems = () => {
        return (<div style={{ justifyContent: 'space-between',paddingTop:10,paddingLeft:100,paddingRight:100}} >
            <Grid item xs={12} container spacing={20} width='100%'>
              {bottomitems.map((item) => (
                  <Grid item xs={3} >
                    <div style={{color:"#666",fontSize:13,fontWeight:'bold',marginBottom: 10 }}>{item.headingname}</div>
                    <ul style={{ listStyleType: 'none', padding: 0 ,color:"#767676",fontSize:12,marginBottom: 10 }}>
                      {item.subheadingname.map((subitem) => (
                        <li style={{ marginBottom:5}}>{subitem}</li>
                      ))}
                    </ul>
                  </Grid>
              ))}
              
              <Grid item xs={3}>
                <div style={{color:"#666",fontSize:13,fontWeight:'bold',marginBottom: 10 }}>SHOPPING FROM:</div>
                  <div style={{color:"#767676",marginBottom: 10,fontSize:12 }}>You're in <img src={`${ServerURL}/images/c0.png`} loading="lazy" style={{width:20, height:20, objectFit: 'cover' }}/>| CHANGE</div>
                <div style={{color:"#767676",marginBottom: 10 ,fontSize:12}}>Some of our international sites:</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',width:'100%',marginBottom: 10 }}>
                {showAllSocialItems()}
                </div>
              </Grid>
            </Grid>
            </div>
          )
      }

      const showAllCountryItems = () => {
        return countryitems.map((item) => (
          <div key={item.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 5 ,flexWrap:'wrap'}}>
            <img src={`${ServerURL}/images/${item.icon}`} loading="lazy" style={{ width:20, height:20, objectFit: 'cover' }} />
          </div>
        ))
      }
      
    
    
    return (
        <div style={{display: 'flex',flexWrap:'wrap',width:'100%'}}>
            <div style={{ display: 'flex', alignItems: 'center' ,width:'100%',height:'100%'}}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',width:'100%',backgroundColor: '#ececec',padding:25}}>
                {showAllBottomItems()}
                </div>
                </div>
        </div>
    )
}