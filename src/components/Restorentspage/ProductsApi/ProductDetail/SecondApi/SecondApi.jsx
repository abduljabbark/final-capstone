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
//           <Grid item xs={12} sm={5} md={4} key={item.idMeal}> {/* Adjusted column size for wider cards */}
//             <Box
//               sx={{
//                 position: "relative",
//                 border: "1px solid #ddd",
//                 borderRadius: 2,
//                 boxShadow: 2,
//                 padding: 2,
//                 height: "200px",
//                 display: "flex",
//                 flexDirection: "row", // Align text and image horizontally
//                 justifyContent: "space-between",
//                 alignItems: "center", // Center-align text and image vertically
//               }}
//             >
//               {/* Text Section */}
//               <Box sx={{ display: "flex", flexDirection: "column", flex: 1, paddingRight: 2 }}>
//                 <Typography
//                   variant="subtitle1"
//                   fontWeight="bold"
//                   sx={{ textTransform: "uppercase", marginBottom: 1 }}
//                 >
//                   {item?.strMeal.length > 10 ? item.strMeal.slice(0, 10) + "..." : item.strMeal}
//                 </Typography>

//                 <Typography variant="body2" color="text.secondary">
//                   Rs. 100
//                 </Typography>
//               </Box>


//               <Box
//                 sx={{
//                   position: "relative",
//                   width: "150px",
//                   height: "150px",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <Box
//                   component="img"
//                   src={item?.strMealThumb}
//                   alt={item?.strMeal}
//                   sx={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     borderRadius: 2,
//                   }}
//                 />
//                 {/* Plus Button */}
//                 <Button
//                   variant="contained"
//                   sx={{
//                     position: "absolute",
//                     top: "5px",
//                     right: "5px",
//                     backgroundColor: "transparent", // Transparent background
//                     border: "2px solid white", // White border
//                     color: "white", // White text color
//                     fontWeight: "bold", // Bold text
//                     borderRadius: "50%",
//                     minWidth: "40px",
//                     minHeight: "40px",
//                     padding: 0,
//                     fontSize: "1.2rem",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     "&:hover": {
//                       backgroundColor: "#d0077c", // Pink background on hover
//                     },
//                   }}
//                   onClick={() => handleAddToCart(item)}
//                 >
//                   +
//                 </Button>
//               </Box>
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
//     <Box sx={{ flex: 3, padding: 2 }}>
//   <Grid container spacing={2}>
//     {product?.map((item) => (
//       <Grid
//         item
//         xs={12}
//         sm={6}
//         md={4} // 3 items in a row for tablet
//         lg={4} // 3 items in a row for laptops/desktops
//         key={item.idMeal}
//       >
//         <Box
//           sx={{
//             position: "relative",
//             border: "1px solid #ddd",
//             borderRadius: 2,
//             boxShadow: 2,
//             padding: 2,
//             height: { xs: "auto", sm: "220px", lg: "200px" },
//             display: "flex",
//             flexDirection: { xs: "column", sm: "row" },
//             justifyContent: "space-between",
//             alignItems: "center",
//             gap: { xs: 2, sm: 1 },
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               flex: 1,
//               paddingRight: { xs: 0, sm: 2 },
//               textAlign: { xs: "center", sm: "left" },
//             }}
//           >
//             <Typography
//               variant="subtitle1"
//               fontWeight="bold"
//               sx={{
//                 textTransform: "uppercase",
//                 marginBottom: 1,
//                 fontSize: { xs: "0.9rem", sm: "1rem" },
//               }}
//             >
//               {item?.strMeal.length > 10
//                 ? item.strMeal.slice(0, 10) + "..."
//                 : item.strMeal}
//             </Typography>
//             <Typography
//               variant="body2"
//               color="text.secondary"
//               sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" } }}
//             >
//               Rs. 100
//             </Typography>
//           </Box>

//           <Box
//             sx={{
//               position: "relative",
//               width: { xs: "100px", sm: "150px" },
//               height: { xs: "100px", sm: "150px" },
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <Box
//               component="img"
//               src={item?.strMealThumb}
//               alt={item?.strMeal}
//               sx={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//                 borderRadius: 2,
//               }}
//             />
//             <Button
//               variant="contained"
//               sx={{
//                 position: "absolute",
//                 top: "5px",
//                 right: "5px",
//                 backgroundColor: "transparent",
//                 border: "2px solid white",
//                 color: "white",
//                 fontWeight: "bold",
//                 borderRadius: "50%",
//                 minWidth: { xs: "30px", sm: "40px" },
//                 minHeight: { xs: "30px", sm: "40px" },
//                 fontSize: { xs: "1rem", sm: "1.2rem" },
//                 "&:hover": {
//                   backgroundColor: "#d0077c",
//                 },
//               }}
//               onClick={() => handleAddToCart(item)}
//             >
//               +
//             </Button>
//           </Box>
//         </Box>
//       </Grid>
//     ))}
//   </Grid>
// </Box>

//   );
// };

// export default SecondApi;
// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../../../../slices/add-cart/addCartSlice"; // Ensure this path is correct
// import axios from "axios";
// import { Box, Grid, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

// const SecondApi = () => {
//   const [product, setProduct] = useState([]);
//   const [openModal, setOpenModal] = useState(false); // State to handle modal open/close
//   const [email, setEmail] = useState(""); // State for email input
//   const [selectedItem, setSelectedItem] = useState(null); // State to store the selected product
//   const dispatch = useDispatch();

//   useEffect(() => {
//     axios
//       .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
//       .then((response) => setProduct(response.data.meals))
//       .catch((error) => console.log(error));
//   }, []);

//   const handleAddToCart = (item) => {
//     setSelectedItem(item); // Set the selected item
//     setOpenModal(true); // Open the modal
//   };

//   const handleSubmit = () => {
//     if (email) {
//       dispatch(
//         addToCart({
//           id: selectedItem.idMeal,
//           name: selectedItem.strMeal,
//           image: selectedItem.strMealThumb,
//           price: 100, // Example price
//         })
//       );
//       setOpenModal(false); // Close modal after adding to cart
//       setEmail(""); // Reset email field
//     } else {
//       alert("Please enter a valid email address.");
//     }
//   };

//   return (
//     <Box sx={{ flex: 3, padding: 2 }}>
//       <Grid container spacing={2}>
//         {product?.map((item) => (
//           <Grid
//             item
//             xs={12}
//             sm={6}
//             md={4} // 3 items in a row for tablet
//             lg={4} // 3 items in a row for laptops/desktops
//             key={item.idMeal}
//           >
//             <Box
//               sx={{
//                 position: "relative",
//                 border: "1px solid #ddd",
//                 borderRadius: 2,
//                 boxShadow: 2,
//                 padding: 2,
//                 height: { xs: "auto", sm: "220px", lg: "200px" },
//                 display: "flex",
//                 flexDirection: { xs: "column", sm: "row" },
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 gap: { xs: 2, sm: 1 },
//               }}
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   flex: 1,
//                   paddingRight: { xs: 0, sm: 2 },
//                   textAlign: { xs: "center", sm: "left" },
//                 }}
//               >
//                 <Typography
//                   variant="subtitle1"
//                   fontWeight="bold"
//                   sx={{
//                     textTransform: "uppercase",
//                     marginBottom: 1,
//                     fontSize: { xs: "0.9rem", sm: "1rem" },
//                   }}
//                 >
//                   {item?.strMeal.length > 10
//                     ? item.strMeal.slice(0, 10) + "..."
//                     : item.strMeal}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="text.secondary"
//                   sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" } }}
//                 >
//                   Rs. 100
//                 </Typography>
//               </Box>

//               <Box
//                 sx={{
//                   position: "relative",
//                   width: { xs: "100px", sm: "150px" },
//                   height: { xs: "100px", sm: "150px" },
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <Box
//                   component="img"
//                   src={item?.strMealThumb}
//                   alt={item?.strMeal}
//                   sx={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     borderRadius: 2,
//                   }}
//                 />
//                 <Button
//                   variant="contained"
//                   sx={{
//                     position: "absolute",
//                     top: "5px",
//                     right: "5px",
//                     backgroundColor: "transparent",
//                     border: "2px solid white",
//                     color: "white",
//                     fontWeight: "bold",
//                     borderRadius: "50%",
//                     minWidth: { xs: "30px", sm: "40px" },
//                     minHeight: { xs: "30px", sm: "40px" },
//                     fontSize: { xs: "1rem", sm: "1.2rem" },
//                     "&:hover": {
//                       backgroundColor: "#d0077c",
//                     },
//                   }}
//                   onClick={() => handleAddToCart(item)}
//                 >
//                   +
//                 </Button>
//               </Box>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Modal for email input */}
//       <Dialog open={openModal} onClose={() => setOpenModal(false)}>
//         <DialogTitle>Enter Your Email</DialogTitle>
//         <DialogContent>
//           <TextField
//             label="Email"
//             type="email"
//             fullWidth
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             sx={{ marginBottom: 2 }}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setOpenModal(false)} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleSubmit} color="primary">
//             Add to Cart
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default SecondApi;
// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../../../../slices/add-cart/addCartSlice";
// import axios from "axios";
// import { Box, Grid, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography as MuiTypography } from "@mui/material";

// const SecondApi = () => {
//   const [product, setProduct] = useState([]);
//   const [openModal, setOpenModal] = useState(false); // State to handle modal open/close
//   const [email, setEmail] = useState(""); // State for email input
//   const [selectedItem, setSelectedItem] = useState(null); // State to store the selected product
//   const [loginError, setLoginError] = useState(null); // State to handle login error
//   const dispatch = useDispatch();

//   useEffect(() => {
//     axios
//       .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
//       .then((response) => setProduct(response.data.meals))
//       .catch((error) => console.log(error));
//   }, []);

//   const handleAddToCart = (item) => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user) {
//       setSelectedItem(item);
//       setEmail(user.email); // Set email from logged-in user
//       setOpenModal(true); // Open the modal
//     } else {
//       alert("Please log in to add products to the cart.");
//     }
//   };

//   const handleSubmit = () => {
//     if (email) {
//       dispatch(
//         addToCart({
//           id: selectedItem.idMeal,
//           name: selectedItem.strMeal,
//           image: selectedItem.strMealThumb,
//           price: 100, // Example price
//         })
//       );
//       setOpenModal(false); // Close modal after adding to cart
//     } else {
//       alert("Please enter a valid email address.");
//     }
//   };

//   return (
//     <Box sx={{ flex: 3, padding: 2 }}>
//       <Grid container spacing={2}>
//         {product?.map((item) => (
//           <Grid
//             item
//             xs={12}
//             sm={6}
//             md={4} // 3 items in a row for tablet
//             lg={4} // 3 items in a row for laptops/desktops
//             key={item.idMeal}
//           >
//             <Box
//               sx={{
//                 position: "relative",
//                 border: "1px solid #ddd",
//                 borderRadius: 2,
//                 boxShadow: 2,
//                 padding: 2,
//                 height: { xs: "auto", sm: "220px", lg: "200px" },
//                 display: "flex",
//                 flexDirection: { xs: "column", sm: "row" },
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 gap: { xs: 2, sm: 1 },
//               }}
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   flex: 1,
//                   paddingRight: { xs: 0, sm: 2 },
//                   textAlign: { xs: "center", sm: "left" },
//                 }}
//               >
//                 <Typography
//                   variant="subtitle1"
//                   fontWeight="bold"
//                   sx={{
//                     textTransform: "uppercase",
//                     marginBottom: 1,
//                     fontSize: { xs: "0.9rem", sm: "1rem" },
//                   }}
//                 >
//                   {item?.strMeal.length > 10
//                     ? item.strMeal.slice(0, 10) + "..."
//                     : item.strMeal}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   color="text.secondary"
//                   sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" } }}
//                 >
//                   Rs. 100
//                 </Typography>
//               </Box>

//               <Box
//                 sx={{
//                   position: "relative",
//                   width: { xs: "100px", sm: "150px" },
//                   height: { xs: "100px", sm: "150px" },
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <Box
//                   component="img"
//                   src={item?.strMealThumb}
//                   alt={item?.strMeal}
//                   sx={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                     borderRadius: 2,
//                   }}
//                 />
//                 <Button
//                   variant="contained"
//                   sx={{
//                     position: "absolute",
//                     top: "5px",
//                     right: "5px",
//                     backgroundColor: "transparent",
//                     border: "2px solid white",
//                     color: "white",
//                     fontWeight: "bold",
//                     borderRadius: "50%",
//                     minWidth: { xs: "30px", sm: "40px" },
//                     minHeight: { xs: "30px", sm: "40px" },
//                     fontSize: { xs: "1rem", sm: "1.2rem" },
//                     "&:hover": {
//                       backgroundColor: "#d0077c",
//                     },
//                   }}
//                   onClick={() => handleAddToCart(item)}
//                 >
//                   +
//                 </Button>
//               </Box>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Modal for email input */}
//       <Dialog open={openModal} onClose={() => setOpenModal(false)} maxWidth="sm" fullWidth>
//         <DialogTitle sx={{ backgroundColor: "#e91e63", color: "white", textAlign: "center" }}>
//           Confirm Your Email
//         </DialogTitle>
//         <DialogContent sx={{ padding: 3 }}>
//           <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "#333" }}>
//             Please confirm your email to add this product to the cart.
//           </Typography>
//           <TextField
//             label="Email"
//             type="email"
//             fullWidth
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             sx={{
//               marginBottom: 2,
//               padding: 1.5,
//               borderRadius: 2,
//               borderColor: "#e91e63",
//               "& .MuiInputBase-root": {
//                 fontSize: "1rem",
//                 padding: "10px 14px",
//               },
//             }}
//           />
//         </DialogContent>
//         <DialogActions sx={{ justifyContent: "center", paddingBottom: 2 }}>
//           <Button
//             onClick={() => setOpenModal(false)}
//             color="default"
//             sx={{
//               backgroundColor: "#e91e63",
//               color: "white",
//               "&:hover": { backgroundColor: "#c2185b" },
//             }}
//           >
//             Cancel
//           </Button>
//           <Button
//             onClick={handleSubmit}
//             color="primary"
//             sx={{
//               backgroundColor: "#4caf50",
//               color: "white",
//               "&:hover": { backgroundColor: "#388e3c" },
//             }}
//           >
//             Add to Cart
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default SecondApi;
import React, { useState, useEffect } from "react"; 
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../../slices/add-cart/addCartSlice";
import axios from "axios";
import {
  Box,
  Grid,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const SecondApi = () => {
  const [product, setProduct] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [name, setName] = useState(""); // Default to empty string
  const [phone, setPhone] = useState(""); // Default to empty string
  const [address, setAddress] = useState(""); // Default to empty string
  const [selectedItem, setSelectedItem] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((response) => setProduct(response.data.meals))
      .catch((error) => console.log(error));
  }, []);

  const handleAddToCart = (item) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setSelectedItem(item);
      setName(user.name);
      setOpenModal(true);
    } else {
      alert("Please log in to add products to the cart.");
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!name?.trim()) errors.name = "Name is required."; // Safe check
    if (!phone?.trim()) errors.phone = "Phone number is required.";
    else if (!/^[0-9]{10}$/.test(phone)) errors.phone = "Phone number must be 10 digits.";
    if (!address?.trim()) errors.address = "Address is required.";
    return errors;
  };

  const handleSubmit = () => {
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setFormErrors({});
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch(
        addToCart({
          id: selectedItem.idMeal,
          name: selectedItem.strMeal,
          image: selectedItem.strMealThumb,
          price: 100, // Example price
        })
      );
      setOpenModal(false);
      setSuccessModal(true);
      setTimeout(() => setSuccessModal(false), 3000);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <Box sx={{ flex: 3, padding: 2 }}>
      <Grid container spacing={2}>
        {product?.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={item.idMeal}>
            <Box
              sx={{
                position: "relative",
                border: "1px solid #ddd",
                borderRadius: 2,
                boxShadow: 2,
                padding: 2,
                height: { xs: "auto", sm: "220px", lg: "200px" },
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                alignItems: "center",
                gap: { xs: 2, sm: 1 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  paddingRight: { xs: 0, sm: 2 },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  sx={{
                    textTransform: "uppercase",
                    marginBottom: 1,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                  }}
                >
                  {item?.strMeal.length > 10
                    ? item.strMeal.slice(0, 10) + "..."
                    : item.strMeal}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" } }}
                >
                  Rs. 100
                </Typography>
              </Box>

              <Box
                sx={{
                  position: "relative",
                  width: { xs: "100px", sm: "150px" },
                  height: { xs: "100px", sm: "150px" },
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
                <Button
                  variant="contained"
                  sx={{
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                    backgroundColor: "transparent",
                    border: "2px solid white",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "50%",
                    minWidth: { xs: "30px", sm: "40px" },
                    minHeight: { xs: "30px", sm: "40px" },
                    fontSize: { xs: "1rem", sm: "1.2rem" },
                    "&:hover": {
                      backgroundColor: "#d0077c",
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

      {/* Details Confirmation Modal */}
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "16px",
            padding: "16px",
            boxShadow: 3,
            overflow: "hidden",
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.2rem",
            color: "#333",
          }}
        >
          Please confirm your details to add this product to the cart.
        </DialogTitle>
        <Box sx={{ padding: 3 }}>
          <TextField
            label="Name"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={!!formErrors.name}
            helperText={formErrors.name}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Phone Number"
            type="tel"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            error={!!formErrors.phone}
            helperText={formErrors.phone}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Address"
            type="text"
            fullWidth
            multiline
            rows={3}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            error={!!formErrors.address}
            helperText={formErrors.address}
            sx={{ marginBottom: 2 }}
          />
        </Box>

        <DialogActions sx={{ justifyContent: "space-between", paddingBottom: 2, paddingX: 3 }}>
          <Button
            onClick={() => setOpenModal(false)}
            sx={{
              color: "#333",
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            sx={{
              backgroundColor: "#e91e63",
              color: "white",
              padding: "8px 16px",
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#d81b60" },
            }}
          >
            Add to Cart
          </Button>
        </DialogActions>
      </Dialog>

      {/* Success Modal */}
      <Dialog
        open={successModal}
        onClose={() => setSuccessModal(false)}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "16px",
          },
        }}
      >
        <DialogTitle
          sx={{
            backgroundColor: "#4caf50",
            color: "white",
            textAlign: "center",
          }}
        >
          Success!
        </DialogTitle>
        <DialogContent sx={{ padding: 3 }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            Product successfully added!
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default SecondApi;
