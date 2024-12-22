import Header from "./Header";
import Footer1 from "./Footer1";
import Bottom1 from "./Bottom1";
import { useEffect, useState } from "react";
import { Divider, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getData, ServerURL } from "../services/ServerServices";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import React from "react";

export default function OnlineClass() {
  const navigate = useNavigate();
  const [onlineClass, setOnlineClass] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);  // Store selected image
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md')); // Detect if the screen is medium or smaller

  const fetchExamDetails = async () => {
    const onlineClass = await getData("category/fetch_onlineclass");
    setOnlineClass(onlineClass?.data || []);
  };

  useEffect(() => {
    fetchExamDetails();
    // Automatically open the dialog after data is fetched (or when the page loads)
    setSelectedImage(`${ServerURL}/images/Untitled-design-1320x880.webp`); // Replace with any default image or first item image
    setOpen(true); // Open the dialog immediately after page load
  }, []);

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const renderPrograms = (programs, heading, bgColor) => {
    return (
      <div style={{ background: bgColor, padding: "5% 0" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <span
            style={{
              color: "#fff",
              fontFamily: "josefin-sans",
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
          {/* Render program cards here */}
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      {/* Render Programs */}
      {renderPrograms(onlineClass, "Online Course", "linear-gradient(135deg, #000000, #434343)")}

      {/* Responsive Dialog to display the image */}
      <Dialog
        fullScreen={fullScreen}  // Fullscreen mode for smaller screens
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        {/* <DialogTitle id="responsive-dialog-title">
          {"Image View"}
        </DialogTitle> */}
        <DialogContent
          style={{
            padding: 20, // Remove extra padding to ensure image fits
            overflow: "hidden", // Prevent scrolling
            display: "flex", // Ensure proper flexbox layout
            justifyContent: "center", // Center the image
            alignItems: "center", // Vertically align the image
          }}
        >
          {/* Display the image with responsive sizing */}
          <img
            src={selectedImage} // Display the selected image
            alt="Map"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain", // Maintain aspect ratio
              maxHeight: "80vh", // Limit max height to avoid overflow
              maxWidth: "100%", // Ensure the image does not stretch beyond container
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{color:'black'}}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
