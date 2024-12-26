// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../../../../slices/add-cart/addCartSlice"; // Ensure this path is correct
// import axios from "axios";
// import { Box, Grid, Typography, Button } from "@mui/material";

// const SecondApi = () => {
//   const [product, setProduct] = useState([]);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     axios
//       .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
//       .then((response) => setProduct(response.data.meals))
//       .catch((error) => console.log(error));
//   }, []);

//   const handleAddToCart = (item) => {
//     dispatch(
//       addToCart({
//         id: item.idMeal,
//         name: item.strMeal,
//         image: item.strMealThumb,
//         price: 100, // Example price
//       })
//     );
//   };

//   return (
//     <Box sx={{ flex: 3 }}>
//       <Grid container spacing={2}>
//         {product?.map((item) => (
//           <Grid item xs={12} sm={6} key={item.idMeal}>
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 border: "1px solid #ddd",
//                 borderRadius: 2,
//                 boxShadow: 2,
//                 padding: 2,
//                 height: "150px",
//               }}
//             >
//               <Box sx={{ flex: 1, marginRight: 2 }}>
//                 <Typography
//                   variant="subtitle1"
//                   fontWeight="bold"
//                   sx={{ textTransform: "uppercase" }}
//                 >
//                   {item?.strMeal}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Rs. 100
//                 </Typography>
//               </Box>
//               <Box
//                 component="img"
//                 src={item?.strMealThumb}
//                 alt={item?.strMeal}
//                 sx={{
//                   width: "170px",
//                   height: "170px",
//                   objectFit: "cover",
//                   borderRadius: 2,
//                   marginRight: 2,
//                 }}
//               />
//               <Button
//                 variant="contained"
//                 color="primary"
//                 sx={{
//                   borderRadius: "50%",
//                   minWidth: "40px",
//                   minHeight: "40px",
//                   padding: 0,
//                   fontSize: "1.2rem",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//                 onClick={() => handleAddToCart(item)}
//               >
//                 +
//               </Button>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default SecondApi;

// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../../../../slices/add-cart/addCartSlice"; // Ensure this path is correct
// import axios from "axios";
// import { Box, Grid, Typography, Button } from "@mui/material";

// const SecondApi = () => {
//   const [product, setProduct] = useState([]);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     axios
//       .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
//       .then((response) => setProduct(response.data.meals))
//       .catch((error) => console.log(error));
//   }, []);

//   const handleAddToCart = (item) => {
//     dispatch(
//       addToCart({
//         id: item.idMeal,
//         name: item.strMeal,
//         image: item.strMealThumb,
//         price: 100, // Example price
//       })
//     );
//   };

//   return (
//     <Box sx={{ flex: 3 }}>
//       <Grid container spacing={2}>
//         {product?.map((item) => (
//           <Grid item xs={12} sm={6} key={item.idMeal}>
//             <Box
//               sx={{
//                 position: "relative",
//                 border: "1px solid #ddd",
//                 borderRadius: 2,
//                 boxShadow: 2,
//                 padding: 2,
//                 height: "200px", // Increased height
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//               }}
//             >
//               <Box>
//                 <Typography
//                   variant="subtitle1"
//                   fontWeight="bold"
//                   sx={{ textTransform: "uppercase" }}
//                 >
//                   {item?.strMeal}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Rs. 100
//                 </Typography>
//               </Box>
//               <Box
//                 component="img"
//                 src={item?.strMealThumb}
//                 alt={item?.strMeal}
//                 sx={{
//                   width: "100%",
//                   height: "120px", // Adjusted height for better fit
//                   objectFit: "cover",
//                   borderRadius: 2,
//                 }}
//               />
//               <Button
//                 variant="contained"
//                 sx={{
//                   position: "absolute",
//                   top: "10px",
//                   right: "10px",
//                   backgroundColor: "transparent", // Transparent background
//                   border: "1px solid #000",
//                   color: "#000",
//                   borderRadius: "50%",
//                   minWidth: "40px",
//                   minHeight: "40px",
//                   padding: 0,
//                   fontSize: "1.2rem",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   "&:hover": {
//                     backgroundColor: "#f0f0f0", // Light hover effect
//                   },
//                 }}
//                 onClick={() => handleAddToCart(item)}
//               >
//                 +
//               </Button>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default SecondApi;
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../../slices/add-cart/addCartSlice"; // Ensure this path is correct
import axios from "axios";
import { Box, Grid, Typography, Button } from "@mui/material";

const SecondApi = () => {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((response) => setProduct(response.data.meals))
      .catch((error) => console.log(error));
  }, []);

  const handleAddToCart = (item) => {
    dispatch(
      addToCart({
        id: item.idMeal,
        name: item.strMeal,
        image: item.strMealThumb,
        price: 100, // Example price
      })
    );
  };

  return (
    <Box sx={{ flex: 3 }}>
      <Grid container spacing={2}>
        {product?.map((item) => (
          <Grid item xs={12} sm={5} md={4} key={item.idMeal}> {/* Adjusted column size for wider cards */}
            <Box
              sx={{
                position: "relative",
                border: "1px solid #ddd",
                borderRadius: 2,
                boxShadow: 2,
                padding: 2,
                height: "200px",
                display: "flex",
                flexDirection: "row", // Align text and image horizontally
                justifyContent: "space-between",
                alignItems: "center", // Center-align text and image vertically
              }}
            >
              {/* Text Section */}
              <Box sx={{ display: "flex", flexDirection: "column", flex: 1, paddingRight: 2 }}>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  sx={{ textTransform: "uppercase", marginBottom: 1 }}
                >
                  {item?.strMeal}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rs. 100
                </Typography>
              </Box>

              
              <Box
                sx={{
                  position: "relative", 
                  width: "150px", 
                  height: "150px", 
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={item?.strMealThumb}
                  alt={item?.strMeal}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
                />
                {/* Plus Button */}
                <Button
  variant="contained"
  sx={{
    position: "absolute",
    top: "5px",
    right: "5px",
    backgroundColor: "transparent", // Transparent background
    border: "2px solid white", // White border
    color: "white", // White text color
    fontWeight: "bold", // Bold text
    borderRadius: "50%",
    minWidth: "40px",
    minHeight: "40px",
    padding: 0,
    fontSize: "1.2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "#d0077c", // Pink background on hover
    },
  }}
  onClick={() => handleAddToCart(item)}
>
  +
</Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SecondApi;
