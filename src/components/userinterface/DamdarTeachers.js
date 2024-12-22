import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';

const DamdarTeacher = ({ headingText }) => {
  const [checked, setChecked] = React.useState(false);
  const [underlineOpen, setUnderlineOpen] = React.useState(false);

  React.useEffect(() => {
    // Trigger animation after a slight delay
    const timer = setTimeout(() => {
      setChecked(true);
    }, 300); // Wait 300ms before starting the heading animation
    const underlineTimer = setTimeout(() => {
      setUnderlineOpen(true); // Trigger underline after the heading animation
    }, 1600); // Delay the underline animation by 1.6 seconds (after heading animation completes)

    return () => {
      clearTimeout(timer);
      clearTimeout(underlineTimer);
    };
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        overflow: 'hidden', // Prevent overflow during animations
      }}
    >
      {/* Fade-in effect for container */}
      <Fade in={checked} timeout={2000}>
        <Paper
          elevation={4}
          sx={{
            padding: '3rem',
            background: 'linear-gradient(to right, #444, #222)', // Subtle gradient for Paper
            borderRadius: '20px',
            textAlign: 'center',
            boxShadow: '0 8px 30px rgba(0,0,0,0.7)', // Soft shadow for depth
            transform: checked ? 'translateY(0)' : 'translateY(20px)', // Slide-in animation
            transition: 'transform 0.6s ease-out',
          }}
        >
          {/* Grow transition for the heading */}
          <Grow in={checked} style={{ transformOrigin: 'center' }} timeout={500}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'Josefin Sans',
                textAlign: 'center',
                marginTop: '1rem',
                fontSize: '3em',
                cursor: 'pointer',
                color: 'transparent', // Make the text color transparent for gradient
                backgroundImage:
                  'linear-gradient(90deg, rgba(177,219,231,1) 32%, rgba(212,235,240,1) 70%, rgba(217,179,84,1) 94%)',
                backgroundClip: 'text', // Apply gradient to the text itself
                WebkitBackgroundClip: 'text', // For WebKit browsers
                fontWeight: 'bold',
                transition: 'transform 0.5s ease-in-out, text-shadow 0.5s ease-in-out', // Smooth transition
                '&:hover': {
                  transform: 'scale(1.1)', // Slightly enlarge on hover
                  textShadow: '0 4px 20px rgba(217,179,84,0.7)', // Add glowing effect
                },
              }}
            >
              {headingText}
            </Typography>
          </Grow>

          {/* Line drawing effect for the red underline */}
          <Box
            sx={{
              width: '0%', // Start with width 0% for line drawing effect
              height: '3px',
              backgroundColor: 'red',
              marginTop: '10px', // Space between heading and underline
              borderRadius: '2px',
              transition: 'width 1.5s ease-in-out', // Smooth width transition
              ...(underlineOpen && {
                width: '100%', // End with 100% width
              }),
            }}
          />
        </Paper>
      </Fade>
    </Box>
  );
};

export default DamdarTeacher;
