import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShortenerPage from './pages/ShortenerPage';
import StatisticsPage from './pages/StatisticsPage';
import RedirectPage from './pages/RedirectPage';
import Navbar from './components/Navbar';
import Box from '@mui/material/Box';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Box sx={{ p: 2 }}>
        <Routes>
          <Route path="/" element={<ShortenerPage />} />
          <Route path="/stats" element={<StatisticsPage />} />
          <Route path=":shortcode" element={<RedirectPage />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;