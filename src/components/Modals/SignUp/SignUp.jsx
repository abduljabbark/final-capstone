import React from "react";
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from "@mui/material";

const SignUp = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Sign Up</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Full Name"
          type="text"
          fullWidth
          variant="outlined"
        />
        <TextField
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
          Sign Up
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignUp;
