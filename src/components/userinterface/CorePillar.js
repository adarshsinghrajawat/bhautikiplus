import * as React from 'react';
import BhautikiPlusCorePillars from '../../../src/assets/BhautikiPlusCorePillars.jpg';

export default function CorePillars() {
  return (
    <div style={{ background: 'linear-gradient(to bottom, #D1F3F9, #A1C6EA)', paddingBottom: '40px' }}>
      {/* Title or Description Section */}
      <div style={{ textAlign: 'center', padding: '5% 0', fontFamily: 'Poppins, sans-serif' }}>
        <h1
          style={{
            fontSize: '3.9em',
            fontWeight: '600',
            color: '#1c0d5a',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '20px',
            fontFamily:'Josefin Sans'
          }}
        >
          Bhautiki Plus Core Pillars
        </h1>
        <p
          style={{
            fontSize: '1.5em',
            color: '#333',
            lineHeight: '1.8',
            fontFamily: 'Lato',
            margin: '0 auto',
            maxWidth: '700px',
          }}
        >
          Our core pillars of excellence form the foundation of Bhautiki Plus, providing a seamless
          and effective learning experience. With a focus on student success and holistic development,
          we aim to empower every learner.
        </p>
      </div>

      {/* Image Section */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '3%' }}>
        <img
          src={BhautikiPlusCorePillars}
          alt="Core Pillars"
          style={{
            width: '50%', 
            maxWidth: '1200px', 
            borderRadius: '20px', 
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease-in-out',
          }}
          onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
        />
      </div>
    </div>
  );
}
