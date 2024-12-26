import { Breadcrumbs, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const FirstNavbar = () => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{ marginBottom: '1rem', paddingLeft: '10px' }}
    >
      <Link
        style={{
          textDecoration: 'none',
          color: 'inherit',
        }}
        to="#"
      >
        Homepage
      </Link>
      <Link
        style={{
          textDecoration: 'none',
          color: 'inherit',
        }}
        to="#"
      >
        Lahore
      </Link>
      <Typography color="text.primary">Quetta Paratha - 111</Typography>
    </Breadcrumbs>
  );
};

export default FirstNavbar;
