
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import HungryPanda from "../../../../../images/cartpanda.svg";
import {
  incrementItem,
  decrementItem,
  deleteItem,
} from "../../../../../slices/add-cart/addCartSlice";
import { Box, Typography, Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const DeliveryPaymentSection = () => {
  const cart = useSelector((state) => state.counter.cart); // Select cart from Redux state
  const total = cart.reduce((sum, item) => sum + item.quantity * 100, 0); // Calculate total price
  const dispatch = useDispatch();

  return (
    <Box
    sx={{
      flex: 1,
      border: "1px solid #ddd",
      borderRadius: 2,
      boxShadow: 2,
      padding: 2,
      textAlign: "center",
      height: "100%",
      minHeight: { xs: "auto", sm: "650px", lg: "750px" },
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
    {cart.length === 0 ? (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          flexGrow: 1,
        }}
      >
        <Box
          component="img"
          src={HungryPanda}
          alt="Empty Cart"
          sx={{
            width: { xs: "80px", sm: "100px" },
            height: { xs: "80px", sm: "100px" },
            marginBottom: 2,
          }}
        />
        <Typography variant="h6" fontWeight="bold">
          Hungry?
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "center", marginY: 2 }}
        >
          You haven't added anything to your cart!
        </Typography>
      </Box>
    ) : (
      <Box sx={{ flexGrow: 1 }}>
        {cart.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 2,
              border: "1px solid #ddd",
              borderRadius: 2,
              padding: 1,
            }}
          >
            <Box
              component="img"
              src={item.image}
              alt={item.name}
              sx={{
                width: "60px",
                height: "60px",
                objectFit: "cover",
                borderRadius: 2,
                marginRight: 2,
              }}
            />
            <Typography>
              {item.name.length > 5
                ? item.name.slice(0, 5) + "..."
                : item.name}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button
                variant="outlined"
                size="small"
                onClick={() => dispatch(decrementItem(item.id))}
              >
                -
              </Button>
              <Typography>{item.quantity}</Typography>
              <Button
                variant="outlined"
                size="small"
                onClick={() => dispatch(incrementItem(item.id))}
              >
                +
              </Button>
              <IconButton
                size="small"
                color="error"
                onClick={() => dispatch(deleteItem(item.id))}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </Box>
        ))}
      </Box>
    )}
  
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Total</Typography>
        <Typography variant="h6">Rs. {total}</Typography>
      </Box>
      <Button
        variant="contained"
        sx={{
          marginTop: 2,
          backgroundColor: cart.length === 0 ? "#ccc" : "#007bff",
          cursor: cart.length === 0 ? "not-allowed" : "pointer",
          width: "100%",
        }}
        disabled={cart.length === 0}
      >
        Review payment and address
      </Button>
    </Box>
  </Box>
  
  );
};

export default DeliveryPaymentSection;
