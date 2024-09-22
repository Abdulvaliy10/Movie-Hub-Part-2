import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import Movies from './Pages/Movies';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Main flex container to manage layout */}
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Header remains at the top */}
        <Header />

        {/* Main content will grow and push the footer down if needed */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<div>Trending</div>} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<div>TV Series</div>} />
            <Route path="/search" element={<div>Search</div>} />
          </Routes>
        </div>

        {/* Footer stays at the bottom */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
