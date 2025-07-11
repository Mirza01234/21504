import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAllURLs, saveURLData } from '../utils/storage';
import { logEvent } from '../middleware/logger';

const RedirectPage = () => {
  const { shortcode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const urls = getAllURLs();
    const data = urls[shortcode];
    if (data && (!data.expiry || new Date(data.expiry) > new Date())) {
      // Increment click stats
      data.clicks = (data.clicks || 0) + 1;
      data.lastClicked = new Date().toISOString();
      saveURLData(data.originalURL, shortcode, data.expiry, data.clicks, data.lastClicked);
      logEvent('redirect', { shortcode, to: data.originalURL });
      window.location.href = data.originalURL;
    } else {
      logEvent('redirect_failed', { shortcode });
      navigate('/');
    }
  }, [shortcode, navigate]);

  return null;
};

export default RedirectPage;