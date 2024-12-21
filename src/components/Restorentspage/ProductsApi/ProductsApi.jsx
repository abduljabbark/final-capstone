import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Divider, TextField, Tooltip, Typography } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import axios from 'axios';

const Product = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
            if (response.status === 200) {
                setIsLoading(false);
                const productsData = response?.data?.meals.map((meal) => ({
                    id: meal.idMeal,
                    title: meal.strMeal,
                    image: meal.strMealThumb,
                }));
                setAllProducts(productsData);
                setProducts(productsData);
            } else {
                setIsLoading(false);
                toast.error("Failed to fetch products.");
            }
        } catch (error) {
            setIsLoading(false);
            console.error("Error fetching products:", error);
            toast.error("Something went wrong. Please try again later.");
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const searchHandler = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredProducts = allProducts.filter((product) =>
            product.title.toLowerCase().includes(searchTerm)
        );
        setProducts(filteredProducts);
    };

    return (
        <>
            <ToastContainer />
            <Box className="container mt-3 d-flex justify-content-between">
          
            </Box>

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
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
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
                                <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: 'bold', marginTop: 1 }}>
                                    {product.title.length > 20 ? `${product.title.slice(0, 17)}...` : product.title}
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
                                    <AddShoppingCartIcon color="action" sx={{ cursor: "pointer", color: "#00c853" }} />
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
