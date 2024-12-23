import React, { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Divider,
  Tooltip,
  Typography,
} from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, resetToast } from "../../../slices/products/productsSlice";

const Product = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { isToast, successToast } = useSelector((state) => state.products);

  // Fetch products from the API
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
        }));
        setProducts(productsData);
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

  // Handle toast notifications when product already exists
  useEffect(() => {
    if (isToast) {
      toast("Product already exists!");
      dispatch(resetToast()); // Reset the toast state after displaying the notification
    }

    // Handle success toast when product is successfully added
    if (successToast) {
      toast("Product added to cart successfully!");
      dispatch(resetToast()); // Reset successToast state after showing the success message
    }
  }, [isToast, successToast, dispatch]);

  return (
    <>
      <ToastContainer />
      <Box className="container mt-3 d-flex justify-content-between"></Box>

      {isLoading ? (
        <Box className="text-center">
          <CircularProgress color="success" />
        </Box>
      ) : (
        <Box className="container d-flex flex-wrap justify-content-center gap-4 mt-4 mb-5">
          {products.map((product) => (
            <Box
              key={product.id}
              className="shadow p-3"
              sx={{
                width: 220,
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
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{ height: "180px", objectFit: "contain" }}
                className="img-fluid"
              />
              <Tooltip title={product.title} placement="top">
                <Typography
                  variant="h6"
                  sx={{ fontSize: "1rem", fontWeight: "bold", marginTop: 1 }}
                >
                  {product.title.length > 20
                    ? `${product.title.slice(0, 17)}...`
                    : product.title}
                </Typography>
              </Tooltip>
              <Divider sx={{ my: 1, borderColor: "black" }} />
              <Box className="d-flex justify-content-around mt-2">
                <Tooltip title="View Details">
                  <VisibilityIcon color="primary" sx={{ cursor: "pointer" }} />
                </Tooltip>
                <Tooltip title="Add to Favorites">
                  <FavoriteIcon color="secondary" sx={{ cursor: "pointer" }} />
                </Tooltip>
                <Tooltip title="Add to Cart">
                  <AddShoppingCartIcon
                    onClick={() => dispatch(addProduct(product))}
                    color="action"
                    sx={{ cursor: "pointer", color: "#00c853" }}
                  />
                </Tooltip>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default Product;
