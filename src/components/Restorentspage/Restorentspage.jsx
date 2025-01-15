import React from 'react';
import ResturentHero from '../ResturentHero/ResturentHero';
import ProductsApi from './ProductsApi/ProductsApi';
import FirstNavbar from './ProductsApi/FirstNavbar/FirstNavbar';

const Restorentspage = () => {
  return (
    <>
      <style>{`
        .responsive-navbar {
          margin-left: 300px; /* Default margin for larger screens */
        }

        /* For tablets (screen width <= 768px) */
        @media (max-width: 768px) {
          .responsive-navbar {
            margin-left: 150px; /* Adjust for medium-sized devices */
          }
        }

        /* For mobile phones (screen width <= 480px) */
        @media (max-width: 480px) {
          .responsive-navbar {
            margin-left: 50px; /* Adjust for smaller devices */
          }
        }
      `}</style>
      <ResturentHero />,
      <div className="responsive-navbar">
        <FirstNavbar />
      </div>,
      <ProductsApi />
    </>
  );
};

export default Restorentspage;
