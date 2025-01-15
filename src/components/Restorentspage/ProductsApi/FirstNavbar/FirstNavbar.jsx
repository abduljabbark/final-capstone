import { Breadcrumbs, Typography } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const FirstNavbar = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const city = searchParams.get('city'); // Get the city name from the query parameter

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{
        marginBottom: '1rem',
        paddingLeft: { xs: '5px', sm: '10px', md: '20px' }, // Responsive padding
        fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' }, // Responsive font size
      }}
    >
      {/* Home Link */}
      <Link
        style={{
          textDecoration: 'none',
          color: 'black',
          fontWeight:'bold',
          fontSize: '15px' // Ensure font size is responsive
        }}
        to="/"
      >
        Home
      </Link>

      {/* City Name (if available) */}
      {city && (
        <Typography color="text.primary" sx={{color: 'black', fontWeight:'bold', fontSize: '15px' }}>
          {city}
        </Typography>
      )}

    
    </Breadcrumbs>
  );
};

export default FirstNavbar;
