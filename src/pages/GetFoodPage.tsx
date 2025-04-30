import { Box, Container, Typography, TextField, Button, MenuItem, Paper } from '@mui/material';

const GetFoodPage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(45deg, #FF9B50 30%, #FFB000 90%)',
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
          Get Food Assistance
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{
            color: 'white',
            mb: 4,
          }}
        >
          No one should go hungry. We are here to help
        </Typography>

        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
            Food Assistance Form
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
              label="Address or Landmark"
              placeholder="Enter your address or nearby landmark"
            />
            <TextField
              required
              fullWidth
              select
              label="Preferred Type of Food"
              defaultValue=""
            >
              <MenuItem value="cooked">Cooked Food</MenuItem>
              <MenuItem value="packaged">Packaged Food</MenuItem>
              <MenuItem value="grains">Grains & Cereals</MenuItem>
              <MenuItem value="any">Any Type</MenuItem>
            </TextField>
            <TextField
              required
              fullWidth
              label="Number of People to Feed"
              placeholder="Enter the number of people"
              type="number"
            />
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Additional Information (Optional)"
              placeholder="Add any special requests or dietary needs"
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
              Submit Application
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default GetFoodPage; 