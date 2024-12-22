import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  Divider, 
  Button, 
  Box, 
  useMediaQuery, 
  useTheme 
} from '@mui/material';
import Header from "./Header";
import Footer1 from "./Footer1";
import Bottom1 from "./Bottom1";

export default function RegisterNow(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const SectionTitle = ({ children, bgColor = '#48dbfb' }) => (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        width: '100%', 
        backgroundColor: bgColor, 
        py: 2 
      }}
    >
      <Typography 
        variant={isMobile ? 'h4' : 'h3'}
        sx={{ 
          color: '#1c0d5a', 
          fontFamily: 'Questrial', 
          fontWeight: 600 
        }}
      >
        {children}
      </Typography>
    </Box>
  );

  const InfoCard = ({ title, content, bold = false }) => (
    <Grid 
      item 
      xs={12} 
      md={3} 
      sx={{ 
        p: 2, 
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Typography 
        variant="body1" 
        sx={{ 
          fontFamily: 'Poppins', 
          fontWeight: bold ? 'bold' : 'normal' 
        }}
      >
        {title && <><b>{title}</b><br/></>}
        {content}
      </Typography>
    </Grid>
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Header />
      
      <Container maxWidth="lg" sx={{ my: 4, textAlign: 'center' }}>
        <Typography 
          variant={isMobile ? 'h4' : 'h3'}
          sx={{ 
            color: '#1c0d5a', 
            fontFamily: 'Questrial', 
            fontWeight: 600 
          }}
        >
          Entrance Exam Details
        </Typography>
      </Container>

      <Box sx={{ backgroundColor: '#ffeaa7', py: 4 }}>
        <Container maxWidth="xl">
          <Typography 
            variant={isMobile ? 'h4' : 'h3'}
            sx={{ 
              color: '#1c0d5a', 
              fontFamily: 'Questrial', 
              fontWeight: 600,
              textAlign: 'center',
              mb: 4 
            }}
          >
            Class XI
          </Typography>

          <Paper 
            elevation={3} 
            sx={{ 
              backgroundColor: '#EFF7FB', 
              p: 2,
              mb: 4 
            }}
          >
            <Grid 
              container 
              spacing={2} 
              alignItems="center"
              justifyContent="space-between"
            >
              <InfoCard 
                title=""
                content="2 YEAR CLASSROOM PROGRAM FOR NEET 2027 & BOARD EXAMS" 
                bold 
              />
              <Grid item xs={12} md={1} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Divider orientation="vertical" flexItem />
              </Grid>
              <InfoCard 
                title="Who should join" 
                content="X to XI moving Students" 
              />
              <Grid item xs={12} md={1} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Divider orientation="vertical" flexItem />
              </Grid>
              <InfoCard 
                title="Duration" 
                content="40 Minutes" 
              />
              <Grid item xs={12} md={1} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Divider orientation="vertical" flexItem />
              </Grid>
              <InfoCard 
                title="Entrance Exam Date" 
                content="08 Dec 2024" 
              />
            </Grid>
          </Paper>
        </Container>
      </Box>

      <SectionTitle>Pattern & Marking Scheme</SectionTitle>

      <Container maxWidth="xl" sx={{ my: 4 }}>
        <Paper elevation={3} sx={{ p: 3, backgroundColor: '#c7ecee' }}>
          <Typography variant="h5" gutterBottom>Paper Pattern</Typography>
          <Typography variant="body1">
            Total No. of Questions: <b>30 Objective Questions [120 Marks]</b>
          </Typography>

          <Typography variant="body1" sx={{ mt: 2 }}>Sections:</Typography>
          <Box sx={{ ml: 3 }}>
            <Typography variant="body1">
              <b>Section A:</b> Mental Ability and Reasoning: 6 Questions [24 Marks]
            </Typography>
            <Typography variant="body1">
              <b>Section B:</b> Academic Section: 24 Questions [96 Marks]
            </Typography>
            <Box sx={{ ml: 3 }}>
              <Typography variant="body1">Physics - 06 Questions</Typography>
              <Typography variant="body1">Chemistry - 06 Questions</Typography>
              <Typography variant="body1">Botany - 06 Questions</Typography>
              <Typography variant="body1">Zoology - 06 Questions</Typography>
            </Box>
          </Box>

          <Typography variant="body1" sx={{ mt: 2 }}><b>Marking Scheme:</b></Typography>
          <Box sx={{ ml: 3 }}>
            <Typography variant="body1">1. Each question carries +4 Marks.</Typography>
            <Typography variant="body1">2. For every wrong answer, -1 Mark will be deducted.</Typography>
          </Box>
        </Paper>
      </Container>

      <SectionTitle>Syllabus</SectionTitle>

      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Paper 
          elevation={3} 
          sx={{ 
            backgroundColor: '#c7ecee', 
            p: 2 
          }}
        >
          <Grid 
            container 
            spacing={2} 
            alignItems="center"
            justifyContent="space-between"
          >
            <InfoCard 
              title="Physics"
              content="Refraction through Lens and Electric Power & Heating Effects of Electric Current" 
            />
            <Grid item xs={12} md={1} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Divider orientation="vertical" flexItem />
            </Grid>
            <InfoCard 
              title="Chemistry"
              content="Carbon & its Compounds and Acid, Base & Salts" 
            />
            <Grid item xs={12} md={1} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Divider orientation="vertical" flexItem />
            </Grid>
            <InfoCard 
              title="Botany"
              content="Life Process and How do Organism reproduce" 
            />
            <Grid item xs={12} md={1} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Divider orientation="vertical" flexItem />
            </Grid>
            <InfoCard 
              title="Zoology"
              content="Life Process and Control and Coordination" 
            />
          </Grid>
        </Paper>
      </Container>

      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Typography variant="h6">NOTE-</Typography>
        <Box sx={{ ml: 3 }}>
          <Typography variant="body2" gutterBottom>
            1. Students can log in to their accounts later using the login button provided on the website or directly through{' '}
            <a 
              href="http://students.bhautikiplus.com" 
              style={{ color: 'blue', textDecoration: 'underline' }}
            >
              http://students.bhautikiplus.com
            </a>
          </Typography>
          <Typography variant="body2">
            2. The study material for this examination will be available on your account by December 1, 2024 (Sunday).
          </Typography>
        </Box>
      </Container>

      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          width: '100%', 
          backgroundColor: '#c7ecee',
          py: 2 
        }}
      >
        <Button 
          variant="contained" 
          size="large" 
          sx={{ 
            backgroundColor: '#000', 
            '&:hover': { 
              backgroundColor: '#333' 
            } 
          }}
        >
          Register Now
        </Button>
      </Box>

      <Footer1 />
      <Bottom1 />
    </Box>
  );
}