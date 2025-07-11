import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const ClickStatsTable = ({ stats }) => (
  <>
    <Typography variant="h6" sx={{ mb: 2 }}>Click Statistics</Typography>
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Shortcode</TableCell>
            <TableCell>Original URL</TableCell>
            <TableCell>Clicks</TableCell>
            <TableCell>Last Clicked</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stats.map((stat) => (
            <TableRow key={stat.shortcode}>
              <TableCell>{stat.shortcode}</TableCell>
              <TableCell sx={{ maxWidth: 200, wordBreak: 'break-all' }}>{stat.originalURL}</TableCell>
              <TableCell>{stat.clicks}</TableCell>
              <TableCell>{stat.lastClicked ? new Date(stat.lastClicked).toLocaleString() : 'Never'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
);

export default ClickStatsTable;