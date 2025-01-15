import { Breadcrumbs, Typography } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const FirstNavbar = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const city = searchParams.get('city'); // Get the city name from the query parameter
  
  // Split the pathname to get the breadcrumb paths
  const pathParts = location.pathname.split('/').filter(Boolean);

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{
        marginBottom: '1rem',
        paddingLeft: { xs: '5px', sm: '10px', md: '20px' }, // Responsive padding
        fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' }, // Responsive font size
      }}
    >
      {/* Homepage Link */}
      <Link
        style={{
          textDecoration: 'none',
          color: 'black',
          fontWeight: 'bold',
          fontSize: '15px', // Ensure font size is responsive
        }}
        to="/"
      >
        Home
      </Link>

      {/* Dynamic Breadcrumbs based on path */}
      {pathParts.map((part, index) => {
        // Replace 'product' with 'restaurant' in the display text
        const displayPart = part === 'product' ? 'restaurant' : part;

        // If it's the "restaurant" part, make it point to the product API page
        const toLink = part === 'product'
          ? `/products` // Adjust this based on your actual route for products
          : `/${pathParts.slice(0, index + 1).join('/')}`;

        return (
          <Link
            key={index}
            style={{
              textDecoration: 'none',
              color: 'black',
              fontWeight: 'bold',
              fontSize: '15px', // Ensure font size is responsive
            }}
            to={toLink}
          >
            {displayPart}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default FirstNavbar;
