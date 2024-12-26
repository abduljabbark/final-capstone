// import React, { useEffect, useState } from "react";
// import { Box, CircularProgress, Divider, Tooltip, Typography } from "@mui/material";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import { useNavigate } from "react-router-dom"; // For navigation

// const ProductsApi = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate(); // Initialize the navigate function

//   const fetchProducts = async () => {
//     try {
//       setIsLoading(true);
//       const response = await axios.get(
//         "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
//       );
//       if (response.status === 200) {
//         const productsData = response.data.meals.map((meal) => ({
//           id: meal.idMeal,
//           title: meal.strMeal,
//           image: meal.strMealThumb,
//           rating: Math.floor(Math.random() * 5) + 1, // Random rating for demonstration
//         }));
//         setProducts(productsData);
//       }
//       setIsLoading(false);
//     } catch (error) {
//       setIsLoading(false);
//       console.error("Error fetching products:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleCardClick = (product) => {
//     navigate(`/product-details/${product.id}`); // Navigate to the details page
//   };

//   return (
//     <>
//       <ToastContainer />
//       <Box className="container mt-3 d-flex justify-content-between"></Box>

//       {isLoading ? (
//         <Box className="text-center">
//           <CircularProgress color="success" />
//         </Box>
//       ) : (
//         <Box className="container mt-4 mb-5">
//           <div className="row row-cols-1 row-cols-md-3 g-4">
//             {products.map((product) => (
//               <div key={product.id} className="col">
//                 <Box
//                   className="shadow p-3"
//                   sx={{
//                     height: 350,
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "space-between",
//                     borderRadius: 3,
//                     boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//                     transition: "transform 0.3s ease",
//                     "&:hover": {
//                       transform: "scale(1.05)",
//                       boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
//                     },
//                     cursor: "pointer", // Makes the card clickable
//                   }}
//                   onClick={() => handleCardClick(product)} // Handle card click
//                 >
//                   <img
//                     src={product.image}
//                     alt={product.title}
//                     style={{
//                       height: "180px",
//                       objectFit: "cover",
//                       borderRadius: "5px",
//                     }}
//                     className="img-fluid"
//                   />
//                   <Tooltip title={product.title} placement="top">
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         fontSize: "1rem",
//                         fontWeight: "bold",
//                         marginTop: 1,
//                       }}
//                     >
//                       {product.title.length > 20
//                         ? `${product.title.slice(0, 17)}...`
//                         : product.title}
//                     </Typography>
//                   </Tooltip>
//                   <Typography variant="body2" sx={{ color: "#757575" }}>
//                     Rating: {product.rating}★
//                   </Typography>
//                   <Divider sx={{ my: 1, borderColor: "black" }} />
//                 </Box>
//               </div>
//             ))}
//           </div>
//         </Box>
//       )}
//     </>
//   );
// };

// export default ProductsApi;

// import React, { useEffect, useState } from "react";
// import { Box, CircularProgress, Tooltip, Typography, Divider } from "@mui/material";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// const ProductsApi = ({ onProductSelect }) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [products, setProducts] = useState([]);

//   const fetchProducts = async () => {
//     try {
//       setIsLoading(true);
//       const response = await axios.get(
//         "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
//       );
//       if (response.status === 200) {
//         const productsData = response.data.meals.map((meal) => ({
//           id: meal.idMeal,
//           title: meal.strMeal,
//           image: meal.strMealThumb,
//           rating: Math.floor(Math.random() * 5) + 1,
//         }));
//         setProducts(productsData);
//       }
//       setIsLoading(false);
//     } catch (error) {
//       setIsLoading(false);
//       console.error("Error fetching products:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <Box className="text-center">
//           <CircularProgress color="success" />
//         </Box>
//       ) : (
//         <Box className="container mt-4 mb-5">
//           <div className="row row-cols-1 row-cols-md-3 g-4">
//             {products.map((product) => (
//               <div key={product.id} className="col">
//                 <Box
//                   className="shadow p-3"
//                   sx={{
//                     height: 350,
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "space-between",
//                     borderRadius: 3,
//                     boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//                     transition: "transform 0.3s ease",
//                     "&:hover": {
//                       transform: "scale(1.05)",
//                       boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
//                     },
//                     cursor: "pointer",
//                   }}
//                   // Ensure the function is being passed and called
//                   onClick={() => {
//                     if (onProductSelect) {
//                       onProductSelect(product);
//                     }
//                   }}
//                 >
//                   <img
//                     src={product.image}
//                     alt={product.title}
//                     style={{
//                       height: "180px",
//                       objectFit: "cover",
//                       borderRadius: "5px",
//                     }}
//                     className="img-fluid"
//                   />
//                   <Tooltip title={product.title} placement="top">
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         fontSize: "1rem",
//                         fontWeight: "bold",
//                         marginTop: 1,
//                       }}
//                     >
//                       {product.title.length > 20
//                         ? `${product.title.slice(0, 17)}...`
//                         : product.title}
//                     </Typography>
//                   </Tooltip>
//                   <Typography variant="body2" sx={{ color: "#757575" }}>
//                     Rating: {product.rating}★
//                   </Typography>
//                   <Divider sx={{ my: 1, borderColor: "black" }} />
//                 </Box>
//               </div>
//             ))}
//           </div>
//         </Box>
//       )}
//     </>
//   );
// };

// export default ProductsApi;
import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Tooltip, Typography, Divider } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductsApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();  // React Router's useNavigate hook

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

  return (
    <>
      {isLoading ? (
        <Box className="text-center">
          <CircularProgress color="success" />
        </Box>
      ) : (
        <Box className="container mt-4 mb-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.map((product) => (
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
                  }}
                  onClick={() => {
                    navigate(`/product/${product.id}`);  // Navigate to ProductDetail page
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
