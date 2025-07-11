import React, { useState } from 'react';
import URLInputForm from '../components/URLInputForm';
import URLResultCard from '../components/URLResultCard';
import { saveURLData } from '../utils/storage';
import generateShortcode from '../utils/generateShortcode';
import { logEvent } from '../middleware/logger';
import Stack from '@mui/material/Stack';

const ShortenerPage = () => {
  const [results, setResults] = useState([]);

  const handleShorten = (inputs) => {
    const newResults = inputs.map(({ url, shortcode, validity }) => {
      const code = shortcode && shortcode.length > 0 ? shortcode : generateShortcode(url);
      const expiry = validity ? new Date(Date.now() + parseInt(validity) * 24 * 60 * 60 * 1000) : null;
      saveURLData(url, code, expiry);
      logEvent('shorten', { url, shortcode: code, expiry });
      return {
        shortenedURL: window.location.origin + '/' + code,
        originalURL: url,
        expiryDate: expiry ? expiry.toLocaleDateString() : 'Never',
      };
    });
    setResults(newResults);
  };

  return (
    <Stack spacing={3}>
      <URLInputForm onSubmit={handleShorten} />
      {results.map((res, idx) => (
        <URLResultCard key={idx} {...res} />
      ))}
    </Stack>
  );
};

export default ShortenerPage;