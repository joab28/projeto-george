import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

export default function Home() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      <Typography paragraph>
        Seja bem vindo ao site.
      </Typography>
    </Box>
  );
}