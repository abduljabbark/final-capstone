import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Typography,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const SignUp = ({ open, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = (data) => {
    // Save user data to localStorage
    localStorage.setItem("user", JSON.stringify(data));
    alert("Sign-Up Successful! Now Please Log In To Continue.");
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <Box sx={{ p: 2 }}>
        <Typography
          variant="h6"
          component="h1"
          align="center"
          sx={{ color: "#e91e63", fontWeight: "bold" }}
        >
          Welcome!
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ color: "#e91e63", mb: 2 }}
        >
          Sign up to get started.
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            autoFocus
            margin="dense"
            label="Full Name"
            type="text"
            fullWidth
            variant="outlined"
            {...register("fullName", {
              required: "Full Name is required",
              minLength: { value: 3, message: "Must be at least 3 characters" },
            })}
            error={!!errors.fullName}
            helperText={errors.fullName?.message}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Enter a valid email",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            variant="outlined"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "At least 6 characters" },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
            sx={{ mb: 2 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Typography
            variant="caption"
            align="center"
            display="block"
            sx={{ color: "#9e9e9e", mt: 1, mb: 2 }}
          >
            By signing up, you agree to our
            <Typography
              component="span"
              variant="caption"
              sx={{ color: "#e91e63", textDecoration: "underline", cursor: "pointer" }}
            >
              Terms and Conditions
            </Typography>{" "}
            and
            <Typography
              component="span"
              variant="caption"
              sx={{ color: "#e91e63", textDecoration: "underline", cursor: "pointer" }}
            >
              Privacy Policy
            </Typography>
            .
          </Typography>
          <DialogActions sx={{ justifyContent: "center" }}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#e91e63",
                color: "white",
                fontWeight: "bold",
                mt: 2,
                ":hover": {
                  backgroundColor: "#d81b60",
                },
              }}
            >
              Sign Up
            </Button>
          </DialogActions>
        </form>
      </Box>
    </Dialog>
  );
};

export default SignUp;
