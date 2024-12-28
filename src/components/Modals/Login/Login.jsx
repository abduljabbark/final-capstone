

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   TextField,
//   DialogActions,
//   Button,
//   Typography,
// } from "@mui/material";

// const Login = ({ open, onClose, onOpenSignUp }) => {
//   const [loginError, setLoginError] = useState(null);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     const savedUser = JSON.parse(localStorage.getItem("user"));

//     if (!savedUser) {
//       alert("Please sign up first.");
//       setLoginError(null);
//       onClose();
//       onOpenSignUp(); // Open SignUp if user is not found in localStorage
//     } else if (savedUser.email === data.email && savedUser.password === data.password) {
//       setLoginError(null);
//       alert("Login Successful!");
//       onClose(); // Close the login modal if login is successful
//     } else {
//       setLoginError("Invalid email or password");
//     }
//   };

//   return (
//     <Dialog open={open} onClose={onClose}>
//       <DialogTitle>Log In</DialogTitle>
//       <DialogContent>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Email Address"
//             type="email"
//             fullWidth
//             variant="outlined"
//             {...register("email", {
//               required: "Email is required",
//               pattern: {
//                 value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//                 message: "Enter a valid email",
//               },
//             })}
//             error={!!errors.email}
//             helperText={errors.email?.message}
//           />
//           <TextField
//             margin="dense"
//             label="Password"
//             type="password"
//             fullWidth
//             variant="outlined"
//             {...register("password", { required: "Password is required" })}
//             error={!!errors.password}
//             helperText={errors.password?.message}
//           />
//           {loginError && (
//             <Typography color="error" variant="body2">
//               {loginError}
//             </Typography>
//           )}
//           <DialogActions>
//             <Button onClick={onClose} color="black">
//               Cancel
//             </Button>
//             <Button type="submit" variant="contained" color="primary"
//               sx={{ backgroundColor: "#e91e63", "&:hover": { backgroundColor: "#e91e63" } }}>
//               Log In
//             </Button>
//           </DialogActions>
//         </form>
//         <DialogActions>
//           <Typography variant="body2" sx={{ display: 'inline-block', marginTop: 2 }}>
//             Don't have an account?{' '}
//             <Button onClick={onOpenSignUp} color="primary">
//               Register Now
//             </Button>
//           </Typography>
//         </DialogActions>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default Login;
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
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = ({ open, onClose, onOpenSignUp }) => {
  const [loginError, setLoginError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("Please sign up first.");
      setLoginError(null);
      onClose();
      onOpenSignUp();
    } else if (
      savedUser.email === data.email &&
      savedUser.password === data.password
    ) {
      setLoginError(null);
      alert("Login Successful!");
      onClose();
    } else {
      setLoginError("Invalid email or password");
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#e91e63",
        }}
      >
        Welcome!
      </DialogTitle>
      <DialogContent sx={{ textAlign: "center" }}>
        <Typography variant="body1" sx={{ marginBottom: 2, color: "#555" }}>
          Please log in to your account.
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            autoFocus
            margin="dense"
            label="Email"
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
            sx={{ marginBottom: 2 }}
          />
          <TextField
            margin="dense"
            label="Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            variant="outlined"
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors.password?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ marginBottom: 2 }}
          />
          {loginError && (
            <Typography color="error" variant="body2">
              {loginError}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#e91e63",
              color: "#fff",
              marginTop: 2,
              "&:hover": { backgroundColor: "#d81b60" },
            }}
          >
            Log In
          </Button>
        </form>
        <Typography
          variant="body2"
          sx={{ marginTop: 2, color: "#777", fontSize: "0.8rem" }}
        >
          By signing up, you agree to our
          <span style={{ color: "#e91e63", cursor: "pointer" }}>
            {" "}Terms and Conditions
          </span>{" "}
          and
          <span style={{ color: "#e91e63", cursor: "pointer" }}>
            {" "}Privacy Policy.
          </span>
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
      <Button
  onClick={onOpenSignUp}
  sx={{
    backgroundColor: "#FFF",
    color: "#000",
    padding: "10px 20px",
    textTransform: "none",
    border: "1px solid #000", // Add black border
    "&:hover": { 
      color: "#fff",
      backgroundColor: "#e91e63", border: "1px solid #e91e63",
    },
  }}
>
  Don&apos;t Have An Account? Sign Up
</Button>

      </DialogActions>
    </Dialog>
  );
};

export default Login;
