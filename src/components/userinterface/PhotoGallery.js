import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function PhotoGallery() {
  const itemData = [
    {
      img:"https://bhautikiplus.com/wp-content/uploads/2024/11/IMG-20241123-WA0053.jpg",
      title: 'Bed',
    },
    {
      img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/DSC03508.jpg',
      title: 'Books',
    },
    {
      img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/IMG-20241123-WA0048.jpg',
      title: 'Sink',
    },
    {
      img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/IMG-20241123-WA0047.jpg',
      title: 'Kitchen',
    },
    {
      img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/IMG-20241123-WA0049.jpg',
      title: 'Blinds',
    },
    {
      img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/IMG-20241123-WA0051.jpg',
      title: 'Chairs',
    },
    {
      img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/DSC03335.jpg',
      title: 'Laptop',
    },
    {
      img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/IMG-20241123-WA0050.jpg',
      title: 'Doors',
    },
    {
      img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/DSC03352.jpg',
      title: 'Coffee',
    },
    {
      img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/IMG-20241123-WA0052.jpg',
      title: 'Storage',
    },
    {
      img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/DSC03345.jpg',
      title: 'Candle',
    },
    {
      img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/DSC03393.jpg',
      title: 'Coffee table',
    },
    
  
  
    {
      img:"https://bhautikiplus.com/wp-content/uploads/2024/11/DSC03472-min.jpg",
      title: 'Bed',
    },
    {
      img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/DSC03417-min.jpg',
      title: 'Books',
    },
    {
      img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/DSC3538-min.jpg',
      title: 'Sink',
    },
    {
      img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/DSC3543-min.jpg',
      title: 'Kitchen',
    },
    {
      img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/DSC03376.jpg',
      title: 'Blinds',
    },
    {
      img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/DSC03382.jpg',
      title: 'Chairs',
    },
    {
      img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/DSC03300.jpg',
      title: 'Laptop',
    },
    {
      img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/DSC03312-min.jpg',
      title: 'Doors',
    },
    {
      img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/DSC3522-min.jpg',
      title: 'Coffee',
    },
    {
      img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/DSC3534-min-e1732375891657.jpg',
      title: 'Storage',
    },
    {
      img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/DSC03437.jpg',
      title: 'Candle',
    },
    {
      img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/DSC03437.jpg',
      title: 'Coffee table',
    },
  ];

  // State to track which image is being hovered
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  // Get the theme and breakpoints for responsiveness
  const theme = useTheme();
  
  // Set the number of columns based on the screen size
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  
  // Define columns based on screen size
  let columns = 4; // Default for large screens
  if (isSmallScreen) {
    columns = 1; // Single column for mobile
  } else if (isMediumScreen) {
    columns = 2; // Two columns for tablets and small screens
  }

  return (
    <div>
      <Box
        sx={{
          width: '96.82%',
          height: '100%',
          overflow: 'auto', // Allow scroll if needed
          background: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 3,
        }}
      >
        {/* Title with enhanced typography */}
        <Typography
          variant="h3"
          align="center"
          sx={{
            marginBottom: 5,
            fontFamily: 'Josefin Sans, sans-serif',
            fontWeight: 'bold',
            color: '#fff',
            textTransform: 'uppercase',
            letterSpacing: 4,
            background: 'linear-gradient(90deg, #ff6a00, #ee0979)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
            fontSize:'2.5em'
          }}
        >
          Bhautiki Plus Pre-Launch Event
        </Typography>

        {/* Image List with masonry layout */}
        <ImageList
          variant="masonry"
          cols={columns} // Dynamic column count based on screen size
          gap={14}
          sx={{
            width: '90vw',
            height: 'auto', // Adjust the height to fit the images
            padding: 2,
            borderRadius: 5,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
          }}
        >
          {itemData.map((item, index) => (
            <ImageListItem
              key={item.img}
              sx={{
                borderRadius: 3,
                boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.2)',
                overflow: 'hidden',
                transition: 'transform 0.4s, box-shadow 0.4s, filter 0.4s',
                position: 'relative',
                '&:hover': {
                  transform: 'scale(1.1) rotate(1.5deg)',
                  boxShadow: '0px 12px 40px rgba(0, 0, 0, 0.4)',
                  filter: 'brightness(1.2)',
                },
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: '8px',
                  transition: 'filter 0.4s',
                }}
              />
              {hoveredIndex === index && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.5))',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    padding: 2,
                    opacity: 1,
                    transition: 'opacity 0.3s ease-in-out',
                  }}
                >
                  <Typography
                    sx={{
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: '18px',
                      textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
                      transition: 'transform 0.4s ease',
                      transform: 'translateY(0)',
                      marginBottom: '8%',
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              )}
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
}
