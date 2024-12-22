import { ServerURL } from "../services/ServerServices";
import { useEffect, useState } from "react";
import { getData } from "../services/ServerServices";
import { Zoom } from "react-awesome-reveal"; // For animation effects

export default function AcademicConsistencyTeam(props) {
    const [teamList, setTeamList] = useState([]);
  
    const fetchTeam = async () => {
      const result = await getData("category/fetch_all_academicconsistency_team");
      setTeamList(result.data);
    };
  
    useEffect(() => {
      fetchTeam();
    }, []);
  
    const showAllItems = () => {
      return teamList.map((item) => (
        <Zoom delay={200} key={item.id}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              margin: "20px",
              maxWidth: "400px",
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              borderRadius: "20px",
              transition: "transform 0.3s ease",
              background: "#fff",
              color: "#333",
              padding: "20px",
              textAlign: "center",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div>
              <img
                src={`${ServerURL}/images/${item.logo}`}
                loading="lazy"
                style={{
                  width: "80%",
                  height: "auto",
                  borderRadius: "50%",
                  padding: "10%",
                  transition: "transform 0.3s ease",
                }}
                alt={item.subsubcategoryname}
              />
            </div>
  
            <div
              style={{
                fontWeight: 700,
                fontSize: 32,
                letterSpacing: 0.5,
                color: "#333",
                fontFamily: "Josefin Sans",
                marginTop: "20px",
              }}
            >
              {item.facultyname}
            </div>
  
            <div
              style={{
                fontFamily: "Josefin Sans",
                color: "#777",
                fontSize: 20,
                fontWeight: 600,
                marginTop: "10px",
              }}
            >
              {item.collegename}
            </div>
  
            <div
              style={{
                fontFamily: "Josefin Sans",
                fontSize: 22,
                letterSpacing: 0.5,
                fontWeight: 500,
                marginTop: "10px",
              }}
            >
              {item.post}
            </div>
  
            <div
              style={{
                fontFamily: "Josefin Sans",
                fontSize: 18,
                letterSpacing: 0.5,
                color: "#8A2BE2",
                marginTop: "20px",
                fontStyle: "italic",
              }}
            >
              {item.description}
            </div>
          </div>
        </Zoom>
      ));
    };
  
    return (
      <div
        style={{
          background: "linear-gradient(135deg, #fff)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "40px",
        }}
      >
        <div
          className="team-heading"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: 50,
            letterSpacing: 1,
            margin: 20,
            fontFamily: "Merriweather",
            color: "#fff",
            marginTop: "3%",
            textAlign: "center",
            wordWrap: "break-word",
            lineHeight: 1.2,
          }}
        >
          Academic Consistency Team
        </div>
  
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "40px",
            width: "100%",
            margin: "40px 0",
          }}
        >
          {showAllItems()}
        </div>
  
        {/* Responsive CSS */}
        <style>
          {`
            @media screen and (max-width: 768px) {
              .team-heading {
                font-size: 36px;
                line-height: 1.3;
                text-align: center;
              }
            }
  
            @media screen and (max-width: 480px) {
              .team-heading {
                font-size: 28px;
                line-height: 1.4;
                text-align: center;
              }
            }
          `}
        </style>
      </div>
    );
  }
  
