import React from "react";
import { Box, Card, CardContent, CardMedia, Dialog, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import QuettaMap from "../../../../../../images/quetta-map.png"; // Update the path as needed

const DeliveryModal = ({ open, onClose, product }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <Box display="flex" justifyContent="center" p={2}>
        <Card sx={{ maxWidth: 500, position: "relative" }}>
          <CloseIcon
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              backgroundColor: "#f1f1f1",
              color: "#000",
              borderRadius: "100%",
              width: "30px",
              height: "30px",
              "&:hover": { backgroundColor: "#e0e0e0" },
            }}
          />
          <CardContent>
            <Typography variant="h5" fontWeight="bold">
              {product.title} {/* Displaying Product Name */}
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 1 }}>
              Rating: 
              <Typography sx={{ color: "#FFB413", marginLeft: 0.5 }}>★</Typography> 
              {product.rating} ({product.rating * 40}+)
            </Typography>

            {/* Keeping the rest of the modal details intact */}
            <Box mt={2}>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
              />
            </Box>
            <Box mt={2}>
              <Typography variant="body1" fontWeight="bold">
                Price: {product.price}
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="body1" fontWeight="bold">
                Delivery fee
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Delivery fee is charged based on time of day, distance, and surge
                conditions.
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="body1" fontWeight="bold">
                Minimum order
              </Typography>
              <Typography variant="body2" color="textSecondary">
                For orders below Rs. 249.00, we charge a small order fee.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Dialog>
  );
};

export default DeliveryModal;
