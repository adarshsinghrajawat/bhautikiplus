import * as React from 'react';

export default function Empowering() {
  return (
    <div 
      style={{ 
        background: 'linear-gradient(90deg, rgba(177,219,231,1) 32%, rgba(212,235,240,1) 70%, rgba(217,179,84,1) 94%)', 
        minHeight: '100vh',
        padding: '20px',
        boxSizing: 'border-box',
        fontFamily: '"Roboto", sans-serif',
      }}
    >
      {/* Container for responsiveness */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '20px',
          boxSizing: 'border-box',
        }}
      >
        {/* Main Heading */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '2.9rem', // Slightly smaller font for better scaling
            letterSpacing: 1,
            margin: '20px',
            fontFamily: "Josefin Sans",
            textAlign: 'center',
            color: '#333',
            lineHeight: 1.3, // Improves readability on smaller screens
          }}
        >
          Empowering the future: Student success stories
        </div>
        <br />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.9rem', // Adjusted for readability on smaller screens
            letterSpacing: 1,
            margin: '20px',
            fontFamily: 'Lato',
            textAlign: 'center',
            color: '#333',
          }}
        >
          Here’s what students say about us
        </div>

        {/* Video Section */}
        <div 
          style={{ 
            width: '100%', 
            maxWidth: '800px', // Limits the iframe's width to avoid overflow
            margin: '40px auto',
          }}
        >
          <iframe 
            width="100%" 
            height="auto"
            style={{
              aspectRatio: '16 / 9', // Ensures a responsive height-to-width ratio
              borderRadius: '10px',
              boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
            }}
            src="https://www.youtube.com/embed/6-N8SiUDBZc?si=xlwfS-tVeJjwFzf4" 
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
