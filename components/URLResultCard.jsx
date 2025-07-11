import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const URLResultCard = ({ shortenedURL, originalURL, expiryDate }) => (
  <Card sx={{ minWidth: 300, mb: 2 }}>
    <CardContent>
      <Stack spacing={1}>
        <Typography variant="h6">Shortened URL</Typography>
        <Typography color="primary" sx={{ wordBreak: 'break-all' }}>{shortenedURL}</Typography>
        <Typography variant="body2">Original: {originalURL}</Typography>
        {expiryDate && <Typography variant="body2">Expires: {expiryDate}</Typography>}
      </Stack>
    </CardContent>
  </Card>
);

export default URLResultCard;