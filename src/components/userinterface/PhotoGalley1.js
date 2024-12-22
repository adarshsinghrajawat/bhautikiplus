import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function PhotoGallery1() {
  const [cols, setCols] = React.useState(Math.floor(window.innerWidth / 250));

  React.useEffect(() => {
    const handleResize = () => {
      setCols(Math.floor(window.innerWidth / 250));
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{margin:'5%'}}>
     
      
        {/* Title with enhanced typography */}
        <Typography
          variant="h3"
          align="center"
          sx={{
            marginBottom: 5,
            fontFamily: 'Josefin Sans, sans-serif',
            fontWeight: 'bold',
            color: '#fff',
            fontSize: { xs: '2em', sm: '2.5em', md: '3em' }, // responsive typography size
            textTransform: 'uppercase',
            letterSpacing: 4,
            background: 'linear-gradient(90deg, #ff6a00, #ee0979)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
          }}
        >
          NEET 2024 Felicitation Program
        </Typography>

        {/* Image Gallery */}
        <ImageList
          gap={12}
          sx={{
            width: '100%',
            maxHeight: '100vh',
            transform: 'translateZ(0)',
            '&::-webkit-scrollbar': { display: 'none' },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
          cols={cols}
        >
          {itemData.map((item) => {
            const itemCols = item.featured ? 2 : 1;
            const itemRows = item.featured ? 2 : 1;

            return (
              <ImageListItem
                key={item.img}
                cols={itemCols}
                rows={itemRows}
                sx={{
                  overflow: 'hidden',
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                  },
                }}
              >
                <img
                  {...srcset(item.img, 250, 200, itemRows, itemCols)}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                />
                <ImageListItemBar
                  sx={{
                    background:
                      'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                  }}
                  title={item.title}
                  position="top"
                  actionIcon={
                    <IconButton sx={{ color: 'white' }} aria-label={`star ${item.title}`}>
                      <StarBorderIcon />
                    </IconButton>
                  }
                  actionPosition="left"
                />
              </ImageListItem>
            );
          })}
        </ImageList>
    
    </div>
  );
}

const itemData = [
  {
    img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/f9ed4a8f5be689e08aea59ddac2b7a0ffd930f60.jpg',
    title: 'Breakfast',
    featured: true,
  },
  {
    img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/1ffcef7b0dcd61ccf3946e51f4c51104399c20fe.jpg',
    title: 'Burger',
  },
  {
    img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/37a4505df2ae640507893f9764c229cba5f0e6d2.jpg',
    title: 'Camera',
  },
  {
    img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/684cd5b7c670d2b8c6f02ba1bbee98936c7c248c.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/867b0c083c38ba0cb7d07d84c2bc65337d3cbf1e.jpg',
    title: 'Hats',
  },
  {
    img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/af0bb849a77ae8977cd5f97b33a43ea6a3bf647a.jpg',
    title: 'Honey',
    featured: true,
  },
  {
    img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/c27fef1188d0111aa10623c1c90e594d0acc99a0.jpg',
    title: 'Basketball',
  },
  {
    img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/e905c02ff9b803461c8c27bca9412a7f4a930b1f.jpg',
    title: 'Fern',
  },
  {
    img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/ed10773c0a38b5a9b26f726535246620a808a734.jpg',
    title: 'Mushrooms',
  },
  {
    img: 'https://bhautikiplus.com/wp-content/uploads/2024/11/f2d0d925abd9d3d818bbb41ba8eea8e6411bc5d1.jpg',
    title: 'Tomato basil',
  },
];
