import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import GoogleMapReact from "google-map-react";
import { TextField, Button, Typography } from "@mui/material";
import Swal from "sweetalert2";
import { postData } from "../services/ServerServices";
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Import LocationOnIcon

// Styled components
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "15px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
}));

// Marker Component
const Marker = ({ lat, lng }) => (
  <div style={{ transform: "translate(-50%, -50%)", position: 'absolute' }}>
    <LocationOnIcon
      style={{
        fontSize: 40,
        color: "red", // Red marker color
      }}
    />
  </div>
);

export default function Map() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = async () => {
    var cd = new Date();
    var dd = cd.getFullYear() + "/" + (cd.getMonth() + 1) + "/" + cd.getDate() + " " + cd.getHours() + ":" + cd.getMinutes() + ":" + cd.getSeconds();

    var formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    formData.append('createdat', new Date());
    formData.append('updateat', new Date());

    var result = await postData('category/submit_contactus', formData);

    if (result) {
      Swal.fire({
        icon: 'success',
        title: result.message,
        toast: 'true'
      });
      clearValue();
    } else {
      Swal.fire({
        icon: 'error',
        title: result.message
      });
    }
  };

  const clearValue = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  // Coordinates for the provided link
  const locationCoords = {
    lat: 26.21208235324628, // Latitude from Google Maps link
    lng: 78.17154787116414, // Longitude from Google Maps link
  };

  const defaultProps = {
    center: locationCoords,
    zoom: 15,
  };

  return (
    <div>
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-15px);
            }
          }

          @media (max-width: 768px) {
            .map-container {
              height: 60vh;
              width: 100%;
              margin-bottom: 20px;
            }

            .form-container {
              height: auto;
              width: 100%;
              margin-top: 0;
              padding: 20px;
            }
          }

          @media (max-width: 480px) {
            .form-container {
              padding: 15px;
            }

            .contact-button {
              font-size: 16px;
              padding: 12px;
            }
          }
        `}
      </style>

      <Grid
        container
        spacing={2}
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: '0%',
          backgroundColor: "#D8F3F9",
          padding: "20px",
          height: "100vh",
          boxSizing: "border-box",
        }}
      >
        {/* Map Section */}
        <Grid item xs={12} md={6}>
          <div
            className="map-container"
            style={{
              height: "80vh",
              width: "100%",
              borderRadius: "15px",
              boxShadow: "0px 10px 50px rgba(0, 0, 0, 0.2)",
              transition: "box-shadow 0.3s ease",
              overflow: "hidden",
            }}
            onMouseEnter={(e) =>
              (e.target.style.boxShadow = "0px 20px 80px rgba(0, 0, 0, 0.3)")}
            onMouseLeave={(e) =>
              (e.target.style.boxShadow = "0px 10px 50px rgba(0, 0, 0, 0.2)")}
          >
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }} // Add your Google Maps API Key here
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              {/* Custom Marker using LocationOnIcon */}
              <Marker lat={locationCoords.lat} lng={locationCoords.lng} />
            </GoogleMapReact>
          </div>
        </Grid>

        {/* Contact Form Section */}
        <Grid item xs={12} md={6}>
          <div
            className="form-container"
            style={{
              padding: "1.5%",
              backgroundColor: "#ffffff",
              borderRadius: "15px",
              boxShadow: "0px 6px 30px rgba(0, 0, 0, 0.1)",
              animation: "float 3s ease-in-out infinite",
            }}
          >
            <Typography
              variant="h4"
              style={{
                marginBottom: "20px",
                textAlign: "center",
                fontFamily: 'josefin-sans',
                color: "#333",
              }}
            >
              Contact Us
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  label="Name"
                  variant="outlined"
                  fullWidth
                  style={{
                    backgroundColor: "#F5F5F5",
                    borderRadius: "10px",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  label="Email"
                  variant="outlined"
                  fullWidth
                  style={{
                    backgroundColor: "#F5F5F5",
                    borderRadius: "10px",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  style={{
                    backgroundColor: "#F5F5F5",
                    borderRadius: "10px",
                  }}
                />
              </Grid>

              <Grid item xs={12} style={{ textAlign: "center", marginTop: "20px" }}>
                <Button
                  onClick={handleClick}
                  variant="contained"
                  className="contact-button"
                  fullWidth
                  style={{
                    backgroundColor: "#53AFBB",
                    color: "#fff",
                    fontSize: "18px",
                    padding: "15px",
                    borderRadius: "10px",
                    boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)",
                    transition: "0.3s",
                  }}

                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#409a9e")}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "#53AFBB")}
                >
                  Contact Us
                </Button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <div style={{ height: '40vh', backgroundColor: '#000' }}></div>
    </div>
  );
}
