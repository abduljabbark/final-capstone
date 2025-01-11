import React from "react";
import { useLocation } from "react-router-dom"; // Importing useLocation hook
import queryString from "query-string"; // Importing query-string to parse the query parameters
import { Box, Typography, Container } from "@mui/material";
import heroImage from "../../images/hero-img.png"; // Replace with your image path

const ResturentHero = () => {
  // Call useLocation inside the functional component
  const location = useLocation();
  const { city } = queryString.parse(location.search); // Parsing the query parameter 'city'

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f9fa",
        padding: "50px 20px",
        minHeight: "300px",
        position: "relative", // Required for background image
        flexDirection: "column",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0, // Align the image to the right
          width: { xs: "100%", sm: "40%" }, // Image width
          height: "100%", // Full height of the container
          backgroundImage: `url(${heroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Adjust image size
          backgroundPosition: "right center", // Image alignment
          zIndex: 0,
        }}
      ></Box>

      {/* Text Section */}
      <Container
        sx={{
          zIndex: 1, // Text on top of background
          position: "relative",
          color: "black",
          textAlign: { xs: "center", md: "left" },
          maxWidth: "600px", // Limit width of text
        }}
      >
         <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "24px", sm: "32px", md: "40px" },
          lineHeight: 1.2,
        }}
      >
        Food and groceries delivery from <br />
        {city || "your selected city"}'s best restaurants and shops
      </Typography>
      </Container>
    </Box>
  );
};

export default ResturentHero;
