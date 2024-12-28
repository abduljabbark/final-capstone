// import { Box, Button, Grid, Stack, Typography } from "@mui/material";
// import React, { useState } from "react";
// import QuettaFood from "../../../../../images/quetta-food.jpg";
// import StarIcon from "@mui/icons-material/Star";
// import InfoIcon from "@mui/icons-material/Info";

// const OneProduct = () => {
//   // Move useState and handlers inside the component
//   const [openDeliveryModal, setOpenDeliveryModal] = useState(false);

//   const handleOpenDeliveryModal = () => setOpenDeliveryModal(true);
//   const handleCloseDeliveryModal = () => setOpenDeliveryModal(false);

//   return (
//     <Grid
//       container
//       alignItems="center"
//       sx={{
//         borderRadius: "8px",
//         backgroundColor: "#fff",
//         padding: "0.5rem",
//         flexDirection: { xs: "row", sm: "row" },
//       }}
//     >
//       <Grid item xs="auto">
//         <Box
//           component="img"
//           src={QuettaFood}
//           alt="Quetta Paratha"
//           sx={{
//             width: { xs: "150px", sm: "180px" },
//             height: { xs: "150px", sm: "180px" },
//             borderRadius: "8px",
//             objectFit: "cover",
//           }}
//         />
//       </Grid>
//       <Grid item xs>
//         <span className="ps-3" style={{ fontSize: "0.9rem" }}>
//           Beverages Pakistani
//         </span>
//         <Stack spacing={0.5} sx={{ paddingLeft: { xs: "0", sm: "1rem" } }}>
//           <Typography
//             variant="h2"
//             fontWeight="bold"
//             sx={{
//               color: "#000",
//               fontSize: { xs: "1.5rem", sm: "2rem" },
//               lineHeight: 1.2,
//             }}
//           >
//             Quetta <span style={{ fontWeight: 700 }}>Paratha</span> —{" "}
//             <span style={{ fontWeight: 900 }}>111</span>
//           </Typography>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: { xs: "row", sm: "row" },
//               gap: { xs: "5px", sm: "15px" },
//               alignItems: "center",
//             }}
//           >
//             <Typography
//               variant="body2"
//               sx={{
//                 color: "#FF2B85",
//                 fontWeight: "bold",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "5px",
//                 cursor: "pointer",
//               }}
//               onClick={handleOpenDeliveryModal}
//             >
//               Free delivery{" "}
//               <span
//                 style={{
//                   textDecoration: "line-through",
//                   color: "#888",
//                   marginRight: "10px",
//                 }}
//               >
//                 Rs. 199
//               </span>
//             </Typography>
//             <Typography
//               variant="body2"
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 color: "#888",
//                 gap: "5px",
//               }}
//             >
//               Min. order Rs. 249
//             </Typography>
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: { xs: "row", sm: "row" },
//               gap: { xs: "5px", sm: "15px" },
//               alignItems: "center",
//             }}
//           >
//             <Stack direction="row" alignItems="center" spacing={0.5}>
//               <StarIcon sx={{ color: "orange", fontSize: "1rem" }} />
//               <Typography
//                 variant="body2"
//                 sx={{ fontWeight: "bold", fontSize: "0.9rem" }}
//               >
//                 3.7/5{" "}
//                 <span style={{ color: "#888", fontWeight: "normal" }}>
//                   (500+)
//                 </span>
//               </Typography>
//               <Button
//                 variant="text"
//                 size="small"
//                 sx={{
//                   textTransform: "none",
//                   fontSize: "0.9rem",
//                   color: "black",
//                   cursor: "pointer",
//                 }}
//               >
//                 See reviews
//               </Button>
//             </Stack>
//             <Typography
//               variant="body2"
//               sx={{
//                 color: "#888",
//                 cursor: "pointer",
//                 "&:hover": { color: "#000" },
//                 fontSize: "0.9rem",
//                 display: "flex",
//                 alignItems: "center",
//               }}
//             >
//               <InfoIcon sx={{ marginRight: "5px" }} />
//               More info
//             </Typography>
//           </Box>
//         </Stack>
//       </Grid>
//     </Grid>
//   );
// };

// export default OneProduct;

import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

const OneProduct = () => {
  const location = useLocation();
  const product = location.state; // Access passed product data

  if (!product) {
    return <Typography variant="h6">No product selected</Typography>;
  }

  return (
    <Grid
      container
      alignItems="center"
      sx={{
        borderRadius: "8px",
        backgroundColor: "#fff",
        padding: "1rem",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Grid item xs="auto">
        <Box
          component="img"
          src={product.image}
          alt={product.title}
          sx={{
            width: { xs: "150px", sm: "200px" },
            height: { xs: "150px", sm: "200px" },
            borderRadius: "8px",
            objectFit: "cover",
          }}
        />
      </Grid>
      <Grid item xs>
        <Stack spacing={1} sx={{ marginLeft: { sm: "1rem" }, textAlign: { xs: "center", sm: "left" } }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {product.title}
          </Typography>
          <Typography variant="body1" sx={{ color: "#757575" }}>
            Rating: {product.rating}★
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default OneProduct;
