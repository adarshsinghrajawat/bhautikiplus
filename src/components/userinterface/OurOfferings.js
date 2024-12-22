import * as React from 'react';

export default function OurOfferings() {
  // Inline styles for keyframes animation
  const fadeInKeyframes = `
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(10px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  // Apply animation via style tag (injecting keyframes into the page)
  React.useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = fadeInKeyframes;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  // State to track visibility for fade-in effect
  const [isVisible, setIsVisible] = React.useState(false);

  // Intersection Observer to detect when the element is in view
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Stop observing once the element is visible
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );
    const element = document.getElementById('offerings-section');
    if (element) {
      observer.observe(element);
    }
    return () => {
      observer.disconnect(); // Clean up observer on component unmount
    };
  }, []);

  return (
    <div
      style={{
        background: 'linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(34, 34, 34, 1) 70%, rgba(51, 51, 51, 1) 100%)', 
        padding: '50px 0',
      }}
    >
      {/* Container for responsiveness */}
      <div
        id="offerings-section"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '20px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '3.5em',
            letterSpacing: '2px',
            color: '#fff',
            margin: '30px 0',
            fontFamily: 'Josefin sans',
            textAlign: 'center', // Ensures text aligns properly on small screens
            textTransform: 'uppercase',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)', // Adds depth to the text
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
            animation: isVisible ? 'fadeIn 2s ease-out' : 'none', // Apply fade-in when visible
            transition: 'opacity 1s, transform 1s', // Smooth transition
          }}
        >
          Our Offerings
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.0em',
            letterSpacing: '1.5px',
            color: '#fff',
            margin: '20px',
            fontFamily: 'Lato',
            textAlign: 'center', // Ensures text aligns properly on small screens
            lineHeight: '1.5',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
            animation: isVisible ? 'fadeIn 2s ease-out 0.5s' : 'none', // Delayed fade-in effect
            fontWeight: 'lighter',
            transition: 'opacity 1s, transform 1s', // Smooth transition
          }}
        >
          Achieving academic excellence with our academic and non-academic support
        </div>
      </div>
    </div>
  );
}
