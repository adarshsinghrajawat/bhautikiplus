import React from 'react';
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { ServerURL } from "../services/ServerServices";
import Footer1 from './Footer1';

export default function Bottom1(props) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));

    var bottomitems = [
        {
            id: '1', 
            headingname: 'HELP & INFORMATION', 
            subheadingname: [
                <a 
                    key="location" 
                    style={{ 
                        textDecoration: 'none', 
                        color: '#fff', 
                        display: 'flex',
                        fontSize: '16px',
                        transition: 'all 0.3s ease',
                    }} 
                    href="https://www.google.com/maps/dir//Bhautiki+Plus+Edutech+Pvt.+Ltd,+Pramodam+Tower,+near+Bank+of+India,+Phool+Bagh,+Lashkar,+Gwalior,+Madhya+Pradesh+474002"
                    onMouseEnter={(e) => e.target.style.color = '#f39c12'}
                    onMouseLeave={(e) => e.target.style.color = '#fff'}
                >
                    <LocationOnIcon style={{ fontSize: '22px', marginRight: '10px' }} />
                    <span>How to reach Bhautiki Plus</span>
                </a>,
                <span key="call" style={{ display: 'flex', fontSize: '16px', marginTop: '12px' }}>
                    <CallIcon style={{ fontSize: '22px', marginRight: '10px' }} />
                    <span>+91 9109189492</span>
                </span>,
                <span key="email" style={{ display: 'flex', fontSize: '16px', marginTop: '12px' }}>
                    <EmailIcon style={{ fontSize: '22px', marginRight: '10px' }} />
                    <span>info@bhautikiplus.com</span>
                </span>
            ]
        },
        {
            id: '2', 
            headingname: 'ABOUT Bhautiki Plus', 
            subheadingname: [
                "About us", 
                "Careers at Bhautiki Plus", 
                "Corporate responsibility", 
                "Investors' site"
            ]
        },
        {
            id: '3', 
            headingname: 'MORE FROM US', 
            subheadingname: [
                "Administration", 
                "Awards and Honours", 
                "Departments", 
                "Students", 
                "Help Improve the Bhautiki Plus Website"
            ]
        }
    ];

    var socialitems = [
        {id: '1', icon: 'f11.png'},
        {id: '2', icon: 'f12.png'},
        {id: '3', icon: 'f13.png'}
    ];

    var countryitems = [
        {id: '1', icon: 'c1.png'},
        {id: '2', icon: 'c2.png'},
        {id: '3', icon: 'c3.png'},
        {id: '4', icon: 'c4.png'},
        {id: '5', icon: 'c5.png'},
        {id: '6', icon: 'c6.png'},
        {id: '7', icon: 'c7.png'},
        {id: '8', icon: 'c8.png'},
        {id: '9', icon: 'c9.png'},
        {id: '10', icon: 'c10.png'}
    ];

    const showAllSocialItems = () => {
        return socialitems.map((item) => (
            <div 
                key={item.id}
                style={{
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    width: 75, 
                    transition: 'all 0.3s ease',
                }}
            >
                <div 
                    style={{ 
                        borderRadius: '50%', 
                        overflow: 'hidden', 
                        width: 40, 
                        height: 40, 
                        marginBottom: 1, 
                        backgroundColor: '#f2f2f2', 
                        margin: 10, 
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.3s ease',
                    }}
                >
                    <img 
                        src={`${ServerURL}/images/${item.icon}`} 
                        loading="lazy" 
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover' 
                        }}
                        alt={`Social icon ${item.id}`}
                    />
                </div>
            </div>
        ));
    };

    const showAllBottomItems = () => {
        return (
            <div
                style={{ 
                    justifyContent: 'space-between', 
                    
                    paddingTop: 10, 
                    paddingLeft: isMobile ? 10 : 100, 
                    paddingRight: isMobile ? 10 : 100,
                    color: '#fff', 
                }}
            >
                <div style={{ marginBottom: '4%' }}>
                    <Footer1 />
                </div>
                <Grid container spacing={isMobile ? 2 : 6} width="100%">
                    {bottomitems.map((item, index) => (
                        <Grid item xs={12} sm={6} md={3} key={item.id}>
                            <div 
                                style={{
                                    color: "#fff", 
                                    fontSize: isMobile ? '16px' : '18px', 
                                    fontWeight: '600', 
                                    marginBottom: 20,
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    color: '#f39c12'
                                }}
                            >
                                {item.headingname}
                            </div>
                            <ul 
                                style={{ 
                                    listStyleType: 'none', 
                                    padding: 0, 
                                    color: "#fff", 
                                    fontSize: '14px', 
                                    marginBottom: 20 
                                }}
                            >
                                {item.subheadingname.map((subitem, subIndex) => (
                                    <li 
                                        key={subIndex} 
                                        style={{ 
                                            marginBottom: 12, 
                                            cursor: 'pointer', 
                                            transition: 'all 0.3s ease' 
                                        }}
                                        onMouseEnter={(e) => e.target.style.color = '#f39c12'}
                                        onMouseLeave={(e) => e.target.style.color = '#fff'}
                                    >
                                        {subitem}
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                    <Grid item xs={12} sm={6} md={3}>
                        <div 
                            style={{
                                color: "#fff", 
                                fontSize: '18px', 
                                fontWeight: '600', 
                                marginBottom: 20,
                                color: '#f39c12'
                            }}
                        >
                            FROM:
                        </div>
                        <div 
                            style={{
                                color: "#fff", 
                                marginBottom: 20, 
                                fontSize: '14px',
                                fontWeight: '400',
                                textAlign: 'center'
                            }}
                        >
                            You're in <img 
                                src={`${ServerURL}/images/c0.png`} 
                                loading="lazy" 
                                style={{
                                    width: 20, 
                                    height: 20, 
                                    objectFit: 'cover' 
                                }} 
                                alt="Country flag"
                            /> | CHANGE
                        </div>
                        <div 
                            style={{
                                color: "#fff", 
                                marginBottom: 20, 
                                fontSize: '14px',
                                fontWeight: '400',
                                textAlign: 'center'
                            }}
                        >
                            Some of our Socialy sites:
                        </div>
                        <div 
                            style={{
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'space-between', 
                                width: '100%', 
                                marginBottom: 20 
                            }}
                        >
                            {showAllSocialItems()}
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    };

    return (
        <div 
            style={{
                display: 'flex', 
                flexWrap: 'wrap', 
                width: '100.01%', 
                //backgroundColor: '#333', 
               // padding: '40px 0'
            }}
        >
            <div 
                style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    width: '100%', 
                    backgroundColor: '#000', 
                    padding: isMobile ? '20px 10px' : '30px 20px',
                    boxShadow: '0px -10px 30px rgba(0, 0, 0, 0.3)'
                }}
            >
                {showAllBottomItems()}
            </div>
        </div>
    );
}
