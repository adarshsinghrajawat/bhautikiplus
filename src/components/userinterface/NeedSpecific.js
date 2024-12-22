import React from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

// Styled component for the container
const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center", // Vertically center
  alignItems: "center",      // Horizontally center
  height: "20vh",           // Full viewport height
  backgroundColor: "#000", // Vibrant background color
 // borderRadius: "20px",      // Rounded corners for smooth edges
  boxShadow: "0px 10px 50px rgba(0, 0, 0, 0.2)", // Shadow for depth
  textAlign: "center",       // Ensure text is centered
  padding: "30px",           // Padding for spacing
});

// Styled component for the contact text
const ContactText = styled(Typography)({
  fontSize: "2.5em", 
  margin:'5%',
  fontFamily:'josefin-sans',         // Large font size to grab attention
  fontWeight: "bold",        // Bold font weight
  color: "#fff",             // White color for contrast with the background
  textShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)", // Glowing text effect
  marginBottom: "40px",      // Space below the text
  "@media (max-width: 768px)": {
    fontSize: "48px",        // Slightly smaller font size on medium screens
  },
  "@media (max-width: 480px)": {
    fontSize: "36px",        // Even smaller font size on smaller screens
  },
});

export default function NeedSpecific() {
  return (
    <Container>
      <ContactText>
        Need a specific type of help?
      </ContactText>
    </Container>
  );
}
