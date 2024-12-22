import MainCategory from "../adminstrator/MainCategory";
import Footer1 from "../userinterface/Footer1";
import Header from "../userinterface/Header";
import SubCategory from "../adminstrator/SubCategory";
import Bottom1 from "../userinterface/Bottom1";
import SliderComponent1 from "../userinterface/SliderComponent1";
import DisplayAllMainCategory from "../adminstrator/DisplayAllMainCategory";
import TeamHome from "./TeamHome";
import Results from "../userinterface/Results";
import Cards from "../userinterface/Cards";
import CorePillars from "../userinterface/CorePillar";
import VisionAndMission from "../userinterface/VisionAndMission";
import OurOfferings from "../userinterface/OurOfferings";
import Trophy from "../userinterface/Trophy";
import Empowering from "../userinterface/Empowering";
import Review from "../../../src/components/userinterface/Review"
import Transition from "../userinterface/Transition";
export default function Home(props)
{
    return (
//         <div style={{backgroundColor:'#000'}}>
//   <div>
//     <Header/>
//     <SliderComponent1/>
//     <VisionAndMission/>

//              <CorePillars/>
//              <OurOfferings/>
//             <Cards/>
//             <Trophy/>
//              <Empowering/>
//             <Review/>
//             <Footer1/>
//             <Bottom1 />
//   </div>
//         </div>
        <div>
           <Header/>

         <div>
            <Transition/>
         <SliderComponent1 /> 
         </div>
    
         {/* <div style={{marginTop:30,width:'85%',display:'flex',justifyContent:'center',marginLeft:'8%'}}>
          <Results />
         </div> */}
         <div>
            <VisionAndMission/>

            <CorePillars/>
            <OurOfferings/>
            <div >           
                 <Cards/>
                 </div>

            <Trophy/>
            <Empowering/>
            <Review/>
         </div>
         {/* <MainCategory/>
        <SubCategory/> */}
        {/* <DisplayAllMainCategory/> */}
        {/* <div style={{margin:10,width:'98%',display:'flex',justifyContent:'center'}}>
     <Footer1 />
    </div> */}
        <div style={{backgroundColor: '#ececec',width:'100%',display:'flex',justifyContent:'space-between',padding:0,marginLeft:0,marginRight:0,}} >
         <Bottom1 />
        </div>
        {/* <TeamHome/> */}
</div>
    );
}