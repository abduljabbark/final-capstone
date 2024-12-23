import React from "react";
import { Drawer, Box, Typography, List, ListItem, ListItemText, Button } from "@mui/material";
import { useSelector } from "react-redux";






const CartDrawer = ({ cartDrawerOpen, toggleCartDrawer }) => {

const {items} = useSelector((state)=> state.products);
console.log(items , "products");


  return (
    <Drawer anchor="right" open={cartDrawerOpen} onClose={toggleCartDrawer(false)}>
      <Box sx={{ width: 300, p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Your Cart
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Product 1" secondary="Price: $10" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Product 2" secondary="Price: $15" />
          </ListItem>
        </List>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ec008c",
            color: "#fff",
            mt: 2,
            width: "100%",
            "&:hover": { backgroundColor: "#d0077c" },
          }}
        >
          Checkout
        </Button>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
