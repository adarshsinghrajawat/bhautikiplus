import * as React from 'react';
import { useMediaQuery } from '@mui/material';
import bhautikicooperate from '../../../src/assets/bhautikicooperate.jpg';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function VisionAndMission() {
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Adjusts for smaller screens

  return (
    <div style={{ background: '#000', paddingTop: '5%', paddingBottom: '5%' }}>
      <Grid
        container
        direction={isSmallScreen ? 'column' : 'row'} // Adjust layout direction
        spacing={5} // Adds spacing between Grid items
        style={{ padding: '0 10%', alignItems: 'center', justifyContent: 'center' }}
      >
        {/* Image Section */}
        <Grid item xs={12} sm={6} md={6} style={{ textAlign: 'center' }}>
          <img
            src={bhautikicooperate}
            alt="Vision and Mission"
            style={{
              width: isSmallScreen ? '85%' : '90%',
              maxWidth: '100%',
              borderRadius: '15px',
              boxShadow: '0px 8px 35px rgba(255, 255, 255, 0.2)', // Glowing effect
              transition: 'transform 0.5s ease, box-shadow 0.5s ease',
              transform: 'scale(1)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0px 15px 45px rgba(255, 255, 255, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0px 8px 35px rgba(255, 255, 255, 0.2)';
            }}
          />
        </Grid>

        {/* Text Section with Card */}
        <Grid item xs={12} sm={6} md={6}>
          <Card
            raised
            style={{
              background: '#1c1c1c', // Dark background for card
              borderRadius: '15px',
              boxShadow: '0px 12px 45px rgba(0, 0, 0, 0.25)',
              width: isSmallScreen ? '95%' : '80%', // Increased width of the card for larger screens
              opacity: '90%',
              transform: 'scale(1)',
              transition: 'transform 0.5s ease, box-shadow 0.5s ease',
              padding: '5% 5% 4%',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0px 15px 55px rgba(0, 0, 0, 0.35)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0px 12px 45px rgba(0, 0, 0, 0.25)';
            }}
          >
            <CardActionArea>
              <CardContent>
                {/* Vision Title */}
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  style={{
                    color: '#fff',
                    fontWeight: '900',
                    marginBottom: '3%',
                    textAlign: 'center',
                    fontSize: isSmallScreen ? '2.5rem' : '3.5rem', // Decreased font size for Vision title
                    letterSpacing: '2px',
                    fontFamily: 'Josefin Sans', // Serif font for the Vision title
                  }}
                >
                  Vision
                </Typography>
                {/* Vision Content */}
                <Typography
                  variant="body1"
                  style={{
                    color: '#f2f2f2',
                    fontSize: isSmallScreen ? '1.2rem' : '1.4rem', // Decreased font size for Vision content
                    lineHeight: '2',
                    textAlign: 'center',
                    letterSpacing: '1px',
                    fontFamily: 'Lato', // Clean sans-serif for body text
                  }}
                >
                  To create and sustain a model to inspire, innovate and transform the education space
                  that creates high-performing individuals (students, teachers, mentors) and better
                  citizens for the future.
                </Typography>

                {/* Mission Title */}
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  style={{
                    color: '#fff',
                    fontWeight: '900',
                    marginTop: '5%',
                    marginBottom: '3%',
                    textAlign: 'center',
                    fontSize: isSmallScreen ? '2.5rem' : '3.5rem', // Decreased font size for Mission title
                    letterSpacing: '2px',
                    fontFamily: 'Josefin Sans', // Serif font for the Mission title
                  }}
                >
                  Mission
                </Typography>

                {/* Mission Content */}
                <Typography
                  variant="body1"
                  style={{
                    color: '#f2f2f2',
                    fontSize: isSmallScreen ? '1.2rem' : '1.4rem', // Decreased font size for Mission content
                    lineHeight: '2',
                    textAlign: 'center',
                    letterSpacing: '1px',
                    fontFamily: 'Lato', // Consistent sans-serif font for body text
                  }}
                >
                  To provide students high-quality education for their holistic development by
                  providing them with
                  <br />
                  • a comprehensive cross-checking, monitoring, and support system
                  <br />
                  • a conducive learning environment
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
