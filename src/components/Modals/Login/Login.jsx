import React from "react";
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from "@mui/material";

const Login = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Log In</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Email Address"
          type="email"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">Cancel</Button>
        <Button onClick={onClose} variant="contained" color="primary">
          Log In
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Login;
