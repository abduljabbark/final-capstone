import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Tooltip, Typography, Divider } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocationContext } from "../../Header/LocationContext/LocationContext.jsx";

const ProductsApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { cityName } = useLocationContext();

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
      );
      if (response.status === 200) {
        const productsData = response.data.meals.map((meal) => ({
          id: meal.idMeal,
          title: meal.strMeal,
          image: meal.strMealThumb,
          rating: Math.floor(Math.random() * 5) + 1,
        }));
        // Limit to 13 products
        setProducts(productsData.slice(0, 13));
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching products:", error);
    }
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
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
                    },
                    cursor: "pointer",
                    position: "relative",
                  }}
                  onClick={() => navigate(`/product/${product.id}`, { state: product })}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "5px",
                    }}
                    className="img-fluid"
                  />
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
                  <Typography variant="body2" sx={{ color: "#757575" }}>
                    Rating: {product.rating}★
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
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "5px",
                    }}
                    className="img-fluid"
                  />
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
                  <Typography variant="body2" sx={{ color: "#757575" }}>
                    Rating: {product.rating}★
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
