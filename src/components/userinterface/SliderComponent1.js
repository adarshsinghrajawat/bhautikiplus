
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ServerURL } from "../services/ServerServices";
import useMediaQuery from '@mui/material/useMediaQuery'
import {useTheme} from '@mui/material/styles'
export default function SliderComponent1() {

  const theme=useTheme();
  const md_matches = useMediaQuery(theme.breakpoints.down('md'));
  const sm_matches = useMediaQuery(theme.breakpoints.down('sm'));

  var settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    autoplaySpeed:3000,
    autoPlay:true,
    
    slidesToShow: md_matches?1:sm_matches?1:2,
    slidesToScroll: 1
  };
  var data=[{icon:"Bhautikibuilding3.png"},{icon:"bhautiki3.png"},{icon:"Bhautiki2.png"}]
  const showSlider=()=>{
   return data.map((item)=>{
    return <div><img src={`${ServerURL}/images/${item.icon}`} style={{width:'100%',height:500}}/></div>
   })

  }
  return (
    <div style={{width:'100%',marginLeft:'2%'}}>
    <Slider {...settings}>
       {showSlider()}
    </Slider>
    </div>
  );
}