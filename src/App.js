import MainCategory from "./components/adminstrator/MainCategory";
import Footer1 from "./components/userinterface/Footer1";
import Header from "./components/userinterface/Header";
import SubCategory from "./components/adminstrator/SubCategory";
import Bottom1 from "./components/userinterface/Bottom1";
import SliderComponent1 from "./components/userinterface/SliderComponent1";
import DisplayAllMainCategory from "./components/adminstrator/DisplayAllMainCategory";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import TeamHome from "./components/userinterface/TeamHome";
import Results from "./components/userinterface/Results";

function App() {
  return (
    <div>
     
     <Header/>
     <div style={{marginTop:20,width:'98%',display:'flex',justifyContent:'center'}}>
     <SliderComponent1 /> 
     </div>

     <div style={{marginTop:30,width:'85%',display:'flex',justifyContent:'center',marginLeft:'8%'}}>
      <Results />
     </div>
     <MainCategory/>
    <SubCategory/>
    <DisplayAllMainCategory/>
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

export default App;
