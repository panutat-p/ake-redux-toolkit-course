import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function DenyPage() {
  return (
    <>
      <Box sx={{ mt: 10 }} />
      <Container maxWidth="sm">
        <Typography variant="h2" component="h2">
          Permission Denied
        </Typography>
      </Container>
    </>
  );
}

export default DenyPage;
