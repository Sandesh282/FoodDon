import { Box, Container, Typography, TextField, Button, MenuItem, Paper } from '@mui/material';
import happyChildImage from '../assets/happy-child.jpeg';

const DonatePage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `linear-gradient(45deg, rgba(255, 155, 80, 0.75) 30%, rgba(255, 176, 0, 0.75) 90%),
                    url(${happyChildImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h1"
          align="center"
          sx={{
            color: 'white',
            mb: 3,
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
          }}
        >
          Donate Food to Help the Homeless
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{
            color: 'white',
            mb: 4,
          }}
        >
          Your donation makes a big difference. Help feed someone today
        </Typography>

        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
            Food Donation Form
          </Typography>
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            <TextField
              required
              fullWidth
              label="Full Name"
              placeholder="Enter your name"
            />
            <TextField
              required
              fullWidth
              label="Phone Number"
              placeholder="Enter your phone number"
            />
            <TextField
              required
              fullWidth
              label="Address for Pickup"
              placeholder="Enter your address or nearby landmark"
            />
            <TextField
              required
              fullWidth
              select
              label="Type of Food to Donate"
              defaultValue=""
            >
              <MenuItem value="cooked">Cooked Food</MenuItem>
              <MenuItem value="packaged">Packaged Food</MenuItem>
              <MenuItem value="grains">Grains & Cereals</MenuItem>
              <MenuItem value="fruits">Fruits & Vegetables</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </TextField>
            <TextField
              required
              fullWidth
              label="Quantity of Food"
              placeholder="Enter the quantity"
            />
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Additional Information (Optional)"
              placeholder="Add any additional info or special instructions"
            />
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#FF8400',
                '&:hover': {
                  backgroundColor: '#FF6B00',
                },
                py: 1.5,
              }}
            >
              Submit Donation
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default DonatePage; 