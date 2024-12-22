import React from "react";
import { styled } from "@mui/material/styles";
import { Paper, Typography } from "@mui/material";

// Styled component for the container
const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center", // Vertically center
  alignItems: "center",      // Horizontally center
  height: "50vh",           // Full viewport height
  backgroundColor: "#000", // Vibrant background color
 // borderRadius: "20px",      // Rounded corners
  boxShadow: "0px 10px 50px rgb(0, 0, 0, 0.3)", // Large shadow for depth
  textAlign: "center",       // Ensure text is centered
  padding: "50px",           // Increased padding for more space
  "@media (max-width: 768px)": {
    padding: "40px",
  },
  "@media (max-width: 480px)": {
    padding: "30px",
  },
});

// Styled component for the contact text
const ContactText = styled(Typography)({
  fontSize: "60px",          // Large font size for prominence
  fontWeight: "bold",        // Bold font weight
  color: "#fff",             // White color for contrast
  textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)", // Subtle shadow for effect
  marginBottom: "40px",      // Space between text and phone numbers
  "@media (max-width: 768px)": {
    fontSize: "48px",        // Smaller font size on medium screens
  },
  "@media (max-width: 480px)": {
    fontSize: "36px",        // Even smaller font size on small screens
  },
});

// Styled component for the phone numbers
const PhoneNumber = styled(Typography)({
  fontSize: "48px",          // Large font size for phone numbers
  fontWeight: "bold",        // Bold font weight for emphasis
  color: "#fff",             // White color for contrast
  marginTop: "20px",         // Space between phone numbers
  textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", // Subtle text shadow
  "@media (max-width: 768px)": {
    fontSize: "40px",        // Smaller font size on medium screens
  },
  "@media (max-width: 480px)": {
    fontSize: "30px",        // Even smaller font size on smaller screens
  },
});

export default function MobileNumber() {
  return (
    <Container>
      <ContactText>
        Call Us Now!
      </ContactText>
      <PhoneNumber>
        (+91) 9109189492
      </PhoneNumber>
      <PhoneNumber>
        (+91) 9109180362
      </PhoneNumber>
    </Container>
  );
}
