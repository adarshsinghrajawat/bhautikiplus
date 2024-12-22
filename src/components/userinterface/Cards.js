import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import Grid from '@mui/material/Grid';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { Divider } from '@mui/material';

export default function Cards() {
  return (
    <Grid container spacing={4} style={{ padding: '40px' }}>
      {/* First Card */}
      <Grid item xs={12} sm={6} md={4}>
        <Card raised style={{ height: '100%', boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)', borderRadius: '12px' }}>
          <Divider />
          <CardActionArea style={{ padding: '10%' }}>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '4%' }}>
              <PhoneDisabledIcon fontSize="large" style={{ color: '#FDCE0C', fontSize: '60px' }} />
            </div>
            <CardContent
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                padding: '0 10%',
              }}
            >
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                style={{
                  textAlign: 'center',
                  color: '#1c0d5a',
                  lineHeight: '1.5',
                  fontFamily: 'Josefin Sans',
                  fontSize: '28px',  // Increased font size
                }}
              >
                Total Restriction on Mobile Phone in Our Campus
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'text.secondary' }}
                style={{
                  textAlign: 'center',
                  lineHeight: '1.7',
                  fontFamily: 'Lato',
                  fontSize: '20px',  // Increased font size
                  marginTop: '20px',
                }}
              >
                We strive to create an optimal learning environment by fully disconnecting students
                from social media and distractions, ensuring complete focus on their studies.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Divider />
      </Grid>

      {/* Second Card */}
      <Grid item xs={12} sm={6} md={4}>
        <Card raised style={{ height: '100%', boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)', borderRadius: '12px' }}>
          <Divider />
          <CardActionArea style={{ padding: '10%' }}>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '4%' }}>
              <MenuBookIcon fontSize="large" style={{ color: '#FDCE0C', fontSize: '60px' }} />
            </div>
            <CardContent
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                padding: '0 10%',
              }}
            >
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                style={{
                  textAlign: 'center',
                  color: '#1c0d5a',
                  lineHeight: '1.5',
                  fontFamily: 'Josefin Sans',
                  fontSize: '28px',  // Increased font size
                }}
              >
                Fee Refund Available for Entire Duration of Course
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'text.secondary' }}
                style={{
                  textAlign: 'center',
                  lineHeight: '1.7',
                  fontFamily: 'Lato',
                  fontSize: '20px',  // Increased font size
                  marginTop: '20px',
                }}
              >
                We believe education should be a choice, not a compulsion. That’s why we offer a
                flexible fee refund policy, allowing students to request a refund at any time during
                their course, fostering a stress-free environment to focus entirely on their studies.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      {/* Third Card */}
      <Grid item xs={12} sm={6} md={4}>
        <Card raised style={{ height: '100%', boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)', borderRadius: '12px' }}>
          <Divider />
          <CardActionArea style={{ padding: '10%' }}>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '4%' }}>
              <MeetingRoomIcon fontSize="large" style={{ color: '#FDCE0C', fontSize: '60px' }} />
            </div>
            <CardContent
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                padding: '0 10%',
              }}
            >
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                style={{
                  textAlign: 'center',
                  color: '#1c0d5a',
                  lineHeight: '1.5',
                  fontFamily: 'Josefin Sans',
                  fontSize: '28px',  // Increased font size
                }}
              >
                Modern Swing Barrier For Student Entry
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'text.secondary' }}
                style={{
                  textAlign: 'center',
                  lineHeight: '1.7',
                  fontFamily: 'Lato',
                  fontSize: '20px',  // Increased font size
                  marginTop: '20px',
                }}
              >
                We ensure secure and efficient student entry and exit with our Advanced Swing
                Barrier system. Integrated with student IDs, it provides seamless access, emergency
                features, and real-time monitoring. This system keeps parents informed about their
                child’s entry and exit times, enhancing both campus security and parental peace of
                mind.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Divider />
      </Grid>

      {/* Fourth Card */}
      <Grid item xs={12} sm={6} md={4}>
        <Card raised style={{ height: '100%', boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)', borderRadius: '12px' }}>
          <Divider />
          <CardActionArea style={{ padding: '10%' }}>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '4%' }}>
              <TabletMacIcon fontSize="large" style={{ color: '#FDCE0C', fontSize: '60px' }} />
            </div>
            <CardContent
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                padding: '0 10%',
              }}
            >
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                style={{
                  textAlign: 'center',
                  color: '#1c0d5a',
                  lineHeight: '1.5',
                  fontFamily: 'Josefin Sans',
                  fontSize: '28px',  // Increased font size
                }}
              >
                Learning Tablets with Preloaded LMS and Integrated Reporting
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'text.secondary' }}
                style={{
                  textAlign: 'center',
                  lineHeight: '1.7',
                  fontFamily: 'Lato',
                  fontSize: '20px',  // Increased font size
                  marginTop: '20px',
                }}
              >
                Our proctored personal learning device, preloaded with our LMS, ensures students
                stay focused on their studies. With centralized reporting to monitor usage and
                learning outcomes, it helps students stay disconnected from distractions like social
                media and entertainment apps, maximizing their learning experience.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Divider />
      </Grid>
      
      {/* Additional Cards can follow the same pattern */}
    </Grid>
  );
}
