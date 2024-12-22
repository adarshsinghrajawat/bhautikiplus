import Header from "./Header";
import Footer1 from "./Footer1";
import Bottom1 from "./Bottom1";
import SubSubcategoryComponent from "./SubSubcategoryComponent";
import { useLocation } from "react-router-dom";
import { postData } from "../services/ServerServices";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo1 from "../../assets/logo1.png";

export default function Programs(props) {
    const { mainHeading, sectionHeading,program,description } = props;

    return (
        <div style={{ background: '#f0f4f8', padding: '30px 0' }}>
            {/* Top Header Section */}
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5%', marginBottom: '5%'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <span style={{
                        color: '#1c0d5a',
                        fontFamily: 'Josefin Sans, sans-serif',
                        fontWeight: 700,
                        fontSize: '3.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        padding: '10px',
                        background: 'linear-gradient(135deg, #00c6ff, #0072ff)',
                        color: 'transparent',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text'
                    }}>
                        There are many reasons to Join Bhautiki Plus offline programs
                    </span>
                </div>
            </div>

            {/* Bullet Points Section */}
            <div style={{
                fontWeight: 400, marginTop: '5%', lineHeight: 2, display: 'flex', justifyContent: 'center'
            }}>
                <div style={{ maxWidth: '900px', width: '100%' }}>
                    <div style={{
                        display: 'flex', justifyContent: 'space-between', gap: '20px', maxWidth: '900px',
                        marginBottom: '2%', padding: '0 20px', flexWrap: 'wrap',
                    }}>
                        <ul style={{
                            flex: 1, padding: 0, fontFamily: 'Lato, sans-serif', fontSize: '1.1rem', color: '#333',
                            listStyle: 'none', lineHeight: '1.8', fontWeight: '500', minWidth: '250px',
                        }}>
                            <li>👨‍🏫 Director himself is teaching and available at the center</li>
                            <li>💬 Interactive Classes with involvement and Subject-Depth</li>
                            <li>🎓 Highly Qualified Teachers with both Experience and Energy</li>
                            <li>💸 One-month Refund Policy</li>
                        </ul>
                        <ul style={{
                            flex: 1, padding: 0, fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', color: '#333',
                            listStyle: 'none', lineHeight: '1.8', fontWeight: '500', minWidth: '250px',
                        }}>
                            <li>🧑‍🏫 Fixed Teachers for the entire session</li>
                            <li>🌱 Dedicated Mentors to support holistic growth</li>
                            <li>🔄 360-degree Learning and Management System</li>
                            <li>🏫 Best Infrastructure with state-of-the-art facilities</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Section Title for IIT-JEE Programs */}
            <div style={{
                display: 'flex', marginTop: '5%', marginBottom: '5%', justifyContent: 'center', width: '100%',
            }}>
                <span style={{
                    color: '#1c0d5a', fontFamily: 'Josefin Sans, sans-serif', fontWeight: 700, fontSize: '2.5rem',
                    letterSpacing: '2px', textTransform: 'uppercase', textAlign: 'center', padding: '0 20px',
                    background: 'linear-gradient(135deg, #FF7E5F, #D9705B)', backgroundClip: 'text', color: 'transparent',
                    WebkitBackgroundClip: 'text'
                }}>
                    {sectionHeading}
                </span>
            </div>

            {/* Programs List Section */}
            <div style={{
                display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginBottom: '40px',
            }}>
                {/* Program Card Example */}
                <div style={{
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                    padding: '20px', background: '#fff', boxShadow: '0 6px 12px rgba(0,0,0,0.1)', borderRadius: '15px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease', width: '300px', height: '400px', margin: '15px',
                    textAlign: 'center', cursor: 'pointer', flexGrow: 1,
                }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>

                    <img src={logo1} alt="IIT-JEE Program" style={{
                        width: '30%', height: 'auto', borderRadius: '5px', marginBottom: '15px',
                    }} />
                    <h3 style={{
                        fontFamily: 'Josefin Sans, sans-serif', fontSize: '1.5rem', color: '#333', marginBottom: '10px',
                        fontWeight: 600,
                    }}>{program}</h3>
                    <p style={{
                        fontFamily: 'Lato, sans-serif', fontSize: '1rem', color: '#555', marginBottom: '20px',
                        lineHeight: '1.5',
                    }}>
                        {description}
                    </p>
                    <button style={{
                        backgroundColor: '#FF7E5F', color: '#fff', border: 'none', padding: '10px 20px',
                        borderRadius: '30px', cursor: 'pointer', fontFamily: 'Poppins, sans-serif', fontWeight: 500,
                        transition: 'background-color 0.3s ease',
                    }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#D9705B'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF7E5F'}>
                        Learn More
                    </button>
                </div>

                {/* Add more cards or dynamically load based on data */}
            </div>

            {/* Add responsive styles using CSS */}
            <style>
                {`
                    @media (max-width: 768px) {
                        .top-header span {
                            font-size: 2.5rem;
                            letter-spacing: 1px;
                        }

                        .program-card {
                            width: 100%;
                            margin: 10px 0;
                        }

                        .program-card img {
                            width: 100%;
                            height: auto;
                        }

                        .bullet-point-ul {
                            font-size: 1rem;
                            margin-bottom: 10px;
                        }
                    }

                    @media (max-width: 480px) {
                        .top-header span {
                            font-size: 2rem;
                        }

                        .program-card {
                            width: 100%;
                            margin: 15px 0;
                            height: auto;
                        }

                        .program-card h3 {
                            font-size: 1.2rem;
                        }

                        .program-card p {
                            font-size: 0.9rem;
                        }
                    }
                `}
            </style>
        </div>
    );
}
