import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Home from './pages/Home';
import DonatePage from './pages/DonatePage';
import GetFoodPage from './pages/GetFoodPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF8400',
    },
    secondary: {
      main: '#FFB000',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/get-food" element={<GetFoodPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
