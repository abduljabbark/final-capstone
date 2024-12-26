import React from "react";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeProduct,
} from "../../../slices/products/productsSlice";

const CartDrawer = ({ cartDrawerOpen, toggleCartDrawer }) => {
  const { items } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // Helper function to truncate text
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  return (
    <Drawer
      anchor="right"
      open={cartDrawerOpen}
      onClose={toggleCartDrawer(false)}
    >
      <Box sx={{ width: 300, p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Your Cart
        </Typography>

        {items?.length > 0 ? (
          items.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2,
                borderBottom: "1px solid #ddd",
                pb: 1,
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <Box sx={{ flex: 1, mx: 2 }}>
                <Typography variant="body1" noWrap>
                  {truncateText(item.title, 15)} {/* Truncate name if > 15 chars */}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ${item.price || "N/A"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Quantity: {item.quantity}
                </Typography>
              </Box>
              <Box>
                <IconButton
                  size="small"
                  onClick={() => dispatch(incrementQuantity(item.id))}
                >
                  +
                </IconButton>
                <IconButton
                  size="small"
                  onClick={() => dispatch(decrementQuantity(item.id))}
                >
                  -
                </IconButton>
                <IconButton
                  size="small"
                  color="error"
                  onClick={() => dispatch(removeProduct(item.id))}
                >
                  ✕
                </IconButton>
              </Box>
            </Box>
          ))
        ) : (
          <Typography>No items in the cart</Typography>
        )}
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
