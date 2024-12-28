// import React, { useState, useEffect } from "react";
// import {
//   AppBar,
//   Box,
//   Button,
//   IconButton,
//   Typography,
//   Toolbar,
//   Menu,
//   MenuItem,
//   Stack,
//   Container,
//   Badge,
// } from "@mui/material";
// import FoodPandaLogo from "../../images/food panda logo.png";
// import CloseIcon from "@mui/icons-material/Close";
// import LanguageIcon from "@mui/icons-material/Language";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import { Outlet, useLocation } from "react-router-dom";
// import CartDrawer from "../Restorentspage/Drawer/CartDrawer";
// import SignUpModal from "../Modals/SignUp/SignUp";
// import LoginModal from "../Modals/Login/Login";
// import { useSelector } from "react-redux";


// const Navbar = () => {
//   const [showBanner, setShowBanner] = useState(true);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
//   const [signUpOpen, setSignUpOpen] = useState(false); // Sign Up modal state
//   const [loginOpen, setLoginOpen] = useState(false); // Log In modal state

//   // Calculate total quantity from cart items
//   const totalQuantity = useSelector((state) =>
//     state.products.items.reduce((total, item) => total + item.quantity, 0)
//   );

//   // Close banner handler
//   const handleCloseBanner = () => setShowBanner(false);

//   // Language menu handlers
//   const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
//   const handleMenuClose = () => setAnchorEl(null);

//   // Drawer toggle handlers
//   const toggleCartDrawer = (open) => () => setCartDrawerOpen(open);

//   return (
//     <Box>
//       <Box>
//         {/* Top Pink Banner */}
//         {showBanner && (
//           <Box
//             position="sticky"
//             sx={{
//               backgroundColor: "#ec008c",
//               color: "#fff",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               px: 3,
//               py: 1,
//               position: "relative",
//             }}
//           >
//             <Typography
//               sx={{
//                 fontWeight: "bold",
//                 fontSize: "14px",
//                 textAlign: "center",
//               }}
//             >
//               Do you need a business account?
//             </Typography>
//             <Button
//               variant="outlined"
//               sx={{
//                 color: "#fff",
//                 borderColor: "#fff",
//                 textTransform: "none",
//                 ml: 2,
//                 "&:hover": { borderColor: "#fff", backgroundColor: "#d0077c" },
//               }}
//             >
//               SIGN UP NOW
//             </Button>
//             <IconButton
//               sx={{
//                 color: "#fff",
//                 position: "absolute",
//                 right: 16,
//               }}
//               onClick={handleCloseBanner}
//             >
//               <CloseIcon />
//             </IconButton>
//           </Box>
//         )}

//         {/* Main Navbar */}
//         <AppBar
//           position="sticky"
//           elevation={0}
//           sx={{
//             backgroundColor: "#fff",
//             color: "black",
//             boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <Container>
//             <Toolbar sx={{ justifyContent: "space-between" }}>
//               {/* Left: Logo */}
//               <Typography
//                 variant="h6"
//                 sx={{
//                   fontWeight: "bold",
//                   display: "flex",
//                   alignItems: "center",
//                   color: "#ec008c",
//                 }}
//               >
//                 <img
//                   width={"30px"}
//                   className="rounded-3"
//                   src={FoodPandaLogo}
//                   alt="logo"
//                   style={{ marginRight: "10px" }}
//                 />
//                 foodpanda
//               </Typography>

//               {/* Right: Menu */}
//               <Stack direction="row" spacing={2} alignItems="center">
//                 {/* Log In Button */}
//                 <Button
//                   variant="outlined"
//                   sx={{
//                     borderColor: "#000",
//                     color: "#000",
//                     textTransform: "none",
//                     "&:hover": { backgroundColor: "#f5f5f5" },
//                   }}
//                   onClick={() => setLoginOpen(true)}
//                 >
//                   Log in
//                 </Button>

//                 {/* Sign Up Button */}
//                 <Button
//                   variant="contained"
//                   sx={{
//                     backgroundColor: "#ec008c",
//                     color: "#fff",
//                     textTransform: "none",
//                     "&:hover": { backgroundColor: "#d0077c" },
//                   }}
//                   onClick={() => setSignUpOpen(true)}
//                 >
//                   Sign up
//                 </Button>

//                 {/* Language Dropdown */}
//                 <IconButton color="inherit" onClick={handleMenuOpen}>
//                   <LanguageIcon />
//                   <Typography variant="body2" sx={{ ml: 0.5 }}>
//                     EN
//                   </Typography>
//                 </IconButton>
//                 <Menu
//                   anchorEl={anchorEl}
//                   open={Boolean(anchorEl)}
//                   onClose={handleMenuClose}
//                 >
//                   <MenuItem onClick={handleMenuClose}>EN</MenuItem>
//                   <MenuItem onClick={handleMenuClose}>ES</MenuItem>
//                   <MenuItem onClick={handleMenuClose}>FR</MenuItem>
//                 </Menu>

//                 {/* Cart Icon */}
//                 <Badge badgeContent={totalQuantity} color="error">
//                   <ShoppingBagOutlinedIcon onClick={toggleCartDrawer(true)} />
//                 </Badge>
//               </Stack>
//             </Toolbar>
//           </Container>
//         </AppBar>
//       </Box>

//       {/* Cart Drawer */}
//       <CartDrawer
//         cartDrawerOpen={cartDrawerOpen}
//         toggleCartDrawer={toggleCartDrawer}
//       />

//       {/* Modals */}
//       <SignUpModal open={signUpOpen} onClose={() => setSignUpOpen(false)} />
//       <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />

//       <Outlet />
//     </Box>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from "react";
// import {
//   AppBar,
//   Box,
//   Button,
//   IconButton,
//   Typography,
//   Toolbar,
//   Menu,
//   MenuItem,
//   Stack,
//   Container,
//   Badge,
// } from "@mui/material";
// import FoodPandaLogo from "../../images/food panda logo.png";
// import CloseIcon from "@mui/icons-material/Close";
// import LanguageIcon from "@mui/icons-material/Language";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import { Outlet, useLocation } from "react-router-dom";
// import CartDrawer from "../Restorentspage/Drawer/CartDrawer";
// import SignUpModal from "../Modals/SignUp/SignUp";
// import LoginModal from "../Modals/Login/Login";
// import { useSelector } from "react-redux";

// const Navbar = () => {
//   const [showBanner, setShowBanner] = useState(true);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
//   const [signUpOpen, setSignUpOpen] = useState(false);
//   const [loginOpen, setLoginOpen] = useState(false);
//   const [user, setUser] = useState(null); // Track user state

//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const cityName = queryParams.get("city") || ""; 

//   const totalQuantity = useSelector((state) =>
//     state.products.items.reduce((total, item) => total + item.quantity, 0)
//   );

//   useEffect(() => {
//     // Check if there's a user in localStorage on component mount
//     const savedUser = JSON.parse(localStorage.getItem("user"));
//     if (savedUser) {
//       setUser(savedUser);
//     }
//   }, []);

//   const handleCloseBanner = () => setShowBanner(false);
//   const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
//   const handleMenuClose = () => setAnchorEl(null);
//   const toggleCartDrawer = (open) => () => setCartDrawerOpen(open);

//   const handleLogout = () => {
//     setUser(null);
//     localStorage.removeItem("user");
//   };

//   return (
//     <Box>
//       {showBanner && (
//         <Box
//           position="sticky"
//           sx={{
//             backgroundColor: "#ec008c",
//             color: "#fff",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             px: 3,
//             py: 1,
//             position: "relative",
//           }}
//         >
//           <Typography
//             sx={{
//               fontWeight: "bold",
//               fontSize: "14px",
//               textAlign: "center",
//             }}
//           >
//             Do you need a business account?
//           </Typography>
//           <Button
//             variant="outlined"
//             sx={{
//               color: "#fff",
//               borderColor: "#fff",
//               textTransform: "none",
//               ml: 2,
//               "&:hover": { borderColor: "#fff", backgroundColor: "#d0077c" },
//             }}
//           >
//             SIGN UP NOW
//           </Button>
//           <IconButton
//             sx={{
//               color: "#fff",
//               position: "absolute",
//               right: 16,
//             }}
//             onClick={handleCloseBanner}
//           >
//             <CloseIcon />
//           </IconButton>
//         </Box>
//       )}

//       {/* Main Navbar */}
//       <AppBar
//         position="sticky"
//         elevation={0}
//         sx={{
//           backgroundColor: "#fff",
//           color: "black",
//           boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <Container>
//           <Toolbar sx={{ justifyContent: "space-between" }}>
//             {/* Left: Logo */}
//             <Typography
//               variant="h6"
//               sx={{
//                 fontWeight: "bold",
//                 display: "flex",
//                 alignItems: "center",
//                 color: "#ec008c",
//               }}
//             >
//               <img
//                 width={"30px"}
//                 className="rounded-3"
//                 src={FoodPandaLogo}
//                 alt="logo"
//                 style={{ marginRight: "10px" }}
//               />
//               foodpanda
//             </Typography>

//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <LocationOnIcon sx={{ color: "#ec008c", mr: 1 }} />
//               <Typography
//                 variant="body1"
//                 sx={{
//                   color: "#000",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Location: {cityName}
//               </Typography>
//             </Box>

//             {/* Right: Menu */}
//             <Stack direction="row" spacing={2} alignItems="center">
//               {user ? (
//                 // Display user name if logged in
//                 <Typography variant="body1" sx={{ fontWeight: "bold" }}>
//                   Welcome, {user.fullName}
//                 </Typography>
//               ) : (
//                 <>
//                   <Button
//                     variant="outlined"
//                     sx={{
//                       borderColor: "#000",
//                       color: "#000",
//                       textTransform: "none",
//                       "&:hover": { backgroundColor: "#f5f5f5" },
//                     }}
//                     onClick={() => setLoginOpen(true)}
//                   >
//                     Log in
//                   </Button>

//                   <Button
//                     variant="contained"
//                     sx={{
//                       backgroundColor: "#ec008c",
//                       color: "#fff",
//                       textTransform: "none",
//                       "&:hover": { backgroundColor: "#d0077c" },
//                     }}
//                     onClick={() => setSignUpOpen(true)}
//                   >
//                     Sign up
//                   </Button>
//                 </>
//               )}

//               {user && (
//                 <Button
//                   variant="outlined"
//                   sx={{
//                     borderColor: "#000",
//                     color: "#000",
//                     textTransform: "none",
//                     "&:hover": { backgroundColor: "#f5f5f5" },
//                   }}
//                   onClick={handleLogout} // Handle logout
//                 >
//                   Logout
//                 </Button>
//               )}

//               <IconButton color="inherit" onClick={handleMenuOpen}>
//                 <LanguageIcon />
//                 <Typography variant="body2" sx={{ ml: 0.5 }}>
//                   EN
//                 </Typography>
//               </IconButton>
//               <Menu
//                 anchorEl={anchorEl}
//                 open={Boolean(anchorEl)}
//                 onClose={handleMenuClose}
//               >
//                 <MenuItem onClick={handleMenuClose}>EN</MenuItem>
//                 <MenuItem onClick={handleMenuClose}>ES</MenuItem>
//                 <MenuItem onClick={handleMenuClose}>FR</MenuItem>
//               </Menu>

//               <Badge badgeContent={totalQuantity} color="error">
//                 <ShoppingBagOutlinedIcon onClick={toggleCartDrawer(true)} />
//               </Badge>
//             </Stack>
//           </Toolbar>
//         </Container>
//       </AppBar>

//       <CartDrawer
//         cartDrawerOpen={cartDrawerOpen}
//         toggleCartDrawer={toggleCartDrawer}
//       />

//       <SignUpModal open={signUpOpen} onClose={() => setSignUpOpen(false)} />
//       <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />

//       <Outlet />
//     </Box>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import {
//   AppBar,
//   Box,
//   Button,
//   IconButton,
//   Typography,
//   Toolbar,
//   Menu,
//   MenuItem,
//   Stack,
//   Container,
//   Badge,
// } from "@mui/material";
// import FoodPandaLogo from "../../images/food panda logo.png";
// import CloseIcon from "@mui/icons-material/Close";
// import LanguageIcon from "@mui/icons-material/Language";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import { Outlet, useLocation } from "react-router-dom";
// import CartDrawer from "../Restorentspage/Drawer/CartDrawer";
// import { useSelector } from "react-redux";

// const Header = ({ onSignUpClick, onLoginClick }) => {
//   const [showBanner, setShowBanner] = useState(true);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
//   const [user, setUser] = useState(null); // Track user state

//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const cityName = queryParams.get("city") || "";
// console.log(cityName, 'city');

//   const totalQuantity = useSelector((state) =>
//     state.products.items.reduce((total, item) => total + item.quantity, 0)
//   );

//   useEffect(() => {
//     // Check if there's a user in localStorage on component mount
//     const savedUser = JSON.parse(localStorage.getItem("user"));
//     if (savedUser) {
//       setUser(savedUser);
//     }
//   }, []);

//   const handleCloseBanner = () => setShowBanner(false);
//   const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
//   const handleMenuClose = () => setAnchorEl(null);
//   const toggleCartDrawer = (open) => () => setCartDrawerOpen(open);

//   const handleLogout = () => {
//     setUser(null);
//     localStorage.removeItem("user");
//   };

//   return (
//     <Box>
//       {showBanner && (
//         <Box
//           position="sticky"
//           sx={{
//             backgroundColor: "#ec008c",
//             color: "#fff",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             px: 3,
//             py: 1,
//             position: "relative",
//           }}
//         >
//           <Typography
//             sx={{
//               fontWeight: "bold",
//               fontSize: "14px",
//               textAlign: "center",
//             }}
//           >
//             Do you need a business account?
//           </Typography>
//           <Button
//             variant="outlined"
//             sx={{
//               color: "#fff",
//               borderColor: "#fff",
//               textTransform: "none",
//               ml: 2,
//               "&:hover": { borderColor: "#fff", backgroundColor: "#d0077c" },
//             }}
//             onClick={onSignUpClick} // Use the passed prop
//           >
//             SIGN UP NOW
//           </Button>
//           <IconButton
//             sx={{
//               color: "#fff",
//               position: "absolute",
//               right: 16,
//             }}
//             onClick={handleCloseBanner}
//           >
//             <CloseIcon />
//           </IconButton>
//         </Box>
//       )}

//       {/* Main Navbar */}
//       <AppBar
//         position="sticky"
//         elevation={0}
//         sx={{
//           backgroundColor: "#fff",
//           color: "black",
//           boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <Container>
//           <Toolbar sx={{ justifyContent: "space-between" }}>
//             {/* Left: Logo */}
//             <Typography
//               variant="h6"
//               sx={{
//                 fontWeight: "bold",
//                 display: "flex",
//                 alignItems: "center",
//                 color: "#ec008c",
//               }}
//             >
//               <img
//                 width={"30px"}
//                 className="rounded-3"
//                 src={FoodPandaLogo}
//                 alt="logo"
//                 style={{ marginRight: "10px" }}
//               />
//               foodpanda
//             </Typography>

//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <LocationOnIcon sx={{ color: "#ec008c", mr: 1 }} />
//               <Typography
//                 variant="body1"
//                 sx={{
//                   color: "#000",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Location: {cityName}
//               </Typography>
//             </Box>

//             {/* Right: Menu */}
//             <Stack direction="row" spacing={2} alignItems="center">
//               {user ? (
//                 // Display user name if logged in
//                 <Typography variant="body1" sx={{ fontWeight: "bold" }}>
//                   Welcome, {user.fullName}
//                 </Typography>
//               ) : (
//                 <>
//                   <Button
//                     variant="outlined"
//                     sx={{
//                       borderColor: "#000",
//                       color: "#000",
//                       textTransform: "none",
//                       "&:hover": { backgroundColor: "#f5f5f5" },
//                     }}
//                     onClick={onLoginClick} // Use the passed prop
//                   >
//                     Log in
//                   </Button>

//                   <Button
//                     variant="contained"
//                     sx={{
//                       backgroundColor: "#ec008c",
//                       color: "#fff",
//                       textTransform: "none",
//                       "&:hover": { backgroundColor: "#d0077c" },
//                     }}
//                     onClick={onSignUpClick} // Use the passed prop
//                   >
//                     Sign up
//                   </Button>
//                 </>
//               )}

//               {user && (
//                 <Button
//                 variant="outlined"
//                 sx={{
//                   borderColor: "#d0077c",

//                   color: "#fff", // Change text color to white
//                   backgroundColor: "#d0077c", // Set background color to pink
//                   textTransform: "none",
//                   "&:hover": { backgroundColor: "#d81b60" }, // Darker pink on hover
//                 }}
//                 onClick={handleLogout} // Handle logout
//               >
//                 Logout
//               </Button>

//               )}

//               <IconButton color="inherit" onClick={handleMenuOpen}>
//                 <LanguageIcon />
//                 <Typography variant="body2" sx={{ ml: 0.5 }}>
//                   EN
//                 </Typography>
//               </IconButton>
//               <Menu
//                 anchorEl={anchorEl}
//                 open={Boolean(anchorEl)}
//                 onClose={handleMenuClose}
//               >
//                 <MenuItem onClick={handleMenuClose}>EN</MenuItem>
//                 <MenuItem onClick={handleMenuClose}>ES</MenuItem>
//                 <MenuItem onClick={handleMenuClose}>FR</MenuItem>
//               </Menu>

//               <Badge badgeContent={totalQuantity} color="error">
//                 <ShoppingBagOutlinedIcon onClick={toggleCartDrawer(true)} />
//               </Badge>
//             </Stack>
//           </Toolbar>
//         </Container>
//       </AppBar>

//       <CartDrawer
//         cartDrawerOpen={cartDrawerOpen}
//         toggleCartDrawer={toggleCartDrawer}
//       />

//       <Outlet />
//     </Box>
//   );
// };

// export default Header;




// import React, { useState, useEffect } from "react";
// import {
//   AppBar,
//   Box,
//   Button,
//   IconButton,
//   Typography,
//   Toolbar,
//   Menu,
//   MenuItem,
//   Stack,
//   Container,
//   Badge,
//   useMediaQuery,
//   useTheme,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Divider,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import LanguageIcon from "@mui/icons-material/Language";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import FoodPandaLogo from "../../images/food panda logo.png";
// import { Link, Outlet, useLocation } from "react-router-dom";
// import CartDrawer from "../Restorentspage/Drawer/CartDrawer";
// import { useSelector } from "react-redux";

// const Header = ({ onSignUpClick, onLoginClick }) => {
//   const [showBanner, setShowBanner] = useState(true);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
//   const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
//   const [languageMenuOpen, setLanguageMenuOpen] = useState(false); // Language menu toggle
//   const [user, setUser] = useState(null);

//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const cityName = queryParams.get("city") || "";
//   const totalQuantity = useSelector((state) =>
//     state.products.items.reduce((total, item) => total + item.quantity, 0)
//   );

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("lg")); // For tablet and mobile

//   useEffect(() => {
//     const savedUser = JSON.parse(localStorage.getItem("user"));
//     if (savedUser) {
//       setUser(savedUser);
//     }
//   }, []);

//   const handleCloseBanner = () => setShowBanner(false);
//   const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
//   const handleMenuClose = () => setAnchorEl(null);
//   const toggleCartDrawer = (open) => () => setCartDrawerOpen(open);
//   const toggleMenuDrawer = (open) => () => setMenuDrawerOpen(open);
//   const handleLanguageMenuToggle = () => setLanguageMenuOpen(!languageMenuOpen); // Toggle language menu
//   const handleLogout = () => {
//     setUser(null);
//     localStorage.removeItem("user");
//   };

//   return (
//     <Box>
//       {showBanner && (
//         <Box
//           position="sticky"
//           sx={{
//             backgroundColor: "#ec008c",
//             color: "#fff",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             px: 3,
//             py: 1,
//             position: "relative",
//           }}
//         >
//           <Typography
//             sx={{
//               fontWeight: "bold",
//               fontSize: "14px",
//               textAlign: "center",
//             }}
//           >
//             Do you need a business account?
//           </Typography>
//           <Button
//             variant="outlined"
//             sx={{
//               color: "#fff",
//               borderColor: "#fff",
//               textTransform: "none",
//               ml: 2,
//               "&:hover": { borderColor: "#fff", backgroundColor: "#d0077c" },
//             }}
//             onClick={onSignUpClick}
//           >
//             SIGN UP NOW
//           </Button>
//           <IconButton
//             sx={{
//               color: "#fff",
//               position: "absolute",
//               right: 16,
//             }}
//             onClick={handleCloseBanner}
//           >
//             <CloseIcon />
//           </IconButton>
//         </Box>
//       )}

//       <AppBar
//         position="sticky"
//         elevation={0}
//         sx={{
//           backgroundColor: "#fff",
//           color: "black",
//           boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <Container>
//           <Toolbar sx={{ justifyContent: "space-between" }}>

//             <Link
//               to="/"
//               style={{ textDecoration: "none" }}
//             >
//               <Box

//                 display="flex" alignItems="center">
//                 <img
//                   width={"30px"}
//                   className="rounded-3"
//                   src={FoodPandaLogo}
//                   alt="logo"
//                   style={{ marginRight: "10px" }}
//                 />
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     fontWeight: "bold",
//                     color: "#ec008c",
//                   }}
//                 >
//                   foodpanda
//                 </Typography>
//               </Box>
//             </Link>
//             {!isMobile ? (
//               <Stack direction="row" spacing={2} alignItems="center">
//                 {user ? (
//                   <Typography variant="body1" sx={{ fontWeight: "bold" }}>
//                     Welcome, {user.fullName}
//                   </Typography>
//                 ) : (
//                   <>
//                     <Button
//                       variant="outlined"
//                       sx={{
//                         borderColor: "#000",
//                         color: "#000",
//                         textTransform: "none",
//                         "&:hover": { backgroundColor: "#f5f5f5" },
//                       }}
//                       onClick={onLoginClick}
//                     >
//                       Log in
//                     </Button>
//                     <Button
//                       variant="contained"
//                       sx={{
//                         backgroundColor: "#ec008c",
//                         color: "#fff",
//                         textTransform: "none",
//                         "&:hover": { backgroundColor: "#d0077c" },
//                       }}
//                       onClick={onSignUpClick}
//                     >
//                       Sign up
//                     </Button>
//                   </>
//                 )}
//                 <IconButton color="inherit" onClick={handleMenuOpen}>
//                   <LanguageIcon />
//                   <Typography variant="body2" sx={{ ml: 0.5 }}>
//                     EN
//                   </Typography>
//                 </IconButton>
//                 <Menu
//                   anchorEl={anchorEl}
//                   open={Boolean(anchorEl)}
//                   onClose={handleMenuClose}
//                 >
//                   <MenuItem onClick={handleMenuClose}>EN</MenuItem>
//                   <MenuItem onClick={handleMenuClose}>ES</MenuItem>
//                   <MenuItem onClick={handleMenuClose}>FR</MenuItem>
//                 </Menu>
//                 <Badge badgeContent={totalQuantity} color="error">
//                   <ShoppingBagOutlinedIcon onClick={toggleCartDrawer(true)} />
//                 </Badge>
//               </Stack>
//             ) : (
//               <IconButton onClick={toggleMenuDrawer(true)}>
//                 <MenuIcon />
//               </IconButton>
//             )}
//           </Toolbar>
//         </Container>
//       </AppBar>

//       {/* Drawer for Mobile Menu */}
//       <Drawer anchor="left" open={menuDrawerOpen} onClose={toggleMenuDrawer(false)}>
//         <Box
//           sx={{ width: 250 }}
//           role="presentation"
//           onClick={toggleMenuDrawer(false)}
//           onKeyDown={toggleMenuDrawer(false)}
//         >
//           <List>
//             {user ? (
//               <ListItem>
//                 <ListItemText primary={`Welcome, ${user.fullName}`} />
//               </ListItem>
//             ) : (
//               <>
//                 <ListItem button onClick={onLoginClick}>
//                   <ListItemText primary="Log in" />
//                 </ListItem>
//                 <ListItem button onClick={onSignUpClick}>
//                   <ListItemText primary="Sign up" />
//                 </ListItem>
//               </>
//             )}
//             <Divider />
//             <ListItem button onClick={handleLanguageMenuToggle}>
//               <LanguageIcon sx={{ mr: 1 }} />
//               <ListItemText primary="Language" />
//             </ListItem>
//             {languageMenuOpen && (
//               <>
//                 <ListItem button>
//                   <ListItemText primary="EN" />
//                 </ListItem>
//                 <ListItem button>
//                   <ListItemText primary="ES" />
//                 </ListItem>
//                 <ListItem button>
//                   <ListItemText primary="FR" />
//                 </ListItem>
//               </>
//             )}
//             <Divider />
//             <ListItem button onClick={toggleCartDrawer(true)}>
//               <ShoppingBagOutlinedIcon sx={{ mr: 1 }} />
//               <ListItemText primary={`Cart (${totalQuantity})`} />
//             </ListItem>
//           </List>
//         </Box>
//       </Drawer>

//       <CartDrawer
//         cartDrawerOpen={cartDrawerOpen}
//         toggleCartDrawer={toggleCartDrawer}
//       />

//       <Outlet />
//     </Box>
//   );
// };

// export default Header;
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Typography,
  Toolbar,
  Menu,
  MenuItem,
  Stack,
  Container,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import FoodPandaLogo from "../../images/food panda logo.png";
import CloseIcon from "@mui/icons-material/Close";
import LanguageIcon from "@mui/icons-material/Language";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, Outlet, useLocation } from "react-router-dom";
import CartDrawer from "../Restorentspage/Drawer/CartDrawer";
import { useSelector } from "react-redux";
import {useLocationContext} from "./LocationContext/LocationContext"

const Header = ({ onSignUpClick, onLoginClick }) => {
  const { cityName, setCityName } = useLocationContext();

  const [showBanner, setShowBanner] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null); // Track user state

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const newCityName = queryParams.get("city") || "";
    if (newCityName) {
      setCityName(newCityName); // Update the context
    }
  }, [location.search, setCityName]);


  const totalQuantity = useSelector((state) =>
    state.products.items.reduce((total, item) => total + item.quantity, 0)
  );

  useEffect(() => {
    // Check if there's a user in localStorage on component mount
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleCloseBanner = () => setShowBanner(false);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const toggleCartDrawer = (open) => () => setCartDrawerOpen(open);
  const toggleMobileMenu = (open) => () => setMobileMenuOpen(open);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <Box>
      {showBanner && (
        <Box
          position="sticky"
          sx={{
            backgroundColor: "#ec008c",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: 3,
            py: 1,
            position: "relative",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            Do you need a business account?
          </Typography>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              textTransform: "none",
              ml: 2,
              "&:hover": { borderColor: "#fff", backgroundColor: "#d0077c" },
            }}
            onClick={onSignUpClick}
          >
            SIGN UP NOW
          </Button>
          <IconButton
            sx={{
              color: "#fff",
              position: "absolute",
              right: 16,
            }}
            onClick={handleCloseBanner}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      )}

      {/* Main Navbar */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "#fff",
          color: "black",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Container>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* Left: Logo */}
          <Link
               to="/"
               style={{ textDecoration: "none" }}
             >
               <Box

                 display="flex" alignItems="center">
                 <img
                   width={"30px"}
                   className="rounded-3"
                   src={FoodPandaLogo}
                   alt="logo"
                   style={{ marginRight: "10px" }}
                 />
                 <Typography
                   variant="h6"
                   sx={{
                     fontWeight: "bold",
                     color: "#ec008c",
                  }}
                >
                   foodpanda
                 </Typography>
               </Box>
             </Link>

            {/* Location */}
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
              <LocationOnIcon sx={{ color: "#ec008c", mr: 1 }} />
              <Typography
                variant="body1"
                sx={{
                  color: "#000",
                  fontWeight: "bold",
                }}
              >
                Location: {cityName}
              </Typography>
            </Box>

            {/* Right: Desktop Menu */}
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {user ? (
                <>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Welcome, {user.fullName}
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "#d0077c",
                      color: "#fff",
                         backgroundColor: "#d0077c",
                      textTransform: "none",
                      "&:hover": { backgroundColor: "#d81b60" },
                    }}
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: "#000",
                      color: "#000",
                      textTransform: "none",
                      "&:hover": { backgroundColor: "#f5f5f5" },
                    }}
                    onClick={onLoginClick}
                  >
                    Log in
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#ec008c",
                      color: "#fff",
                      textTransform: "none",
                      "&:hover": { backgroundColor: "#d0077c" },
                    }}
                    onClick={onSignUpClick}
                  >
                    Sign up
                  </Button>
                </>
              )}

              <IconButton color="inherit" onClick={handleMenuOpen}>
                <LanguageIcon />
                <Typography variant="body2" sx={{ ml: 0.5 }}>
                  EN
                </Typography>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>EN</MenuItem>
                <MenuItem onClick={handleMenuClose}>ES</MenuItem>
                <MenuItem onClick={handleMenuClose}>FR</MenuItem>
              </Menu>

              <Badge badgeContent={totalQuantity} color="error">
                <ShoppingBagOutlinedIcon onClick={toggleCartDrawer(true)} />
              </Badge>
            </Stack>

            {/* Right: Mobile Menu */}
            <IconButton
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={toggleMobileMenu(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu(false)}
      >
        <Box sx={{ width: 250 }}>
          <List>
            {user ? (
              <>
                <ListItem>
                  <ListItemText primary={`Welcome, ${user.fullName}`} />
                </ListItem>
                <ListItem button onClick={handleLogout}>
                  <ListItemText primary="Logout" />
                </ListItem>
              </>
            ) : (
              <>
                <ListItem button onClick={onLoginClick}>
                  <ListItemText primary="Log in" />
                </ListItem>
                <ListItem button onClick={onSignUpClick}>
                  <ListItemText primary="Sign up" />
                </ListItem>
              </>
            )}
            <ListItem>
              <ListItemText primary="Language" />
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>EN</MenuItem>
                <MenuItem onClick={handleMenuClose}>ES</MenuItem>
                <MenuItem onClick={handleMenuClose}>FR</MenuItem>
              </Menu>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <CartDrawer
        cartDrawerOpen={cartDrawerOpen}
        toggleCartDrawer={toggleCartDrawer}
      />

      <Outlet />
    </Box>
  );
};

export default Header;
