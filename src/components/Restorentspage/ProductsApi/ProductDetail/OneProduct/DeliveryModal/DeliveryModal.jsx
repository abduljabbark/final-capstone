import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import QuettaMap from "../../../../../../images/quetta-map.png"; // Update the path as needed

const DeliveryModal = ({ open, onClose }) => {
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
            <Box display="flex">
              <Typography variant="h4">
                Quetta Paratha – <span style={{ fontWeight: "bold" }}>111</span>
              </Typography>
            </Box>
            <Box mt={2}>
              <Box display="flex" alignItems="center" color="black">
                <AccessTimeIcon />
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  paddingLeft={"10px"}
                >
                  Now Open
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary">
                Monday – Sunday
              </Typography>
              <Typography variant="body2" color="textSecondary">
                00:00 – 23:59
              </Typography>
            </Box>
            <Box mt={2} display="flex" alignItems="center">
              <LocationOnIcon />
              <Typography variant="body2" color="textPrimary">
                Market, Cavalry Ground.
              </Typography>
            </Box>
            <Box mt={2}>
              <CardMedia
                component="img"
                height="140"
                src={QuettaMap}
                alt="Map showing the location of Mini Market, Cavalry Ground with nearby landmarks and streets."
              />
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
