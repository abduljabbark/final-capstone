import React from "react";
import heroImage from "../images/hero-img.png"; 
import { LocationOn } from "@mui/icons-material"; 
import { Button, InputBase, Box, Typography, Container } from "@mui/material";

const HeroPart = () => {
  return (
    <Box className=""
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "40px ",
        paddingBottom: "40px ",
        paddingLeft: "300px",
        backgroundColor: "#F7F7F7",
      }}
    >
      {/* Left Section */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{ fontWeight: 700, color: "#333", marginBottom: "20px" }}
        >
          It’s the food and groceries you love, delivered
        </Typography>

<Box sx={{
    borderRadius:"15px",
  padding: "16px",
  background: "white"
  }}>
<Box
  sx={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
  }}
>
  {/* Input Field with Locate Me Button on the Right */}
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      flex: 1,
      border: "1px solid #ddd",
      borderRadius: "5px",
      overflow: "hidden",
    }}
  >
    <InputBase
      placeholder="Your street and street number"
      sx={{
        flex: 1,
        padding: "10px 15px",
        fontSize: "16px",
      }}
    />
    <Button
      variant="text"
      startIcon={<LocationOn style={{ color: "#ec008c" }} />}
      sx={{
        color: "#ec008c",
        fontWeight: 600,
        padding: "10px 15px",
        textTransform: "none",
        borderLeft: "1px solid #ddd",
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
      padding: "10px 20px",
      textTransform: "none",
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
          width: "800px",
          height: "auto",
        }}
      />
    </Box>
  );
};

export default HeroPart;
