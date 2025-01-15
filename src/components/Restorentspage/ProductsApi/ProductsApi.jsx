import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Tooltip, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocationContext } from "../../Header/LocationContext/LocationContext.jsx";
import Product1 from "../../../images/madina-restaurant.webp"; // Import the image here
import Product2 from "../../../images/shezan-bakers-cavalry-ground.webp"; // Import the image here
import Product3 from "../../../images/quetta-food.jpg"; // Import the image here
import Product4 from "../../../images/ahmad-dahi-bhallay.webp"; // Import the image here
import Product5 from "../../../images/desi-feast-taste-of-real-spices.webp"; // Import the image here
import Product6 from "../../../images/anmool-nan-shop.webp"; // Import the image here
import Product7 from "../../../images/lahore-broast-dha.webp"; // Import the image here
import Product8 from "../../../images/faisal-zahoor-restaurant.webp"; // Import the image here
import Product9 from "../../../images/mama-bears-cookery.webp"; // Import the image here
import Product10 from "../../../images/haagen-dazs-kasoori-road.webp"; // Import the image here
import Product11 from "../../../images/pazookie-cantt.webp"; // Import the image here
import Product12 from "../../../images/phulka-cuisine.webp"; // Import the image here
import Product13 from "../../../images/kent-broast.webp"; // Import the image here

const ProductsApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { cityName } = useLocationContext();

  // Replace API call with dummy products
  const fetchProducts = () => {
    setIsLoading(true);
    const dummyProducts = [
      { id: 1, title: "Madina Restaurent", image: Product1, rating: 4, price: 100 },
      { id: 2, title: "Shezan Bakers-Cavalry Ground", image: Product2, rating: 5, price: 150 },
      { id: 3, title: "Quetta Paratha-111", image: Product3, rating: 3, price: 180 },
      { id: 4, title: "Ahmad Dahi Bhallay - Cavalry Ground", image: Product4, rating: 4, price: 120 },
      { id: 5, title: "Desi Feast (Taste Of Real Spices)", image: Product5, rating: 5, price: 200 },
      { id: 6, title: "Anmool Nan shop", image: Product6, rating: 2, price: 60 },
      { id: 7, title: "Lahore Broast - DHA", image: Product7, rating: 3, price: 140 },
      { id: 8, title: "Faisal Zahoor Restaurant", image: Product8, rating: 4, price: 180 },
      { id: 9, title: "Mama Bear’s Cookery", image: Product9, rating: 5, price: 220 },
      { id: 10, title: "Haagen Dazs - Kasoori Road", image: Product10, rating: 2, price: 250 },
      { id: 11, title: "Pazookie - Cantt", image: Product11, rating: 4, price: 130 },
      { id: 12, title: "Phulka Cuisine", image: Product12, rating: 3, price: 90 },
      { id: 13, title: "Kent Broast", image: Product13, rating: 5, price: 170 },
    ];
    
    setProducts(dummyProducts);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Split the products into enabled and disabled
  const enabledProducts = products.slice(7);
  const disabledProducts = products.slice(0, 7);

  return (
    <>
      {isLoading ? (
        <Box className="text-center">
          <CircularProgress color="success" />
        </Box>
      ) : (
        <Box className="container mt-4 mb-5">
          {/* Display Enabled Products */}
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {enabledProducts.map((product) => (
              <div key={product.id} className="col">
                <Box
                  className="shadow p-3"
                  sx={{
                    height: 350,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderRadius: 3,
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  onClick={() => navigate(`/product/${product.title.replace(/\s+/g, "-").toLowerCase()}`, { state: product })}

                >
                  <Box
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "5px",
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{
                        height: "180px",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "5px",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      }}
                      onMouseOver={(e) => {
                        e.target.style.transform = "scale(1.05)";
                        e.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
                      }}
                      onMouseOut={(e) => {
                        e.target.style.transform = "scale(1)";
                        e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                      }}
                      className="img-fluid"
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: "10px", // Adjust position from the top
                        left: "27.5%",
                        width: "52%",
                        transform: "translateX(-50%)",
                        backgroundColor: "#ec008c",
                        color: "white",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        fontSize: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      Welcome gift: free de...
                    </Box>

                    <Box
                      sx={{
                        position: "absolute",
                        top: "26%",
                        left: "19%",
                        width: "35%",
                        transform: "translateX(-50%)",
                        backgroundColor: "#ec008c",
                        color: "white",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        fontSize: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      20% off: mc20
                    </Box>
                  </Box>

                  <Box className="d-flex align-items-center justify-content-between">
                    <Tooltip title={product.title} placement="top">
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "1rem",
                          fontWeight: "bold",
                          marginTop: 1,
                        }}
                      >
                        {product.title.length > 20
                          ? `${product.title.slice(0, 17)}...`
                          : product.title}
                      </Typography>
                    </Tooltip>
                 <Typography variant="body1" sx={{ color: "#757575", display: 'flex', alignItems: 'center' }}>
                   Rating:
                   <Typography sx={{ color: "#FFB413", marginLeft: 0.5 }}>★</Typography> 
                   {product.rating}({product.rating * 40}+)
                 </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: "black" }}>
                    Pakistani
                  </Typography>
                  <Divider sx={{ my: 1, borderColor: "black" }} />
                </Box>
              </div>
            ))}
          </div>

          {/* Display Disabled Products Below */}
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
            {disabledProducts.map((product) => (
              <div key={product.id} className="col">
                <Box
                  className="shadow p-3 opacity-50"
                  sx={{
                    height: 350,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderRadius: 3,
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "none",
                      boxShadow: "none",
                    },
                    cursor: "not-allowed",
                    position: "relative",
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{
                        height: "180px",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "5px",
                      }}
                      className="img-fluid"
                    />
                  </Box>
                  <Box className="d-flex align-items-center justify-content-between">
                    <Tooltip title={product.title} placement="top">
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "1rem",
                          fontWeight: "bold",
                          marginTop: 1,
                        }}
                      >
                        {product.title.length > 20
                          ? `${product.title.slice(0, 17)}...`
                          : product.title}
                      </Typography>
                    </Tooltip>
                <Typography variant="body1" sx={{ color: "#757575", display: 'flex', alignItems: 'center' }}>
                  Rating:
                  <Typography sx={{ color: "#FFB413", marginLeft: 0.5 }}>★</Typography> 
                  {product.rating}({product.rating * 40}+)
                </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: "black" }}>
                    Pakistani
                  </Typography>
                  <Divider sx={{ my: 1, borderColor: "black" }} />
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      color: "white",
                      padding: "5px 10px",
                      borderRadius: "5px",
                    }}
                  >
                    Disabled
                  </Box>
                </Box>
              </div>
            ))}
          </div>
        </Box>
      )}
    </>
  );
};

export default ProductsApi;
