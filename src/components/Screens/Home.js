import MainCategory from "../adminstrator/MainCategory";
import Footer1 from "../userinterface/Footer1";
import Header from "../userinterface/Header";
import SubCategory from "../adminstrator/SubCategory";
import Bottom1 from "../userinterface/Bottom1";
import SliderComponent1 from "../userinterface/SliderComponent1";
import DisplayAllMainCategory from "../adminstrator/DisplayAllMainCategory";
import TeamHome from "../userinterface/TeamHome";
import Results from "../userinterface/Results";

export default function Home(props)
{
    return (
        <div>
           <Header/>
         <div style={{marginTop:20,width:'100%',display:'flex',justifyContent:'center'}}>
         <SliderComponent1 /> 
         </div>
    
         <div style={{marginTop:30,width:'85%',display:'flex',justifyContent:'center',marginLeft:'8%'}}>
          <Results />
         </div>
         {/* <MainCategory/>
        <SubCategory/> */}
        {/* <DisplayAllMainCategory/> */}
        <div style={{margin:10,width:'100%',display:'flex',justifyContent:'center'}}>
         <Footer1 />
        </div>
        <div style={{backgroundColor: '#ececec',width:'100%',display:'flex',justifyContent:'space-between',padding:0,marginLeft:0,marginRight:0,}} >
         <Bottom1 />
        </div>
        {/* <TeamHome/> */}
</div>
    );
}