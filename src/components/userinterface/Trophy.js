import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
  height: '300px',
  padding: theme.spacing(3),
  ...theme.typography.body2,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: '16px',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
  },
}));

export default function Trophy() {
  return (
    <div style={{ background: '#F0F8FF', paddingBottom: '40px' }}>
      {/* Container for responsiveness */}
      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: 4,
          boxSizing: 'border-box',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            fontWeight: 'bold',
            fontSize: '3em',
            letterSpacing: 2,
            marginBottom: 4,
            fontFamily: 'Josefin Sans',
            color: '#1c0d5a',
            textTransform: 'uppercase',
          }}
        >
          Our students excel at exams
        </Box>

        <Box
          sx={{
            fontSize: '1.9em',
            letterSpacing: 1.1,
            marginBottom: 6,
            fontFamily: 'Lato',
            color: '#555',
          }}
        >
          Our students did it, your child can also do it with us! 
          Check highlights of the previous years’ results of Bhautiki Plus faculties.
        </Box>

        {/* Stack for responsiveness */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          <DemoPaper elevation={10}>
            {/* Add Icon */}
            <EmojiEventsIcon style={{ color: '#FDCE0C', fontSize: '4em', marginBottom: '20px' }} />
            {/* Add Text */}
            <Typography
              variant="h5"
              component="div"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.8em',
                fontWeight: '600',
                color: '#333',
              }}
            >
              IIT-JEE Results
            </Typography>
            <Typography variant="body2" style={{ fontFamily: 'Lato, sans-serif', color: '#777' }}>
              Thousands of top ranks each year
            </Typography>
          </DemoPaper>

          <DemoPaper elevation={10}>
            {/* Add Icon */}
            <EmojiEventsIcon style={{ color: '#FDCE0C', fontSize: '4em', marginBottom: '20px' }} />
            {/* Add Text */}
            <Typography
              variant="h5"
              component="div"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '1.8em',
                fontWeight: '600',
                color: '#333',
              }}
            >
              NEET Results
            </Typography>
            <Typography variant="body2" style={{ fontFamily: 'Lato, sans-serif', color: '#777' }}>
              A proven track record of excellence
            </Typography>
          </DemoPaper>
        </Stack>
      </Box>
    </div>
  );
}
