import React, { useEffect, useState } from 'react';
import ClickStatsTable from '../components/ClickStatsTable';
import { getAllURLs } from '../utils/storage';
import Box from '@mui/material/Box';

const StatisticsPage = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const urls = getAllURLs();
    const statArr = Object.entries(urls).map(([shortcode, data]) => ({
      shortcode,
      originalURL: data.originalURL,
      clicks: data.clicks || 0,
      lastClicked: data.lastClicked || null,
    }));
    setStats(statArr);
  }, []);

  return (
    <Box>
      <ClickStatsTable stats={stats} />
    </Box>
  );
};

export default StatisticsPage;