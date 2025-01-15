import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../../slices/add-cart/addCartSlice";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import {
  Box,
  Grid,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Card,
  CardContent,
} from "@mui/material";
import { Star } from "@mui/icons-material"; // Importing the star icon

const SecondApi = () => {
  const [product, setProduct] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((response) => {
        // Add random ratings to the products
        const productsWithRatings = response.data.meals.map((item) => ({
          ...item,
          rating: Math.floor(Math.random() * 5) + 1, // Random rating between 1 and 5
        }));
        setProduct(productsWithRatings);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleAddToCart = (item) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setSelectedItem(item);
      setOpenModal(true);
    } else {
      alert("Please log in to add products to the cart.");
    }
  };

  const handleSubmit = () => {
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
  };

  // Function to render the star and the rating number
  const renderRating = (rating) => {
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Star sx={{ color: "#ff9800" ,fontSize: "15px" }} /> {/* Display one filled star */}
        <Typography
          variant="body2"
          sx={{ marginLeft: "5px", color: "#333", fontSize: "15px" }}
        >
          {rating} {/* Display numeric rating */}
        </Typography>
      </Box>
    );
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
                <Typography 
  sx={{
    fontSize: '1rem', 
    fontWeight: '600', 
    color: '#444', 
    display: 'flex', 
    alignItems: 'center', 
    gap: '5px', 
    letterSpacing: '0.5px',
    marginBottom: '10px', // Adds space below the rating
  }}
>
  Rating: 
  {renderRating(item.rating)} {/* Show one star with the rating */}
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
      <Dialog open={openModal} onClose={() => setOpenModal(false)} maxWidth="sm" >
      <Box display="flex" justifyContent="center" p={2}>
        <Card sx={{ maxWidth: 500, position: "relative" }}>
          {/* Close Icon */}
          <CloseIcon
            aria-label="close"
            onClick={() => setOpenModal(false)}
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
            {/* Modal Title */}
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                textAlign: "center",
                fontSize: "1.2rem",
                color: "#333",
              }}
            >
              Product Details
            </Typography>

            {/* Product Information */}
            {selectedItem && (
              <Box
                sx={{
                  padding: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  textAlign: "left",
                  gap: 2,
                }}
              >
                   {/* Product Name */}
                   <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#333",
                    textTransform: "uppercase",
                  }}
                >
                  {selectedItem.strMeal}
                </Typography>
                
                {/* Rating */}
                <Typography
                  sx={{
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    color: "#333",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    letterSpacing: "0.5px",
                  }}
                >
                  Rating: {renderRating(selectedItem.rating)} {/* Show one star with the rating */}
                </Typography>
                {/* Product Image */}
                <Box
                  component="img"
                  src={selectedItem.strMealThumb}
                  alt={selectedItem.strMeal}
                  sx={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
                />

             

                {/* Product Price */}
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "1.2rem",
                    color: "#333",
                  }}
                >
                  Price: Rs. 100
                </Typography>

              </Box>
            )}

            {/* Delivery Information */}
            <Box mt={2}>
              <Typography variant="body1" fontWeight="bold">
                Delivery fee
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Delivery fee is charged based on time of day, distance, and surge conditions.
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

          {/* Action Buttons */}
          <DialogActions
            sx={{
              justifyContent: "space-between",
              paddingBottom: 2,
              paddingX: 3,
            }}
          >
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
        </Card>
      </Box>
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
        <Typography
          variant="h6"
          gutterBottom
          sx={{ textAlign: "center", fontWeight: "bold", padding: 3 }}
        >
          Product successfully added!
        </Typography>
      </Dialog>
    </Box>
  );
};

export default SecondApi;
