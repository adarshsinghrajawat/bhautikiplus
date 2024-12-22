import MainCategory from "./components/adminstrator/MainCategory";
import Footer1 from "./components/userinterface/Footer1";
import Header from "./components/userinterface/Header";
import SubCategory from "./components/adminstrator/SubCategory";
import Bottom1 from "./components/userinterface/Bottom1";
import SliderComponent1 from "./components/userinterface/SliderComponent1";
import DisplayAllMainCategory from "./components/adminstrator/DisplayAllMainCategory";
import TeamHome from "./components/Screens/TeamHome";
import Results from "./components/userinterface/Results";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Home from "./components/Screens/Home";
import Programs from "./components/userinterface/Programs";
import Team from "./components/adminstrator/Team";
import DisplayAllTeam from "./components/adminstrator/DisplayAllTeam";
import Dashboard from "./components/adminstrator/AdminDashboard"
import AdminDashboard from "./components/adminstrator/AdminDashboard";
import RegisterNow from "./components/userinterface/RegisterNow";
import SubSubcategoryComponent from "./components/userinterface/SubSubcategoryComponent";
import Feedback from "./components/adminstrator/Feedback";
import IITjee from "./components/Screens/IITjee";
import Courses from "./components/adminstrator/Courses";
import Gallery from "./components/adminstrator/Gallery";
// import IITResult from "./components/Screens/IitResult2023";
import Neet from "../src/components/Screens/Neet"
import FoundationXandIX from "./components/Screens/FoundationXandIX";
import OnlineTablet from "./components/Screens/OnlineTablet";
import Result from "./components/adminstrator/Result";
// import IitResult2023 from "./components/Screens/IitResult2023";
import GalleryComponent from "./components/Screens/GalleryComponent";
import NeetResult from "./components/Screens/NeetResult";
import IITResult from "./components/Screens/IITResult";
import GoogleMap from "./components/Screens/GoogleMap";
function App() {
  return (
    <div>
       {/* <Header/>
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
    </div> */}
    {/* <TeamHome/> */}
    <Router>
    <Routes>
      <Route element={<Home/>} path={"/home"} />
      <Route element={<MainCategory/>} path={"/maincategory"} />
      <Route element={<TeamHome/>} path={"/teamhome"} />
      <Route element={<MainCategory/>} path={"/maincategory"} />
      <Route element={<DisplayAllMainCategory/>} path={"/displayallmaincategory"} />
      <Route element={<Programs/>}  path={"/programs"}/>
      <Route element={<Team/>}  path={"/team"}/>
      <Route element={<DisplayAllTeam/>}  path={"/displayallteam"}/>
      <Route element={<RegisterNow/>}  path={"registernow"}/>
      <Route element={<AdminDashboard/>}  path={"/admindashboard/*"}/>
      <Route element={<SubSubcategoryComponent/>}  path={"/teampage"}/>
      <Route element={<Feedback/>}  path={"/feedback"}/>
      <Route element={<IITjee/>}  path={"/iitjee"}/>
      <Route element={<Courses/>}  path={"/courses"}/>
      <Route element={<Neet/>}  path={"/neet"}/>
      <Route element={<FoundationXandIX/>}  path={"/foundation"}/>
      <Route element={<OnlineTablet/>}  path={"/onlinetablet"}/>
      <Route element={<NeetResult/>}  path={"/neetresult"}/>
    <Route element={<Result/>} path={'/resultform'}/>
    <Route element={<Gallery/>} path={'/gallery'}/>
    <Route element={<IITResult/>} path={'/iitresult'}/>
    <Route element={<GoogleMap/>} path={'/googlemap'}/>
    <Route element={<GalleryComponent/>} path={'/gallerycomponent'}/>
      
    </Routes>
    </Router>
    
    </div>
  );
}

export default App;
