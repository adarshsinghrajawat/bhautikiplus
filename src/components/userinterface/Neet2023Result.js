import React, { useEffect, useState } from 'react';
import { ServerURL } from "../services/ServerServices";
import { getData } from "../services/ServerServices";
import { Zoom } from "react-awesome-reveal";
import DamdarTeacher from './DamdarTeachers';
export default function Neet2023Result() {
    const [resultList, setResultList] = useState([]);

    const fetchResults = async () => {
        const result = await getData("category/fetch_result");
        console.log('Results fetched:', result);
        setResultList(result.data);
    };

    useEffect(() => {
        fetchResults();
    }, []);

    const renderResults = () => {
        return resultList.map((item, index) => (
            <Zoom triggerOnce key={item.id}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#ffffff",
                        borderRadius: "15px",
                        padding: "20px",
                        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                        margin: "15px",
                        transition: "transform 0.4s ease, box-shadow 0.4s ease",
                        maxWidth: "100%", // Ensure box scales well
                        cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.boxShadow = "0 12px 30px rgba(0, 0, 0, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
                    }}
                >
                    <img
                        src={`${ServerURL}/images/${item.logo}`}
                        alt={`Result ${index + 1}`}
                        loading="lazy"
                        style={{
                            width: "100%",
                            maxWidth: "250px", // Restrict maximum size
                            height: "auto",
                            marginBottom: "15px",
                            border: "6px solid #f0f4f8",
                            transition: "border 0.4s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.border = "6px solid #4a90e2")}
                        onMouseLeave={(e) => (e.currentTarget.style.border = "6px solid #f0f4f8")}
                    />
                    <div style={{ textAlign: "center", color: "#333" }}>
                        <h3
                            style={{
                                fontFamily: "Josefin Sans, sans-serif",
                                fontSize: "1.5rem",
                                fontWeight: "700",
                                margin: "10px 0",
                                color: "#1c0d5a",
                            }}
                        >
                            {item.studentname || "Student Name"}
                        </h3>
                        <p
                            style={{
                                fontFamily: "Lato, sans-serif",
                                fontSize: "1rem",
                                color: "#666",
                                margin: "0",
                            }}
                        >
                            {item.parentname || "Achieved Milestone"}
                        </p>
                    </div>
                </div>
            </Zoom>
        ));
    };

    return (

        <div
            style={{
                background: "linear-gradient(to bottom, #000000, #1c1c1c)",
                padding: "50px 0",
            }}
        >
            <div
                style={{
                    textAlign: "center",
                    marginBottom: "50px",
                    padding: "0 20px", // Add padding for small screens
                }}
            >
                <h1
                    style={{
                        fontFamily: "Josefin Sans",
                        fontSize: "3rem", // Reduce size for responsiveness
                        fontWeight: "700",
                        textTransform: "uppercase",
                        color: "#ffffff",
                        letterSpacing: "2px",
                    }}
                >
                    Our Stellar IIT Results
                </h1>
                <p
                    style={{
                        fontFamily: "Lato",
                        fontSize: "1.2rem", // Adjust font size
                        color: "#dfe6e9",
                        maxWidth: "800px",
                        margin: "20px auto",
                    }}
                >
                    Celebrate the success of our students who achieved remarkable milestones with their hard work and dedication.
                </p>
            </div>
    
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", // Adjust column size
                    gap: "20px",
                    justifyContent: "center",
                    padding: "0 20px",
                }}
            >
                {renderResults()}
            </div>

            <div style={{ textAlign: "center", marginTop: "40px" }}>
                <button
                    style={{
                        backgroundColor: "#ffffff",
                        color: "#004e92",
                        border: "none",
                        padding: "15px 30px",
                        borderRadius: "25px",
                        cursor: "pointer",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "600",
                        fontSize: "1rem", // Smaller button font
                        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
                        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#004e92";
                        e.currentTarget.style.color = "#ffffff";
                        e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "#ffffff";
                        e.currentTarget.style.color = "#004e92";
                        e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.2)";
                    }}
                >
                    View All Results
                </button>
            </div>
        </div>
    );
}
