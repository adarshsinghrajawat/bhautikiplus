import Header from "./Header";
import Footer1 from "./Footer1";
import Bottom1 from "./Bottom1";
import { useEffect, useState } from "react";
import { Divider, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getData } from "../services/ServerServices";

export default function Class11Neet() {
  const navigate = useNavigate();

  const [examDetailsneetXI, setExamDetailsneetXI] = useState([]);
  const [examDetailsneetXII, setExamDetailsneetXII] = useState([]);
  const [examDetailsneetDroppers, setExamDetailsneetDroppers] = useState([]);

  const fetchExamDetails = async () => {
    const resultXI = await getData("category/fetch_neetexamdetails_XI");
    const resultXII = await getData("category/fetch_neetxamdetails_XII");
    const resultDroppers = await getData(
      "category/fetch_neetexamdetails_droppers"
    );
    setExamDetailsneetXI(resultXI?.data || []);
    setExamDetailsneetXII(resultXII?.data || []);
    setExamDetailsneetDroppers(resultDroppers?.data || []);
  };

  useEffect(() => {
    fetchExamDetails();
  }, []);

  const renderPrograms = (programs, heading, bgColor) => {
    return (
      <div style={{ background: bgColor, padding: "5% 0" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <span
            style={{
              color: "#1c0d5a",
              fontFamily: "Questrial",
              fontWeight: 800,
              fontSize: "3rem",
              letterSpacing: "2px",
            }}
          >
            {heading}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2%",
          }}
        >
          {programs.map((item) => (
            <div
              key={item.exdetailsid}
              style={{
                background: "#EFF7FB",
                width: "40%",
                minWidth: "280px",
                padding: "2% 2%",
                borderRadius: "12px",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
                margin: "1%",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <div
                style={{
                  backgroundColor: "#fbc531",
                  padding: "10% 0",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "bolder",
                    fontSize: "1.4rem",
                    color: "#fff",
                  }}
                >
                  {item.programnames}
                </span>
              </div>
              <Divider orientation="horizontal" flexItem style={{ margin: "1rem 0" }} />
              <div style={{ padding: "3%" }}>
                <b>Who should join:</b> <br />
                {item.joining}
              </div>
              <Divider orientation="horizontal" flexItem style={{ margin: "1rem 0" }} />
              <div style={{ padding: "3%" }}>
                <b>Duration:</b> <br />
                {item.duration}
              </div>
              <Divider orientation="horizontal" flexItem style={{ margin: "1rem 0" }} />
              <div style={{ padding: "3%" }}>
                <b>Entrance Exam Date:</b> <br />
                {item.examdate || "To be announced"}
                <div style={{ textAlign: "right" }}>
                  <Button
                    variant="contained"
                    size="large"
                    color="success"
                    style={{
                      marginTop: "1rem",
                      padding: "12px 25px",
                      fontSize: "1.1rem",
                      borderRadius: "25px",
                      textTransform: "none",
                    }}
                    onClick={() => {
                      // Navigate based on whether examdate is available
                      if (item.examdate) {
                        navigate("/registernow");
                      } else {
                        navigate("/comingsoon");
                      }
                    }}
                  >
                    {item.examdate ? "Register Now" : "Soon..."}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>
      <div style={{background: "linear-gradient(135deg, #ff7f50, #ffeaa7)"}}>{renderPrograms(examDetailsneetXI, "Class XI")}</div>
      {renderPrograms(examDetailsneetXII, "Class XII", "#c7ecee")}
      {renderPrograms(examDetailsneetDroppers, "Droppers", "#E0E0E0")}
    </div>
  );
}

