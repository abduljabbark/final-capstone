// import React from "react";
// import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from "@mui/material";

// const SignUp = ({ open, onClose }) => {
//   return (
//     <Dialog open={open} onClose={onClose}>
//       <DialogTitle>Sign Up</DialogTitle>
//       <DialogContent>
//         <TextField
//           autoFocus
//           margin="dense"
//           label="Full Name"
//           type="text"
//           fullWidth
//           variant="outlined"
//         />
//         <TextField
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
//           Sign Up
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default SignUp;






















// import React from "react";
// import { useForm } from "react-hook-form";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   TextField,
//   DialogActions,
//   Button,
// } from "@mui/material";

// const SignUp = ({ open, onClose }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     // Save user data to localStorage
//     localStorage.setItem("user", JSON.stringify(data));
//     alert("Sign-Up Successful! Now Please Log In To Continue.");
//     onClose();
//   };

//   return (
//     <Dialog open={open} onClose={onClose}>
//       <DialogTitle>Sign Up</DialogTitle>
//       <DialogContent>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <TextField
//             autoFocus
//             margin="dense"
//             label="Full Name"
//             type="text"
//             fullWidth
//             variant="outlined"
//             {...register("fullName", {
//               required: "Full Name is required",
//               minLength: { value: 3, message: "Must be at least 3 characters" },
//             })}
//             error={!!errors.fullName}
//             helperText={errors.fullName?.message}
//           />
//           <TextField
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
//             {...register("password", {
//               required: "Password is required",
//               minLength: { value: 6, message: "At least 6 characters" },
//             })}
//             error={!!errors.password}
//             helperText={errors.password?.message}
//           />
//           <DialogActions>
//             <Button onClick={onClose} color="black">
//               Cancel
//             </Button>
//             <Button
//   type="submit"
//   variant="contained"
//   color="primary"
//   sx={{ backgroundColor: "#e91e63", "&:hover": { backgroundColor: "#e91e63" } }}
// >
//   Sign Up
// </Button>
//           </DialogActions>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default SignUp;


import React from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

const SignUp = ({ open, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Save user data to localStorage
    localStorage.setItem("user", JSON.stringify(data));
    alert("Sign-Up Successful! Now Please Log In To Continue.");
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Sign Up</DialogTitle>
      <DialogContent>
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
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "At least 6 characters" },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <DialogActions>
            <Button onClick={onClose} color="black">
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ backgroundColor: "#e91e63", "&:hover": { backgroundColor: "#e91e63" } }}
            >
              Sign Up
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignUp;
