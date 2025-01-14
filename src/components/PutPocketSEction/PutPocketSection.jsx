import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import QRCode from "../../images/pkhomepageqrcode.png";
import Mobiles from "../../images/foodpanda-apps.webp";
import Apple from "../../images/apple 1.png";
import PlayStore from "../../images/playstore.png";
import AppGallery from "../../images/appgallery.png";

const PutPocketSection = () => {
  return (
    <Box
      className="container position-relative"
      sx={{
        mt: "100px",
        height: {
          xs: "650px",  // For mobile screens
          md: "500px",  // For desktop screens
        },
      }}
    >
      <Grid spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Grid item xs={12} md={6} textAlign="center">
            <img
              className="position-absolute"
              src={Mobiles}
              alt="Mobile Phones"
              style={{ maxWidth: "55%", height: "auto", top: "-60px" }}
            />
          </Grid>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Put us in your pocket
          </Typography>
          <Box
            className="d-flex rounded-5"
            sx={{
              backgroundColor: "#f72a78",
              color: "#fff",
              py: 8,
              px: 2,
            }}
          >
          <Box sx={{ marginLeft: { xs: "10px", sm: "20px", md: "30px" } }}>
  <Typography variant="h4" fontSize={{ xs: "24px", sm: "26px", md: "30px" }} component="h3" sx={{ mb: 2 }}>
    Download the food and groceries you love
  </Typography>

  <Box 
    width={{ xs: "100%", sm: "500px" }} 
    display="flex" 
    flexDirection={{ xs: "column", sm: "row" }} 
    alignItems="center" 
    gap={2}
  >
    <img
      src={QRCode}
      alt="QR Code"
      style={{ width: "100px", height: "auto" }}
    />
    <Box>
      <Typography variant="body1" sx={{ mb: 0 }}>
        It’s all at your fingertips – the restaurants and shops you love. Find the right food and groceries to suit your mood, and make the first bite last. Go ahead, download us.
      </Typography>
    </Box>
  </Box>

  <Box
    display="flex"
    flexDirection={{ xs: "column", sm: "row" }}
    alignItems="center"
    justifyContent={{ xs: "center", sm: "center", md: "flex-start" }}
    sx={{ gap: 2, mt: 2 }}
  >
    <Button
      variant="contained"
      href="#"
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        textTransform: "none",
        fontSize: "14px",
        padding: "3px 10px",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        width: { xs: "100%", sm: "auto" }
      }}
    >
      <img className="px-1" src={Apple} width="35px" />
      <Box textAlign="left">
        <Typography variant="caption">Download on the</Typography>
        <Typography variant="subtitle2" fontSize="18px" fontWeight="bold">
          App Store
        </Typography>
      </Box>
    </Button>

    <Button
      variant="contained"
      href="#"
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        textTransform: "none",
        fontSize: "14px",
        padding: "3px 10px",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        width: { xs: "100%", sm: "auto" }
      }}
    >
      <img className="px-1" src={PlayStore} width="35px" />
      <Box textAlign="left">
        <Typography variant="caption">Get it on</Typography>
        <Typography variant="subtitle2" fontSize="18px" fontWeight="bold">
          Google Play
        </Typography>
      </Box>
    </Button>

    <Button
      variant="contained"
      href="#"
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        textTransform: "none",
        fontSize: "14px",
        padding: "3px 10px",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        width: { xs: "100%", sm: "auto" }
      }}
    >
      <img className="px-1" src={AppGallery} width="35px" />
      <Box textAlign="left">
        <Typography variant="caption">Explore it on</Typography>
        <Typography variant="subtitle2" fontSize="18px" fontWeight="bold">
          AppGallery
        </Typography>
      </Box>
    </Button>
  </Box>
</Box>

          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PutPocketSection;




