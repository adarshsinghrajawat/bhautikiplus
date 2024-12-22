import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ServerURL } from "../services/ServerServices";

function CenterMode() {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track the hovered index for image-specific hover styles

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "-365px", // Padding around the center image (adjust for gap)
    slidesToShow: 3,
    speed: 500,
  };

  const data = [
    { icon: "bhautiki3.png" },
    { icon: "Bhautiki2.png" },
    { icon: "Bhautikibuilding3.png" },
  ];

  const showSlider = () => {
    return data.map((item, index) => (
      <div
        key={index}
        style={{
          padding: "0 20px", // Horizontal gap between slides
        }}
        onMouseEnter={() => setHoveredIndex(index)} // Set hovered index on mouse enter
        onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index on mouse leave
      >
        <img
          src={`${ServerURL}/images/${item.icon}`}
          alt={`Slider ${index}`}
          className="slider-image"
          style={{
            width: "100%",
            height: 500,
            objectFit: "cover",
            borderRadius: "10px", // Optional: add rounded corners
            transition: "transform 0.3s ease, opacity 0.3s ease", // Transition for scaling and opacity
            transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)", // Apply scale on hover
            opacity: hoveredIndex === index ? 0.8 : 1, // Reduce opacity on hover
          }}
        />
      </div>
    ));
  };

  return (
    <div className="slider-container" style={{ padding: "2rem", backgroundColor: "#000" }}>
      <Slider {...settings}>{showSlider()}</Slider>
    </div>
  );
}

export default CenterMode;
