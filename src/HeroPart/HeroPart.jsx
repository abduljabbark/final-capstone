// import React from "react";
// import heroImage from "../images/hero-img.png"; 
// import { LocationOn } from "@mui/icons-material"; 
// import { Button, InputBase, Box, Typography } from "@mui/material";

// const HeroPart = () => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         paddingTop: "40px",
//         paddingBottom: "40px",
//         paddingLeft: "300px",
//         backgroundColor: "#F7F7F7",
//         // Responsive adjustments
//         flexDirection: { xs: "column", md: "row" },
//         paddingLeft: { xs: "16px", sm: "32px", md: "300px" },
//         textAlign: { xs: "center", md: "left" },
//       }}
//     >
//       {/* Left Section */}
//       <Box sx={{ flex: 1, mb: { xs: "20px", md: 0 } }}>
//         <Typography
//           variant="h3"
//           component="h1"
//           sx={{
//             fontWeight: 700,
//             color: "#333",
//             marginBottom: "20px",
//             fontSize: { xs: "24px", sm: "28px", md: "36px" }, // Responsive font size
//           }}
//         >
//           It’s the food and groceries you love, delivered
//         </Typography>

//         <Box
//           sx={{
//             borderRadius: "15px",
//             padding: "16px",
//             background: "white",
//             width: { xs: "100%", sm: "80%", md: "75%" }, // Wider for desktop screens
//             margin: { xs: "0 auto", md: "0" },
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: "15px", // Increased gap between elements
//               flexDirection: { xs: "column", sm: "column", md: "row" }, // Row on laptops/desktops
//             }}
//           >
//             {/* Input Field with Locate Me Button */}
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 flex: 1,
//                 border: "1px solid #ddd",
//                 borderRadius: "5px",
//                 overflow: "hidden",
//                 width: "100%",
//                 height: { xs: "50px", md: "50px" }, // Larger height for desktop
//               }}
//             >
//               <InputBase
//                 placeholder="Your street and street number"
//                 sx={{
//                   flex: 1,
//                   padding: { xs: "10px 15px", md: "20px 25px" }, // Increased padding
//                   fontSize: { xs: "16px", md: "15px" }, // Larger font for desktop
//                   width: { xs: "100%", md: "100%" }, // Increased width for laptop/desktop screens
//                 }}
//               />
//               <Button
//                 variant="text"
//                 startIcon={<LocationOn style={{ color: "#ec008c" }} />}
//                 sx={{
//                   color: "#ec008c",
//                   fontWeight: 600,
//                   padding: { xs: "10px 15px", md: "8px 15px" }, // Smaller padding on laptop
//                   textTransform: "none",
//                   borderLeft: "1px solid #ddd",
//                   fontSize: { xs: "14px", md: "16px" }, // Smaller font for desktop
//                   width: { xs: "50%", md: "150px" }, // Full width on small screens
//                 }}
//               >
//                 Locate me
//               </Button>
//             </Box>

//             {/* Find Food Button */}
//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: "#ec008c",
//                 color: "#fff",
//                 fontWeight: 600,
//                 padding: { xs: "10px 20px", md: "8px 20px" }, // Smaller padding on laptop
//                 textTransform: "none",
//                 fontSize: { xs: "14px", md: "16px" }, // Smaller font for desktop
//                 width: { xs: "100%", sm: "100%", md: "auto" }, // Stacks on small screens
//                 mt: { xs: "10px", md: "0" }, // Add margin on top for small screens
//                 "&:hover": { backgroundColor: "#d0077c" },
//               }}
//             >
//               Find food
//             </Button>
//           </Box>
//         </Box>
//       </Box>

//       {/* Right Section - Hero Image */}
//       <Box
//         component="img"
//         src={heroImage}
//         alt="Food Panda Hero"
//         sx={{
//           width: { xs: "100%", sm: "80%", md: "550px" }, // Reduced width for desktop
//           height: "auto",
//           maxWidth: "600px", // Prevent exceeding original size
//         }}
//       />
//     </Box>
//   );
// };

// export default HeroPart;
import React from "react";
import heroImage from "../images/hero-img.png"; 
import { LocationOn } from "@mui/icons-material"; 
import { Button, InputBase, Box, Typography } from "@mui/material";

const HeroPart = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stack on mobile, row on desktop
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "20px", sm: "40px", md: "40px 80px" }, // Adjust padding based on screen size
        backgroundColor: "#F7F7F7",
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          flex: 1,
          textAlign: { xs: "center", md: "left" },
          marginBottom: { xs: "30px", md: 0 }, // Space below on small screens
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            color: "#333",
            marginLeft:"150px",
            marginBottom: "20px",
            fontSize: { xs: "24px", sm: "28px", md: "36px" }, // Adjust font size based on screen width
            lineHeight: 1.3,
          }}
        >
          It’s the food and groceries you love, delivered
        </Typography>

        <Box
          sx={{
            borderRadius: "15px",
            padding: "16px",
            background: "white",
            width: { xs: "100%", sm: "80%", md: "75%" },
            margin: "0 auto",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Adding some box-shadow for styling
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, // Stack on small screens, row on larger screens
              alignItems: "center",
              gap: { xs: "10px", sm: "15px" }, // Reduced gap on small screens
            }}
          >
            {/* Input Field with Locate Me Button */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flex: 1,
                border: "1px solid #ddd",
                borderRadius: "5px",
                width: "100%",
                height: "50px", // Consistent height across screen sizes
              }}
            >
              <InputBase
                placeholder="Your street and street number"
                sx={{
                  flex: 1,
                  padding: { xs: "10px 15px", md: "15px 20px" },
                  fontSize: { xs: "16px", md: "18px" }, // Increase font size on larger screens
                }}
              />
              <Button
                variant="text"
                startIcon={<LocationOn style={{ color: "#ec008c" }} />}
                sx={{
                  color: "#ec008c",
                  fontWeight: 600,
                  padding: { xs: "10px 15px", md: "12px 20px" },
                  textTransform: "none",
                  borderLeft: "1px solid #ddd",
                  fontSize: { xs: "14px", md: "16px" },
                  width: { xs: "50%", md: "150px" },
                }}
              >
                Locate me
              </Button>
            </Box>

            {/* Find Food Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ec008c",
                color: "#fff",
                fontWeight: 600,
                padding: { xs: "12px 20px", md: "12px 30px" },
                textTransform: "none",
                fontSize: { xs: "14px", md: "16px" },
                width: { xs: "100%", sm: "100%", md: "auto" },
                mt: { xs: "10px", md: "0" }, // Margin on top for small screens
                "&:hover": { backgroundColor: "#d0077c" },
              }}
            >
              Find food
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Right Section - Hero Image */}
      <Box
        component="img"
        src={heroImage}
        alt="Food Panda Hero"
        sx={{
          width: { xs: "100%", sm: "70%", md: "550px" }, // Hero image responsive size
          height: "auto",
          maxWidth: "600px", // Prevent it from exceeding original size
        }}
      />
    </Box>
  );
};

export default HeroPart;
