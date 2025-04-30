import { Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(45deg, #FF9B50 30%, #FFB000 90%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h2"
          component="h1"
          align="center"
          sx={{
            color: 'white',
            marginBottom: 4,
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
          }}
        >
          Help the Homeless
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            alignItems: 'center',
          }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/donate')}
            sx={{
              width: '250px',
              height: '60px',
              fontSize: '1.2rem',
              backgroundColor: '#FF8400',
              '&:hover': {
                backgroundColor: '#FF6B00',
              },
            }}
          >
            Donate Food
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/get-food')}
            sx={{
              width: '250px',
              height: '60px',
              fontSize: '1.2rem',
              backgroundColor: '#FF8400',
              '&:hover': {
                backgroundColor: '#FF6B00',
              },
            }}
          >
            Get Food
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 