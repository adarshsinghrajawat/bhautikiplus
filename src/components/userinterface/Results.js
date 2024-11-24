import { ServerURL } from "../services/ServerServices";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { createRef,useRef } from "react";
import {useTheme} from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
export default function Results(props)
{    

   var items=[{id:'1',college:'B.Tech, NIT Bhopal (Gold Medalist)',post:'Director, IIT Division & HOD,Chemistry',subsubcategoryname:'Mentored AIR 31, AIR 39, AIR 110 Teaching experience of 13 Years',name:'Er. Yogesh Pathak',icon:'r1.jpg'},
      {id:'2',college:'B.Tech. IIT Delhi (AIR 175)',post:'HOD, Physics',subsubcategoryname:"Mentored AIR 3, AIR 18, AIR 220 Teaching experience of 10 Years",name:'Er. Deepak Bhardwaj',icon:'r2.jpg'},
      {id:'3',college:'B.Tech. IIT Dhanbad',post:'HOD, Mathematics',subsubcategoryname:'Mentored AIR 9, AIR 59 Teaching experience of 15 Years',name:'Er. Sandeep Agrawal',icon:'r3.jpg'},
      {id:'4',college:'B.Tech. NIT Bhopal',post:'Founder Bhautiki Plus',subsubcategoryname:'Senior Faculty PhysicsTeaching experience of 14 years',name:'Er. Ritesh Goel',icon:'r4.jpg'},
      {id:'4',college:'B.Tech. IIT Roorkee',subsubcategoryname:'Senior Faculty, Mathematics Teaching experience of 11 Years',name:'Er. Nimish Saraf',icon:'r5.jpg'},
      {id:'4',college:'B.Tech. NIT Bhopal',subsubcategoryname:'Senior Faculty, Chemistry Teaching experience of 8 Years',name:'Er. Ankit Chouksey',icon:'r6.jpg'},
      // {id:'4',college:'B.Tech. NIT Bhopal',subsubcategoryname:'Senior Faculty, Physics Teaching experience of 4 Years',name:'Er. Sudhanshu Joshi',icon:'sudhanshusir.png'},
  ]

   const theme=useTheme();
   const md_matches = useMediaQuery(theme.breakpoints.down('md'));
   const sm_matches = useMediaQuery(theme.breakpoints.down('sm'));
 
   const sldr=useRef()
   
    // var items=props.data
   

     var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplaySpeed:3000,
      autoPlay:true,
      slidesToShow: md_matches?2:sm_matches?1:4,
      slidesToScroll: 1,
      arrows:false
    };


    const handleNext=()=>{
      sldr.current.slickNext()
    }

    const handlePrevious=()=>{
      sldr.current.slickPrev()
    }

   const showAllItems=()=>{
    return items.map((item)=>{
       return <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
             <div>
                <img src={`${ServerURL}/images/${item.icon}`} loading="lazy" style={{width:'90%',height:'100%',marginLeft:'15%'}} />
             </div>
             {/* <div style={{fontWeight:'bold',fontSize:20,letterSpacing:0.5}} >
                {item.subcategoryname}
             </div> */}
             {/* <div style={{fontWeight:400,fontSize:16,letterSpacing:0.5}}>
                {item.description}
             </div> */}
       </div>

    })

   }
   

    return(   <div style={{width:'100%',position:'relative'}}>
      <div style={{cursor:'pointer',position:'absolute',left:'-5%',top:'34%',zIndex:3}} onClick={handlePrevious}><ArrowBackIosIcon style={{color:'grey',fontSize:'6vw'}}/></div>
    <Slider ref={sldr} {...settings}>
     {showAllItems()}
     </Slider>
     <div style={{cursor:'pointer',position:'absolute',right:'-4%',top:'34%',zIndex:3}}><ArrowForwardIosIcon style={{color:'grey',fontSize:'6vw'}} onClick={handleNext}/></div>
    </div>)
}