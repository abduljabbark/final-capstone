// import React from "react";
// import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from "@mui/material";

// const Login = ({ open, onClose }) => {
//   return (
//     <Dialog open={open} onClose={onClose}>
//       <DialogTitle>Log In</DialogTitle>
//       <DialogContent>
//         <TextField
//           autoFocus
//           margin="dense"
//           label="Email Address"
//           type="email"
//           fullWidth
//           variant="outlined"
//         />
//         <TextField
//           margin="dense"
//           label="Password"
//           type="password"
//           fullWidth
//           variant="outlined"
//         />
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={onClose} color="secondary">Cancel</Button>
//         <Button onClick={onClose} variant="contained" color="primary">
//           Log In
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default Login;








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

// const Login = ({ open, onClose }) => {
//   const [loginError, setLoginError] = useState(null);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     const savedUser = JSON.parse(localStorage.getItem("user"));
//     if (savedUser && savedUser.email === data.email && savedUser.password === data.password) {
//       setLoginError(null);
//       alert("Login Successful!");
//       onClose(); // Trigger parent function to close Login
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
//             sx={{ backgroundColor: "#e91e63", "&:hover": { backgroundColor: "#e91e63" } }}>
//               Log In
//             </Button>
//           </DialogActions>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default Login;






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
//   Link,
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
//     if (savedUser && savedUser.email === data.email && savedUser.password === data.password) {
//       setLoginError(null);
//       alert("Login Successful!");
//       onClose(); // Trigger parent function to close Login
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
//             <Link href="#" onClick={onOpenSignUp} color="primary">
//               Register Now
//             </Link>
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
} from "@mui/material";

const Login = ({ open, onClose, onOpenSignUp }) => {
  const [loginError, setLoginError] = useState(null);
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
      onOpenSignUp(); // Open SignUp if user is not found in localStorage
    } else if (savedUser.email === data.email && savedUser.password === data.password) {
      setLoginError(null);
      alert("Login Successful!");
      onClose(); // Close the login modal if login is successful
    } else {
      setLoginError("Invalid email or password");
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Log In</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            autoFocus
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
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          {loginError && (
            <Typography color="error" variant="body2">
              {loginError}
            </Typography>
          )}
          <DialogActions>
            <Button onClick={onClose} color="black">
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary"
              sx={{ backgroundColor: "#e91e63", "&:hover": { backgroundColor: "#e91e63" } }}>
              Log In
            </Button>
          </DialogActions>
        </form>
        <DialogActions>
          <Typography variant="body2" sx={{ display: 'inline-block', marginTop: 2 }}>
            Don't have an account?{' '}
            <Button onClick={onOpenSignUp} color="primary">
              Register Now
            </Button>
          </Typography>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
