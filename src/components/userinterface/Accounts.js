import { ServerURL } from "../services/ServerServices";
import { useEffect, useState } from "react";
import { getData } from "../services/ServerServices";
import { Zoom } from "react-awesome-reveal"; // For animation effects

export default function AccountsTeam(props) {
    var item = [
      { id: '1', subsubcategoryname: 'Teaching experience of 26 Years', name: 'Er. Sanjeev Agnihotri', post: 'HOD, Chemistry', icon: 'sanjeevsir.png' },
      { id: '2', subsubcategoryname: "Teaching experience of 22 Years", name: 'Mr. Rajeev Gupta', post: 'Senior Faculty, Chemistry', icon: 'rajeevsir.png' },
      { id: '3', college: 'B.Tech. NIT Bhopal', subsubcategoryname: 'Teaching experience of 14 years', post: 'Senior Faculty Physics', name: 'Er. Ritesh Goel', icon: 'riteshsir.png' },
      { id: '4', college: 'M.Sc. Physics ,IIT Bombay', subsubcategoryname: 'Department of Physics', name: 'Mr. Pawan Kumar Garg', post: 'Faculty', icon: 'pawansir.png' },
      { id: '5', subsubcategoryname: 'Teaching experience of 27 Years', name: 'Dr. Brijesh Lavania', post: 'HOD, Botany', icon: 'brijeshsir.png' },
      { id: '6', subsubcategoryname: 'Teaching experience of 10 Years', name: 'Mr. Jagraj Singh', post: 'Senior Faculty ,Botany', icon: 'jagrajsir.png' },
      { id: '7', subsubcategoryname: 'Teaching experience of 19 Years', name: 'Dr. L.B. Patel', post: 'HOD, Zoology', icon: 'patelsir.png' },
      { id: '8', subsubcategoryname: 'Teaching experience of 8 Years', name: 'Mr. Anindya Paul', post: 'Senior Faculty, Zoology', icon: 'anindyasir.png' },
    ];
  
    const [teamList, setTeamList] = useState([]);
  
    const fetchTeam = async () => {
      var result = await getData('category/fetch_all_accounts_team');
      setTeamList(result.data);
    }
  
    useEffect(() => {
      fetchTeam();
    }, []);
  
    const showAllItems = () => {
      return teamList.map((item) => (
        <Zoom delay={200} key={item.id}>
          <div style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '20px',
            maxWidth: '400px', boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)', borderRadius: '20px', transition: 'transform 0.3s ease',
            background: '#fff', color: '#333', padding: '20px', textAlign: 'center'
          }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
  
            <div>
              <img src={`${ServerURL}/images/${item.logo}`} loading="lazy" style={{
                width: "80%", height: "auto", borderRadius: '50%', padding: '10%', transition: 'transform 0.3s ease'
              }} alt={item.subsubcategoryname} />
            </div>
  
            <div style={{
              fontWeight: 700, fontSize: 32, letterSpacing: 0.5, color: '#333', fontFamily: 'Josefin Sans', marginTop: '20px'
            }}>
              {item.facultyname}
            </div>
  
            <div style={{
              fontFamily: 'Josefin Sans', color: '#777', fontSize: 20, fontWeight: 600, marginTop: '10px'
            }}>
              {item.collegename}
            </div>
  
            <div style={{
              fontFamily: 'Josefin Sans', fontSize: 22, letterSpacing: 0.5, fontWeight: 500, marginTop: '10px'
            }}>
              {item.post}
            </div>
  
            <div style={{
              fontFamily: 'Josefin Sans', fontSize: 18, letterSpacing: 0.5, color: '#8A2BE2', marginTop: '20px', fontStyle: 'italic'
            }}>
              {item.description}
            </div>
          </div>
        </Zoom>
      ));
    }
  
    return (
      <div style={{
        background: 'linear-gradient(135deg, #fff)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '40px'
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 50, letterSpacing: 1, margin: 20, fontFamily: 'Merriweather',  color: "#fff", marginTop: "3%", whiteSpace: 'nowrap'
        }}>
          
    Account Team
        </div>
  
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '40px', width: '100%', margin: '40px 0'
        }}>
          {showAllItems()}
        </div>
  
        {/* For mobile screens */}
        <style>
          {`
            @media screen and (max-width: 768px) {
              .team-card {
                flex-direction: column;
                max-width: 100%;
                margin: 10px;
              }
              .team-card img {
                width: 70%;
                height: auto;
              }
              .team-card div {
                font-size: 18px;
              }
              .team-heading {
                font-size: 32px;
                letter-spacing: 0.5px;
              }
            }
          `}
        </style>
      </div>
    );
  }
  
