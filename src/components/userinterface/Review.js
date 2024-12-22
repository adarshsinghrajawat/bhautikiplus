import { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import { getData, ServerURL } from '../services/ServerServices';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';

export default function TableComponent(props) {
  const colors = ['#ffeaa7', '#C1D9EE', '#FFE3F4', '#fab1a0', '#dff9fb'];

  // Function to get a random color
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  const [reviewList, setReviewList] = useState([]);

  const fetchAllReview = async () => {
    const result = await getData('category/fetch_all_reviews');
    setReviewList(result.data);
  };

  useEffect(() => {
    fetchAllReview();
  }, []);

  const showReview = () => {
    return reviewList.map((item, index) => {
      return (
        <Paper
          key={index}
          elevation={12}
          style={{
            borderRadius: '20px',
            width: '100%',
            maxWidth: '380px',
            height: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '25px',
            margin: '20px',
            background: getRandomColor(),
            flexDirection: 'column',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            overflow: 'hidden',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
          }}
        >
          <div
            style={{
              fontFamily: 'Kanit',
              fontWeight: '400',
              fontSize: '1.4em',
              color: '#333',
              padding: '10px',
              textAlign: 'center',
              marginBottom: '20px',
              fontStyle: 'italic',
              lineHeight: '1.6',
            }}
          >
            "{item.feedback}"
          </div>

          <div
            style={{
              fontFamily: 'Poppins',
              fontWeight: '600',
              fontSize: '1.1em',
              padding: '10px',
              color: '#1c0d5a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              lineHeight: '1.7em',
              textAlign: 'center',
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={`${ServerURL}/images/${item.logo}`}
              sx={{ width: 75, height: 75 }}
              style={{
                border: '4px solid #fff',
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
                transition: 'transform 0.3s ease',
              }}
            />
            <div>
              <div
                style={{
                  fontWeight: 'bold',
                  fontSize: '1.2em',
                  color: '#1c0d5a',
                  marginBottom: '5px',
                  textTransform: 'uppercase',
                }}
              >
                {item.studentname}
              </div>
              <div
                style={{
                  fontSize: '1em',
                  color: '#666',
                  fontStyle: 'italic',
                  marginTop: '5px',
                }}
              >
                {item.aboutstudent}
              </div>
            </div>
          </div>
        </Paper>
      );
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '50px 20px',
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontFamily: 'Josefin Sans',
          fontSize: '2.5em',
          fontWeight:'bolder',
          //fontWeight: '600',
          color: '#1c0d5a',
          marginBottom: '30px',
          textTransform: 'uppercase',
        }}
      >
        Student Reviews
      </h1>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          marginBottom: '30px',
          justifyContent: 'center',
          gap: '30px',
          justifyContent: 'center',
        }}
      >
        {showReview()}
      </div>
    </div>
  );
}
