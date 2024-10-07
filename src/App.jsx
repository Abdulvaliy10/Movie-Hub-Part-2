import {Route , Routes} from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import Movies from './Pages/Movies';
import Series from './Pages/TvSeries/i';
function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<div>Trending</div>} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />}/>
        <Route path="/search" element={<div>Search</div>} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;