import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grow from '@mui/material/Grow';
import Typography from '@mui/material/Typography'; // Import Typography for the heading

// const icon = (
//   <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
//     <span style={{ fontFamily: 'Josefin Sans',color:'#fff' }}>Our Center</span>
//   </Paper>
// );

const heading = (
    <Typography
    variant="h4"
    sx={{
      fontFamily: 'Josefin Sans',
      textAlign: 'center',
      marginTop: '1rem',
      fontSize:'3em',
      color: 'transparent', // Make the text color transparent to show the gradient
      backgroundImage: 'linear-gradient(90deg, rgba(177,219,231,1) 32%, rgba(212,235,240,1) 70%, rgba(217,179,84,1) 94%)',
      backgroundClip: 'text', // Ensure the gradient is applied to the text itself
      WebkitBackgroundClip: 'text', // Ensure compatibility with WebKit browsers
      fontWeight:'bold' // Optional: Add some weight for better visibility
    }}
  >
    Welcome to Our Center
  </Typography>
);

export default function Transition() {
  const [checked, setChecked] = React.useState(true); // Start with true so transition happens on load

  React.useEffect(() => {
    // Simulate a delay if needed
    setChecked(true);
  }, []);

  return (
    <Box sx={{ height: 120, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',backgroundColor:'#000' }}>
      {/* <Grow in={checked} style={{ transformOrigin: '0 0 0' }} timeout={1000}>
        {icon}
      </Grow> */}

      {/* Apply the Grow transition to the heading */}
      <Grow  in={checked} style={{ transformOrigin: '0 0 0' }} timeout={1500}>
        {heading}
      </Grow>
    </Box>
  );
}
